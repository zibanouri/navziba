import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-left mb-16">
                    <h2 className="text-3xl md:text-5xl mb-6 font-bold text-gray-900">
                        Get In Touch
                    </h2>
                </div>

                <div className="grid md:gril-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold mb-8">
                            Lets Conect!
                        </h3>
                        <div className="space-y-6">
                            <a href="mailto:zn.zibanouri@gmaiol.com"
                            className="flex items-center p-4 bg-white/10 rounded-lg border border-gray-400/20 hover:border-gray-600/80 shadow-gray-700 transition-all duration-300 group">
                                <Mail className="w-6 h-6 text-gray-800 mr-4 transition-all duration-300 transform transform-gpu group-hover:scale-[1.1]"/>
                                <div>
                                    <div className="font-medium">Email</div>
                                    <div className="text-slate-600 text-sm">zn.zibanouri@gmail.com</div>
                                </div>
                            </a>
                              <a
                                href="https://github.com/farzadasgari"
                                className="flex items-center p-4 bg-white/10 rounded-lg border border-gray-400/20 hover:border-gray-400/80 transition-all duration-300 group"
                            >
                                <Github className="w-6 h-6 text-gray-400 mr-4 transition-all duration-300 transform transform-gpu group-hover:scale-[1.1]" />
                                <div>
                                    <div className="font-medium">Github</div>
                                    <div className="text-slate-500 text-sm">https://github.com/zibanouri</div>
                                </div>
                            </a>
                              <a
                                href="https://www.linkedin.com/in/farzad-asgari/"
                                className="flex items-center p-4 bg-white/10 rounded-lg border border-gray-400/20 hover:border-gray-400/80 transition-all duration-300 group"
                            >
                                 <Linkedin className="w-6 h-6 text-gray-400 mr-4 transition-all duration-300 transform transform-gpu group-hover:scale-[1.1]" />
                            <div>
                                    <div className="font-medium">Linkedin</div>
                                    <div className="text-slate-500 text-sm">https://www.linkedin.com/in/ziba-nouri/</div>
                                </div>
                            
                            </a>
                            
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;