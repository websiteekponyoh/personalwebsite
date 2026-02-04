
import React from 'react';
import { BLOGS } from '../constants';
import { Search, Tag, Calendar, ChevronRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="w-full pb-24">
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://i.ibb.co/zH5tcjvf/Usenobong-Ekponyoh.png')] bg-cover bg-[position:center_35%] opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Insights & Articles</h1>
          <p className="text-blue-400 text-xl font-bold tracking-widest uppercase">Sharing Vision, Strategy and Personal Philosophy</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            <div className="lg:w-2/3">
              <div className="space-y-12">
                {BLOGS.map(blog => (
                  <article key={blog.id} className="group flex flex-col md:flex-row gap-8 items-center bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:shadow-xl transition-all text-left">
                    <div className="md:w-2/5 aspect-[4/3] rounded-2xl overflow-hidden shrink-0">
                      <img src={blog.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="md:w-3/5 text-left">
                      <div className="flex items-center gap-4 text-xs font-bold text-brand-blue uppercase tracking-widest mb-3 justify-start">
                        <Tag size={12} /> {blog.category}
                        <span className="text-slate-300">|</span>
                        <Calendar size={12} className="text-slate-400" /> <span className="text-slate-400 font-medium">{blog.date}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-brand-blue transition-colors">{blog.title}</h2>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {blog.excerpt}
                      </p>
                      <button className="text-slate-900 font-bold flex items-center group-hover:translate-x-1 transition-transform">
                        Read More <ChevronRight size={16} className="ml-1" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-10">
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-left">
                  <h3 className="font-bold text-xl text-slate-900 mb-6">Search Insights</h3>
                  <div className="relative">
                    <input type="text" className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-brand-blue bg-white" placeholder="Search topics..." />
                    <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
                  </div>
                </div>

                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-left">
                  <h3 className="font-bold text-xl text-slate-900 mb-6">Popular Categories</h3>
                  <div className="flex flex-wrap gap-2 justify-start">
                    {['Innovation', 'Agriculture', 'Leadership', 'Oil & Gas', 'Tech', 'Economy'].map(cat => (
                      <span key={cat} className="bg-white px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:bg-brand-blue hover:text-white hover:border-brand-blue cursor-pointer transition-all">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-brand-blue p-10 rounded-[2.5rem] text-white text-left">
                  <h3 className="font-bold text-2xl mb-4">Newsletter</h3>
                  <p className="text-blue-100 text-sm mb-6">Get strategic insights and updates directly in your inbox.</p>
                  <form className="space-y-4">
                    <input type="email" className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 outline-none" placeholder="your@email.com" />
                    <button className="w-full bg-white text-brand-blue py-3 rounded-xl font-bold hover:bg-slate-100 transition-all">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
