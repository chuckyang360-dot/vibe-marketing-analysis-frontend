import React from 'react';
import styled from 'styled-components';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SeoPage from './pages/SeoPage';
import RedditPage from './pages/RedditPage';
import TwitterPage from './pages/TwitterPage';
import ContentPage from './pages/ContentPage';
import SummaryPage from './pages/SummaryPage';
import HistoryPage from './pages/HistoryPage';

// 主应用容器样式
const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-primary);
`;

// 主内容区域样式
const MainContent = styled.main`
  flex: 1;
  padding: 0;
  margin-top: ${props => (props.hasFixedHeader ? '80px' : '0')}; /* 为固定头部留出空间 */
`;

// 页面过渡动画包装器
const PageTransitionWrapper = styled.div`
  min-height: calc(100vh - 80px - 200px); /* 考虑头部和页脚高度 */
`;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <AppContainer>
      <Header />
      <ScrollToTop />
      <MainContent hasFixedHeader={true}>
        <PageTransitionWrapper>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/seo" element={<SeoPage />} />
            <Route path="/reddit" element={<RedditPage />} />
            <Route path="/twitter" element={<TwitterPage />} />
            <Route path="/content" element={<ContentPage />} />
            <Route path="/summary" element={<SummaryPage />} />
            <Route path="/history" element={<HistoryPage />} />
          </Routes>
        </PageTransitionWrapper>
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

export default App;

