import React from 'react';

const Dashboard = () => {
  const cards = [
    {
      icon: '📝',
      title: 'Upcoming Assignments',
      content: 'You have 3 assignments due this week. One is due tomorrow.'
    },
    {
      icon: '📚',
      title: 'Current Courses',
      content: 'You are enrolled in 5 courses this semester. 2 have new materials.'
    },
    {
      icon: '📊',
      title: 'Academic Performance',
      content: 'Your current GPA is 3.5. You\'re in the top 20% of your class.'
    },
    {
      icon: '⏰',
      title: 'Class Schedule',
      content: 'Your next class is Computer Science in 2 hours at Science Building Room 304.'
    },
    {
      icon: '📢',
      title: 'Recent Announcements',
      content: '3 new announcements from your instructors. One requires action.'
    },
    {
      icon: '💡',
      title: 'Resource Center',
      content: '5 new study resources available. 3 are recommended for your courses.'
    }
  ];
  
  return (
    <div className="page-content">
      <div className="section-header">
        <h1 className="section-title">Welcome to the Student Portal</h1>
        <p className="section-subtitle">
          Your comprehensive academic management platform. Track assignments, 
          monitor grades, and stay organized with your personalized dashboard.
        </p>
      </div>
      
      <div className="dashboard-grid">
        {cards.map((card, index) => (
          <div key={index} className="dashboard-card">
            <div className="card-header">
              <div className="card-icon">{card.icon}</div>
              <h3 className="card-title">{card.title}</h3>
            </div>
            <p className="card-content">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
