interface project {
     imageURL: string;
    title: string;
    description: string;
    topics: string[];
    liveURL: string;
    githubURL: string;
}


const ProjectCard = () => {
    return (
        <div className="max-w-80 mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-400/20 hover:border-gray-400/80 transition-all duration-300 group flex flex-col h-full">
                <div className="relative overflow-hidden">
                    <img src="/portfolio/public/project-image/project2.webp" alt="zibaCard" className="w-full h-full object-cover"/>
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-orange-600/20
                        opacity-60 group-hover:opacity-20 transition-opacity duration-300">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;




<img src="/portfolio/public/project-image/project1.webp" alt="zibaCard" className="w-full h-full object-cover"/>