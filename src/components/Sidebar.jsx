import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const styles = {
  sidebar: {
    width: '280px',
    backgroundColor: '#0f172a',
    color: 'white',
    minHeight: '100vh',
    padding: '0',
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    borderRight: '1px solid rgba(148, 163, 184, 0.1)',
    position: 'relative',
    overflow: 'hidden',
  },
  sidebarHeader: {
    padding: '24px 20px',
    borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
  },
  headerTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    margin: 0,
  },
  navList: {
    listStyle: 'none',
    padding: '20px 16px',
    margin: 0,
  },
  navItem: {
    margin: '4px 0',
  },
  navLink: {
    color: '#cbd5e1',
    textDecoration: 'none',
    padding: '14px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    borderRadius: '12px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fontWeight: '500',
    fontSize: '15px',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid transparent',
  },
  activeLink: {
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.15))',
    color: '#ffffff',
    border: '1px solid rgba(59, 130, 246, 0.3)',
    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)',
    transform: 'translateX(4px)',
  },
  linkHover: {
    backgroundColor: 'rgba(148, 163, 184, 0.1)',
    color: '#f1f5f9',
    transform: 'translateX(2px)',
  },
  icon: {
    width: '20px',
    height: '20px',
    textAlign: 'center',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    backgroundColor: '#ef4444',
    color: 'white',
    fontSize: '11px',
    fontWeight: '600',
    padding: '2px 6px',
    borderRadius: '10px',
    marginLeft: 'auto',
    minWidth: '18px',
    textAlign: 'center',
  },
  sectionDivider: {
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(148, 163, 184, 0.2), transparent)',
    margin: '16px 0',
  },
  bottomSection: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    padding: '16px',
    borderTop: '1px solid rgba(148, 163, 184, 0.1)',
    background: 'rgba(15, 23, 42, 0.8)',
    backdropFilter: 'blur(10px)',
  },
  quickStats: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 16px',
    margin: '16px 16px 0',
    backgroundColor: 'rgba(148, 163, 184, 0.05)',
    borderRadius: '12px',
    border: '1px solid rgba(148, 163, 184, 0.1)',
  },
  statItem: {
    textAlign: 'center',
  },
  statValue: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#f8fafc',
    margin: 0,
  },
  statLabel: {
    fontSize: '11px',
    color: '#94a3b8',
    margin: '2px 0 0 0',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  activeIndicator: {
    position: 'absolute',
    left: '0',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '4px',
    height: '20px',
    background: 'linear-gradient(180deg, #3b82f6, #8b5cf6)',
    borderRadius: '0 4px 4px 0',
  },
};

const Sidebar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'Dashboard', icon: '📊', badge: null },
    { to: '/courses', label: 'My Courses', icon: '📚', badge: '5' },
    { to: '/grades', label: 'Grades & GPA', icon: '📝', badge: null },
    { to: '/schedule', label: 'Class Schedule', icon: '📅', badge: 'New' },
    { to: '/assignments', label: 'Assignments', icon: '📋', badge: '3' },
    { to: '/library', label: 'Digital Library', icon: '📖', badge: null },
  ];

  const secondaryItems = [
    { to: '/profile', label: 'My Profile', icon: '👤', badge: null },
    { to: '/settings', label: 'Settings', icon: '⚙️', badge: null },
    { to: '/support', label: 'Help & Support', icon: '💬', badge: null },
  ];

  const renderNavItem = (item, index, isSecondary = false) => {
    const isActive = location.pathname === item.to;
    const isHovered = hoveredItem === `${isSecondary ? 'secondary' : 'primary'}-${index}`;

    return (
      <li key={item.to} style={styles.navItem}>
        <NavLink
          to={item.to}
          style={{
            ...styles.navLink,
            ...(isActive ? styles.activeLink : {}),
            ...(isHovered && !isActive ? styles.linkHover : {}),
          }}
          onMouseEnter={() => setHoveredItem(`${isSecondary ? 'secondary' : 'primary'}-${index}`)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {isActive && <div style={styles.activeIndicator}></div>}
          <span style={styles.icon}>{item.icon}</span>
          <span>{item.label}</span>
          {item.badge && (
            <span style={styles.badge}>{item.badge}</span>
          )}
        </NavLink>
      </li>
    );
  };

  return (
    <nav style={styles.sidebar}>
      <div style={styles.sidebarHeader}>
        <h4 style={styles.headerTitle}>Navigation</h4>
      </div>

      <ul style={styles.navList}>
        {navItems.map((item, index) => renderNavItem(item, index))}
      </ul>

      <div style={styles.sectionDivider}></div>

      <div style={styles.quickStats}>
        <div style={styles.statItem}>
          <p style={styles.statValue}>9.5</p>
          <p style={styles.statLabel}>GPA</p>
        </div>
        <div style={styles.statItem}>
          <p style={styles.statValue}>116</p>
          <p style={styles.statLabel}>Credits</p>
        </div>
        <div style={styles.statItem}>
          <p style={styles.statValue}>85%</p>
          <p style={styles.statLabel}>Progress</p>
        </div>
      </div>

      <div style={styles.bottomSection}>
        <ul style={{...styles.navList, padding: '0', margin: '0'}}>
          {secondaryItems.map((item, index) => renderNavItem(item, index, true))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
