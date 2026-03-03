import React from 'react';
import styled from 'styled-components';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CasePage from './pages/CasePage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';

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
  margin-top: ${props => props.hasFixedHeader ? '80px' : '0'}; /* 为固定头部留出空间 */
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
  const location = useLocation();

  return (
    <AppContainer>
      <Header />
      <ScrollToTop />
      <MainContent hasFixedHeader={true}>
        <PageTransitionWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/case" element={<CasePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </PageTransitionWrapper>
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

export default App;