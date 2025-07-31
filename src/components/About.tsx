import { User, Code } from 'lucide-react';

const About = () => {
    const iDo = [
        'Front-end developer',
        'React',
        'Scss',
        'Typescript',
        'Tailwindcss',
        'Shell Script Developer',
        'html',
        'css',
    ];
    return (
        <section
            id="about"
            className="py-20 px-4 bg-gradient-to-br from-slate-200 via-slate-50 to-slate-300 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-serif md:text-5xl bg-gradient-to-br from-slate-300 via-slate-60 to-slate-300 rounded-2xl">
                        About Me
                    </h2>
                    <div className="rounded-lg bg-gradient-to-br from-slate-300 via-slate-60 to-slate-200 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="bg-slate-400/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-gray-500/60 transition-all duration-300">
                        <div className="flex items-center mb-6 space-x-3">
                            <User className="w-6 h-7 text-slate-800 font-black" />
                            <h3 className="font-semibold text-2xl">My Story</h3>
                        </div>
                        <p className="text-slate-900 leading-relaxed mb-8">
                            Hello, I am a single mother with many challenges,
                             but my heart is happy because I am here and I am moving forward to achieve my goals,
                              despite all the difficulties.. I love
                            programming, although my main field of study in
                            university was something completely different. But
                            the more I learn this skill, the more I am
                            fascinated by it. I think it is unique with all the
                            difficulties and it makes me feel good. To achieve
                            my dreams and goals, every difficulty is always a
                            challenge for me because I want to be an independent
                            mother and stand on my own two feet with all my
                            heart. The world and the difficulties of life cannot
                            reduce my efforts to achieve my goals. This is Iran,
                            where challenges and difficulties are an inseparable
                            part of life.
                        </p>
                    </div>
                    <div className="bg-slate-400/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-gray-500/60 transition-all duration-300">
                        <div className="flex items-center mb-6 space-x-3">
                            <Code className="w-6 h-7 text-slate-800 font-black" />
                            <h3 className="font-semibold text-2xl">
                                What I Do
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {iDo.map((item) => (
                                <div className="flex items-center">
                                    <div className="w-3 h-3 rounded-full mr-3 bg-amber-500"></div>
                                    {item}
                                    <span className="text-slate-800"></span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
