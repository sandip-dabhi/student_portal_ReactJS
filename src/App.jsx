import React, { useState, useEffect, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

// Components
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';

// Pages
import Dashboard from './pages/Dashboard.jsx';
import Courses from './pages/Courses.jsx';
import Grades from './pages/Grades.jsx';
import Profile from './pages/Profile.jsx';
import Schedule from './pages/Schedule.jsx';
import NotFound from './pages/NotFound.jsx';

// Styles
import './App.css';

// Loading Component
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
  }}>
    <div style={{
      backgroundColor: 'white',
      borderRadius: '20px',
      padding: '2rem',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
      textAlign: 'center',
      minWidth: '300px'
    }}>
      <div style={{
        width: '48px',
        height: '48px',
        border: '4px solid #e2e8f0',
        borderTop: '4px solid #3b82f6',
        borderRadius: '50%',
        margin: '0 auto 1rem',
        animation: 'spin 1s linear infinite'
      }}></div>
      
      <h3 style={{
        fontSize: '1.125rem',
        fontWeight: '700',
        color: '#0f172a',
        marginBottom: '0.5rem'
      }}>
        Loading...
      </h3>
      
      <p style={{
        color: '#64748b',
        fontSize: '0.875rem'
      }}>
        Please wait while we prepare your content
      </p>
    </div>
    
    <style>
      {`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
    </style>
  </div>
);

// Error Boundary Fallback
const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    padding: '2rem',
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
  }}>
    <div style={{
      backgroundColor: 'white',
      borderRadius: '20px',
      padding: '3rem',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      maxWidth: '500px',
      textAlign: 'center'
    }}>
      <div style={{ fontSize: '64px', marginBottom: '1.5rem' }}>⚠️</div>
      
      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: '700',
        color: '#0f172a',
        marginBottom: '1rem'
      }}>
        Something went wrong
      </h2>
      
      <p style={{
        color: '#64748b',
        marginBottom: '1.5rem',
        lineHeight: '1.6'
      }}>
        Don't worry, your data is safe. Try refreshing the page or contact support if the problem persists.
      </p>
      
      <button
        onClick={resetErrorBoundary}
        style={{
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '12px',
          fontWeight: '600',
          fontSize: '14px',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
      >
        🔄 Try Again
      </button>
    </div>
  </div>
);

// Page Wrapper with Animation
const PageWrapper = ({ children }) => {
  const location = useLocation();
  
  return (
    <div 
      key={location.pathname}
      style={{
        animation: 'fadeInUp 0.4s ease-out',
        flex: 1,
        overflow: 'hidden'
      }}
    >
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      {children}
    </div>
  );
};

// Student Context (for sharing data across components)
export const StudentContext = React.createContext();

// Main App Component (NO ROUTER HERE)
const App = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: 'Sandip Dabhi',
    email: 'sandipdabhi970@gmail.com',
    studentId: '92200104063',
    major: 'Information Technology',
    gpa: 9.51,
    creditsCompleted: 116,
    totalCredits: 120,
    avatar: 'SD',
    status: 'Active',
    enrollmentYear: 2022,
    expectedGraduation: 2026
  });
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Assignment due tomorrow', type: 'warning', read: false },
    { id: 2, message: 'New course material uploaded', type: 'info', read: false },
    { id: 3, message: 'Grade published for Quiz 3', type: 'success', read: true }
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Simulate initial loading
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(loadingTimer);
  }, []);

  // Page title updates
  useEffect(() => {
    const pageTitles = {
      '/': 'Dashboard',
      '/courses': 'My Courses',
      '/grades': 'Academic Performance',
      '/profile': 'My Profile',
      '/schedule': 'Class Schedule'
    };

    const currentTitle = pageTitles[location.pathname] || '404 - Not Found';
    document.title = `${currentTitle} - Student Portal`;
  }, [location.pathname]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Alt + S to toggle sidebar
      if (event.altKey && event.key === 's') {
        event.preventDefault();
        setSidebarCollapsed(!sidebarCollapsed);
      }
      
      // Alt + H to go home
      if (event.altKey && event.key === 'h') {
        event.preventDefault();
        window.location.href = '/';
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [sidebarCollapsed]);

  // Context value
  const contextValue = {
    currentUser,
    setCurrentUser,
    theme,
    setTheme,
    notifications,
    setNotifications,
    sidebarCollapsed,
    setSidebarCollapsed,
    markNotificationAsRead: (id) => {
      setNotifications(prev => prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      ));
    },
    addNotification: (notification) => {
      setNotifications(prev => [
        { ...notification, id: Date.now(), read: false },
        ...prev
      ]);
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <StudentContext.Provider value={contextValue}>
      <div className={`app-container ${theme} ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <Header />
        
        <div className="main-content">
          <Sidebar />
          
          <main 
            className="page-content"
            role="main"
            aria-label="Main content"
            style={{
              marginLeft: sidebarCollapsed ? '0' : '280px',
              transition: 'margin-left 0.3s ease',
              overflow: 'hidden'
            }}
          >
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => window.location.reload()}
              resetKeys={[location.pathname]}
            >
              <Suspense fallback={<LoadingSpinner />}>
                <PageWrapper>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/grades" element={<Grades />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route 
                      path="/assignments" 
                      element={
                        <div style={{ padding: '2rem', textAlign: 'center' }}>
                          <h2>Assignments</h2>
                          <p>Coming soon...</p>
                        </div>
                      } 
                    />
                    <Route 
                      path="/library" 
                      element={
                        <div style={{ padding: '2rem', textAlign: 'center' }}>
                          <h2>Digital Library</h2>
                          <p>Coming soon...</p>
                        </div>
                      } 
                    />
                    <Route 
                      path="/settings" 
                      element={
                        <div style={{ padding: '2rem', textAlign: 'center' }}>
                          <h2>Settings</h2>
                          <p>Coming soon...</p>
                        </div>
                      } 
                    />
                    <Route 
                      path="/support" 
                      element={
                        <div style={{ padding: '2rem', textAlign: 'center' }}>
                          <h2>Help & Support</h2>
                          <p>Coming soon...</p>
                        </div>
                      } 
                    />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </PageWrapper>
              </Suspense>
            </ErrorBoundary>
          </main>
        </div>

        {/* Accessibility Skip Link */}
        <a 
          href="#main-content"
          style={{
            position: 'absolute',
            top: '-40px',
            left: '6px',
            background: '#3b82f6',
            color: 'white',
            padding: '8px',
            textDecoration: 'none',
            borderRadius: '4px',
            zIndex: 100,
            transition: 'top 0.3s'
          }}
          onFocus={(e) => e.target.style.top = '6px'}
          onBlur={(e) => e.target.style.top = '-40px'}
        >
          Skip to main content
        </a>

        {/* Global Keyboard Shortcuts Info (Dev Mode) */}
        {process.env.NODE_ENV === 'development' && (
          <div style={{
            position: 'fixed',
            bottom: '10px',
            right: '10px',
            background: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '8px 12px',
            borderRadius: '8px',
            fontSize: '12px',
            zIndex: 1000,
            opacity: 0.7
          }}>
            Alt+S: Toggle Sidebar | Alt+H: Home
          </div>
        )}
      </div>
    </StudentContext.Provider>
  );
};

export default App;
