import { Instagram, Linkedin, Mail, Github } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const socialLinks = [
        {
            name: "Email",
            href: "mailto:zn.zibanouri@gmail.com",
            icons: "Mail",
        },
        {
            name: "Github",
            href: "https://github.com/zibanouri",
            icons: "Github",
        },
        {
            name: "Instagram",
            href: "ziba_n.r",
            icons: "Instagram",
        },
        {
            name: "Linkdin",
            href: "https://www.linkedin.com/in/ziba-nouri/",
            icons: "Linkdin",
        },
    ];

    return (
        <footer className="py-12 px-4 border-t border-gray-500/30 bg-gray-50/40 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 text-center mb:text-left">
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-950 to-blue-800 bg-clip-text text-transparent mb-2">
                            Ziba Nouri
                        </div>
                        <p className="text-slate-900 text-sm">
                            Fulfilling a 20-year-old dream with programming
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Instagram />

                    </div>
                </div>
                <div className="mt-8 pt-6 border-t border-black/30 text-center">
                    <p className="text-gray-800 text-sm">
                        © {currentYear}Ziba Nouri All Rights Reserved Made with by Ziba
                        <a className="ml-2 text-pink-700 hover:text-pink-600 hover:underline transition-all duration-300 mb-2"
                            href="https://github.com/zibanouri" >
                            Ziba
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;