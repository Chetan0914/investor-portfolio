'use client';
import { useState } from 'react';
import { Upload, Send, FileText, Mail, User, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    file: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData((prev) => ({ ...prev, file: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type === 'application/pdf') {
        setFormData((prev) => ({ ...prev, file }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Form submitted:', formData);
    alert('Form submitted successfully (mock)');
    
    // Reset form
    setFormData({ name: '', email: '', message: '', file: null });
    setIsSubmitting(false);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-blue-900/20 py-20 px-6 transition-colors duration-300">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-100/40 to-purple-100/40 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-100/40 to-cyan-100/40 dark:from-purple-900/20 dark:to-cyan-900/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-100/30 to-blue-100/30 dark:from-cyan-900/15 dark:to-blue-900/15 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 rounded-2xl shadow-lg dark:shadow-gray-800/50 mb-6">
            <Send className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent mb-4">
            Submit Your Pitch
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
            Ready to transform your vision into reality? Share your pitch deck and let's explore the possibilities together.
          </p>
          
          {/* Trust indicators */}
          <div className="flex items-center justify-center space-x-6 mt-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Secure Upload</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>24h Response</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Confidential</span>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl shadow-2xl dark:shadow-gray-900/50 border border-white/20 dark:border-gray-700/50 p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Name Field */}
            <div className="group">
              <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 font-medium mb-3">
                <User className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                <span>Full Name</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Enter your full name"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-focus-within:from-blue-500/5 group-focus-within:to-purple-500/5 pointer-events-none transition-all duration-200"></div>
              </div>
            </div>

            {/* Email Field */}
            <div className="group">
              <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 font-medium mb-3">
                <Mail className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                <span>Email Address</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="your@email.com"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-focus-within:from-blue-500/5 group-focus-within:to-purple-500/5 pointer-events-none transition-all duration-200"></div>
              </div>
            </div>

            {/* Message Field */}
            <div className="group">
              <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 font-medium mb-3">
                <MessageSquare className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                <span>Tell us about your venture</span>
              </label>
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  rows="5"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                  placeholder="Describe your business, market opportunity, and what makes your venture unique..."
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-focus-within:from-blue-500/5 group-focus-within:to-purple-500/5 pointer-events-none transition-all duration-200"></div>
              </div>
            </div>

            {/* File Upload */}
            <div className="group">
              <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 font-medium mb-3">
                <FileText className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                <span>Pitch Deck (PDF)</span>
              </label>
              
              <div
                className={`relative border-2 border-dashed rounded-xl transition-all duration-200 ${
                  dragActive
                    ? 'border-blue-500 dark:border-blue-400 bg-blue-50/50 dark:bg-blue-900/20'
                    : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                } ${formData.file ? 'bg-green-50/50 dark:bg-green-900/20 border-green-400 dark:border-green-500' : ''}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  name="file"
                  accept=".pdf"
                  required
                  onChange={handleChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                
                <div className="flex flex-col items-center justify-center py-8 px-6 text-center">
                  {formData.file ? (
                    <>
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mb-3">
                        <FileText className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                      <p className="text-green-600 dark:text-green-400 font-medium">{formData.file.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {(formData.file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-3">
                        <Upload className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">
                        Drop your PDF here or click to browse
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Maximum file size: 10MB
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl dark:shadow-gray-800/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span className="flex items-center justify-center space-x-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                      <span>Submit Your Pitch</span>
                    </>
                  )}
                </span>
                
                {/* Button glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-200"></div>
              </button>
            </div>

            {/* Privacy Notice */}
            <div className="bg-gray-50/50 dark:bg-gray-700/30 rounded-xl p-4 border border-gray-200/50 dark:border-gray-600/50">
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                🔒 Your information is secure and confidential. We'll review your pitch within 24 hours and get back to you with our decision.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}