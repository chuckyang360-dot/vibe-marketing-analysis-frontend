import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import CTASection from '../components/CTASection';
import AboutSection from '../components/AboutSection';

// 主页容器
const HomePageContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

// 分割区域
const SectionDivider = styled.div`
  height: 8px;
  background: linear-gradient(90deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%);
  margin: 0 -50vw 0 -50vw;
  position: relative;
  left: 50%;
  right: 50%;
  width: 100vw;
`;

// 无缝滚动横幅
const BannerContainer = styled.div`
  background: var(--bg-gray);
  padding: 12px 0;
  position: relative;
  overflow: hidden;
  margin-top: -1px; /* 消除可能的间隙 */
`;

const BannerContent = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  animation: scroll 30s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  &::after {
    content: attr(data-content);
    position: absolute;
    left: 100%;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

const BannerText = styled.span`
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0 2rem;
  flex-shrink: 0;
`;

// 信任标志区
const TrustBar = styled.div`
  background-color: var(--bg-primary);
  padding: 24px 0;
  border-bottom: 1px solid var(--border-color);
`;

const TrustContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const TrustLogo = styled.div`
  font-size: 1.5rem;
  opacity: 0.6;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

function HomePage() {
  return (
    <HomePageContainer>
      <HeroSection />

      {/* 信任标志区 */}
      <TrustBar>
        <TrustContent>
          <TrustLogo>📊 数据驱动</TrustLogo>
          <TrustLogo>🚀 实时分析</TrustLogo>
          <TrustLogo>💡 AI洞察</TrustLogo>
          <TrustLogo>📈 业绩增长</TrustLogo>
        </TrustContent>
      </TrustBar>

      {/* 横幅区域 - 根据Figma的banner设计 */}
      <BannerContainer>
        <BannerContent data-content="🚀 智能营销分析 • 数据驱动决策 • 商业智能洞察">
          {[...Array(10)].map((_, i) => (
            <BannerText key={i}>🚀 智能营销分析 • 数据驱动决策 • 商业智能洞察</BannerText>
          ))}
        </BannerContent>
      </BannerContainer>

      <SectionDivider />

      <AboutSection />

      <SectionDivider />

      <FeatureSection />

      <SectionDivider />

      <CTASection />
    </HomePageContainer>
  );
}

export default HomePage;