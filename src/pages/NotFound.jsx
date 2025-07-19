import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f1f5f9',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '2rem',
    textAlign: 'center',
    marginLeft: '25px', // Match sidebar width
  },
  illustrationContainer: {
    position: 'relative',
    marginBottom: '40px',
  },
  illustration: {
    fontSize: '150px',
    marginBottom: '30px',
    animation: 'float 3s ease-in-out infinite',
  },
  circle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '220px',
    height: '220px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
    opacity: '0.1',
    zIndex: '-1',
  },
  heading: {
    fontSize: '52px',
    fontWeight: '800',
    marginBottom: '20px',
    background: 'linear-gradient(135deg, #0f172a, #3b82f6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    position: 'relative',
  },
  headingUnderline: {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100px',
    height: '4px',
    background: 'linear-gradient(90deg, #3b82f6, #6366f1)',
    borderRadius: '2px',
  },
  paragraph: {
    fontSize: '20px',
    color: '#64748b',
    maxWidth: '600px',
    lineHeight: '1.6',
    marginBottom: '30px',
  },
  link: {
    display: 'inline-block',
    padding: '15px 35px',
    backgroundColor: '#0f172a',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '50px',
    fontWeight: '600',
    fontSize: '18px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(15, 23, 42, 0.2)',
    position: 'relative',
    overflow: 'hidden',
    zIndex: '1',
    border: 'none',
    cursor: 'pointer',
  },
  linkHover: {
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 20px rgba(15, 23, 42, 0.3)',
  },
  linkBefore: {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
    zIndex: '-1',
    opacity: '0',
    transition: 'opacity 0.3s ease',
  },
  linkHoverBefore: {
    opacity: '1',
  },
  suggestion: {
    marginTop: '30px',
    color: '#94a3b8',
    fontSize: '16px',
  },
  '@keyframes float': {
    '0%': {
      transform: 'translateY(0px)',
    },
    '50%': {
      transform: 'translateY(-20px)',
    },
    '100%': {
      transform: 'translateY(0px)',
    },
  },
};

const NotFound = () => {
  const [hover, setHover] = React.useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.illustrationContainer}>
        <div style={styles.circle}></div>
        <div style={styles.illustration}>🚧</div>
      </div>
      
      <h1 style={styles.heading}>
        404 - Page Not Found
        <span style={styles.headingUnderline}></span>
      </h1>
      
      <p style={styles.paragraph}>
        Oops! The page you're looking for seems to have taken a wrong turn. 
        It might have been moved, deleted, or never existed in the first place.
      </p>
      
      <NavLink 
        to="/"
        style={styles.link}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <span style={{ position: 'relative', zIndex: 2 }}>Return to Dashboard</span>
        <div style={{ 
          ...styles.linkBefore, 
          ...(hover ? styles.linkHoverBefore : {}) 
        }}></div>
      </NavLink>
      
      <p style={styles.suggestion}>
        Still lost? Check the navigation menu or contact support.
      </p>
      
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </div>
  );
};

export default NotFound;
