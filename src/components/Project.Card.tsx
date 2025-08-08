const ProjectCard = () => {
    return (
        <div className="max-w-80 mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-y-hidden border border-gray-400/20 hover:border-gray-400/80 transition-all duration-300 group flex flex-col h-full">
                <div className="relative overflow-hidden">
                    <div className="w-full h-48 bg-cover bg-center relative">
                        <img src="/portfolio/public/project-image/project1.webp" alt="zibaCard" />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectCard;