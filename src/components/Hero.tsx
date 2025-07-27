import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen relative overflow-hidden w-full bg-slate-800">
            <div className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-12 p-8 relative z-10">
                <div className="flex-shrink-0">
                    <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20">
                        <img
                            className="w-full h-full object-cover"
                            src="public/ziba.png"
                            alt="image-ziba"
                        />
                    </div>
                </div>
                <div className="text-center md:text-left max-w-2xl">
                    <div className="mb-6">
                        <h1 className="text-5xl md:text-7xl font-bold text-white">
                            Ziba Nouri
                        </h1>
                    </div>
                    <div className="mb-8">
                        <p className="text-xl md:text-2xl text-blue-300">
                            ● Frontend Developer
                        </p>
                    </div>
                    <div className="mb-8">
                        <div className="text-lg text-slate-300 leading-relaxed space-y-2">
                            <p>
                                <span className="text-blue-400 font-semibold">
                                    Skills:
                                </span>
                            </p>
                            <p>• HTML5, CSS3, JavaScript</p>
                            <p>• React.js</p>
                            <p>• Tailwind CSS, Bootstrap</p>
                            <p>• Git, GitHub</p>
                            <p>• Responsive Design</p>
                            <p className="mt-4">
                                <span className="text-blue-400 font-semibold">
                                    Experience:
                                </span>{' '}
                                Frontend Developer
                            </p>
                            <p className="mt-4">
                                <span className="text-blue-400 font-semibold">
                                    Contact:
                                </span>
                            </p>
                            <p>Email: zn.zibanouri@gmail.com</p>
                            <p>GitHub: github.com/zibanouri</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button
                            className="cursor-pointer bg-gradient-to-r from-blue-500 to-cyan-400
                        hover:shadow-lg text-white px-8 py-4 rounded-lg font-semibold transition-all
                        duration-200 transform-gpu hover:scale-[1.1] shadow-md"
                        >
                            View My Work
                        </button>
                        <button
                            className="cursor-pointer border-2 border-blue-500 text-blue-400
                        hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all
                        duration-300 transform-gpu hover:scale-[1.1]"
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
                <ArrowDown className="w-6 h-6 text-slate-400" />
            </div>
        </section>
    );
};

export default Hero;
