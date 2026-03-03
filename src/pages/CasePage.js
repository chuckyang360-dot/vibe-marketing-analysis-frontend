import React from 'react';
import styled from 'styled-components';

const CasePageContainer = styled.div`
  width: 100%;
  padding: 40px 0;
`;

const CaseTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
  color: var(--text-primary);
`;

const CaseContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

function CasePage() {
  return (
    <CasePageContainer>
      <div className="container">
        <CaseTitle>成功案例</CaseTitle>
        <CaseContent>
          <p>这里展示我们的营销分析成功案例和虚拟测试数据</p>
          {/* 案例展示内容 */}
        </CaseContent>
      </div>
    </CasePageContainer>
  );
}

export default CasePage;