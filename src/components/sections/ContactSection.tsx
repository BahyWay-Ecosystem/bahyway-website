// ContactSection.tsx - Contact form
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section style={{
      padding: '120px 20px',
      background: '#000',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}
        >
          <Mail size={48} color="#2196F3" style={{ marginBottom: '20px' }} />
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: '800',
            color: 'white',
            marginBottom: '20px'
          }}>
            Get in Touch
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.6)'
          }}>
            Ready to power your data ecosystem? Let's talk.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '24px',
            padding: '40px'
          }}
        >
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              color: 'white',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '8px'
            }}>
              Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{
                width: '100%',
                padding: '14px 18px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                color: 'white',
                fontSize: '16px',
                outline: 'none',
                transition: 'all 0.3s'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#2196F3';
                e.target.style.background = 'rgba(33,150,243,0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                e.target.style.background = 'rgba(255,255,255,0.05)';
              }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              color: 'white',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '8px'
            }}>
              Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{
                width: '100%',
                padding: '14px 18px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                color: 'white',
                fontSize: '16px',
                outline: 'none',
                transition: 'all 0.3s'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#2196F3';
                e.target.style.background = 'rgba(33,150,243,0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                e.target.style.background = 'rgba(255,255,255,0.05)';
              }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              color: 'white',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '8px'
            }}>
              Company
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              style={{
                width: '100%',
                padding: '14px 18px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                color: 'white',
                fontSize: '16px',
                outline: 'none',
                transition: 'all 0.3s'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#2196F3';
                e.target.style.background = 'rgba(33,150,243,0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                e.target.style.background = 'rgba(255,255,255,0.05)';
              }}
            />
          </div>

          <div style={{ marginBottom: '32px' }}>
            <label style={{
              display: 'block',
              color: 'white',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '8px'
            }}>
              Message *
            </label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{
                width: '100%',
                padding: '14px 18px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                color: 'white',
                fontSize: '16px',
                outline: 'none',
                resize: 'vertical',
                transition: 'all 0.3s'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#2196F3';
                e.target.style.background = 'rgba(33,150,243,0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                e.target.style.background = 'rgba(255,255,255,0.05)';
              }}
            />
          </div>

          <button
            type="submit"
            disabled={submitted}
            style={{
              width: '100%',
              padding: '16px',
              background: submitted
                ? 'linear-gradient(135deg, #4CAF50, #66BB6A)'
                : 'linear-gradient(135deg, #2196F3, #64B5F6)',
              border: 'none',
              borderRadius: '12px',
              color: 'white',
              fontSize: '16px',
              fontWeight: '600',
              cursor: submitted ? 'default' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              if (!submitted) {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(33,150,243,0.4)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {submitted ? (
              <>
                <CheckCircle size={20} />
                Message Sent!
              </>
            ) : (
              <>
                <Send size={20} />
                Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
