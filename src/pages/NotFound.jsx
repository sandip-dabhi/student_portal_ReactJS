import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    padding: '32px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
  },
  backgroundElements: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    zIndex: 0,
  },
  floatingShape: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
    animation: 'floatShapes 6s ease-in-out infinite',
  },
  contentWrapper: {
    position: 'relative',
    zIndex: 10,
    maxWidth: '800px',
    width: '100%',
  },
  illustrationContainer: {
    position: 'relative',
    marginBottom: '48px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  mainIllustration: {
    fontSize: '120px',
    marginBottom: '24px',
    animation: 'bounce 2s ease-in-out infinite',
    filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1))',
  },
  errorCode: {
    fontSize: '180px',
    fontWeight: '900',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    lineHeight: '1',
    marginBottom: '16px',
    letterSpacing: '8px',
    position: 'relative',
  },
  glitchEffect: {
    position: 'relative',
    animation: 'glitch 3s ease-in-out infinite',
  },
  circle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
    zIndex: -1,
    animation: 'pulse 3s ease-in-out infinite',
  },
  heading: {
    fontSize: '48px',
    fontWeight: '800',
    marginBottom: '24px',
    color: '#0f172a',
    position: 'relative',
    letterSpacing: '1px',
  },
  headingUnderline: {
    position: 'absolute',
    bottom: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '120px',
    height: '4px',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    borderRadius: '2px',
    animation: 'slideIn 1s ease-out',
  },
  paragraph: {
    fontSize: '20px',
    color: '#64748b',
    maxWidth: '600px',
    lineHeight: '1.7',
    marginBottom: '40px',
    fontWeight: '500',
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
    marginBottom: '40px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  primaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px 32px',
    backgroundColor: '#0f172a',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '16px',
    fontWeight: '700',
    fontSize: '16px',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 8px 25px rgba(15, 23, 42, 0.2)',
    position: 'relative',
    overflow: 'hidden',
    border: 'none',
    cursor: 'pointer',
    transform: 'translateY(0)',
  },
  secondaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px 32px',
    backgroundColor: 'white',
    color: '#475569',
    textDecoration: 'none',
    borderRadius: '16px',
    fontWeight: '700',
    fontSize: '16px',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    border: '2px solid #e2e8f0',
    cursor: 'pointer',
    transform: 'translateY(0)',
  },
  buttonHover: {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 35px rgba(15, 23, 42, 0.3)',
  },
  secondaryButtonHover: {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
    borderColor: '#3b82f6',
    color: '#3b82f6',
  },
  buttonRipple: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))',
    zIndex: -1,
    opacity: 0,
    transition: 'opacity 0.4s ease',
  },
  buttonHoverRipple: {
    opacity: 1,
  },
  suggestionCard: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '32px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e2e8f0',
    maxWidth: '500px',
    margin: '0 auto',
  },
  suggestionTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: '16px',
  },
  suggestionList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  suggestionItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 0',
    color: '#64748b',
    fontSize: '16px',
    fontWeight: '500',
    borderBottom: '1px solid #f1f5f9',
  },
  suggestionIcon: {
    fontSize: '20px',
    width: '24px',
    textAlign: 'center',
  },
  searchBox: {
    width: '100%',
    padding: '16px 20px',
    fontSize: '16px',
    border: '2px solid #e2e8f0',
    borderRadius: '12px',
    marginTop: '24px',
    transition: 'all 0.3s ease',
    fontFamily: 'inherit',
  },
  searchBoxFocus: {
    borderColor: '#3b82f6',
    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
    outline: 'none',
  },
  timeDisplay: {
    position: 'absolute',
    top: '32px',
    right: '32px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    padding: '12px 20px',
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#475569',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
};

const NotFound = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [searchFocused, setSearchFocused] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit',
      hour12: true 
    });
  };

  const suggestions = [
    { icon: '🏠', text: 'Go back to Dashboard', link: '/' },
    { icon: '📚', text: 'Browse your Courses', link: '/courses' },
    { icon: '📊', text: 'Check your Grades', link: '/grades' },
    { icon: '📅', text: 'View Class Schedule', link: '/schedule' },
    { icon: '👤', text: 'Update your Profile', link: '/profile' },
  ];

  const floatingShapes = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
  }));

  return (
    <div style={styles.container}>
      <div style={styles.backgroundElements}>
        {floatingShapes.map((shape) => (
          <div
            key={shape.id}
            style={{
              ...styles.floatingShape,
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              left: `${shape.left}%`,
              top: `${shape.top}%`,
              animationDelay: `${shape.delay}s`,
            }}
          />
        ))}
      </div>

      <div style={styles.timeDisplay}>
        {formatTime(currentTime)}
      </div>

      <div style={styles.contentWrapper}>
        <div style={styles.illustrationContainer}>
          <div style={styles.circle}></div>
          <div style={{...styles.errorCode, ...styles.glitchEffect}}>404</div>
          <div style={styles.mainIllustration}>🔍</div>
        </div>
        
        <h1 style={styles.heading}>
          Page Not Found
          <div style={styles.headingUnderline}></div>
        </h1>
        
        <p style={styles.paragraph}>
          Oops! The page you're looking for seems to have taken a detour through cyberspace. 
          Don't worry though – even the best explorers sometimes need to recalibrate their compass.
        </p>
        
        <div style={styles.buttonContainer}>
          <NavLink 
            to="/"
            style={{
              ...styles.primaryButton,
              ...(hoveredButton === 'home' ? styles.buttonHover : {}),
            }}
            onMouseEnter={() => setHoveredButton('home')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <span style={{ position: 'relative', zIndex: 2 }}>
              🏠 Return Home
            </span>
            <div style={{ 
              ...styles.buttonRipple, 
              ...(hoveredButton === 'home' ? styles.buttonHoverRipple : {}) 
            }}></div>
          </NavLink>

          <button
            style={{
              ...styles.secondaryButton,
              ...(hoveredButton === 'back' ? styles.secondaryButtonHover : {}),
            }}
            onMouseEnter={() => setHoveredButton('back')}
            onMouseLeave={() => setHoveredButton(null)}
            onClick={() => window.history.back()}
          >
            ← Go Back
          </button>
        </div>

        <input
          type="text"
          placeholder="🔍 Search for a page or feature..."
          style={{
            ...styles.searchBox,
            ...(searchFocused ? styles.searchBoxFocus : {}),
          }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
        />

        <div style={styles.suggestionCard}>
          <h3 style={styles.suggestionTitle}>Popular Destinations</h3>
          <ul style={styles.suggestionList}>
            {suggestions.map((suggestion, index) => (
              <li key={index} style={styles.suggestionItem}>
                <span style={styles.suggestionIcon}>{suggestion.icon}</span>
                <NavLink 
                  to={suggestion.link}
                  style={{ 
                    textDecoration: 'none', 
                    color: 'inherit',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
                  onMouseLeave={(e) => e.target.style.color = '#64748b'}
                >
                  {suggestion.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-20px); }
            60% { transform: translateY(-10px); }
          }
          
          @keyframes pulse {
            0% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
            50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.4; }
            100% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
          }
          
          @keyframes floatShapes {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-20px) rotate(90deg); }
            50% { transform: translateY(-10px) rotate(180deg); }
            75% { transform: translateY(-30px) rotate(270deg); }
          }
          
          @keyframes glitch {
            0%, 100% { text-shadow: 0 0 0 transparent; }
            10% { text-shadow: 2px 0 0 #ff0080, -2px 0 0 #00ffff; }
            20% { text-shadow: 0 0 0 transparent; }
            30% { text-shadow: -2px 0 0 #ff0080, 2px 0 0 #00ffff; }
            40% { text-shadow: 0 0 0 transparent; }
          }
          
          @keyframes slideIn {
            0% { width: 0; }
            100% { width: 120px; }
          }
        `}
      </style>
    </div>
  );
};

export default NotFound;
