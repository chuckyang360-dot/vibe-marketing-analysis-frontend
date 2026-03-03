import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: var(--text-primary);
  color: white;
  padding: 60px 0 30px;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 16px;
    color: white;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 8px;
  }

  a {
    color: #d1d5db;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: white;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #374151;
  padding-top: 20px;
  text-align: center;
  color: #9ca3af;
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;

  a {
    color: #d1d5db;
    transition: color 0.3s ease;

    &:hover {
      color: white;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <h3>关于我们</h3>
            <ul>
              <li><Link to="/">公司简介</Link></li>
              <li><Link to="/">团队介绍</Link></li>
              <li><Link to="/">企业文化</Link></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>产品服务</h3>
            <ul>
              <li><Link to="/product">营销分析系统</Link></li>
              <li><Link to="/product">数据可视化</Link></li>
              <li><Link to="/product">报告生成</Link></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>解决方案</h3>
            <ul>
              <li><Link to="/case">电商营销</Link></li>
              <li><Link to="/case">社交媒体分析</Link></li>
              <li><Link to="/case">竞品分析</Link></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>联系方式</h3>
            <ul>
              <li><Link to="/contact">联系我们</Link></li>
              <li><Link to="/contact">商务合作</Link></li>
              <li><Link to="/contact">技术支持</Link></li>
            </ul>
            <SocialLinks>
              <a href="#twitter">Twitter</a>
              <a href="#linkedin">LinkedIn</a>
              <a href="#facebook">Facebook</a>
            </SocialLinks>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <p>&copy; 2026 Vibe Marckrting. 保留所有权利。</p>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;