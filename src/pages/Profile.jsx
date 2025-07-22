import React from 'react';

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#f1f5f9',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    minHeight: '70vh',
    marginLeft: '25px', },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2.5rem',
  },
  avatar: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    backgroundColor: '#0f172a',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '48px',
    fontWeight: '600',
    marginRight: '30px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
  },
  headerText: {
    flex: 1,
  },
  heading: {
    fontSize: '36px',
    fontWeight: '700',
    margin: '0 0 8px 0',
    color: '#0f172a',
    position: 'relative',
    paddingBottom: '15px',
  },
  headingUnderline: {
    content: '""',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '60px',
    height: '4px',
    background: 'linear-gradient(90deg, #3b82f6, #6366f1)',
    borderRadius: '2px',
  },
  subheading: {
    fontSize: '20px',
    color: '#64748b',
    margin: '0 0 15px 0',
  },
  statsContainer: {
    display: 'flex',
    gap: '20px',
  },
  statItem: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '12px 20px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
    textAlign: 'center',
    minWidth: '100px',
  },
  statValue: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#0f172a',
    margin: '0',
  },
  statLabel: {
    fontSize: '14px',
    color: '#64748b',
    margin: '0',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
    marginTop: '2rem',
  },
  section: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '1.8rem',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
  },
  sectionTitle: {
    fontSize: '22px',
    fontWeight: '600',
    color: '#0f172a',
    margin: '0 0 1.5rem 0',
    position: 'relative',
    paddingBottom: '12px',
  },
  sectionTitleUnderline: {
    content: '""',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '40px',
    height: '3px',
    background: 'linear-gradient(90deg, #3b82f6, #6366f1)',
    borderRadius: '2px',
  },
  detailItem: {
    display: 'flex',
    marginBottom: '1.2rem',
    paddingBottom: '1.2rem',
    borderBottom: '1px solid #f1f5f9',
  },
  detailIcon: {
    width: '24px',
    height: '24px',
    backgroundColor: '#e0f2fe',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '15px',
    color: '#0ea5e9',
    flexShrink: 0,
  },
  detailContent: {
    flex: 1,
  },
  detailLabel: {
    fontSize: '14px',
    color: '#64748b',
    margin: '0 0 4px 0',
  },
  detailValue: {
    fontSize: '16px',
    color: '#0f172a',
    fontWeight: '500',
    margin: '0',
  },
  bioText: {
    fontSize: '16px',
    color: '#475569',
    lineHeight: '1.7',
    margin: '0',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '14px 18px',
    marginBottom: '12px',
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    borderLeft: '4px solid #3b82f6',
  },
  listItemHover: {
    transform: 'translateX(5px)',
    backgroundColor: '#f1f5f9',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  },
  courseIcon: {
    backgroundColor: '#dbeafe',
    width: '36px',
    height: '36px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '15px',
    color: '#1d4ed8',
    fontSize: '18px',
  },
  courseInfo: {
    flex: 1,
  },
  courseName: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#0f172a',
    margin: '0 0 4px 0',
  },
  courseCode: {
    fontSize: '14px',
    color: '#64748b',
    margin: '0',
  },
  progressContainer: {
    width: '100%',
    height: '8px',
    backgroundColor: '#e2e8f0',
    borderRadius: '4px',
    overflow: 'hidden',
    marginTop: '10px',
  },
  progressBar: {
    height: '100%',
    borderRadius: '4px',
    backgroundColor: '#3b82f6',
    width: '65%',
  },
};

const Profile = () => {
  const student = {
    name: 'Sandip Dabhi',
    email: 'sandipdabhi970@gmail.com',
    bio: 'A passionate computer science student with a keen interest in web development and artificial intelligence. Currently in my third year, focusing on full-stack development and machine learning applications.',
    courses: [
      { name: 'Introduction to Computer Science', code: 'CS101', progress: 85 },
      { name: 'Data Structures and Algorithms', code: 'CS102', progress: 72 },
      { name: 'Web Development Fundamentals', code: 'CS203', progress: 90 },
      { name: 'Database Management Systems', code: 'CS204', progress: 68 },
      { name: 'Operating Systems', code: 'CS305', progress: 45 },
    ],
    studentId: '92200104063',
    major: 'Information Technology',
    enrollmentYear: 2022,
    expectedGraduation: 2026,
    gpa: 9.51,
    creditsCompleted: 116,
    totalCredits: 120,
  };

  const [hoveredCourse, setHoveredCourse] = React.useState(null);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.avatar}>SD</div>
        <div style={styles.headerText}>
          <h1 style={styles.heading}>
            {student.name}
            <span style={styles.headingUnderline}></span>
          </h1>
          <p style={styles.subheading}>{student.major} Major • Class of {student.expectedGraduation}</p>
          
          <div style={styles.statsContainer}>
            <div style={styles.statItem}>
              <p style={styles.statValue}>{student.gpa}</p>
              <p style={styles.statLabel}>CGPA</p>
            </div>
            <div style={styles.statItem}>
              <p style={styles.statValue}>{student.creditsCompleted}</p>
              <p style={styles.statLabel}>Credits</p>
            </div>
            <div style={styles.statItem}>
              <p style={styles.statValue}>{student.courses.length}</p>
              <p style={styles.statLabel}>Courses</p>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.content}>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>
            Personal Information
            <span style={styles.sectionTitleUnderline}></span>
          </h3>
          
          <div style={styles.detailItem}>
            <div style={styles.detailIcon}>📧</div>
            <div style={styles.detailContent}>
              <p style={styles.detailLabel}>Email Address</p>
              <p style={styles.detailValue}>{student.email}</p>
            </div>
          </div>
          
          <div style={styles.detailItem}>
            <div style={styles.detailIcon}>🆔</div>
            <div style={styles.detailContent}>
              <p style={styles.detailLabel}>Student ID</p>
              <p style={styles.detailValue}>{student.studentId}</p>
            </div>
          </div>
          
          <div style={styles.detailItem}>
            <div style={styles.detailIcon}>🎓</div>
            <div style={styles.detailContent}>
              <p style={styles.detailLabel}>Major</p>
              <p style={styles.detailValue}>{student.major}</p>
            </div>
          </div>
          
          <div style={styles.detailItem}>
            <div style={styles.detailIcon}>📅</div>
            <div style={styles.detailContent}>
              <p style={styles.detailLabel}>Enrollment Year</p>
              <p style={styles.detailValue}>{student.enrollmentYear}</p>
            </div>
          </div>
          
          <div style={styles.detailItem}>
            <div style={styles.detailIcon}>🎯</div>
            <div style={styles.detailContent}>
              <p style={styles.detailLabel}>Credits Completed</p>
              <p style={styles.detailValue}>{student.creditsCompleted}/{student.totalCredits}</p>
            </div>
          </div>
          
          <h3 style={{...styles.sectionTitle, marginTop: '2rem'}}>
            About Me
            <span style={styles.sectionTitleUnderline}></span>
          </h3>
          <p style={styles.bioText}>{student.bio}</p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>
            Current Courses
            <span style={styles.sectionTitleUnderline}></span>
          </h3>
          
          <ul style={styles.list}>
            {student.courses.map((course, index) => (
              <li 
                key={index}
                style={{
                  ...styles.listItem,
                  ...(hoveredCourse === index ? styles.listItemHover : {})
                }}
                onMouseEnter={() => setHoveredCourse(index)}
                onMouseLeave={() => setHoveredCourse(null)}
              >
                <div style={styles.courseIcon}>📚</div>
                <div style={styles.courseInfo}>
                  <p style={styles.courseName}>{course.name}</p>
                  <p style={styles.courseCode}>{course.code}</p>
                  <div style={styles.progressContainer}>
                    <div style={{...styles.progressBar, width: `${course.progress}%`}}></div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
