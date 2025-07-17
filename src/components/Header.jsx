import React from 'react';

const styles = {
  header: {
    backgroundColor: '#1e293b',
    color: '#333',
    padding: '15px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 15px rgba(0, 0, 0, 0.08)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  logo: {
    fontSize: '28px',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '0.5px',
  },
  logoIcon: {
    fontSize: '32px',
    color: '#4f46e5',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    paddingLeft: '20px',
  },
  userInfoDivider: {
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    height: '30px',
    width: '1px',
    backgroundColor: '#e2e8f0',
  },
  name: {
    fontSize: '18px',
    fontWeight: '700',
    margin: 0,
    color: 'white',
  },
  major: {
    fontSize: '14px',
    color: '#64748b',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  statusBadge: {
    backgroundColor: '#e0f2fe',
    color: '#0369a1',
    padding: '2px 8px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '600',
  },
  statsContainer: {
    display: 'flex',
    gap: '25px',
    alignItems: 'center',
  },
  statCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '90px',
  },
  statValue: {
    fontSize: '26px',
    fontWeight: '800',
    margin: 0,
    color: 'white',
  },
  statLabel: {
    fontSize: '14px',
    color: '#64748b',
    margin: '5px 0 0 0',
    fontWeight: '600',
    letterSpacing: '0.5px',
  },
  cgpaBadge: {
    background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
    color: 'white',
    padding: '2px 10px',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: '600',
    marginTop: '4px',
  },
  actionIcons: {
    display: 'flex',
    gap: '20px',
    marginLeft: '30px',
  },
  iconButton: {
    backgroundColor: '#f1f5f9',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontSize: '18px',
    color: '#4f46e5',
  },
  iconHover: {
    transform: 'translateY(-3px)',
    backgroundColor: '#e0e7ff',
    boxShadow: '0 4px 8px rgba(79, 70, 229, 0.2)',
  },
};

const Header = () => {
  const [hoveredIcon, setHoveredIcon] = React.useState(null);

  return (
    <header style={styles.header}>
      <div style={styles.leftSection}>
        <div style={styles.logoContainer}>
          <div style={styles.logoIcon}>🎓</div>
          <div style={styles.logo}>Student Portal</div>
        </div>
        
        <div style={styles.userInfo}>
          <div style={styles.userInfoDivider}></div>
          <h3 style={styles.name}>Sandip Dabhi</h3>
          <p style={styles.major}>
            Information Technology Major - Class of 2026
            <span style={styles.statusBadge}>Active</span>
          </p>
        </div>
      </div>
      
      <div style={styles.statsContainer}>
        <div style={styles.statCard}>
          <p style={styles.statValue}>9.51</p>
          <p style={styles.statLabel}>CGPA</p>
        </div>
        <div style={styles.statCard}>
          <p style={styles.statValue}>116</p>
          <p style={styles.statLabel}>CREDITS</p>
        </div>
        <div style={styles.statCard}>
          <p style={styles.statValue}>5</p>
          <p style={styles.statLabel}>COURSES</p>
        </div>
        
        <div style={styles.actionIcons}>
          {['🔔', '⚙️', '❓'].map((icon, index) => (
            <div 
              key={index}
              style={{
                ...styles.iconButton,
                ...(hoveredIcon === index ? styles.iconHover : {})
              }}
              onMouseEnter={() => setHoveredIcon(index)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};
export default Header;
