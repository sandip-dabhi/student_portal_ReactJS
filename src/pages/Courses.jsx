import React from 'react';

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#f1f5f9',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    minHeight: '70vh',
    marginLeft: '25px', 
  },
  header: {
    marginBottom: '1.5rem',
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
  tableContainer: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e2e8f0',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    margin: 0,
  },
  th: {
    backgroundColor: '#0f172a',
    color: 'white',
    padding: '16px 20px',
    textAlign: 'left',
    fontWeight: '600',
    fontSize: '16px',
    position: 'relative',
  },
  thBorder: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '1px',
    background: 'linear-gradient(90deg, #3b82f6, #6366f1)',
  },
  td: {
    padding: '16px 20px',
    textAlign: 'left',
    fontSize: '15px',
    borderBottom: '1px solid #f1f5f9',
    position: 'relative',
  },
  evenRow: {
    backgroundColor: '#f8fafc',
  },
  hoverRow: {
    backgroundColor: '#f1f5f9',
    transform: 'scale(1.005)',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
  },
  courseCode: {
    fontWeight: '600',
    color: '#1e40af',
  },
  courseName: {
    color: '#334155',
  },
  actionButton: {
    backgroundColor: '#e0f2fe',
    color: '#0369c9',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
  },
  actionButtonHover: {
    backgroundColor: '#dbeafe',
    transform: 'translateY(-2px)',
    boxShadow: '0 2px 6px rgba(3, 105, 201, 0.2)',
  },
  statusBadge: {
    padding: '5px 12px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '500',
    display: 'inline-block',
  },
  statusActive: {
    backgroundColor: '#dcfce7',
    color: '#166534',
  },
  statusCompleted: {
    backgroundColor: '#fee2e2',
    color: '#991b1b',
  },
  statusUpcoming: {
    backgroundColor: '#fffbeb',
    color: '#854d0e',
  },
};

const Courses = () => {
  const courses = [
    { 
      id: 1, 
      name: 'Introduction to Computer Science', 
      code: 'CS101', 
      status: 'Active',
      instructor: 'Dr. Sarah Johnson',
      credits: 4
    },
    { 
      id: 2, 
      name: 'Data Structures and Algorithms', 
      code: 'CS102', 
      status: 'Active',
      instructor: 'Prof. Michael Chen',
      credits: 4
    },
    { 
      id: 3, 
      name: 'Web Development Fundamentals', 
      code: 'CS201', 
      status: 'Active',
      instructor: 'Dr. Emily Rodriguez',
      credits: 3
    },
    { 
      id: 4, 
      name: 'Database Management Systems', 
      code: 'CS202', 
      status: 'Upcoming',
      instructor: 'Prof. James Wilson',
      credits: 3
    },
    { 
      id: 5, 
      name: 'Operating Systems', 
      code: 'CS301', 
      status: 'Completed',
      instructor: 'Dr. Robert Kim',
      credits: 4
    },
  ];

  const [hoveredRow, setHoveredRow] = React.useState(null);
  const [hoveredButton, setHoveredButton] = React.useState(null);

  const getStatusStyle = (status) => {
    switch(status.toLowerCase()) {
      case 'active': return styles.statusActive;
      case 'completed': return styles.statusCompleted;
      case 'upcoming': return styles.statusUpcoming;
      default: return {};
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>
        My Courses
        <span style={styles.headerUnderline}></span>
      </h2>
      
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>
                Course Code
                <div style={styles.thBorder}></div>
              </th>
              <th style={styles.th}>
                Course Name
                <div style={styles.thBorder}></div>
              </th>
              <th style={styles.th}>
                Status
                <div style={styles.thBorder}></div>
              </th>
              <th style={styles.th}>
                Instructor
                <div style={styles.thBorder}></div>
              </th>
              <th style={styles.th}>
                Credits
                <div style={styles.thBorder}></div>
              </th>
              <th style={styles.th}>
                Actions
                <div style={styles.thBorder}></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr
                key={course.id}
                style={{
                  ...(index % 2 === 0 ? styles.evenRow : {}),
                  ...(hoveredRow === index ? styles.hoverRow : {}),
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <td style={styles.td}>
                  <span style={styles.courseCode}>{course.code}</span>
                </td>
                <td style={styles.td}>
                  <span style={styles.courseName}>{course.name}</span>
                </td>
                <td style={styles.td}>
                  <span style={{...styles.statusBadge, ...getStatusStyle(course.status)}}>
                    {course.status}
                  </span>
                </td>
                <td style={styles.td}>
                  {course.instructor}
                </td>
                <td style={styles.td}>
                  {course.credits}
                </td>
                <td style={styles.td}>
                  <button
                    style={{
                      ...styles.actionButton,
                      ...(hoveredButton === index ? styles.actionButtonHover : {})
                    }}
                    onMouseEnter={() => setHoveredButton(index)}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    View Details
                  </button>
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
