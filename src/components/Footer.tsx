import {Instagram} from "lucide-react"


const Footer = () => {
    return(
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
            </div>
        </footer>
    )
}

export default Footer;