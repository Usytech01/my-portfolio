import { motion } from "framer-motion";
import { ProjectProps } from "../interfaces";
import Image from "next/image";

const ProjectCard: React.FC<ProjectProps> = ({image, title}) => { 
    return(
        <motion.div
            whileHover={{ y: -10 }}
            className="group relative bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-200 dark:border-white/5 hover:border-blue-500/30 transition-all duration-500 shadow-sm dark:shadow-none"
        >

            <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                    src={image} 
                    alt={title} 
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60" />
            </div>

            <div className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
                    <div className="bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] px-2 py-1 rounded-md uppercase font-bold tracking-tighter">
                        Web App
                    </div>
                </div>

                <p className="text-slate-600 dark:text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                    Modern user interface design with high performance and smooth user experience.
                </p>
                <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-xs text-slate-500 dark:text-gray-500 font-medium">React • Next.js • Tailwind</span>
                </div>

            </div>
        </motion.div>
    )
}

export default ProjectCard;