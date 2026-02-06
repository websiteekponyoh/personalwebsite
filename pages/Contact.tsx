
import React from 'react';
import { Mail, MapPin, Linkedin, Twitter, Instagram, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="w-full pb-24">
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://i.ibb.co/zH5tcjvf/Usenobong-Ekponyoh.png')] bg-cover bg-[position:center_35%] opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Contact & Connect</h1>
          <p className="text-blue-400 text-xl font-bold tracking-widest uppercase">Let's Build Something Meaningful</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            <div className="lg:col-span-1 text-left">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>
              <p className="text-slate-600 mb-12 leading-relaxed">
                Whether it's a strategic partnership, a philanthropic inquiry, or a speaking engagement, I'm open to discussing how we can create lasting value.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex gap-5 items-start text-left">
                  <div className="bg-blue-50 p-4 rounded-xl text-brand-blue shrink-0"><Mail size={24} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email Address</h4>
                    <p className="text-slate-600">info@usenobong-ekponyoh.com</p>
                  </div>
                </div>
                <div className="flex gap-5 items-start text-left">
                  <div className="bg-blue-50 p-4 rounded-xl text-brand-blue shrink-0"><Phone size={24} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Phone Number</h4>
                    <p className="text-slate-600">+234 803 808 6605</p>
                  </div>
                </div>
                <div className="flex gap-5 items-start text-left">
                  <div className="bg-blue-50 p-4 rounded-xl text-brand-blue shrink-0"><MapPin size={24} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Global Presence</h4>
                    <p className="text-slate-600">Africa, Europe, Middle East</p>
                  </div>
                </div>
              </div>

              <div className="text-left">
                <h4 className="font-bold text-slate-900 mb-6">Follow My Journey</h4>
                <div className="flex gap-4 justify-start">
                  <a href="#" className="p-4 bg-slate-100 rounded-xl text-slate-700 hover:bg-brand-blue hover:text-white transition-all"><Linkedin size={24} /></a>
                  <a href="#" className="p-4 bg-slate-100 rounded-xl text-slate-700 hover:bg-brand-blue hover:text-white transition-all"><Twitter size={24} /></a>
                  <a href="#" className="p-4 bg-slate-100 rounded-xl text-slate-700 hover:bg-brand-blue hover:text-white transition-all"><Instagram size={24} /></a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 text-left">
              <div className="bg-slate-50 p-10 md:p-12 rounded-[2.5rem] border border-slate-100">
                <form action="https://formspree.io/f/xnjbargv" method="POST" className="space-y-6">
                  {/* Formspree Configuration */}
                  <input type="hidden" name="_next" value="https://usenobong-ekponyoh.com/thank-you" />
                  <input type="hidden" name="_subject" value="New Contact Inquiry" />
                  <input type="hidden" name="_template" value="table" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                      <input type="text" name="name" required className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                      <input type="email" name="email" required className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Inquiry Type</label>
                    <select name="inquiry_type" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none bg-white">
                      <option>General Inquiry</option>
                      <option>Business Partnership</option>
                      <option>Investment Opportunity</option>
                      <option>Speaking Engagement</option>
                      <option>Mentorship Request</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea name="message" required className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none min-h-[150px]" placeholder="How can we help each other?"></textarea>
                  </div>

                  <button type="submit" className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/10">
                    Send Secure Message
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
