function Venue() {
    return (
        <section className="w-full border-t border-gray-800 bg-[#0f1113] relative" id="venue">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
                {/* Info Side */}
                <div className="p-10 md:p-16 flex flex-col justify-between order-2 lg:order-1">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <span className="material-symbols-outlined text-primary">location_on</span>
                            <span className="text-white font-bold tracking-wide uppercase">Venue Location</span>
                        </div>
                        <h3 className="text-3xl font-bold font-display text-white mb-4">
                            Commune - Work Near Home<br />Kottarakkara
                        </h3>
                        <p className="text-gray-400 max-w-md mb-8">
                            The hub of innovation in the district. Join us at the Commune co-working space for the event.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4 p-4 rounded-lg bg-[#1a1d21] border border-gray-800">
                                <div className="bg-blue-500/20 p-2 rounded-md text-blue-400">
                                    <span className="material-symbols-outlined">work</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">Work Near Home</h4>
                                    <p className="text-xs text-gray-400">Official Initiative Partner</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Side */}
                <div className="relative w-full h-full min-h-[400px] order-1 lg:order-2 bg-gray-900 overflow-hidden group">
                    {/* Placeholder Map Image with Dark Mode Styling */}
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                        style={{
                            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFDrCkOiWkYo2be6HtvG5JcXtvy5leEKyp5pNcfOwzkZub4WKAi201nJJshPN0Jbtbx89Ve3NiTaWNaTNwmOstjE-EMg7XxNEz32ma4YD0y10YSD2HjtjKCQefCzOY_pCz7p9KBeVTgX5Fe0T0J9If-oDTMd4UdIlAxSkQg5jJyE7cEnPFrzQePMESq1Bjo82PilvTTdaDrhmSG8vPMV-mA6U0_GBDUExH3Y9UaOv11P0gOsQreDSalgYemCwTxVmUnTphhLQfMQ')",
                            filter: "grayscale(100%) invert(1) contrast(1.2) brightness(0.6)"
                        }}
                    ></div>

                    {/* Decorative Map Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                        <div className="relative">
                            <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute top-0 left-0"></div>
                            <div className="w-4 h-4 bg-primary rounded-full relative z-10 border-2 border-white"></div>
                        </div>
                        <div className="bg-black/80 text-white text-xs px-3 py-1 rounded backdrop-blur-sm border border-gray-700">
                            Commune WNH
                        </div>
                    </div>

                    {/* Gradient Overlay for smooth transition */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0f1113]/20 to-[#0f1113] pointer-events-none lg:block hidden"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1113] via-transparent to-transparent pointer-events-none lg:hidden block"></div>
                </div>
            </div>
        </section>
    );
}

export default Venue;
