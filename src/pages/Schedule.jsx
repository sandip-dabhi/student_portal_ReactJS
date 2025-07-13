import React from 'react';

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#f1f5f9',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    minHeight: '70vh',
    marginLeft: '25px', // Match sidebar width
  },
  header: {
    marginBottom: '2rem',
    color: '#0f172a',
    fontSize: '28px',
    fontWeight: '700',
    position: 'relative',
    paddingBottom: '15px',
  },
  headerUnderline: {
    content: '""',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '60px',
    height: '4px',
    background: 'linear-gradient(90deg, #3b82f6, #6366f1)',
    borderRadius: '2px',
  },
  scheduleGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  dayCard: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
  },
  dayCardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
  },
  dayHeader: {
    padding: '1.2rem',
    background: 'linear-gradient(135deg, #0f172a, #1e293b)',
    color: 'white',
    margin: 0,
    fontSize: '20px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  dayIcon: {
    fontSize: '20px',
  },
  classList: {
    listStyleType: 'none',
    padding: '0.5rem 1rem',
    margin: 0,
  },
  classItem: {
    padding: '1.2rem',
    margin: '0.8rem 0',
    borderRadius: '12px',
    backgroundColor: '#f8fafc',
    borderLeft: '4px solid #3b82f6',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
  },
  classItemHover: {
    transform: 'translateX(5px)',
    backgroundColor: '#f1f5f9',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  },
  classTime: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#3b82f6',
    margin: '0 0 5px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  className: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#0f172a',
    margin: '0 0 3px 0',
  },
  classLocation: {
    fontSize: '14px',
    color: '#64748b',
    margin: '0',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  classInstructor: {
    fontSize: '14px',
    color: '#64748b',
    margin: '5px 0 0 0',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  emptyDay: {
    textAlign: 'center',
    padding: '2rem',
    color: '#94a3b8',
    fontStyle: 'italic',
  },
  currentClassIndicator: {
    position: 'absolute',
    top: '0',
    right: '0',
    backgroundColor: '#22c55e',
    color: 'white',
    fontSize: '12px',
    fontWeight: '600',
    padding: '4px 10px',
    borderBottomLeftRadius: '8px',
  },
};

const Schedule = () => {
  const [hoveredCard, setHoveredCard] = React.useState(null);
  const [hoveredClass, setHoveredClass] = React.useState(null);

  const schedule = [
    {
      day: 'Monday',
      icon: '📅',
      classes: [
        { 
          time: '9:00 AM - 10:30 AM', 
          name: 'Introduction to Computer Science', 
          location: 'Science Building, Room 304',
          instructor: 'Dr. Sarah Johnson',
          current: false
        },
        { 
          time: '11:00 AM - 12:30 PM', 
          name: 'Data Structures and Algorithms', 
          location: 'Engineering Hall, Room 205',
          instructor: 'Prof. Michael Chen',
          current: true
        },
      ],
    },
    {
      day: 'Tuesday',
      icon: '📚',
      classes: [
        { 
          time: '10:00 AM - 11:30 AM', 
          name: 'Web Development Fundamentals', 
          location: 'Computer Lab, Room 101',
          instructor: 'Dr. Emily Rodriguez',
          current: false
        },
        { 
          time: '1:00 PM - 2:30 PM', 
          name: 'Database Management Systems', 
          location: 'Library Building, Room 412',
          instructor: 'Prof. James Wilson',
          current: false
        },
      ],
    },
    {
      day: 'Wednesday',
      icon: '🧪',
      classes: [
        { 
          time: '9:00 AM - 10:30 AM', 
          name: 'Operating Systems', 
          location: 'Engineering Hall, Room 310',
          instructor: 'Dr. Robert Kim',
          current: false
        },
        { 
          time: '11:00 AM - 12:30 PM', 
          name: 'Data Structures and Algorithms', 
          location: 'Science Building, Room 202',
          instructor: 'Prof. Michael Chen',
          current: false
        },
      ],
    },
    {
      day: 'Thursday',
      icon: '💻',
      classes: [
        { 
          time: '10:00 AM - 11:30 AM', 
          name: 'Introduction to Computer Science', 
          location: 'Science Building, Room 304',
          instructor: 'Dr. Sarah Johnson',
          current: false
        },
        { 
          time: '1:00 PM - 2:30 PM', 
          name: 'Web Development Fundamentals', 
          location: 'Computer Lab, Room 101',
          instructor: 'Dr. Emily Rodriguez',
          current: false
        },
      ],
    },
    {
      day: 'Friday',
      icon: '🎯',
      classes: [
        { 
          time: '9:00 AM - 10:30 AM', 
          name: 'Database Management Systems', 
          location: 'Library Building, Room 412',
          instructor: 'Prof. James Wilson',
          current: false
        },
        { 
          time: '11:00 AM - 12:30 PM', 
          name: 'Operating Systems', 
          location: 'Engineering Hall, Room 310',
          instructor: 'Dr. Robert Kim',
          current: false
        },
      ],
    },
    {
      day: 'Saturday',
      icon: '🌤️',
      classes: [],
    },
    {
      day: 'Sunday',
      icon: '🛌',
      classes: [],
    },
  ];

  const getDayIcon = (day) => {
    const icons = {
      Monday: '📅',
      Tuesday: '📚',
      Wednesday: '🧪',
      Thursday: '💻',
      Friday: '🎯',
      Saturday: '🌤️',
      Sunday: '🛌'
    };
    return icons[day] || '📅';
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>
        Weekly Schedule
        <span style={styles.headerUnderline}></span>
      </h2>
      
      <div style={styles.scheduleGrid}>
        {schedule.map((daySchedule, index) => (
          <div 
            key={index}
            style={{
              ...styles.dayCard,
              ...(hoveredCard === index ? styles.dayCardHover : {})
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3 style={styles.dayHeader}>
              <span style={styles.dayIcon}>{getDayIcon(daySchedule.day)}</span>
              {daySchedule.day}
            </h3>
            
            {daySchedule.classes.length > 0 ? (
              <ul style={styles.classList}>
                {daySchedule.classes.map((classItem, idx) => (
                  <li 
                    key={idx}
                    style={{
                      ...styles.classItem,
                      ...(hoveredClass === `${index}-${idx}` ? styles.classItemHover : {})
                    }}
                    onMouseEnter={() => setHoveredClass(`${index}-${idx}`)}
                    onMouseLeave={() => setHoveredClass(null)}
                  >
                    {classItem.current && (
                      <div style={styles.currentClassIndicator}>NOW</div>
                    )}
                    <p style={styles.classTime}>
                      <span>⏱️</span> {classItem.time}
                    </p>
                    <h4 style={styles.className}>{classItem.name}</h4>
                    <p style={styles.classLocation}>
                      <span>📍</span> {classItem.location}
                    </p>
                    <p style={styles.classInstructor}>
                      <span>👤</span> {classItem.instructor}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <div style={styles.emptyDay}>
                <p>No classes scheduled</p>
                <p>Enjoy your day off!</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;