import React, { useState } from 'react';

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
  },
  exportButton: {
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
  summaryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
    marginBottom: '32px',
  },
  summaryCard: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '32px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e2e8f0',
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardBackground: {
    position: 'absolute',
    top: '0',
    right: '0',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    opacity: 0.1,
    transform: 'translate(30%, -30%)',
  },
  gpaCard: {
    background: 'linear-gradient(135deg, #0f172a, #1e293b)',
    color: 'white',
  },
  gpaValue: {
    fontSize: '48px',
    fontWeight: '900',
    margin: 0,
    background: 'linear-gradient(135deg, #60a5fa, #c084fc)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '1px',
  },
  gpaLabel: {
    fontSize: '16px',
    color: '#94a3b8',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    margin: '8px 0 0 0',
  },
  gpaTrend: {
    fontSize: '16px',
    color: '#22c55e',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '16px',
    padding: '8px 16px',
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    borderRadius: '12px',
    border: '1px solid rgba(34, 197, 94, 0.2)',
  },
  statValue: {
    fontSize: '32px',
    fontWeight: '800',
    color: '#0f172a',
    margin: 0,
    position: 'relative',
    zIndex: 2,
  },
  statLabel: {
    fontSize: '14px',
    color: '#64748b',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    margin: '8px 0 0 0',
    position: 'relative',
    zIndex: 2,
  },
  gradeDistribution: {
    display: 'flex',
    gap: '8px',
    marginTop: '16px',
    position: 'relative',
    zIndex: 2,
  },
  gradeBar: {
    flex: 1,
    height: '8px',
    borderRadius: '4px',
    position: 'relative',
  },
  gradeBarA: { backgroundColor: '#22c55e' },
  gradeBarB: { backgroundColor: '#3b82f6' },
  gradeBarC: { backgroundColor: '#f59e0b' },
  gradeBarD: { backgroundColor: '#ef4444' },
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
  semesterInfo: {
    color: '#64748b',
    fontSize: '13px',
    fontStyle: 'italic',
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
  gradeBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 20px',
    borderRadius: '16px',
    fontWeight: '700',
    fontSize: '16px',
    minWidth: '80px',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  gradeA: {
    backgroundColor: '#dcfce7',
    color: '#166534',
    border: '2px solid #bbf7d0',
  },
  gradeB: {
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    border: '2px solid #bfdbfe',
  },
  gradeC: {
    backgroundColor: '#fef3c7',
    color: '#d97706',
    border: '2px solid #fde68a',
  },
  gradeD: {
    backgroundColor: '#fee2e2',
    color: '#dc2626',
    border: '2px solid #fecaca',
  },
  performanceContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  performanceScore: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#334155',
  },
  progressContainer: {
    width: '100%',
    height: '12px',
    backgroundColor: '#e2e8f0',
    borderRadius: '6px',
    overflow: 'hidden',
    position: 'relative',
  },
  progressBar: {
    height: '100%',
    borderRadius: '6px',
    transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
  },
  progressA: { 
    background: 'linear-gradient(90deg, #22c55e, #16a34a)',
    width: '95%' 
  },
  progressB: { 
    background: 'linear-gradient(90deg, #3b82f6, #1d4ed8)',
    width: '85%' 
  },
  progressC: { 
    background: 'linear-gradient(90deg, #f59e0b, #d97706)',
    width: '75%' 
  },
  progressD: { 
    background: 'linear-gradient(90deg, #ef4444, #dc2626)',
    width: '65%' 
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
  achievementBadge: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    backgroundColor: '#fbbf24',
    color: '#92400e',
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '11px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
};

const Grades = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('all');

  const grades = [
    { 
      id: 1, 
      course: 'Introduction to Computer Science', 
      code: 'CS101',
      grade: 'A',
      credits: 4,
      progress: 'progressA',
      percentage: 95,
      semester: 'Fall 2023',
      isHonors: true
    },
    { 
      id: 2, 
      course: 'Data Structures and Algorithms', 
      code: 'CS102',
      grade: 'B+',
      credits: 4,
      progress: 'progressB',
      percentage: 87,
      semester: 'Fall 2023'
    },
    { 
      id: 3, 
      course: 'Web Development Fundamentals', 
      code: 'CS201',
      grade: 'A-',
      credits: 3,
      progress: 'progressA',
      percentage: 92,
      semester: 'Spring 2024'
    },
    { 
      id: 4, 
      course: 'Database Management Systems', 
      code: 'CS202',
      grade: 'B',
      credits: 3,
      progress: 'progressB',
      percentage: 84,
      semester: 'Spring 2024'
    },
    { 
      id: 5, 
      course: 'Operating Systems', 
      code: 'CS301',
      grade: 'A',
      credits: 4,
      progress: 'progressA',
      percentage: 96,
      semester: 'Fall 2024',
      isHonors: true
    },
    { 
      id: 6, 
      course: 'Computer Networks', 
      code: 'CS302',
      grade: 'B-',
      credits: 3,
      progress: 'progressC',
      percentage: 82,
      semester: 'Fall 2024'
    },
    { 
      id: 7, 
      course: 'Software Engineering', 
      code: 'CS401',
      grade: 'A',
      credits: 4,
      progress: 'progressA',
      percentage: 94,
      semester: 'Fall 2024'
    },
  ];

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

  const getGradeIcon = (grade) => {
    const firstChar = grade.charAt(0);
    switch(firstChar) {
      case 'A': return '🌟';
      case 'B': return '👍';
      case 'C': return '📈';
      case 'D': 
      case 'F': return '📚';
      default: return '👍';
    }
  };

  const getProgressStyle = (progress) => {
    return styles[progress];
  };

  const filteredGrades = grades.filter(grade => {
    const matchesSearch = grade.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         grade.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSemester = selectedSemester === 'all' || grade.semester === selectedSemester;
    return matchesSearch && matchesSemester;
  });

  // Calculate statistics
  const totalCredits = grades.reduce((sum, grade) => sum + grade.credits, 0);
  const completedCourses = grades.length;
  const honorsCount = grades.filter(g => g.isHonors).length;
  const averagePercentage = (grades.reduce((sum, grade) => sum + grade.percentage, 0) / grades.length).toFixed(1);

  // Grade distribution
  const gradeDistribution = {
    A: grades.filter(g => g.grade.startsWith('A')).length,
    B: grades.filter(g => g.grade.startsWith('B')).length,
    C: grades.filter(g => g.grade.startsWith('C')).length,
    D: grades.filter(g => g.grade.startsWith('D') || g.grade.startsWith('F')).length,
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <h1 style={styles.title}>Academic Performance</h1>
          <p style={styles.subtitle}>Track your grades and academic progress</p>
          <div style={styles.headerUnderline}></div>
        </div>
        <div style={styles.headerRight}>
          <select 
            style={styles.filterButton}
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
          >
            <option value="all">All Semesters</option>
            <option value="Fall 2024">Fall 2024</option>
            <option value="Spring 2024">Spring 2024</option>
            <option value="Fall 2023">Fall 2023</option>
          </select>
          <button style={styles.exportButton}>
            📊 Export Transcript
          </button>
        </div>
      </div>

      <div style={styles.summaryGrid}>
        <div style={{...styles.summaryCard, ...styles.gpaCard}}>
          <div style={styles.gpaValue}>9.51</div>
          <div style={styles.gpaLabel}>Cumulative GPA</div>
          <div style={styles.gpaTrend}>
            <span>📈</span> +0.15 this semester
          </div>
        </div>

        <div style={styles.summaryCard}>
          <div 
            style={{
              ...styles.cardBackground,
              backgroundColor: '#3b82f6'
            }}
          ></div>
          <div style={styles.statValue}>{totalCredits}</div>
          <div style={styles.statLabel}>Total Credits</div>
          <div style={styles.gradeDistribution}>
            <div style={{...styles.gradeBar, ...styles.gradeBarA, flex: gradeDistribution.A}}></div>
            <div style={{...styles.gradeBar, ...styles.gradeBarB, flex: gradeDistribution.B}}></div>
            <div style={{...styles.gradeBar, ...styles.gradeBarC, flex: gradeDistribution.C}}></div>
            <div style={{...styles.gradeBar, ...styles.gradeBarD, flex: gradeDistribution.D}}></div>
          </div>
        </div>

        <div style={styles.summaryCard}>
          <div 
            style={{
              ...styles.cardBackground,
              backgroundColor: '#10b981'
            }}
          ></div>
          <div style={styles.statValue}>{completedCourses}</div>
          <div style={styles.statLabel}>Completed Courses</div>
          <div style={{...styles.statLabel, marginTop: '12px', color: '#10b981'}}>
            {honorsCount} with Honors
          </div>
        </div>

        <div style={styles.summaryCard}>
          <div 
            style={{
              ...styles.cardBackground,
              backgroundColor: '#f59e0b'
            }}
          ></div>
          <div style={styles.statValue}>{averagePercentage}%</div>
          <div style={styles.statLabel}>Average Score</div>
          <div style={{...styles.statLabel, marginTop: '12px', color: '#16a34a'}}>
            Top 5% of Class
          </div>
        </div>
      </div>

      <div style={styles.tableContainer}>
        <div style={styles.tableHeader}>
          <h3 style={styles.tableTitle}>Grade Overview</h3>
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
              <th style={styles.th}>Credits</th>
              <th style={styles.th}>Grade</th>
              <th style={styles.th}>Performance</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredGrades.map((grade, index) => (
              <tr
                key={grade.id}
                style={{
                  ...(index % 2 === 0 ? styles.evenRow : {}),
                  ...(hoveredRow === index ? styles.hoverRow : {}),
                }}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <td style={styles.td}>
                  <div style={styles.courseInfo}>
                    <span style={styles.courseCode}>{grade.code}</span>
                    <span style={styles.courseName}>{grade.course}</span>
                    <span style={styles.semesterInfo}>{grade.semester}</span>
                  </div>
                  {grade.isHonors && (
                    <div style={styles.achievementBadge}>
                      🏆 Honors
                    </div>
                  )}
                </td>
                <td style={styles.td}>
                  <div style={styles.creditsInfo}>
                    <span style={styles.creditsValue}>{grade.credits}</span>
                    <span style={styles.creditsLabel}>Credits</span>
                  </div>
                </td>
                <td style={styles.td}>
                  <span style={{...styles.gradeBadge, ...getGradeStyle(grade.grade)}}>
                    {getGradeIcon(grade.grade)} {grade.grade}
                  </span>
                </td>
                <td style={styles.td}>
                  <div style={styles.performanceContainer}>
                    <span style={styles.performanceScore}>{grade.percentage}%</span>
                    <div style={styles.progressContainer}>
                      <div style={{...styles.progressBar, ...getProgressStyle(grade.progress)}}></div>
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
                      📊 Details
                    </button>
                    <button
                      style={{
                        ...styles.secondaryButton,
                        ...(hoveredButton === `transcript-${index}` ? {
                          backgroundColor: '#e2e8f0',
                          transform: 'translateY(-2px)'
                        } : {})
                      }}
                      onMouseEnter={() => setHoveredButton(`transcript-${index}`)}
                      onMouseLeave={() => setHoveredButton(null)}
                    >
                      📄 Report
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

export default Grades;
