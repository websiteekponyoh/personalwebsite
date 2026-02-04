
import React from 'react';

interface LegalProps {
  type: 'privacy' | 'terms' | 'cookies';
}

const Legal: React.FC<LegalProps> = ({ type }) => {
  const titles = {
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    cookies: 'Cookie Policy'
  };

  return (
    <div className="w-full pb-24">
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://i.ibb.co/zH5tcjvf/Usenobong-Ekponyoh.png')] bg-cover bg-[position:center_35%] opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold">{titles[type]}</h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate text-left">
          <p className="text-slate-500 mb-8 font-medium italic">Last Updated: January 2024</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6 text-left">Introduction</h2>
          <p className="text-slate-600 leading-relaxed text-left">
            Welcome to the official website of Usenobong Ekponyoh. Your privacy and trust are paramount to us. This document outlines our practices regarding data, terms of use, and professional conduct on this platform.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6 text-left">1. Usage Rights</h2>
          <p className="text-slate-600 leading-relaxed text-left">
            All content on this website, including but not limited to text, images, logos, and case studies, are the intellectual property of Usenobong Ekponyoh or the respective ventures mentioned. No part of this site may be reproduced without prior written consent.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6 text-left">2. Data Collection</h2>
          <p className="text-slate-600 leading-relaxed text-left">
            We collect minimal data necessary for operational purposes—primarily when you use our contact or inquiry forms. This information is used strictly for the stated purpose of communication and collaboration.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6 text-left">3. Professional Integrity</h2>
          <p className="text-slate-600 leading-relaxed text-left">
            As a value-driven brand, we maintain the highest levels of ethical standards. Any engagement through this platform is expected to align with our core values of integrity, service, and excellence.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6 text-left">4. Cookies</h2>
          <p className="text-slate-600 leading-relaxed text-left">
            This site uses basic cookies to improve user experience and analyze site traffic patterns to better serve our audience.
          </p>

          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-100 text-left">
            <h4 className="font-bold text-slate-900 mb-2">Need clarification?</h4>
            <p className="text-slate-500 text-sm">Please reach out to our legal team at legal@uekponyoh.com for any specific inquiries regarding our policies.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;
