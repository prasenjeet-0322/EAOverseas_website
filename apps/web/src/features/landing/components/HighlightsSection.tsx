import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '@/assets/logo.png';


const HighlightsSection = () => {
    const navigate = useNavigate();
    return (
        <section className="w-full bg-transparent py-16 md:py-32 px-4 overflow-hidden relative">
            {/* Grid Background */}
            <div className="absolute inset-0 z-0 opacity-[0.3]" 
                 style={{ 
                     backgroundImage: `linear-gradient(#E7F0FF 1px, transparent 1px), linear-gradient(90deg, #E7F0FF 1px, transparent 1px)`,
                     backgroundSize: '40px 40px' 
                 }}>
            </div>

            <div className="max-w-[1400px] mx-auto flex flex-col items-center relative z-10">
                
                {/* Floating Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden lg:block">
                    {/* Floating Card 1 */}
                    <div className="absolute top-10 left-[2%] xl:left-0 animate-bounce [animation-duration:4s] bg-white p-4 rounded-2xl shadow-xl border border-purple-100 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                            <span className="material-symbols-outlined text-sm">check_circle</span>
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Visa Success</p>
                            <p className="text-sm font-black text-gray-900">99.8% Rate</p>
                        </div>
                    </div>

                    {/* Floating Card 2 */}
                    <div className="absolute top-40 right-[2%] xl:right-0 animate-bounce [animation-duration:5s] bg-white p-4 rounded-2xl shadow-xl border border-purple-100 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <span className="material-symbols-outlined text-sm">language</span>
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Global Network</p>
                            <p className="text-sm font-black text-gray-900">30+ Countries</p>
                        </div>
                    </div>

                </div>

                {/* Section Header */}
                <div className="text-center mb-16 md:mb-24 space-y-6 relative">
                    <div className="inline-block px-5 py-2 bg-primary-light text-primary-hover font-bold text-xs rounded-full shadow-sm mb-2 border border-purple-200 uppercase tracking-[0.2em]">
                        Highlights
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-[#1e293b] tracking-tight leading-[1.1] max-w-5xl mx-auto font-bricolage">
                        Experience the Edge of <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-fuchsia-500 to-purple-600 bg-[length:200%_auto] animate-shimmer">Global Excellence</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Our legacy of success is built on three decades of unwavering commitment to student dreams and world-class educational standards.
                    </p>
                </div>

                {/* Stats Grid Layout */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
                    
                    {/* Box 1: Years of Excellence */}
                    <div 
                        onClick={() => navigate('/contact')}
                        className="cursor-pointer bg-primary-light/60 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all border border-purple-100"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2 mb-1 md:mb-2">
                            <span className="material-symbols-outlined text-primary-dark text-3xl md:text-3xl">workspace_premium</span>
                            <h3 className="text-3xl md:text-4xl font-black text-purple-950">3+</h3>
                        </div>
                        <p className="text-sm md:text-base font-semibold text-primary-dark/80 leading-tight">Years of<br className="hidden md:block"/> Excellence</p>
                    </div>

                    {/* Box 2: Expert Counsellors */}
                    <div 
                        onClick={() => navigate('/contact')}
                        className="cursor-pointer bg-fuchsia-100/60 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all border border-fuchsia-100"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2 mb-1 md:mb-2">
                            <span className="material-symbols-outlined text-primary-dark text-3xl md:text-3xl">groups</span>
                            <h3 className="text-3xl md:text-4xl font-black text-purple-950">15+</h3>
                        </div>
                        <p className="text-sm md:text-base font-semibold text-primary-dark/80">Expert Counsellors</p>
                    </div>

                    {/* Box 3: Global Destinations */}
                    <div 
                        onClick={() => navigate('/contact')}
                        className="cursor-pointer bg-indigo-100/60 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all border border-indigo-100"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2 mb-1 md:mb-2">
                            <span className="material-symbols-outlined text-primary-dark text-3xl md:text-3xl">public</span>
                            <h3 className="text-3xl md:text-4xl font-black text-purple-950">30+</h3>
                        </div>
                        <p className="text-sm md:text-base font-semibold text-primary-dark/80 leading-tight">Global Study<br className="hidden md:block"/> Destination</p>
                    </div>

                    {/* Box 4: Students Counselled */}
                    <div 
                        onClick={() => navigate('/contact')}
                        className="cursor-pointer bg-primary-light/50/80 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all border border-purple-100"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2 mb-1 md:mb-2">
                            <span className="material-symbols-outlined text-primary-dark text-3xl md:text-3xl">forum</span>
                            <h3 className="text-2xl md:text-4xl font-black text-purple-950">17.5k+</h3>
                        </div>
                        <p className="text-sm md:text-base font-semibold text-primary-dark/80 leading-tight">Student<br className="hidden md:block"/> Counselled</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HighlightsSection;
