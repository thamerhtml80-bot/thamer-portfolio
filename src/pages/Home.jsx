import React, { useState } from 'react';
import '../styles/Home.css';

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // إنشاء رابط البريد الإلكتروني
    const mailtoLink = `mailto:thamerhtml80@gmail.com?subject=رسالة من ${formData.name}&body=${encodeURIComponent(
      `الاسم: ${formData.name}\nالبريد الإلكتروني: ${formData.email}\n\nالرسالة:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    // إعادة تعيين النموذج
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(true);
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="home">
      {/* قسم البطل */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              مرحباً، أنا <span className="highlight">ثامر</span>
            </h1>
            <p className="hero-subtitle">
              مطور واجهات أمامية متخصص في بناء تطبيقات ويب حديثة وجميلة
            </p>
            <p className="hero-description">
              أنا شغوف بإنشاء تجارب مستخدم استثنائية باستخدام تقنيات الويب الحديثة
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">ابدأ معي</a>
              <a href="/projects" className="btn btn-secondary">شاهد أعمالي</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-shape"></div>
          </div>
        </div>
      </section>

      {/* قسم المهارات */}
      <section className="skills">
        <div className="container">
          <h2 className="section-title">مهاراتي</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">🎨</div>
              <h3>تصميم الواجهات</h3>
              <p>تصميم واجهات مستخدم جميلة وسهلة الاستخدام</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">⚛️</div>
              <h3>React</h3>
              <p>بناء تطبيقات ديناميكية وتفاعلية باستخدام React</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🎯</div>
              <h3>JavaScript</h3>
              <p>كتابة كود JavaScript نظيف وفعال</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🔧</div>
              <h3>أدوات التطوير</h3>
              <p>استخدام أحدث أدوات التطوير والبناء</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">📱</div>
              <h3>التصميم المتجاوب</h3>
              <p>إنشاء مواقع تعمل بشكل مثالي على جميع الأجهزة</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">⚡</div>
              <h3>الأداء</h3>
              <p>تحسين أداء التطبيقات لتجربة سلسة</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الاتصال */}
      <section className="contact" id="contact">
        <div className="container">
          <h2 className="section-title">تواصل معي</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>دعنا نعمل معاً</h3>
              <p>هل لديك مشروع رائع في الذهن؟ أنا مهتم بسماع أفكارك وتحويلها إلى واقع.</p>
              <div className="contact-details">
                <p>
                  <strong>البريد الإلكتروني:</strong><br />
                  <a href="mailto:thamerhtml80@gmail.com">thamerhtml80@gmail.com</a>
                </p>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">الاسم</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="أدخل اسمك"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">البريد الإلكتروني</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">الرسالة</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="أدخل رسالتك"
                  rows="5"
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">إرسال الرسالة</button>
              {submitted && <p className="success-message">تم إرسال رسالتك بنجاح!</p>}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
