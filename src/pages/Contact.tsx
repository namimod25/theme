import React,{ FormEvent, useState } from "react";
import '../styles/Contact.css';


const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
      name: '',
      email: '',
      message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      // Di sini Anda bisa menambahkan logika untuk mengirim form (API call)
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      // Reset form setelah submit
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitted(false);
      }, 2000);
    };
  
    return (
      <div className="page-container contact">
        <div className="content-wrapper animate-in">
          <h1 className="title">Get in Touch</h1>
          <div className="contact-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..."
                  className="form-input"
                  rows={5}
                />
              </div>
              <button type="submit" className="submit-button">
                {isSubmitted ? 'Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;