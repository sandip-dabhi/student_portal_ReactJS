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
  courseName: {
    color: '#334155',
    fontWeight: '500',
  },
  gradeBadge: {
    display: 'inline-block',
    padding: '6px 14px',
    borderRadius: '20px',
    fontWeight: '600',
    fontSize: '14px',
    minWidth: '50px',
    textAlign: 'center',
  },
  gradeA: {
    backgroundColor: '#dcfce7',
    color: '#166534',
  },
  gradeB: {
    backgroundColor: '#dbeafe',
    color: '#1e40af',
  },
  gradeC: {
    backgroundColor: '#fef3c7',
    color: '#854d0e',
  },
  gradeD: {
    backgroundColor: '#fee2e2',
    color: '#991b1b',
  },
  progressContainer: {
    width: '100%',
    height: '8px',
    backgroundColor: '#e2e8f0',
    borderRadius: '4px',
    overflow: 'hidden',
    marginTop: '8px',
  },
  progressBar: {
    height: '100%',
    borderRadius: '4px',
    transition: 'width 0.5s ease',
  },
  progressA: { backgroundColor: '#22c55e', width: '95%' },
  progressB: { backgroundColor: '#3b82f6', width: '85%' },
  progressC: { backgroundColor: '#f59e0b', width: '75%' },
  progressD: { backgroundColor: '#ef4444', width: '65%' },
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
  gpaSummary: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '20px',
    marginBottom: '25px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.04)',
    border: '1px solid #e2e8f0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gpaValue: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#0f172a',
    background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  gpaLabel: {
    fontSize: '16px',
    color: '#64748b',
    fontWeight: '600',
  },
  gpaTrend: {
    fontSize: '16px',
    color: '#22c55e',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
};

const Grades = () => {
  const grades = [
    { 
      id: 1, 
      course: 'Introduction to Computer Science', 
      code: 'CS101',
      grade: 'A',
      credits: 4,
      progress: 'progressA'
    },
    { 
      id: 2, 
      course: 'Data Structures and Algorithms', 
      code: 'CS102',
      grade: 'B+',
      credits: 4,
      progress: 'progressB'
    },
    { 
      id: 3, 
      course: 'Web Development Fundamentals', 
      code: 'CS201',
      grade: 'A-',
      credits: 3,
      progress: 'progressA'
    },
    { 
      id: 4, 
      course: 'Database Management Systems', 
      code: 'CS202',
      grade: 'B',
      credits: 3,
      progress: 'progressB'
    },
    { 
      id: 5, 
      course: 'Operating Systems', 
      code: 'CS301',
      grade: 'A',
      credits: 4,
      progress: 'progressA'
    },
    { 
      id: 6, 
      course: 'Computer Networks', 
      code: 'CS302',
      grade: 'B-',
      credits: 3,
      progress: 'progressC'
    },
    { 
      id: 7, 
      course: 'Software Engineering', 
      code: 'CS401',
      grade: 'A',
      credits: 4,
      progress: 'progressA'
    },
  ];

  const [hoveredRow, setHoveredRow] = React.useState(null);
  const [hoveredButton, setHoveredButton] = React.useState(null);

  const getGradeStyle = (grade) => {
    const firstChar = grade.charAt(0);
    switch(firstChar) {
      case 'A': return styles.gradeA;
      case 'B': return styles.gradeB;
      case 'C': return styles.gradeC;
      case 'D': 
      case 'F': return styles.gradeD;
      default: return styles.gradeB;
    }
  };

  const getProgressStyle = (progress) => {
    return styles[progress];
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>
        Academic Performance
        <span style={styles.headerUnderline}></span>
      </h2>
      
      <div style={styles.gpaSummary}>
        <div>
          <div style={styles.gpaLabel}>CUMULATIVE GPA</div>
          <div style={styles.gpaValue}>3.72 / 4.0</div>
        </div>
        <div>
          <div style={styles.gpaTrend}>
            <span>↑</span> Improved by 0.15 this semester
          </div>
        </div>
      </div>
      
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>
                Course Code
                <div style={styles.thBorder}></div>
              </th>
              <th style={styles.th}>
                Course
                <div style={styles.thBorder}></div>
              </th>
              <th style={styles.th}>
                Credits
                <div style={styles.thBorder}></div>
              </th>
              <th style={styles.th}>
                Grade
                <div style={styles.thBorder}></div>
              </th>
              <th style={styles.th}>
                Performance
                <div style={styles.thBorder}></div>
              </th>
              <th style={styles.th}>
                Actions
                <div style={styles.thBorder}></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade, index) => (
              <tr
                key={grade.id}
                style={{
                  ...(index % 2 === 0 ? styles.evenRow : {}),
                  ...(hoveredRow === index ? styles.hoverRow : {}),
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <td style={styles.td}>
                  <span style={{ fontWeight: '600', color: '#1e40af' }}>
                    {grade.code}
                  </span>
                </td>
                <td style={styles.td}>
                  <span style={styles.courseName}>{grade.course}</span>
                </td>
                <td style={styles.td}>
                  {grade.credits}
                </td>
                <td style={styles.td}>
                  <span style={{ ...styles.gradeBadge, ...getGradeStyle(grade.grade) }}>
                    {grade.grade}
                  </span>
                </td>
                <td style={styles.td}>
                  <div style={styles.progressContainer}>
                    <div style={{ ...styles.progressBar, ...getProgressStyle(grade.progress) }}></div>
                  </div>
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
                    Details
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

export default Grades;