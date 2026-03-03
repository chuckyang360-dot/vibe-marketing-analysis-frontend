import React from 'react';
import styled from 'styled-components';

const ContactPageContainer = styled.div`
  width: 100%;
  padding: 40px 0;
`;

const ContactTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
  color: var(--text-primary);
`;

const ContactContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ContactForm = styled.form`
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

const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 16px;
  min-height: 120px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  padding: 14px 24px;
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

function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // 处理表单提交
    alert('感谢您的联系！我们会尽快回复您。');
  };

  return (
    <ContactPageContainer>
      <div className="container">
        <ContactTitle>联系我们</ContactTitle>
        <ContactContent>
          <ContactForm onSubmit={handleSubmit}>
            <FormField>
              <label htmlFor="name">姓名</label>
              <Input type="text" id="name" name="name" required />
            </FormField>

            <FormField>
              <label htmlFor="email">邮箱</label>
              <Input type="email" id="email" name="email" required />
            </FormField>

            <FormField>
              <label htmlFor="phone">电话</label>
              <Input type="tel" id="phone" name="phone" />
            </FormField>

            <FormField>
              <label htmlFor="message">留言</label>
              <TextArea id="message" name="message" required />
            </FormField>

            <SubmitButton type="submit">提交咨询</SubmitButton>
          </ContactForm>
        </ContactContent>
      </div>
    </ContactPageContainer>
  );
}

export default ContactPage;