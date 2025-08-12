import React, { useState, useEffect } from 'react';

const styles = {
  container: {
    padding: '32px',
    backgroundColor: '#f8fafc',
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
  },
  welcomeSection: {
    background: 'linear-gradient(135deg, #0f172a, #1e293b)',
    borderRadius: '20px',
    padding: '40px',
    marginBottom: '32px',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
  },
  welcomeBackground: {
    position: 'absolute',
    top: '0',
    right: '0',
    width: '200px',
    height: '200px',
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
    borderRadius: '50%',
    transform: 'translate(50%, -50%)',
  },
  welcomeHeader: {
    position: 'relative',
    zIndex: 2,
  },
  welcomeTitle: {
    fontSize: '36px',
    fontWeight: '800',
    margin: 0,
    background: 'linear-gradient(135deg, #ffffff, #e2e8f0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '0.5px',
  },
  welcomeSubtitle: {
    fontSize: '18px',
    color: '#94a3b8',
    margin: '12px 0 0 0',
    fontWeight: '500',
    lineHeight: '1.6',
  },
  quickStats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    margin: '32px 0',
    position: 'relative',
    zIndex: 2,
  },
  statCard: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '16px',
    padding: '24px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  statValue: {
    fontSize: '28px',
    fontWeight: '800',
    color: 'white',
    margin: 0,
  },
  statLabel: {
    fontSize: '14px',
    color: '#94a3b8',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    margin: '8px 0 0 0',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#0f172a',
    margin: 0,
  },
  viewAllButton: {
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '12px',
    fontWeight: '600',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  dashboardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '24px',
    marginBottom: '32px',
  },
  dashboardCard: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '32px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e2e8f0',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
  },
  cardHover: {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
  },
  cardBackground: {
    position: 'absolute',
    top: '0',
    right: '0',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    opacity: 0.1,
    transform: 'translate(25%, -25%)',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '20px',
    position: 'relative',
    zIndex: 2,
  },
  cardIcon: {
    fontSize: '28px',
    width: '56px',
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, #f1f5f9, #e2e8f0)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#0f172a',
    margin: 0,
    letterSpacing: '0.3px',
  },
  cardContent: {
    fontSize: '15px',
    color: '#64748b',
    lineHeight: '1.7',
    margin: 0,
    position: 'relative',
    zIndex: 2,
  },
  cardAction: {
    marginTop: '20px',
    display: 'flex',
    gap: '12px',
    position: 'relative',
    zIndex: 2,
  },
  primaryAction: {
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    padding: '10px 16px',
    borderRadius: '10px',
    fontWeight: '600',
    fontSize: '13px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  secondaryAction: {
    backgroundColor: '#f1f5f9',
    color: '#475569',
    border: '1px solid #e2e8f0',
    padding: '10px 16px',
    borderRadius: '10px',
    fontWeight: '600',
    fontSize: '13px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  urgentBadge: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    backgroundColor: '#ef4444',
    color: 'white',
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '11px',
    fontWeight: '700',
    textTransform: 'uppercase',
    zIndex: 3,
  },
  newBadge: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    backgroundColor: '#10b981',
    color: 'white',
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '11px',
    fontWeight: '700',
    textTransform: 'uppercase',
    zIndex: 3,
  },
  recentActivity: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '32px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e2e8f0',
  },
  activityList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  activityItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px 0',
    borderBottom: '1px solid #f1f5f9',
  },
  activityIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#0f172a',
    margin: '0 0 4px 0',
  },
  activityTime: {
    fontSize: '13px',
    color: '#64748b',
    margin: 0,
  },
};

const Dashboard = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const cards = [
    {
      icon: '📝',
      title: 'Upcoming Assignments',
      content: 'You have 3 assignments due this week. One is due tomorrow at 11:59 PM.',
      urgent: true,
      actions: [
        { label: '📋 View All', type: 'primary' },
        { label: '➕ Add New', type: 'secondary' }
      ],
      bgColor: '#fef2f2'
    },
    {
      icon: '📚',
      title: 'Current Courses',
      content: 'You are enrolled in 5 courses this semester. 2 have new materials available.',
      newContent: true,
      actions: [
        { label: '📖 Browse Courses', type: 'primary' },
        { label: '📄 Materials', type: 'secondary' }
      ],
      bgColor: '#f0f9ff'
    },
    {
      icon: '📊',
      title: 'Academic Performance',
      content: 'Your current GPA is 9.51/10. You\'re performing excellently and in the top 5% of your class.',
      actions: [
        { label: '📈 View Details', type: 'primary' },
        { label: '📋 Transcript', type: 'secondary' }
      ],
      bgColor: '#f0fdf4'
    },
    {
      icon: '⏰',
      title: 'Today\'s Schedule',
      content: 'Your next class is Advanced Database Systems in 1 hour 30 minutes at CS Building Room 304.',
      urgent: true,
      actions: [
        { label: '🗓️ Full Schedule', type: 'primary' },
        { label: '🔔 Set Reminder', type: 'secondary' }
      ],
      bgColor: '#fffbeb'
    },
    {
      icon: '📢',
      title: 'Recent Announcements',
      content: '4 new announcements from your instructors. 2 require immediate attention and response.',
      urgent: true,
      actions: [
        { label: '📨 Read All', type: 'primary' },
        { label: '🔕 Manage', type: 'secondary' }
      ],
      bgColor: '#faf5ff'
    },
    {
      icon: '💡',
      title: 'Learning Resources',
      content: '8 new study resources available. 5 are specifically recommended for your current courses.',
      newContent: true,
      actions: [
        { label: '📚 Explore', type: 'primary' },
        { label: '⭐ Favorites', type: 'secondary' }
      ],
      bgColor: '#ecfdf5'
    }
  ];

  const quickStatsData = [
    { value: '9.51', label: 'Current GPA' },
    { value: '116', label: 'Credits Earned' },
    { value: '5', label: 'Active Courses' },
    { value: '3', label: 'Due This Week' }
  ];

  const recentActivities = [
    {
      icon: '✅',
      title: 'Assignment submitted: React.js Project',
      time: '2 hours ago',
      bgColor: '#dcfce7'
    },
    {
      icon: '📚',
      title: 'New material uploaded in Database Systems',
      time: '4 hours ago',
      bgColor: '#dbeafe'
    },
    {
      icon: '📊',
      title: 'Grade published for Data Structures Quiz',
      time: '1 day ago',
      bgColor: '#f3e8ff'
    },
    {
      icon: '🔔',
      title: 'Reminder: CS301 assignment due tomorrow',
      time: '1 day ago',
      bgColor: '#fef3c7'
    }
  ];

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.welcomeSection}>
        <div style={styles.welcomeBackground}></div>
        <div style={styles.welcomeHeader}>
          <h1 style={styles.welcomeTitle}>Welcome back, Sandip! 👋</h1>
          <p style={styles.welcomeSubtitle}>
            Ready to tackle another productive day? You have a great semester ahead with excellent academic performance.
            Current time: {formatTime(currentTime)}
          </p>
        </div>
        
        <div style={styles.quickStats}>
          {quickStatsData.map((stat, index) => (
            <div 
              key={index}
              style={{
                ...styles.statCard,
                ':hover': { transform: 'scale(1.05)' }
              }}
            >
              <p style={styles.statValue}>{stat.value}</p>
              <p style={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>Dashboard Overview</h2>
        <button style={styles.viewAllButton}>
          📊 Analytics Dashboard →
        </button>
      </div>

      <div style={styles.dashboardGrid}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              ...styles.dashboardCard,
              ...(hoveredCard === index ? styles.cardHover : {}),
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div 
              style={{
                ...styles.cardBackground,
                backgroundColor: card.bgColor
              }}
            ></div>
            
            {card.urgent && <div style={styles.urgentBadge}>Urgent</div>}
            {card.newContent && <div style={styles.newBadge}>New</div>}
            
            <div style={styles.cardHeader}>
              <div style={styles.cardIcon}>{card.icon}</div>
              <h3 style={styles.cardTitle}>{card.title}</h3>
            </div>
            
            <p style={styles.cardContent}>{card.content}</p>
            
            <div style={styles.cardAction}>
              {card.actions.map((action, actionIndex) => (
                <button
                  key={actionIndex}
                  style={action.type === 'primary' ? styles.primaryAction : styles.secondaryAction}
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={styles.recentActivity}>
        <div style={styles.sectionHeader}>
          <h3 style={styles.sectionTitle}>Recent Activity</h3>
          <button style={{...styles.viewAllButton, fontSize: '13px', padding: '8px 16px'}}>
            View All →
          </button>
        </div>
        
        <ul style={styles.activityList}>
          {recentActivities.map((activity, index) => (
            <li key={index} style={styles.activityItem}>
              <div 
                style={{
                  ...styles.activityIcon,
                  backgroundColor: activity.bgColor
                }}
              >
                {activity.icon}
              </div>
              <div style={styles.activityContent}>
                <p style={styles.activityTitle}>{activity.title}</p>
                <p style={styles.activityTime}>{activity.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
