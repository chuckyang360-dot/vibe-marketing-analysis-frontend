import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  padding: 48px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 12px;
  color: var(--text-primary);
`;

const Subtitle = styled.p`
  color: var(--text-secondary);
`;

export default function ContentPage() {
  return (
    <Page>
      <Container>
        <Title>内容生成</Title>
        <Subtitle>这里将按 Figma 原型实现内容生成页面。</Subtitle>
      </Container>
    </Page>
  );
}

