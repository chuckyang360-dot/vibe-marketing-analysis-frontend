import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 80px 0;
  background-color: var(--bg-primary);
  position: relative;
  overflow: hidden;
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`;

const AboutText = styled.div`
  h2 {
    font-size: 2.5rem;
    color: var(--text-primary);
    margin-bottom: 24px;
    line-height: 1.2;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 24px;
    font-size: 1.1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 24px 0;
  }

  li {
    margin-bottom: 12px;
    display: flex;
    align-items: flex-start;
    gap: 12px;

    &::before {
      content: '✓';
      color: var(--success-color);
      font-weight: bold;
      margin-top: 4px;
    }
  }
`;

const AboutImage = styled.div`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  height: 400px;
  background: linear-gradient(45deg, var(--bg-secondary), var(--bg-gray));

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg,
      rgba(37, 99, 235, 0.1) 0%,
      rgba(245, 158, 11, 0.1) 100%);
  }

  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    font-size: 4rem;
    opacity: 0.3;
  }
`;

function AboutSection() {
  return (
    <AboutContainer>
      <AboutContent>
        <AboutText>
          <h2>引领营销分析新时代</h2>
          <p>
            Vibe Marckrting 致力于为企业提供最先进的营销分析解决方案。我们运用前沿的大数据技术和人工智能算法，
            帮助您深入洞察市场动态，制定精准的营销策略，实现业务增长目标。
          </p>
          <ul>
            <li>实时数据监控和分析</li>
            <li>智能化营销策略建议</li>
            <li>可视化的数据分析报告</li>
            <li>个性化用户行为洞察</li>
          </ul>
        </AboutText>
        <AboutImage>
          <div>📊</div>
        </AboutImage>
      </AboutContent>
    </AboutContainer>
  );
}

export default AboutSection;