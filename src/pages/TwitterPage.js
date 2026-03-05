import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../services/api';

// 页面样式
const Page = styled.div`
  padding: 48px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 12px;
  color: var(--text-primary);
`;

const Subtitle = styled.p`
  color: var(--text-secondary);
  margin-bottom: 32px;
`;

// 搜索区域
const SearchSection = styled.div`
  background: var(--bg-card);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const SearchForm = styled.form`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  font-size: 16px;
  background: var(--bg-primary);
  color: var(--text-primary);

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const SearchButton = styled.button`
  padding: 12px 24px;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: var(--primary-hover);
  }

  &:disabled {
    background: var(--disabled-color);
    cursor: not-allowed;
  }
`;

// Google 登录按钮
const LoginButton = styled.button`
  padding: 10px 20px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: #f8f8f8;
  }
`;

// 任务状态
const TaskStatus = styled.div`
  background: var(--bg-card);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const StatusTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: var(--text-primary);
`;

const StatusInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const StatusText = styled.span`
  color: ${props => props.status === 'completed' ? 'green' : props.status === 'failed' ? 'red' : 'orange'};
`;

// 加载状态
const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

// 结果显示
const ResultsSection = styled.div`
  background: var(--bg-card);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const ResultItem = styled.div`
  border-bottom: 1px solid var(--border-color);
  padding: 16px 0;

  &:last-child {
    border-bottom: none;
  }
`;

const ResultText = styled.p`
  color: var(--text-primary);
  margin-bottom: 8px;
`;

const ResultMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: var(--text-secondary);
`;

const SentimentBadge = styled.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;

  &.positive {
    background: #e8f5e9;
    color: #2e7d32;
  }

  &.negative {
    background: #ffebee;
    color: #c62828;
  }

  &.neutral {
    background: #f5f5f5;
    color: #616161;
  }
`;

export default function TwitterPage() {
  const [user, setUser] = useState(null);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState(null);
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  // 检查用户登录状态
  useEffect(() => {
    const checkUser = () => {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    };

    checkUser();
  }, []);

  // 处理 Google 登录
  const handleGoogleLogin = () => {
    // 调用 Google 登录 API
    window.location.href = `${api.API_BASE_URL}/auth/login/google`;
  };

  // 处理登出
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setTask(null);
    setResults([]);
    setError('');
  };

  // 开始分析
  const handleStartAnalysis = async (e) => {
    e.preventDefault();

    if (!user) {
      setError('请先登录');
      return;
    }

    if (!keyword.trim()) {
      setError('请输入关键词');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await api.startAnalysis(keyword.trim(), user.idToken);
      setTask(response);

      // 轮询查询任务状态
      pollTaskStatus(response.task_id);
    } catch (err) {
      setError('启动分析失败：' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // 轮询任务状态
  const pollTaskStatus = async (taskId) => {
    const interval = setInterval(async () => {
      try {
        const status = await api.getTaskStatus(taskId, user.idToken);
        setTask(status);

        if (status.status === 'completed') {
          clearInterval(interval);
          fetchResults(taskId);
        } else if (status.status === 'failed') {
          clearInterval(interval);
          setError('分析任务失败');
        }
      } catch (err) {
        console.error('Polling error:', err);
        clearInterval(interval);
      }
    }, 3000);
  };

  // 获取结果
  const fetchResults = async (taskId) => {
    try {
      const response = await api.getAnalysisResults(taskId, user.idToken);
      setResults(response.results || []);
    } catch (err) {
      setError('获取结果失败：' + err.message);
    }
  };

  // 渲染搜索表单
  const renderSearchForm = () => {
    if (!user) {
      return (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>
            请登录以使用 X 舆情分析功能
          </p>
          <LoginButton onClick={handleGoogleLogin}>
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            使用 Google 登录
          </LoginButton>
        </div>
      );
    }

    return (
      <>
        <SearchForm onSubmit={handleStartAnalysis}>
          <SearchInput
            type="text"
            placeholder="输入要分析的关键词..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <SearchButton type="submit" disabled={loading}>
            {loading ? <LoadingSpinner /> : '开始分析'}
          </SearchButton>
        </SearchForm>

        {user && (
          <button onClick={handleLogout} style={{
            padding: '8px 16px',
            background: 'var(--error-color)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            登出
          </button>
        )}
      </>
    );
  };

  // 渲染任务状态
  const renderTaskStatus = () => {
    if (!task) return null;

    return (
      <TaskStatus>
        <StatusTitle>分析任务状态</StatusTitle>
        <StatusInfo>
          <span>关键词：{task.keyword}</span>
          <StatusText status={task.status}>
            {task.status === 'pending' && '等待中...'}
            {task.status === 'running' && '分析中...'}
            {task.status === 'completed' && '已完成'}
            {task.status === 'failed' && '失败'}
          </StatusText>
        </StatusInfo>

        {task.status === 'completed' && (
          <div style={{ marginTop: '16px' }}>
            <p>总计提及：{task.progress.total_mentions}</p>
            <div style={{ display: 'flex', gap: '20px', marginTop: '8px' }}>
              <span style={{ color: 'green' }}>正面：{task.progress.positive_count}</span>
              <span style={{ color: 'red' }}>负面：{task.progress.negative_count}</span>
              <span style={{ color: 'gray' }}>中性：{task.progress.neutral_count}</span>
            </div>
          </div>
        )}
      </TaskStatus>
    );
  };

  // 渲染结果
  const renderResults = () => {
    if (!results.length) return null;

    return (
      <ResultsSection>
        <h2 style={{ marginBottom: '16px', color: 'var(--text-primary)' }}>分析结果</h2>
        {results.map((result, index) => (
          <ResultItem key={index}>
            <ResultText>{result.text}</ResultText>
            <ResultMeta>
              <span>作者：{result.author}</span>
              <SentimentBadge className={result.sentiment.label}>
                {result.sentiment.label === 'positive' ? '正面' :
                 result.sentiment.label === 'negative' ? '负面' : '中性'}
              </SentimentBadge>
            </ResultMeta>
          </ResultItem>
        ))}
      </ResultsSection>
    );
  };

  return (
    <Page>
      <Container>
        <Title>X 舆情分析</Title>
        <Subtitle>输入关键词分析相关内容的情感倾向和趋势</Subtitle>

        {error && (
          <div style={{
            background: '#ffebee',
            color: '#c62828',
            padding: '12px',
            borderRadius: '4px',
            marginBottom: '20px'
          }}>
            {error}
          </div>
        )}

        <SearchSection>
          {renderSearchForm()}
        </SearchSection>

        {renderTaskStatus()}
        {renderResults()}
      </Container>
    </Page>
  );
}