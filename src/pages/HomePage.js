import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import CTASection from '../components/CTASection';

// 首页主容器样式
const HomePageContainer = styled.div`
  width: 100%;
`;

// 主要内容区域样式
const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

function HomePage() {
  return (
    <HomePageContainer>
      <HeroSection />
      <ContentArea>
        <FeatureSection />
        <CTASection />
      </ContentArea>
    </HomePageContainer>
  );
}

export default HomePage;