import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  z-index: 1000;
  padding: 16px 0;
  transition: all 0.3s ease;

  &.scrolled {
    padding: 12px 0;
    box-shadow: 0 2px 25px rgba(0, 0, 0, 0.12);
  }
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
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    color: var(--primary-dark);
    transform: scale(1.02);
  }

  transition: all 0.3s ease;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 32px;
  margin: 0;
  padding: 0;
  align-items: center;
`;

const NavItem = styled.li`
  margin: 0;
  position: relative;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 8px 0;
  display: flex;
  align-items: center;

  &:hover {
    color: var(--primary-color);
  }

  &.active {
    color: var(--primary-color);
    font-weight: 600;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  &.active::after,
  &:hover::after {
    width: 100%;
  }
`;

const LoginButton = styled(Link)`
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  color: white;
  padding: 10px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.3);
    background: linear-gradient(135deg, var(--primary-dark), var(--primary-color));
  }

  &:active {
    transform: translateY(0);
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
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--bg-secondary);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

// 移动端菜单遮罩
const MobileMenuOverlay = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

// 移动端菜单面板
const MobileMenuPanel = styled.div`
  position: fixed;
  top: 0;
  right: ${props => props.isOpen ? '0' : '-100%'};
  width: 280px;
  height: 100vh;
  background-color: white;
  z-index: 1000;
  transition: right 0.3s ease;
  padding: 80px 20px 20px;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
`;

const MobileNavMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const MobileNavLink = styled(Link)`
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 12px 0;
  border-bottom: 1px solid var(--border-color);

  &:hover {
    color: var(--primary-color);
  }

  &.active {
    color: var(--primary-color);
    font-weight: 600;
  }
`;

const MobileLoginButton = styled(Link)`
  display: block;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  text-align: center;
  margin-top: 16px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
  }
`;

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <HeaderContainer className={scrolled ? 'scrolled' : ''}>
        <NavContainer>
          <Logo to="/" onClick={closeMobileMenu}>
            <span>📊</span>
            Vibe Marckrting
          </Logo>

          <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? '✕' : '☰'}
          </MobileMenuButton>

          <NavMenu>
            <NavItem>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                首页
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/product"
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                产品
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/case"
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                案例
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/contact"
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                联系
              </NavLink>
            </NavItem>
            <NavItem>
              <LoginButton to="/login" onClick={closeMobileMenu}>登录</LoginButton>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </HeaderContainer>

      <MobileMenuOverlay
        isOpen={mobileMenuOpen}
        onClick={() => setMobileMenuOpen(false)}
      />

      <MobileMenuPanel isOpen={mobileMenuOpen}>
        <MobileNavMenu>
          <li><MobileNavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMobileMenu}>首页</MobileNavLink></li>
          <li><MobileNavLink to="/product" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMobileMenu}>产品</MobileNavLink></li>
          <li><MobileNavLink to="/case" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMobileMenu}>案例</MobileNavLink></li>
          <li><MobileNavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMobileMenu}>联系</MobileNavLink></li>
        </MobileNavMenu>
        <MobileLoginButton to="/login" onClick={closeMobileMenu}>登录</MobileLoginButton>
      </MobileMenuPanel>
    </>
  );
}

export default Header;