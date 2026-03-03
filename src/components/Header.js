import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 16px 0;
`;

const NavContainer = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
  text-decoration: none;

  &:hover {
    color: #1d4ed8;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 32px;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: var(--primary-color);
  }

  &.active {
    color: var(--primary-color);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const LoginButton = styled(Link)`
  background-color: var(--primary-color);
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1d4ed8;
  }
`;

// 移动端菜单按钮
const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-primary);

  @media (max-width: 768px) {
    display: block;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <NavContainer>
        <Logo to="/">Vibe Marckrting</Logo>

        <MobileMenuButton>☰</MobileMenuButton>

        <NavMenu>
          <NavItem>
            <NavLink to="/" activeClassName="active">首页</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/product" activeClassName="active">产品</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/case" activeClassName="active">案例</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact" activeClassName="active">联系</NavLink>
          </NavItem>
          <NavItem>
            <LoginButton to="/login">登录</LoginButton>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </HeaderContainer>
  );
}

export default Header;