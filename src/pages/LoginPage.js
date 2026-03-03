import React from 'react';
import styled from 'styled-components';

const LoginPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-secondary);
  padding: 20px;
`;

const LoginCard = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const LoginTitle = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 24px;
  color: var(--text-primary);
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  padding: 14px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1d4ed8;
  }
`;

const ForgotPassword = styled.a`
  color: var(--primary-color);
  text-align: center;
  margin-top: 16px;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // 处理登录逻辑
    console.log('登录表单提交');
  };

  return (
    <LoginPageContainer>
      <LoginCard>
        <LoginTitle>登录系统</LoginTitle>
        <LoginForm onSubmit={handleSubmit}>
          <FormField>
            <label htmlFor="username">用户名</label>
            <Input type="text" id="username" name="username" required />
          </FormField>

          <FormField>
            <label htmlFor="password">密码</label>
            <Input type="password" id="password" name="password" required />
          </FormField>

          <SubmitButton type="submit">登录</SubmitButton>

          <ForgotPassword href="#forgot-password">忘记密码？</ForgotPassword>
        </LoginForm>
      </LoginCard>
    </LoginPageContainer>
  );
}

export default LoginPage;