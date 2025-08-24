import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App';
import './index.css'; 
import './App.css';   S

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem',
      backgroundColor: '#f8fafc',
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
      textAlign: 'center'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '3rem',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        maxWidth: '500px',
        width: '100%'
      }}>
        <div style={{
          fontSize: '64px',
          marginBottom: '1.5rem'
        }}>
          ⚠️
        </div>
        
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          color: '#0f172a',
          marginBottom: '1rem'
        }}>
          Oops! Something went wrong
        </h2>
        
        <p style={{
          color: '#64748b',
          marginBottom: '1.5rem',
          lineHeight: '1.6'
        }}>
          The student portal encountered an unexpected error. Don't worry, your data is safe.
        </p>
        
        <details style={{
          marginBottom: '1.5rem',
          textAlign: 'left',
          padding: '1rem',
          backgroundColor: '#f8fafc',
          borderRadius: '8px',
          fontSize: '0.875rem',
          color: '#64748b'
        }}>
          <summary style={{
            cursor: 'pointer',
            fontWeight: '600',
            marginBottom: '0.5rem'
          }}>
            Error Details
          </summary>
          <pre style={{
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            fontSize: '0.75rem',
            color: '#ef4444'
          }}>
            {error.message}
          </pre>
        </details>
        
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
            transition: 'all 0.3s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#1d4ed8';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#3b82f6';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          🔄 Try Again
        </button>
        
        <p style={{
          marginTop: '1rem',
          fontSize: '0.875rem',
          color: '#94a3b8'
        }}>
          If the problem persists, please contact IT support.
        </p>
      </div>
    </div>
  );
};

// Loading Component
const LoadingFallback = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: "'Inter', 'Segoe UI', sans-serif"
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '3rem',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          border: '4px solid #e2e8f0',
          borderTop: '4px solid #3b82f6',
          borderRadius: '50%',
          margin: '0 auto 1.5rem',
          animation: 'spin 1s linear infinite'
        }}></div>
        
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: '700',
          color: '#0f172a',
          marginBottom: '0.5rem'
        }}>
          Loading Student Portal
        </h3>
        
        <p style={{
          color: '#64748b',
          fontSize: '0.875rem'
        }}>
          Please wait while we prepare your dashboard...
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
};

// Performance observer (optional)
const observePerformance = () => {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'navigation') {
          console.log(`🚀 Portal loaded in ${Math.round(entry.loadEventEnd - entry.fetchStart)}ms`);
        }
      });
    });
    
    observer.observe({ entryTypes: ['navigation'] });
  }
};

// Initialize the application
const initializeApp = () => {
  // Get the root element
  const container = document.getElementById('root');
  
  if (!container) {
    throw new Error(
      'Root element not found. Make sure you have a <div id="root"></div> in your HTML.'
    );
  }

  // Create React root
  const root = createRoot(container);
  
  // Enable performance monitoring in development
  if (process.env.NODE_ENV === 'development') {
    observePerformance();
  }

  // Render the application
  root.render(
    <React.StrictMode>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={(error, errorInfo) => {
          // Log error in development
          if (process.env.NODE_ENV === 'development') {
            console.error('🚨 Application Error:', error);
            console.error('Error Info:', errorInfo);
          }
          
          // In production, you might want to send this to an error reporting service
          // Example: Sentry, LogRocket, etc.
        }}
        onReset={() => {
          // Optionally reload the page or reset application state
          window.location.reload();
        }}
      >
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true
          }}
        >
          <React.Suspense fallback={<LoadingFallback />}>
            <App />
          </React.Suspense>
        </BrowserRouter>
      </ErrorBoundary>
    </React.StrictMode>
  );
};

// Initialize app with error handling
try {
  initializeApp();
} catch (error) {
  console.error('Failed to initialize Student Portal:', error);
  
  // Fallback rendering if main initialization fails
  const container = document.getElementById('root');
  if (container) {
    container.innerHTML = `
      <div style="
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding: 2rem;
        font-family: 'Inter', sans-serif;
        background-color: #f8fafc;
      ">
        <div style="
          text-align: center;
          background: white;
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          max-width: 400px;
        ">
          <div style="font-size: 64px; margin-bottom: 1rem;">❌</div>
          <h2 style="color: #0f172a; margin-bottom: 1rem;">Failed to Load</h2>
          <p style="color: #64748b; margin-bottom: 1.5rem;">
            The student portal couldn't initialize properly.
          </p>
          <button 
            onclick="window.location.reload()"
            style="
              background: #3b82f6;
              color: white;
              border: none;
              padding: 12px 24px;
              border-radius: 12px;
              font-weight: 600;
              cursor: pointer;
            "
          >
            Reload Portal
          </button>
        </div>
      </div>
    `;
  }
}

// Hot Module Replacement (for development)
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', () => {
    console.log('🔄 Hot reloading App component...');
  });
}

// Service Worker Registration (optional)
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('✅ SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('❌ SW registration failed: ', registrationError);
      });
  });
}

// Expose some utilities to window for debugging (development only)
if (process.env.NODE_ENV === 'development') {
  window.studentPortal = {
    version: '1.0.0',
    buildTime: new Date().toISOString(),
    debug: {
      clearStorage: () => {
        localStorage.clear();
        sessionStorage.clear();
        console.log('🧹 Storage cleared');
      },
      reload: () => window.location.reload(),
      info: () => {
        console.log('📊 Student Portal Debug Info', {
          userAgent: navigator.userAgent,
          viewport: `${window.innerWidth}x${window.innerHeight}`,
          timestamp: new Date().toISOString(),
          url: window.location.href
        });
      }
    }
  };
  
  console.log('🎓 Student Portal initialized successfully');
  console.log('💡 Use window.studentPortal.debug for debugging utilities');
}
