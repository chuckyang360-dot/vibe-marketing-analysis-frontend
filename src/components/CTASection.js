import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CTAContainer = styled.section`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
  color: white;
  padding: 120px 0;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, transparent 50%);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(255,255,255,0.2);
  }
`;

const CTAContent = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 16px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 32px;
  opacity: 0.9;
  line-height: 1.6;
`;

const CTALinks = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryCTA = styled(Link)`
  background-color: white;
  color: var(--primary-color);
  padding: 16px 32px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

const SecondaryCTA = styled(Link)`
  background-color: transparent;
  color: white;
  border: 2px solid white;
  padding: 16px 32px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: white;
    color: var(--primary-color);
  }
`;

function CTASection() {
  return (
    <CTAContainer>
      <CTAContent>
        <CTATitle>开始您的营销分析之旅</CTATitle>
        <CTADescription>
          立即注册，体验智能营销分析系统的强大功能，让数据驱动您的业务增长
        </CTADescription>
        <CTALinks>
          <PrimaryCTA to="/contact">预约演示</PrimaryCTA>
          <SecondaryCTA to="/login">免费试用</SecondaryCTA>
        </CTALinks>
      </CTAContent>
    </CTAContainer>
  );
}

export default CTASection;