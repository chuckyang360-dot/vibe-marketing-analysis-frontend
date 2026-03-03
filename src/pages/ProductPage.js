import React from 'react';
import styled from 'styled-components';

const ProductPageContainer = styled.div`
  width: 100%;
  padding: 40px 0;
`;

const ProductTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
  color: var(--text-primary);
`;

const ProductContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

function ProductPage() {
  return (
    <ProductPageContainer>
      <div className="container">
        <ProductTitle>产品展示</ProductTitle>
        <ProductContent>
          <p>这里展示我们的营销分析系统功能和特色</p>
          {/* 产品展示内容 */}
        </ProductContent>
      </div>
    </ProductPageContainer>
  );
}

export default ProductPage;