import { Link } from "react-router-dom";
import styled from "styled-components";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Logo = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Logo>Portfolio</Logo>

      <NavLinks>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/skills">Skills</NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/education">Education</NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/projects">Projects</NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/contact">Contact</NavLink>
        </NavItem>
      </NavLinks>

      <ThemeToggle />
    </NavbarContainer>
  );
}

export default Navbar;