import React, { useState } from 'react';

const styles = {
  container: {
       margin: 0,
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
  filterButton: {
    backgroundColor: 'white',
    color: '#475569',
    border: '2px solid #e2e8f0',
    padding: '12px 20px',
    borderRadius: '12px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  addButton: {
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '12px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
  },
  statsCards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginBottom: '32px',
  },
  statCard: {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e2e8f0',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  statValue: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#0f172a',
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
  tableContainer: {
    backgroundColor: 'white',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e2e8f0',
  },
  tableHeader: {
    background: 'linear-gradient(135deg, #0f172a, #1e293b)',
    padding: '24px 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tableTitle: {
    color: 'white',
    fontSize: '20px',
    fontWeight: '700',
    margin: 0,
  },
  searchBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '10px',
    padding: '8px 16px',
    color: 'white',
    fontSize: '14px',
    width: '250px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    margin: 0,
  },
  th: {
    backgroundColor: '#f8fafc',
    color: '#475569',
    padding: '20px 24px',
    textAlign: 'left',
    fontWeight: '700',
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    borderBottom: '2px solid #e2e8f0',
  },
  td: {
    padding: '20px 24px',
    textAlign: 'left',
    fontSize: '15px',
    borderBottom: '1px solid #f1f5f9',
    transition: 'all 0.3s ease',
  },
  evenRow: {
    backgroundColor: '#fafbfc',
  },
  hoverRow: {
    backgroundColor: '#f1f5f9',
    transform: 'scale(1.002)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  },
  courseInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  courseCode: {
    fontWeight: '700',
    color: '#3b82f6',
    fontSize: '16px',
  },
  courseName: {
    color: '#334155',
    fontWeight: '600',
    fontSize: '15px',
  },
  courseDescription: {
    color: '#64748b',
    fontSize: '13px',
    fontStyle: 'italic',
  },
  instructorInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  instructorAvatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: '12px',
  },
  instructorName: {
    fontWeight: '600',
    color: '#334155',
  },
  creditsInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
  },
  creditsValue: {
    fontSize: '20px',
    fontWeight: '800',
    color: '#0f172a',
  },
  creditsLabel: {
    fontSize: '12px',
    color: '#64748b',
    fontWeight: '600',
  },
  actionButtons: {
    display: 'flex',
    gap: '8px',
  },
  primaryButton: {
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    padding: '10px 16px',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '13px',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  secondaryButton: {
    backgroundColor: '#f1f5f9',
    color: '#475569',
    border: '1px solid #e2e8f0',
    padding: '10px 16px',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '13px',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  statusBadge: {
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
  },
  statusActive: {
    backgroundColor: '#dcfce7',
    color: '#166534',
    border: '1px solid #bbf7d0',
  },
  statusCompleted: {
    backgroundColor: '#dbeafe',
    color: '#1d4ed8',
    border: '1px solid #bfdbfe',
  },
  statusUpcoming: {
    backgroundColor: '#fef3c7',
    color: '#d97706',
    border: '1px solid #fde68a',
  },
  progressBar: {
    width: '100%',
    height: '8px',
    backgroundColor: '#f1f5f9',
    borderRadius: '4px',
    overflow: 'hidden',
    marginTop: '8px',
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
    transition: 'width 0.5s ease',
  },
};

const Courses = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const courses = [
    { 
      id: 1, 
      name: 'Introduction to Computer Science', 
      code: 'CS101', 
      status: 'Active',
      instructor: 'Dr. Sarah Johnson',
      credits: 4,
      progress: 75,
      description: 'Fundamental concepts of programming and computer science'
    },
    { 
      id: 2, 
      name: 'Data Structures and Algorithms', 
      code: 'CS102', 
      status: 'Active',
      instructor: 'Prof. Michael Chen',
      credits: 4,
      progress: 60,
      description: 'Advanced data structures and algorithmic problem solving'
    },
    { 
      id: 3, 
      name: 'Web Development Fundamentals', 
      code: 'CS201', 
      status: 'Active',
      instructor: 'Dr. Emily Rodriguez',
      credits: 3,
      progress: 90,
      description: 'Modern web development with HTML, CSS, and JavaScript'
    },
    { 
      id: 4, 
      name: 'Database Management Systems', 
      code: 'CS202', 
      status: 'Upcoming',
      instructor: 'Prof. James Wilson',
      credits: 3,
      progress: 0,
      description: 'Relational databases, SQL, and database design principles'
    },
    { 
      id: 5, 
      name: 'Operating Systems', 
      code: 'CS301', 
      status: 'Completed',
      instructor: 'Dr. Robert Kim',
      credits: 4,
      progress: 100,
      description: 'System programming, processes, memory, and file systems'
    },
  ];

  const getStatusStyle = (status) => {
    switch(status.toLowerCase()) {
      case 'active': return styles.statusActive;
      case 'completed': return styles.statusCompleted;
      case 'upcoming': return styles.statusUpcoming;
      default: return styles.statusActive;
    }
  };

  const getStatusIcon = (status) => {
    switch(status.toLowerCase()) {
      case 'active': return '🟢';
      case 'completed': return '✅';
      case 'upcoming': return '🕐';
      default: return '🟢';
    }
  };

  const getInitials = (name) => {
    return name.split(' ').map(word => word[0]).join('');
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || course.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: courses.length,
    active: courses.filter(c => c.status === 'Active').length,
    completed: courses.filter(c => c.status === 'Completed').length,
    credits: courses.reduce((sum, c) => sum + c.credits, 0)
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <h1 style={styles.title}>My Courses</h1>
          <p style={styles.subtitle}>Manage your academic journey</p>
          <div style={styles.headerUnderline}></div>
        </div>
        <div style={styles.headerRight}>
          <select 
            style={styles.filterButton}
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Courses</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            <option value="upcoming">Upcoming</option>
          </select>
          <button style={styles.addButton}>
            ➕ Add Course
          </button>
        </div>
      </div>

      <div style={styles.statsCards}>
        <div 
          style={{
            ...styles.statCard,
            borderLeft: '4px solid #3b82f6'
          }}
        >
          <p style={{...styles.statValue, color: '#3b82f6'}}>{stats.total}</p>
          <p style={styles.statLabel}>Total Courses</p>
        </div>
        <div 
          style={{
            ...styles.statCard,
            borderLeft: '4px solid #10b981'
          }}
        >
          <p style={{...styles.statValue, color: '#10b981'}}>{stats.active}</p>
          <p style={styles.statLabel}>Active Courses</p>
        </div>
        <div 
          style={{
            ...styles.statCard,
            borderLeft: '4px solid #8b5cf6'
          }}
        >
          <p style={{...styles.statValue, color: '#8b5cf6'}}>{stats.completed}</p>
          <p style={styles.statLabel}>Completed</p>
        </div>
        <div 
          style={{
            ...styles.statCard,
            borderLeft: '4px solid #f59e0b'
          }}
        >
          <p style={{...styles.statValue, color: '#f59e0b'}}>{stats.credits}</p>
          <p style={styles.statLabel}>Total Credits</p>
        </div>
      </div>

      <div style={styles.tableContainer}>
        <div style={styles.tableHeader}>
          <h3 style={styles.tableTitle}>Course Overview</h3>
          <input
            type="text"
            placeholder="Search courses..."
            style={styles.searchBox}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Course Information</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Instructor</th>
              <th style={styles.th}>Credits</th>
              <th style={styles.th}>Progress</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course, index) => (
              <tr
                key={course.id}
                style={{
                  ...(index % 2 === 0 ? styles.evenRow : {}),
                  ...(hoveredRow === index ? styles.hoverRow : {}),
                }}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <td style={styles.td}>
                  <div style={styles.courseInfo}>
                    <span style={styles.courseCode}>{course.code}</span>
                    <span style={styles.courseName}>{course.name}</span>
                    <span style={styles.courseDescription}>{course.description}</span>
                  </div>
                </td>
                <td style={styles.td}>
                  <span style={{...styles.statusBadge, ...getStatusStyle(course.status)}}>
                    {getStatusIcon(course.status)} {course.status}
                  </span>
                </td>
                <td style={styles.td}>
                  <div style={styles.instructorInfo}>
                    <div style={styles.instructorAvatar}>
                      {getInitials(course.instructor)}
                    </div>
                    <span style={styles.instructorName}>{course.instructor}</span>
                  </div>
                </td>
                <td style={styles.td}>
                  <div style={styles.creditsInfo}>
                    <span style={styles.creditsValue}>{course.credits}</span>
                    <span style={styles.creditsLabel}>Credits</span>
                  </div>
                </td>
                <td style={styles.td}>
                  <div>
                    <span style={{fontSize: '14px', fontWeight: '600', color: '#334155'}}>
                      {course.progress}%
                    </span>
                    <div style={styles.progressBar}>
                      <div 
                        style={{
                          ...styles.progressFill,
                          width: `${course.progress}%`
                        }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td style={styles.td}>
                  <div style={styles.actionButtons}>
                    <button
                      style={{
                        ...styles.primaryButton,
                        ...(hoveredButton === `view-${index}` ? {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                        } : {})
                      }}
                      onMouseEnter={() => setHoveredButton(`view-${index}`)}
                      onMouseLeave={() => setHoveredButton(null)}
                    >
                      👁️ View
                    </button>
                    <button
                      style={{
                        ...styles.secondaryButton,
                        ...(hoveredButton === `manage-${index}` ? {
                          backgroundColor: '#e2e8f0',
                          transform: 'translateY(-2px)'
                        } : {})
                      }}
                      onMouseEnter={() => setHoveredButton(`manage-${index}`)}
                      onMouseLeave={() => setHoveredButton(null)}
                    >
                      ⚙️ Manage
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Courses;
