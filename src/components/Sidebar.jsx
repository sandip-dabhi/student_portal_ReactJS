// Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  sidebar: {
    width: '250px',
    backgroundColor: '#1e293b',
    color: 'white',
    minHeight: '100vh',
    padding: '25px 0',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  navList: {
    listStyle: 'none',
    padding: '0 15px',
    margin: 0,
  },
  navItem: {
    margin: '8px 0',
  },
  navLink: {
    color: '#e2e8f0',
    textDecoration: 'none',
    padding: '12px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    fontWeight: '500',
    fontSize: '16px',
  },
  activeLink: {
    background: 'rgba(59, 130, 246, 0.2)',
    color: '#ffffff',
  },
  linkHover: {
    '&:hover': {
      background: 'rgba(59, 130, 246, 0.15)',
    },
  },
  icon: {
    width: '24px',
    textAlign: 'center',
    fontSize: '18px',
  },
};

const Sidebar = () => {
  return (
    <nav style={styles.sidebar}>
     
      <ul style={styles.navList}>
        {navItems.map(({ to, label, icon }) => (
          <li key={to} style={styles.navItem}>
            <NavLink
              to={to}
              style={({ isActive }) => ({
                ...styles.navLink,
                ...(isActive ? styles.activeLink : {}),
                ...styles.linkHover,
              })}
            >
              <span style={styles.icon}>{icon}</span>
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
const navItems = [
  { to: '/', label: 'Dashboard', icon: '📊' },
  { to: '/courses', label: 'Courses', icon: '📚' },
  { to: '/grades', label: 'Grades', icon: '📝' },
  { to: '/schedule', label: 'Schedule', icon: '📅' },
  { to: '/profile', label: 'Profile', icon: '👤' },
];

export default Sidebar;
