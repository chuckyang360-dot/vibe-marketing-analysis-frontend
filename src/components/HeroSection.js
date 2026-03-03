import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
  color: white;
  padding: 120px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  min-height: calc(100vh - var(--banner-height)); /* 根据Figma的CSS变量调整 */
  display: flex;
  align-items: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 32px;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CTAButton = styled.button`
  background-color: white;
  color: var(--primary-color);
  border: none;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

const SecondaryButton = styled.button`
  background-color: transparent;
  color: white;
  border: 2px solid white;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: white;
    color: var(--primary-color);
  }
`;

const BackgroundShape = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  top: -100px;
  right: -100px;
  animation: float 6s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
`;

function HeroSection() {
  return (
    <HeroContainer>
      <BackgroundShape />
      <HeroContent>
        <HeroTitle>智能营销分析系统</HeroTitle>
        <HeroSubtitle>
          基于大数据和AI技术，为您提供精准的市场洞察和营销策略建议
        </HeroSubtitle>
        <HeroButtons>
          <CTAButton>开始使用</CTAButton>
          <SecondaryButton>了解更多</SecondaryButton>
        </HeroButtons>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;