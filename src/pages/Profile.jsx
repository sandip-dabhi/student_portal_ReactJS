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
    background: 'linear-gradient(135deg, #0f172a, #1e293b)',
    borderRadius: '24px',
    padding: '40px',
    marginBottom: '32px',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
  },
  headerBackground: {
    position: 'absolute',
    top: '0',
    right: '0',
    width: '300px',
    height: '300px',
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
    borderRadius: '50%',
    transform: 'translate(40%, -40%)',
  },
  profileContent: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: '40px',
  },
  avatar: {
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '48px',
    fontWeight: '800',
    color: 'white',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
    border: '4px solid rgba(255, 255, 255, 0.2)',
    transition: 'transform 0.3s ease',
  },
  avatarHover: {
    transform: 'scale(1.05)',
  },
  statusIndicator: {
    position: 'absolute',
    bottom: '8px',
    right: '8px',
    width: '24px',
    height: '24px',
    backgroundColor: '#22c55e',
    borderRadius: '50%',
    border: '3px solid white',
    animation: 'pulse 2s infinite',
  },
  headerText: {
    flex: 1,
  },
  heading: {
    fontSize: '42px',
    fontWeight: '900',
    margin: '0 0 12px 0',
    color: 'white',
    letterSpacing: '0.5px',
  },
  subheading: {
    fontSize: '20px',
    color: '#94a3b8',
    margin: '0 0 24px 0',
    fontWeight: '500',
  },
  badgeContainer: {
    display: 'flex',
    gap: '12px',
    marginBottom: '24px',
    flexWrap: 'wrap',
  },
  badge: {
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
    color: '#60a5fa',
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '600',
    border: '1px solid rgba(59, 130, 246, 0.3)',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  honorsBadge: {
    backgroundColor: 'rgba(251, 191, 36, 0.2)',
    color: '#fbbf24',
    border: '1px solid rgba(251, 191, 36, 0.3)',
  },
  statsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '16px',
  },
  statItem: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '16px',
    padding: '20px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  statItemHover: {
    transform: 'translateY(-4px)',
  },
  statValue: {
    fontSize: '28px',
    fontWeight: '800',
    color: 'white',
    margin: '0',
    letterSpacing: '0.5px',
  },
  statLabel: {
    fontSize: '13px',
    color: '#94a3b8',
    margin: '8px 0 0 0',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  actionButtons: {
    position: 'absolute',
    top: '40px',
    right: '40px',
    display: 'flex',
    gap: '12px',
    zIndex: 3,
  },
  actionButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    padding: '12px',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '16px',
    width: '44px',
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '32px',
    marginTop: '32px',
  },
  section: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '32px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e2e8f0',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  sectionHover: {
    transform: 'translateY(-4px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#0f172a',
    margin: '0 0 24px 0',
    position: 'relative',
    paddingBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  sectionIcon: {
    width: '32px',
    height: '32px',
    borderRadius: '10px',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '16px',
  },
  sectionTitleUnderline: {
    position: 'absolute',
    bottom: '0',
    left: '44px',
    width: '60px',
    height: '3px',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    borderRadius: '2px',
  },
  detailItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    paddingBottom: '20px',
    borderBottom: '1px solid #f1f5f9',
    transition: 'all 0.3s ease',
    borderRadius: '12px',
    padding: '16px',
    position: 'relative',
  },
  detailItemHover: {
    backgroundColor: '#f8fafc',
    transform: 'translateX(4px)',
  },
  detailIcon: {
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '16px',
    fontSize: '18px',
    background: 'linear-gradient(135deg, #e0f2fe, #bae6fd)',
    color: '#0369a1',
    flexShrink: 0,
  },
  detailContent: {
    flex: 1,
  },
  detailLabel: {
    fontSize: '14px',
    color: '#64748b',
    margin: '0 0 6px 0',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  detailValue: {
    fontSize: '17px',
    color: '#0f172a',
    fontWeight: '600',
    margin: '0',
  },
  bioSection: {
    marginTop: '32px',
    padding: '24px',
    backgroundColor: '#f8fafc',
    borderRadius: '16px',
    border: '1px solid #e2e8f0',
  },
  bioText: {
    fontSize: '16px',
    color: '#475569',
    lineHeight: '1.8',
    margin: '0',
    fontWeight: '500',
  },
  coursesSection: {
    maxHeight: '600px',
    overflowY: 'auto',
    paddingRight: '8px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    marginBottom: '16px',
    backgroundColor: '#f8fafc',
    borderRadius: '16px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    border: '2px solid transparent',
    position: 'relative',
    overflow: 'hidden',
  },
  listItemHover: {
    transform: 'translateY(-2px)',
    backgroundColor: 'white',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
    border: '2px solid #e0f2fe',
  },
  courseIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '20px',
    fontSize: '20px',
    background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
    color: '#1d4ed8',
    flexShrink: 0,
  },
  courseInfo: {
    flex: 1,
  },
  courseName: {
    fontSize: '17px',
    fontWeight: '700',
    color: '#0f172a',
    margin: '0 0 6px 0',
    letterSpacing: '0.3px',
  },
  courseCode: {
    fontSize: '14px',
    color: '#64748b',
    margin: '0 0 12px 0',
    fontWeight: '600',
  },
  progressContainer: {
    width: '100%',
    height: '10px',
    backgroundColor: '#e2e8f0',
    borderRadius: '6px',
    overflow: 'hidden',
    position: 'relative',
  },
  progressBar: {
    height: '100%',
    borderRadius: '6px',
    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
    transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
  },
  progressText: {
    position: 'absolute',
    right: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '14px',
    fontWeight: '700',
    color: '#475569',
  },
  achievementSection: {
    gridColumn: '1 / -1',
    background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
    border: '2px solid #f59e0b',
  },
  achievementGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  achievementItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '16px',
    textAlign: 'center',
    border: '1px solid rgba(245, 158, 11, 0.2)',
  },
  achievementIcon: {
    fontSize: '32px',
    marginBottom: '12px',
  },
  achievementTitle: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#92400e',
    margin: '0 0 8px 0',
  },
  achievementDesc: {
    fontSize: '14px',
    color: '#a16207',
    margin: '0',
  },
};

const Profile = () => {
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [hoveredDetail, setHoveredDetail] = useState(null);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [avatarHovered, setAvatarHovered] = useState(false);

  const student = {
    name: 'Sandip Dabhi',
    email: 'sandipdabhi970@gmail.com',
    bio: 'A passionate computer science student with a keen interest in web development and artificial intelligence. Currently in my third year, focusing on full-stack development and machine learning applications. I enjoy solving complex problems and building innovative solutions that make a positive impact.',
    courses: [
      { name: 'Advanced Database Systems', code: 'CS401', progress: 88, credits: 4 },
      { name: 'Machine Learning Fundamentals', code: 'CS402', progress: 92, credits: 4 },
      { name: 'Web Development Frameworks', code: 'CS403', progress: 85, credits: 3 },
      { name: 'Software Engineering Principles', code: 'CS404', progress: 78, credits: 3 },
      { name: 'Computer Networks Security', code: 'CS405', progress: 90, credits: 4 },
    ],
    studentId: '92200104063',
    major: 'Information Technology',
    enrollmentYear: 2022,
    expectedGraduation: 2026,
    gpa: 9.51,
    creditsCompleted: 116,
    totalCredits: 120,
    semester: 'Fall 2024',
    status: 'Active',
    phone: '+91 9876543210',
    address: 'Gujarat, India',
    achievements: [
      { icon: '🏆', title: 'Dean\'s List', desc: '3 consecutive semesters' },
      { icon: '💻', title: 'Coding Champion', desc: 'Hackathon Winner 2024' },
      { icon: '📚', title: 'Research Assistant', desc: 'AI/ML Lab' },
      { icon: '🎯', title: 'High Achiever', desc: 'Top 5% of Class' },
    ]
  };

  const personalDetails = [
    { icon: '📧', label: 'Email Address', value: student.email },
    { icon: '🆔', label: 'Student ID', value: student.studentId },
    { icon: '📱', label: 'Phone Number', value: student.phone },
    { icon: '🏠', label: 'Location', value: student.address },
    { icon: '🎓', label: 'Major', value: student.major },
    { icon: '📅', label: 'Current Semester', value: student.semester },
    { icon: '📊', label: 'Academic Status', value: student.status },
    { icon: '🎯', label: 'Expected Graduation', value: student.expectedGraduation },
  ];

  const statsData = [
    { value: student.gpa, label: 'CGPA', color: '#3b82f6' },
    { value: student.creditsCompleted, label: 'Credits', color: '#10b981' },
    { value: student.courses.length, label: 'Courses', color: '#f59e0b' },
    { value: `${Math.round((student.creditsCompleted / student.totalCredits) * 100)}%`, label: 'Progress', color: '#8b5cf6' },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.headerBackground}></div>
        
        <div style={styles.actionButtons}>
          <button style={styles.actionButton} title="Edit Profile">
            ✏️
          </button>
          <button style={styles.actionButton} title="Settings">
            ⚙️
          </button>
          <button style={styles.actionButton} title="Download Transcript">
            📄
          </button>
        </div>

        <div style={styles.profileContent}>
          <div style={styles.avatarContainer}>
            <div 
              style={{
                ...styles.avatar,
                ...(avatarHovered ? styles.avatarHover : {})
              }}
              onMouseEnter={() => setAvatarHovered(true)}
              onMouseLeave={() => setAvatarHovered(false)}
            >
              SD
            </div>
            <div style={styles.statusIndicator}></div>
          </div>
          
          <div style={styles.headerText}>
            <h1 style={styles.heading}>{student.name}</h1>
            <p style={styles.subheading}>
              {student.major} • Class of {student.expectedGraduation}
            </p>
            
            <div style={styles.badgeContainer}>
              <div style={styles.badge}>
                🎓 {student.semester}
              </div>
              <div style={{...styles.badge, ...styles.honorsBadge}}>
                🌟 Dean's List
              </div>
              <div style={styles.badge}>
                📈 Top 5%
              </div>
            </div>
            
            <div style={styles.statsContainer}>
              {statsData.map((stat, index) => (
                <div 
                  key={index}
                  style={{
                    ...styles.statItem,
                    ...(hoveredStat === index ? styles.statItemHover : {})
                  }}
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <p style={styles.statValue}>{stat.value}</p>
                  <p style={styles.statLabel}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={styles.content}>
        <div 
          style={{
            ...styles.section,
            ...(hoveredSection === 'personal' ? styles.sectionHover : {})
          }}
          onMouseEnter={() => setHoveredSection('personal')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <h3 style={styles.sectionTitle}>
            <div style={styles.sectionIcon}>👤</div>
            Personal Information
            <div style={styles.sectionTitleUnderline}></div>
          </h3>
          
          {personalDetails.map((detail, index) => (
            <div 
              key={index}
              style={{
                ...styles.detailItem,
                ...(hoveredDetail === index ? styles.detailItemHover : {})
              }}
              onMouseEnter={() => setHoveredDetail(index)}
              onMouseLeave={() => setHoveredDetail(null)}
            >
              <div style={styles.detailIcon}>{detail.icon}</div>
              <div style={styles.detailContent}>
                <p style={styles.detailLabel}>{detail.label}</p>
                <p style={styles.detailValue}>{detail.value}</p>
              </div>
            </div>
          ))}
          
          <div style={styles.bioSection}>
            <h4 style={{...styles.sectionTitle, fontSize: '18px', margin: '0 0 16px 0'}}>
              <div style={{...styles.sectionIcon, width: '24px', height: '24px', fontSize: '12px'}}>💭</div>
              About Me
            </h4>
            <p style={styles.bioText}>{student.bio}</p>
          </div>
        </div>

        <div 
          style={{
            ...styles.section,
            ...(hoveredSection === 'courses' ? styles.sectionHover : {})
          }}
          onMouseEnter={() => setHoveredSection('courses')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <h3 style={styles.sectionTitle}>
            <div style={styles.sectionIcon}>📚</div>
            Current Courses
            <div style={styles.sectionTitleUnderline}></div>
          </h3>
          
          <div style={styles.coursesSection}>
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
                  <div style={styles.courseIcon}>📖</div>
                  <div style={styles.courseInfo}>
                    <p style={styles.courseName}>{course.name}</p>
                    <p style={styles.courseCode}>
                      {course.code} • {course.credits} Credits
                    </p>
                    <div style={styles.progressContainer}>
                      <div style={{
                        ...styles.progressBar, 
                        width: `${course.progress}%`
                      }}></div>
                    </div>
                  </div>
                  <div style={styles.progressText}>
                    {course.progress}%
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{...styles.section, ...styles.achievementSection}}>
          <h3 style={styles.sectionTitle}>
            <div style={styles.sectionIcon}>🏆</div>
            Achievements & Recognition
            <div style={styles.sectionTitleUnderline}></div>
          </h3>
          
          <div style={styles.achievementGrid}>
            {student.achievements.map((achievement, index) => (
              <div key={index} style={styles.achievementItem}>
                <div style={styles.achievementIcon}>{achievement.icon}</div>
                <h4 style={styles.achievementTitle}>{achievement.title}</h4>
                <p style={styles.achievementDesc}>{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}
      </style>
    </div>
  );
};

export default Profile;
