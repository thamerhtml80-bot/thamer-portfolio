import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'تطبيق إدارة المهام',
      description: 'تطبيق ويب لإدارة المهام اليومية مع واجهة مستخدم سهلة وجميلة',
      technologies: ['React', 'JavaScript', 'CSS3'],
      image: '📋',
      link: '#'
    },
    {
      id: 2,
      title: 'متجر إلكتروني',
      description: 'موقع متجر إلكتروني حديث مع نظام سلة التسوق والدفع',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: '🛍️',
      link: '#'
    },
    {
      id: 3,
      title: 'تطبيق الطقس',
      description: 'تطبيق يعرض معلومات الطقس الحالية والتنبؤات المستقبلية',
      technologies: ['React', 'API', 'CSS'],
      image: '🌤️',
      link: '#'
    },
    {
      id: 4,
      title: 'منصة المدونة',
      description: 'منصة تدوين حديثة مع إمكانية إنشاء ونشر المقالات',
      technologies: ['React', 'Firebase', 'Tailwind'],
      image: '📝',
      link: '#'
    },
    {
      id: 5,
      title: 'تطبيق الدردشة',
      description: 'تطبيق دردشة فورية مع دعم الرسائل الفورية والإشعارات',
      technologies: ['React', 'Socket.io', 'Node.js'],
      image: '💬',
      link: '#'
    },
    {
      id: 6,
      title: 'لوحة التحكم',
      description: 'لوحة تحكم شاملة لإدارة البيانات والإحصائيات',
      technologies: ['React', 'Chart.js', 'API'],
      image: '📊',
      link: '#'
    }
  ];

  return (
    <main className="projects">
      <div className="projects-header">
        <h1>مشاريعي</h1>
        <p>مجموعة من المشاريع التي عملت عليها وأنا فخور بها</p>
      </div>

      <div className="container">
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">عرض المشروع →</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="cta-section">
        <div className="container">
          <h2>هل لديك مشروع في الذهن؟</h2>
          <p>دعنا نعمل معاً لتحويل أفكارك إلى تطبيقات رائعة</p>
          <a href="/" className="btn btn-primary">تواصل معي الآن</a>
        </div>
      </section>
    </main>
  );
}

export default Projects;
