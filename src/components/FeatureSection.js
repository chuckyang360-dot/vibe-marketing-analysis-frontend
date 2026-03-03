import React from 'react';
import styled from 'styled-components';

const FeatureContainer = styled.section`
  padding: 80px 0;
  background-color: var(--bg-primary);
  position: relative;
  overflow: hidden;
`;

const FeatureGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
`;

const FeatureCard = styled.div`
  text-align: center;
  padding: 40px 20px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  border: 1px solid var(--border-color);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);

    &::before {
      transform: scaleX(1);
    }
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  background: linear-gradient(135deg, var(--bg-secondary), var(--bg-gray));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  transition: all 0.3s ease;
  border: 2px solid var(--border-color);

  ${FeatureCard}:hover & {
    transform: scale(1.1) rotate(10deg);
    background: linear-gradient(135deg, var(--primary-light), var(--accent-light));
    color: white;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: var(--text-primary);
`;

const FeatureDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

function FeatureSection() {
  const features = [
    {
      id: 1,
      title: '智能数据分析',
      description: '利用AI技术深度分析市场数据，发现隐藏的商业机会和趋势',
      icon: '📊'
    },
    {
      id: 2,
      title: '实时监控',
      description: '24/7实时监控市场动态和竞品活动，及时掌握市场脉搏',
      icon: '📈'
    },
    {
      id: 3,
      title: '精准预测',
      description: '基于历史数据和机器学习算法，预测市场趋势和用户行为',
      icon: '🔮'
    },
    {
      id: 4,
      title: '可视化报告',
      description: '直观的数据可视化图表，轻松理解和传达分析结果',
      icon: '🎨'
    },
    {
      id: 5,
      title: '多平台整合',
      description: '整合各大电商平台和社交媒体数据，一站式管理营销分析',
      icon: '🔗'
    },
    {
      id: 6,
      title: '个性化推荐',
      description: '根据您的业务特点，提供个性化的营销策略和建议',
      icon: '🎯'
    }
  ];

  return (
    <FeatureContainer>
      <div className="container">
        <h2 className="section-title">核心功能</h2>
        <p className="section-subtitle">
          强大的功能组合，助力您的营销决策
        </p>
        <FeatureGrid>
          {features.map((feature) => (
            <FeatureCard key={feature.id}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeatureGrid>
      </div>
    </FeatureContainer>
  );
}

export default FeatureSection;