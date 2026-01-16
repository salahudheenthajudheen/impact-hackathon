import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    const isDay1 = location.pathname === '/day1';
    const isDay2 = location.pathname === '/day2';
    const isHome = location.pathname === '/';

    return (
        <div className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:px-8 flex justify-center">
            <header className="w-full max-w-6xl backdrop-blur-md bg-background-dark/80 border border-border-subtle rounded-xl flex items-center justify-between px-6 py-3 shadow-2xl">
                <Link to="/" className="flex items-center gap-3">
                    <div className="size-8 bg-primary rounded flex items-center justify-center text-background-dark">
                        <span className="material-symbols-outlined text-xl font-bold">code_blocks</span>
                    </div>
                    <h2 className="text-white text-lg font-display font-bold leading-tight tracking-tight hidden sm:block">MuLearn CEK</h2>
                </Link>
                <nav className="hidden md:flex items-center gap-1">
                    <Link
                        to="/"
                        className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors rounded-full ${isHome ? 'text-primary bg-primary/10' : 'text-gray-300 hover:text-primary hover:bg-white/5'
                            }`}
                    >
                        <span className="material-symbols-outlined text-[16px]">home</span>
                        Home
                    </Link>
                    <Link
                        to="/day1"
                        className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors rounded-full ${isDay1 ? 'text-white bg-white/10 border border-teal-500/30' : 'text-gray-300 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        {isDay1 && (
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                        )}
                        <span className={`material-symbols-outlined text-[16px] ${isDay1 ? 'text-green-500' : ''}`}>eco</span>
                        Day 1
                    </Link>
                    <Link
                        to="/day2"
                        className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors rounded-full ${isDay2 ? 'text-white bg-white/10 border border-fuchsia-500/30' : 'text-gray-300 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        {isDay2 && (
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
                            </span>
                        )}
                        <span className={`material-symbols-outlined text-[16px] ${isDay2 ? 'text-fuchsia-500' : ''}`}>psychology</span>
                        Day 2
                    </Link>
                    <a className="text-gray-300 hover:text-primary text-sm font-medium transition-colors px-3 py-2 rounded-full hover:bg-white/5" href="#schedule">Schedule</a>
                </nav>
                <button className="bg-primary hover:bg-primary-dark text-background-dark text-sm font-bold h-9 px-5 rounded-lg transition-all transform hover:scale-105 neon-glow-primary">
                    Register Now
                </button>
            </header>
        </div>
    );
}

export default Header;
