import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle, Send, User, MessageSquare } from 'lucide-react';
import ConfettiExplosion from 'react-confetti-explosion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isExploding, setIsExploding] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: 'loading', message: 'Sending message...' });

    try {
      await emailjs.send(
        'service_dgjcb0u',
        'template_lckx7xg',
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_email: 'aaryanbhati05@gmail.com',
        },
        'LJSsWfXH-kco8eLyp'
      );

      setFormStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
      setIsExploding(true); // Trigger confetti
      setTimeout(() => setIsExploding(false), 3000); // Reset after 3 seconds
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 bg-gray-900 relative overflow-hidden"
    >
      {isExploding && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
          <ConfettiExplosion
            force={0.8}
            duration={3000}
            particleCount={200}
            width={1600}
          />
        </div>
      )}

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-10 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500 rounded-full opacity-10 animate-pulse delay-300" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-500 rounded-full opacity-10 animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full md:w-2/5 text-center md:text-left"
          >
            <div className="inline-block p-3 rounded-full bg-blue-500 bg-opacity-10 mb-6">
              <Mail className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-gray-400 mb-8">
              Have a project in mind? Want to collaborate? Or just want to say hello? 
              Feel free to reach out!
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              <p className="text-sm text-gray-400">Email me directly at:</p>
              <a href="mailto:aaryanbhati05@gmail.com" className="text-blue-400 hover:text-blue-300">
                aaryanbhati05@gmail.com
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full md:w-3/5"
          >
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                    Name
                  </label>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300" />
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-gray-900/90 border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                        required
                        disabled={isSubmitting}
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                    Email
                  </label>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300" />
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-gray-900/90 border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                        required
                        disabled={isSubmitting}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                    Message
                  </label>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300" />
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-gray-900/90 border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                        required
                        disabled={isSubmitting}
                        placeholder="Type your message here..."
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 relative group ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300" />
                  <div className="relative flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <span className="inline-block animate-spin rounded-full h-5 w-5 border-t-2 border-white" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </div>
                </motion.button>

                {/* Status Message */}
                {formStatus.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg backdrop-blur-sm ${
                      formStatus.type === 'success'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : formStatus.type === 'error'
                        ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                        : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                    } flex items-center space-x-2`}
                  >
                    {formStatus.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <p>{formStatus.message}</p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactPage;

