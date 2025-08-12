import React, { useState, useEffect } from 'react';

const styles = {
  container: {
    padding: '32px',
    backgroundColor: '#f8fafc',
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
  },
  header: {
    marginBottom: '32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    position: 'relative',
  },
  title: {
    color: '#0f172a',
    fontSize: '32px',
    fontWeight: '800',
    margin: 0,
    letterSpacing: '0.5px',
  },
  subtitle: {
    color: '#64748b',
    fontSize: '16px',
    margin: '8px 0 0 0',
    fontWeight: '500',
  },
  headerUnderline: {
    position: 'absolute',
    bottom: '-8px',
    left: '0',
    width: '80px',
    height: '4px',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    borderRadius: '2px',
  },
  headerRight: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
  },
  currentTimeDisplay: {
    backgroundColor: 'white',
    padding: '16px 24px',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e2e8f0',
    textAlign: 'center',
  },
  currentTime: {
    fontSize: '24px',
    fontWeight: '800',
    color: '#0f172a',
    margin: 0,
  },
  currentDate: {
    fontSize: '14px',
    color: '#64748b',
    margin: '4px 0 0 0',
    fontWeight: '600',
  },
  viewToggle: {
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '4px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e2e8f0',
  },
  toggleButton: {
    padding: '8px 16px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px',
    transition: 'all 0.3s ease',
    color: '#64748b',
  },
  toggleButtonActive: {
    backgroundColor: '#3b82f6',
    color: 'white',
    boxShadow: '0 2px 4px rgba(59, 130, 246, 0.3)',
  },
  quickStats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginBottom: '32px',
  },
  statCard: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e2e8f0',
    transition: 'transform 0.3s ease',
  },
  statValue: {
    fontSize: '28px',
    fontWeight: '800',
    margin: 0,
  },
  statLabel: {
    fontSize: '14px',
    color: '#64748b',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    margin: '8px 0 0 0',
  },
  scheduleGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
    gap: '24px',
  },
  dayCard: {
    backgroundColor: 'white',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e2e8f0',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
  },
  dayCardHover: {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
  },
  dayCardToday: {
    border: '2px solid #3b82f6',
    boxShadow: '0 10px 30px rgba(59, 130, 246, 0.15)',
  },
  dayHeader: {
    padding: '24px 32px',
    background: 'linear-gradient(135deg, #0f172a, #1e293b)',
    color: 'white',
    margin: 0,
    fontSize: '20px',
    fontWeight: '700',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  dayHeaderToday: {
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
  },
  dayHeaderBackground: {
    position: 'absolute',
    top: '0',
    right: '0',
    width: '80px',
    height: '80px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    transform: 'translate(25%, -25%)',
  },
  dayInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    zIndex: 2,
    position: 'relative',
  },
  dayIcon: {
    fontSize: '24px',
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))',
  },
  classCount: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '13px',
    fontWeight: '600',
    zIndex: 2,
    position: 'relative',
  },
  classList: {
    listStyleType: 'none',
    padding: '24px',
    margin: 0,
    maxHeight: '400px',
    overflowY: 'auto',
  },
  classItem: {
    padding: '20px',
    margin: '0 0 16px 0',
    borderRadius: '16px',
    backgroundColor: '#f8fafc',
    border: '2px solid transparent',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
  },
  classItemHover: {
    transform: 'translateY(-2px)',
    backgroundColor: 'white',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
    border: '2px solid #e0f2fe',
  },
  classItemCurrent: {
    background: 'linear-gradient(135deg, #dcfce7, #bbf7d0)',
    border: '2px solid #22c55e',
    animation: 'pulse 2s infinite',
  },
  classItemNext: {
    background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
    border: '2px solid #f59e0b',
  },
  classTime: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#3b82f6',
    margin: '0 0 8px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  className: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#0f172a',
    margin: '0 0 8px 0',
    letterSpacing: '0.3px',
  },
  classDetails: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    marginTop: '12px',
  },
  classLocation: {
    fontSize: '14px',
    color: '#64748b',
    margin: '0',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: '500',
  },
  classInstructor: {
    fontSize: '14px',
    color: '#64748b',
    margin: '0',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: '500',
  },
  statusBadge: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    fontSize: '12px',
    fontWeight: '700',
    padding: '6px 12px',
    borderRadius: '20px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  currentBadge: {
    backgroundColor: '#22c55e',
    color: 'white',
  },
  nextBadge: {
    backgroundColor: '#f59e0b',
    color: 'white',
  },
  upcomingBadge: {
    backgroundColor: '#3b82f6',
    color: 'white',
  },
  emptyDay: {
    textAlign: 'center',
    padding: '60px 32px',
    color: '#94a3b8',
    background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)',
  },
  emptyIcon: {
    fontSize: '48px',
    marginBottom: '16px',
    opacity: 0.7,
  },
  emptyTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#64748b',
    margin: '0 0 8px 0',
  },
  emptySubtitle: {
    fontSize: '15px',
    color: '#94a3b8',
    margin: '0',
    fontStyle: 'italic',
  },
  timelineView: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '32px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e2e8f0',
  },
  timelineHeader: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: '24px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  timelineList: {
    position: 'relative',
    paddingLeft: '32px',
  },
  timelineLine: {
    position: 'absolute',
    left: '16px',
    top: '0',
    bottom: '0',
    width: '2px',
    background: 'linear-gradient(180deg, #3b82f6, #8b5cf6)',
  },
  timelineItem: {
    position: 'relative',
    marginBottom: '24px',
    paddingLeft: '24px',
  },
  timelineMarker: {
    position: 'absolute',
    left: '-40px',
    top: '8px',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: '#3b82f6',
    border: '3px solid white',
    boxShadow: '0 0 0 3px #3b82f6',
  },
  timelineMarkerCurrent: {
    backgroundColor: '#22c55e',
    boxShadow: '0 0 0 3px #22c55e',
    animation: 'pulse 2s infinite',
  },
};

const Schedule = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredClass, setHoveredClass] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[currentTime.getDay()];
  };

  const schedule = [
    {
      day: 'Monday',
      icon: '📅',
      classes: [
        { 
          time: '9:00 AM - 10:30 AM', 
          name: 'Advanced Database Systems', 
          location: 'Science Building, Room 304',
          instructor: 'Dr. Sarah Johnson',
          status: 'upcoming'
        },
        { 
          time: '11:00 AM - 12:30 PM', 
          name: 'Machine Learning Fundamentals', 
          location: 'Engineering Hall, Room 205',
          instructor: 'Prof. Michael Chen',
          status: 'current'
        },
        { 
          time: '2:00 PM - 3:30 PM', 
          name: 'Software Engineering Principles', 
          location: 'Computer Lab, Room 101',
          instructor: 'Dr. Emily Rodriguez',
          status: 'upcoming'
        },
      ],
    },
    {
      day: 'Tuesday',
      icon: '📚',
      classes: [
        { 
          time: '10:00 AM - 11:30 AM', 
          name: 'Web Development Frameworks', 
          location: 'Computer Lab, Room 101',
          instructor: 'Dr. Emily Rodriguez',
          status: 'upcoming'
        },
        { 
          time: '1:00 PM - 2:30 PM', 
          name: 'Computer Networks Security', 
          location: 'Library Building, Room 412',
          instructor: 'Prof. James Wilson',
          status: 'upcoming'
        },
      ],
    },
    {
      day: 'Wednesday',
      icon: '🧪',
      classes: [
        { 
          time: '9:00 AM - 10:30 AM', 
          name: 'Advanced Database Systems', 
          location: 'Engineering Hall, Room 310',
          instructor: 'Dr. Sarah Johnson',
          status: 'upcoming'
        },
        { 
          time: '11:00 AM - 12:30 PM', 
          name: 'Machine Learning Fundamentals', 
          location: 'Science Building, Room 202',
          instructor: 'Prof. Michael Chen',
          status: 'upcoming'
        },
        { 
          time: '3:00 PM - 4:30 PM', 
          name: 'Research Methodology', 
          location: 'Library Building, Room 301',
          instructor: 'Dr. Robert Kim',
          status: 'upcoming'
        },
      ],
    },
    {
      day: 'Thursday',
      icon: '💻',
      classes: [
        { 
          time: '10:00 AM - 11:30 AM', 
          name: 'Web Development Frameworks', 
          location: 'Computer Lab, Room 101',
          instructor: 'Dr. Emily Rodriguez',
          status: 'upcoming'
        },
        { 
          time: '1:00 PM - 2:30 PM', 
          name: 'Software Engineering Principles', 
          location: 'Engineering Hall, Room 205',
          instructor: 'Dr. Emily Rodriguez',
          status: 'upcoming'
        },
      ],
    },
    {
      day: 'Friday',
      icon: '🎯',
      classes: [
        { 
          time: '9:00 AM - 10:30 AM', 
          name: 'Computer Networks Security', 
          location: 'Library Building, Room 412',
          instructor: 'Prof. James Wilson',
          status: 'upcoming'
        },
        { 
          time: '11:00 AM - 12:30 PM', 
          name: 'Advanced Database Systems', 
          location: 'Engineering Hall, Room 310',
          instructor: 'Dr. Sarah Johnson',
          status: 'upcoming'
        },
        { 
          time: '2:00 PM - 3:30 PM', 
          name: 'Capstone Project', 
          location: 'Research Lab, Room 405',
          instructor: 'Dr. Michael Park',
          status: 'upcoming'
        },
      ],
    },
    {
      day: 'Saturday',
      icon: '🌤️',
      classes: [
        { 
          time: '10:00 AM - 12:00 PM', 
          name: 'Study Group Session', 
          location: 'Library Study Room 203',
          instructor: 'Self-organized',
          status: 'upcoming'
        },
      ],
    },
    {
      day: 'Sunday',
      icon: '🛌',
      classes: [],
    },
  ];

  const getStatusStyle = (status) => {
    switch(status) {
      case 'current': return { ...styles.statusBadge, ...styles.currentBadge };
      case 'next': return { ...styles.statusBadge, ...styles.nextBadge };
      default: return { ...styles.statusBadge, ...styles.upcomingBadge };
    }
  };

  const getClassItemStyle = (status) => {
    switch(status) {
      case 'current': return styles.classItemCurrent;
      case 'next': return styles.classItemNext;
      default: return {};
    }
  };

  // Calculate stats
  const totalClasses = schedule.reduce((sum, day) => sum + day.classes.length, 0);
  const todayClasses = schedule.find(day => day.day === getCurrentDay())?.classes.length || 0;
  const currentClasses = schedule.reduce((sum, day) => sum + day.classes.filter(c => c.status === 'current').length, 0);

  // Get today's timeline
  const todaySchedule = schedule.find(day => day.day === getCurrentDay());

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <h1 style={styles.title}>Class Schedule</h1>
          <p style={styles.subtitle}>Plan your week and stay organized</p>
          <div style={styles.headerUnderline}></div>
        </div>
        <div style={styles.headerRight}>
          <div style={styles.currentTimeDisplay}>
            <div style={styles.currentTime}>{formatTime(currentTime)}</div>
            <div style={styles.currentDate}>{getCurrentDay()}</div>
          </div>
          <div style={styles.viewToggle}>
            <button
              style={{
                ...styles.toggleButton,
                ...(viewMode === 'grid' ? styles.toggleButtonActive : {})
              }}
              onClick={() => setViewMode('grid')}
            >
              📅 Week View
            </button>
            <button
              style={{
                ...styles.toggleButton,
                ...(viewMode === 'timeline' ? styles.toggleButtonActive : {})
              }}
              onClick={() => setViewMode('timeline')}
            >
              📋 Today
            </button>
          </div>
        </div>
      </div>

      <div style={styles.quickStats}>
        <div style={{...styles.statCard, borderLeft: '4px solid #3b82f6'}}>
          <div style={{...styles.statValue, color: '#3b82f6'}}>{totalClasses}</div>
          <div style={styles.statLabel}>Total Classes</div>
        </div>
        <div style={{...styles.statCard, borderLeft: '4px solid #10b981'}}>
          <div style={{...styles.statValue, color: '#10b981'}}>{todayClasses}</div>
          <div style={styles.statLabel}>Today's Classes</div>
        </div>
        <div style={{...styles.statCard, borderLeft: '4px solid #f59e0b'}}>
          <div style={{...styles.statValue, color: '#f59e0b'}}>{currentClasses}</div>
          <div style={styles.statLabel}>In Progress</div>
        </div>
        <div style={{...styles.statCard, borderLeft: '4px solid #8b5cf6'}}>
          <div style={{...styles.statValue, color: '#8b5cf6'}}>5</div>
          <div style={styles.statLabel}>Days Active</div>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div style={styles.scheduleGrid}>
          {schedule.map((daySchedule, index) => {
            const isToday = daySchedule.day === getCurrentDay();
            
            return (
              <div 
                key={index}
                style={{
                  ...styles.dayCard,
                  ...(hoveredCard === index ? styles.dayCardHover : {}),
                  ...(isToday ? styles.dayCardToday : {})
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <h3 style={{
                  ...styles.dayHeader,
                  ...(isToday ? styles.dayHeaderToday : {})
                }}>
                  <div style={styles.dayHeaderBackground}></div>
                  <div style={styles.dayInfo}>
                    <span style={styles.dayIcon}>{daySchedule.icon}</span>
                    {daySchedule.day}
                    {isToday && <span style={{marginLeft: '8px', fontSize: '14px'}}>• Today</span>}
                  </div>
                  <div style={styles.classCount}>
                    {daySchedule.classes.length} {daySchedule.classes.length === 1 ? 'class' : 'classes'}
                  </div>
                </h3>
                
                {daySchedule.classes.length > 0 ? (
                  <ul style={styles.classList}>
                    {daySchedule.classes.map((classItem, idx) => (
                      <li 
                        key={idx}
                        style={{
                          ...styles.classItem,
                          ...getClassItemStyle(classItem.status),
                          ...(hoveredClass === `${index}-${idx}` ? styles.classItemHover : {})
                        }}
                        onMouseEnter={() => setHoveredClass(`${index}-${idx}`)}
                        onMouseLeave={() => setHoveredClass(null)}
                      >
                        <div style={getStatusStyle(classItem.status)}>
                          {classItem.status === 'current' ? 'Live Now' : 
                           classItem.status === 'next' ? 'Next' : 'Upcoming'}
                        </div>
                        
                        <p style={styles.classTime}>
                          <span>⏰</span> {classItem.time}
                        </p>
                        <h4 style={styles.className}>{classItem.name}</h4>
                        
                        <div style={styles.classDetails}>
                          <p style={styles.classLocation}>
                            <span>📍</span> {classItem.location}
                          </p>
                          <p style={styles.classInstructor}>
                            <span>👨‍🏫</span> {classItem.instructor}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div style={styles.emptyDay}>
                    <div style={styles.emptyIcon}>🎉</div>
                    <h4 style={styles.emptyTitle}>Free Day!</h4>
                    <p style={styles.emptySubtitle}>No classes scheduled - perfect for studying or relaxing</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div style={styles.timelineView}>
          <h3 style={styles.timelineHeader}>
            🗓️ {getCurrentDay()}'s Schedule - {formatDate(currentTime)}
          </h3>
          
          {todaySchedule && todaySchedule.classes.length > 0 ? (
            <div style={styles.timelineList}>
              <div style={styles.timelineLine}></div>
              {todaySchedule.classes.map((classItem, index) => (
                <div key={index} style={styles.timelineItem}>
                  <div style={{
                    ...styles.timelineMarker,
                    ...(classItem.status === 'current' ? styles.timelineMarkerCurrent : {})
                  }}></div>
                  
                  <div style={{
                    ...styles.classItem,
                    ...getClassItemStyle(classItem.status),
                    margin: '0 0 20px 0'
                  }}>
                    <div style={getStatusStyle(classItem.status)}>
                      {classItem.status === 'current' ? 'Live Now' : 
                       classItem.status === 'next' ? 'Next' : 'Upcoming'}
                    </div>
                    
                    <p style={styles.classTime}>
                      <span>⏰</span> {classItem.time}
                    </p>
                    <h4 style={styles.className}>{classItem.name}</h4>
                    
                    <div style={styles.classDetails}>
                      <p style={styles.classLocation}>
                        <span>📍</span> {classItem.location}
                      </p>
                      <p style={styles.classInstructor}>
                        <span>👨‍🏫</span> {classItem.instructor}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={styles.emptyDay}>
              <div style={styles.emptyIcon}>🎉</div>
              <h4 style={styles.emptyTitle}>Free Day Today!</h4>
              <p style={styles.emptySubtitle}>No classes scheduled - perfect for studying or relaxing</p>
            </div>
          )}
        </div>
      )}

      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
        `}
      </style>
    </div>
  );
};

export default Schedule;
