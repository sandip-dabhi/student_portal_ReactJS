import React, { useState } from 'react';

const styles = {
  header: {
    backgroundColor: '#0f172a', // Darker, more modern color
    color: '#f8fafc',
    padding: '16px 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.12)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  },
  logo: {
    fontSize: '24px',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '0.3px',
  },
  logoIcon: {
    fontSize: '28px',
    filter: 'drop-shadow(0 2px 4px rgba(59, 130, 246, 0.3))',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    paddingLeft: '24px',
  },
  userInfoDivider: {
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    height: '40px',
    width: '2px',
    background: 'linear-gradient(180deg, transparent, #3b82f6, transparent)',
    borderRadius: '1px',
  },
  name: {
    fontSize: '18px',
    fontWeight: '700',
    margin: 0,
    color: '#f8fafc',
    letterSpacing: '0.3px',
  },
  major: {
    fontSize: '13px',
    color: '#94a3b8',
    margin: '4px 0 0 0',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap',
  },
  statusBadge: {
    backgroundColor: '#065f46',
    color: '#d1fae5',
    padding: '3px 8px',
    borderRadius: '16px',
    fontSize: '11px',
    fontWeight: '600',
    border: '1px solid #10b981',
    animation: 'pulse 2s infinite',
  },
  statsContainer: {
    display: 'flex',
    gap: '32px',
    alignItems: 'center',
  },
  statCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '80px',
    padding: '8px 12px',
    borderRadius: '12px',
    background: 'rgba(148, 163, 184, 0.05)',
    border: '1px solid rgba(148, 163, 184, 0.1)',
    transition: 'transform 0.2s ease, background 0.2s ease',
    cursor: 'pointer',
  },
  statValue: {
    fontSize: '24px',
    fontWeight: '800',
    margin: 0,
    color: '#f8fafc',
    letterSpacing: '0.5px',
  },
  statLabel: {
    fontSize: '12px',
    color: '#94a3b8',
    margin: '4px 0 0 0',
    fontWeight: '600',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  actionIcons: {
    display: 'flex',
    gap: '12px',
    marginLeft: '24px',
  },
  iconButton: {
    backgroundColor: 'rgba(148, 163, 184, 0.1)',
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '18px',
    color: '#94a3b8',
    border: '1px solid rgba(148, 163, 184, 0.2)',
    position: 'relative',
    overflow: 'hidden',
  },
  iconHover: {
    transform: 'translateY(-2px)',
    backgroundColor: 'rgba(59, 130, 246, 0.15)',
    color: '#3b82f6',
    boxShadow: '0 8px 25px rgba(59, 130, 246, 0.2)',
    border: '1px solid rgba(59, 130, 246, 0.3)',
  },
  profileSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginLeft: '20px',
  },
  profilePicture: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  },
  notificationBadge: {
    position: 'absolute',
    top: '-2px',
    right: '-2px',
    width: '8px',
    height: '8px',
    backgroundColor: '#ef4444',
    borderRadius: '50%',
    border: '2px solid #0f172a',
  },
};

// Add CSS animations
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
`;
document.head.appendChild(styleSheet);

const Header = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [hoveredStat, setHoveredStat] = useState(null);

  const iconData = [
    { icon: '🔔', label: 'Notifications', hasNotification: true },
    { icon: '⚙️', label: 'Settings', hasNotification: false },
    { icon: '❓', label: 'Help', hasNotification: false },
  ];

  const statData = [
    { value: '9.51', label: 'CGPA', color: '#3b82f6' },
    { value: '116', label: 'CREDITS', color: '#10b981' },
    { value: '5', label: 'COURSES', color: '#f59e0b' },
  ];

  return (
    <header style={styles.header}>
      <div style={styles.leftSection}>
        <div 
          style={styles.logoContainer}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          <div style={styles.logoIcon}>🎓</div>
          <div style={styles.logo}>EduPortal</div>
        </div>
        
        <div style={styles.userInfo}>
          <div style={styles.userInfoDivider}></div>
          <h3 style={styles.name}>Sandip Dabhi</h3>
          <p style={styles.major}>
            Information Technology • Class of 2026
            <span style={styles.statusBadge}>Active</span>
          </p>
        </div>
      </div>
      
      <div style={styles.statsContainer}>
        {statData.map((stat, index) => (
          <div 
            key={index}
            style={{
              ...styles.statCard,
              ...(hoveredStat === index ? {
                transform: 'translateY(-2px)',
                background: 'rgba(148, 163, 184, 0.1)',
              } : {})
            }}
            onMouseEnter={() => setHoveredStat(index)}
            onMouseLeave={() => setHoveredStat(null)}
          >
            <p style={{
              ...styles.statValue,
              color: hoveredStat === index ? stat.color : '#f8fafc'
            }}>
              {stat.value}
            </p>
            <p style={styles.statLabel}>{stat.label}</p>
          </div>
        ))}
        
        <div style={styles.actionIcons}>
          {iconData.map((item, index) => (
            <div 
              key={index}
              style={{
                ...styles.iconButton,
                ...(hoveredIcon === index ? styles.iconHover : {})
              }}
              onMouseEnter={() => setHoveredIcon(index)}
              onMouseLeave={() => setHoveredIcon(null)}
              title={item.label}
            >
              {item.icon}
              {item.hasNotification && <div style={styles.notificationBadge}></div>}
            </div>
          ))}
        </div>

        <div style={styles.profileSection}>
          <div 
            style={styles.profilePicture}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            title="Profile Settings"
          >
            SD
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
