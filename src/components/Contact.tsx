import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-left mb-16">
                    <h2 className="text-3xl md:text-5xl mb-6 font-bold text-gray-900">
                        Get In Touch
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="border border-red-500 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-8">Let's Connect!</h3>
                        <div className="space-y-6">
                            <a
                                href="mailto:zn.zibanouri@gmail.com"
                                className="flex items-center p-4 bg-white/10 rounded-lg border border-gray-400/20 hover:border-gray-400/80 transition-all duration-300 group"
                            >
                                <Mail className="w-6 h-6 text-gray-400 mr-4 transition-all duration-300 transform transform-gpu group-hover:scale-[1.1]" />
                                <div>
                                    <div className="font-medium">Email</div>
                                    <div className="text-slate-600 text-sm">
                                        zn.zibanouri@gmail.com
                                    </div>
                                </div>
                            </a>
                            <a
                                href="https://github.com/zibanouri"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center p-4 bg-white/10 rounded-lg border border-gray-400/20 hover:border-gray-400/80 transition-all duration-300 group"
                            >
                                <Github className="w-6 h-6 text-gray-400 mr-4 transition-all duration-300 transform transform-gpu group-hover:scale-[1.1]" />
                                <div>
                                    <div className="font-medium">GitHub</div>
                                    <div className="text-slate-500 text-sm">
                                        github.com/zibanouri
                                    </div>
                                </div>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ziba-nouri/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center p-4 bg-white/10 rounded-lg border border-gray-400/20 hover:border-gray-400/80 transition-all duration-300 group"
                            >
                                <Linkedin className="w-6 h-6 text-gray-400 mr-4 transition-all duration-300 transform transform-gpu group-hover:scale-[1.1]" />
                                <div>
                                    <div className="font-medium">LinkedIn</div>
                                    <div className="text-slate-500 text-sm">
                                        linkedin.com/in/ziba-nouri
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='border border-amber-700 rounded-lg'>
                        <form action="javascript:void(0)">

                            <div>
                                <label htmlFor="Name" className='block text-sm font-medium mb-1'>Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="Name"
                                    required
                                    placeholder="Your name"
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring-1 transition-all duration-500 text-slate-500 placeholder:text-slate-400"

                                />

                            </div>

                            <div className=''>
                                <label htmlFor="Email" className='block text-sm font-medium mb-1'>Email</label>
                                <input
                                    type="Email"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="your email@example.com"
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring-1 transition-all duration-500 text-slate-500 placeholder:text-slate-400"

                                />

                            </div>

                            <div className=''>
                                <label htmlFor="massage" className='block text-sm font-medium mb-1'>Massage</label>
                                <textarea
                                    id="massage"
                                    name="massage"
                                    required
                                    rows={8}
                                    placeholder="Tell Me About Your Project..."
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring-1 transition-all duration-500 text-slate-500 placeholder:text-slate-400"
                                    style={{
                                        resize: 'none',
                                    }
                                    }
                                />

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;