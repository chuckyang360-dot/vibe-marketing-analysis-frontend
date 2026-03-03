import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: linear-gradient(160deg, var(--text-primary) 0%, #111827 100%);
  color: white;
  padding: 80px 0 30px;
  margin-top: auto;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%);
    transform: rotate(30deg);
    z-index: 0;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
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
    margin-bottom: 24px;
    color: white;
    position: relative;
    padding-bottom: 8px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 30px;
      height: 2px;
      background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 12px;
  }

  a {
    color: #d1d5db;
    text-decoration: none;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
      color: white;
      transform: translateX(4px);
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #374151;
  padding-top: 30px;
  text-align: center;
  color: #9ca3af;
  font-size: 0.9rem;
  margin-top: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  justify-content: flex-start;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    color: #d1d5db;
    transition: all 0.3s ease;
    text-decoration: none;

    &:hover {
      background-color: var(--primary-color);
      color: white;
      transform: translateY(-2px);
    }
  }
`;

const NewsletterSignup = styled.div`
  margin-top: 20px;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
`;

const SubscribeButton = styled.button`
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log('Subscribed with email:', email);
    e.target.reset();
  };

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
              <li><Link to="/">发展历程</Link></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>产品服务</h3>
            <ul>
              <li><Link to="/product">营销分析系统</Link></li>
              <li><Link to="/product">数据可视化</Link></li>
              <li><Link to="/product">报告生成</Link></li>
              <li><Link to="/product">AI洞察</Link></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>解决方案</h3>
            <ul>
              <li><Link to="/case">电商营销</Link></li>
              <li><Link to="/case">社交媒体分析</Link></li>
              <li><Link to="/case">竞品分析</Link></li>
              <li><Link to="/case">客户画像</Link></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>联系方式</h3>
            <ul>
              <li><Link to="/contact">联系我们</Link></li>
              <li><Link to="/contact">商务合作</Link></li>
              <li><Link to="/contact">技术支持</Link></li>
              <li><Link to="/contact">意见建议</Link></li>
            </ul>

            <SocialLinks>
              <a href="#twitter" title="Twitter">𝕏</a>
              <a href="#linkedin" title="LinkedIn">in</a>
              <a href="#facebook" title="Facebook">f</a>
              <a href="#instagram" title="Instagram">📸</a>
            </SocialLinks>

            <NewsletterSignup>
              <h3>订阅更新</h3>
              <NewsletterForm onSubmit={handleSubmit}>
                <EmailInput
                  type="email"
                  name="email"
                  placeholder="输入您的邮箱"
                  required
                />
                <SubscribeButton type="submit">订阅</SubscribeButton>
              </NewsletterForm>
            </NewsletterSignup>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <p>&copy; 2026 Vibe Marckrting. 保留所有权利。 | <Link to="/privacy">隐私政策</Link> | <Link to="/terms">使用条款</Link></p>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;