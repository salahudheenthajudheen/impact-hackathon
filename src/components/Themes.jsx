import { Link } from 'react-router-dom';

function Themes() {
    return (
        <section className="w-full bg-background-dark py-24 px-4 md:px-8 relative overflow-hidden" id="themes">
            {/* Decoration */}
            <div className="absolute right-0 top-20 w-1/3 h-full border-l border-border-subtle/30 pointer-events-none"></div>
            <div className="absolute left-10 bottom-10 size-64 border border-border-subtle rounded-full opacity-20 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto flex flex-col">
                <div className="mb-16 max-w-2xl">
                    <span className="text-primary font-mono text-sm tracking-widest uppercase mb-2 block">Event Tracks</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Dual Focus Challenge</h2>
                    <p className="text-gray-400 mt-4 text-lg">Two days, two distinct problem statements. Choose your battlefield.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                    {/* Day 01 Card */}
                    <Link to="/day1" className="group relative flex flex-col h-full mt-0 md:mt-0">
                        <div className="absolute -inset-0.5 bg-gradient-to-b from-secondary-green to-transparent opacity-20 rounded-2xl blur group-hover:opacity-40 transition duration-500"></div>
                        <div className="relative flex flex-col h-full bg-[#17201d] border border-secondary-green/30 hover:border-secondary-green/60 rounded-xl overflow-hidden transition-colors duration-300">
                            {/* Illustration */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src="/civic_tech.png"
                                    alt="Civic Tech Illustration"
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#17201d] via-transparent to-transparent"></div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-secondary-green/10 rounded-lg text-secondary-green border border-secondary-green/20">
                                        <span className="material-symbols-outlined text-3xl">account_balance</span>
                                    </div>
                                    <span className="font-mono text-secondary-green text-sm border border-secondary-green/30 px-3 py-1 rounded-full bg-secondary-green/5">DAY 01</span>
                                </div>
                                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-secondary-green transition-colors">Local Self Government</h3>
                                <p className="text-gray-400 mb-6 flex-grow">
                                    Develop civic tech solutions that streamline local governance and enhance citizen engagement.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-3 py-1 text-xs rounded-full bg-secondary-green/10 text-secondary-green border border-secondary-green/20">Civic Growth</span>
                                    <span className="px-3 py-1 text-xs rounded-full bg-secondary-green/10 text-secondary-green border border-secondary-green/20">Public Data</span>
                                    <span className="px-3 py-1 text-xs rounded-full bg-secondary-green/10 text-secondary-green border border-secondary-green/20">Service Delivery</span>
                                </div>
                                <div className="pt-4 border-t border-secondary-green/20 flex items-center justify-between">
                                    <span className="text-secondary-green text-sm font-medium">Explore Day 1</span>
                                    <span className="material-symbols-outlined text-secondary-green group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Day 02 Card (Staggered down on desktop) */}
                    <Link to="/day2" className="group relative flex flex-col h-full mt-0 md:mt-24">
                        <div className="absolute -inset-0.5 bg-gradient-to-b from-secondary-magenta to-transparent opacity-20 rounded-2xl blur group-hover:opacity-40 transition duration-500"></div>
                        <div className="relative flex flex-col h-full bg-[#1e1a24] border border-secondary-magenta/30 hover:border-secondary-magenta/60 rounded-xl overflow-hidden transition-colors duration-300">
                            {/* Illustration */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src="/ai_innovation.png"
                                    alt="AI Innovation Illustration"
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1a24] via-transparent to-transparent"></div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-secondary-magenta/10 rounded-lg text-secondary-magenta border border-secondary-magenta/20">
                                        <span className="material-symbols-outlined text-3xl">psychology</span>
                                    </div>
                                    <span className="font-mono text-secondary-magenta text-sm border border-secondary-magenta/30 px-3 py-1 rounded-full bg-secondary-magenta/5">DAY 02</span>
                                </div>
                                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-secondary-magenta transition-colors">AI-Based Solutions</h3>
                                <p className="text-gray-400 mb-6 flex-grow">
                                    Leverage Neural Networks and Machine Learning to build predictive models and intelligent agents.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-3 py-1 text-xs rounded-full bg-secondary-magenta/10 text-secondary-magenta border border-secondary-magenta/20">Neural Networks</span>
                                    <span className="px-3 py-1 text-xs rounded-full bg-secondary-magenta/10 text-secondary-magenta border border-secondary-magenta/20">Predictive Analysis</span>
                                    <span className="px-3 py-1 text-xs rounded-full bg-secondary-magenta/10 text-secondary-magenta border border-secondary-magenta/20">Automation</span>
                                </div>
                                <div className="pt-4 border-t border-secondary-magenta/20 flex items-center justify-between">
                                    <span className="text-secondary-magenta text-sm font-medium">Explore Day 2</span>
                                    <span className="material-symbols-outlined text-secondary-magenta group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Themes;
