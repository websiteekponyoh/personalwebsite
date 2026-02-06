
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, ArrowRight } from 'lucide-react';

const ThankYou: React.FC = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-white px-4">
            <div className="max-w-2xl w-full text-center">
                <div className="mb-8 flex justify-center">
                    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center animate-bounce">
                        <CheckCircle size={64} className="text-green-500" />
                    </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                    Thank <span className="text-brand-blue">You!</span>
                </h1>

                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                    Your message has been received successfully. I appreciate you reaching out and will get back to you as soon as possible.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="bg-brand-blue text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/10 group"
                    >
                        <Home className="mr-2" size={20} /> Back to Home
                    </Link>
                    <Link
                        to="/ventures"
                        className="bg-slate-100 text-slate-700 px-8 py-4 rounded-xl font-bold flex items-center justify-center hover:bg-slate-200 transition-all group"
                    >
                        Explore Ventures <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </Link>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-100 italic text-slate-400">
                    "Excellence is not an act, but a habit."
                </div>
            </div>
        </div>
    );
};

export default ThankYou;
