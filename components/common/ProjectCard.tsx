import { motion } from "framer-motion";
import { ProjectProps } from "../interfaces";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard: React.FC<ProjectProps> = ({ image, title, description, tags, href }) => {
    const card = (
        <motion.div
            whileHover={{ y: -10 }}
            className="group relative bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-200 dark:border-white/5 hover:border-blue-500/30 transition-all duration-500 shadow-sm dark:shadow-none cursor-pointer"
        >
            <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60" />

                {/* Live link indicator on hover */}
                {href && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-3 py-1.5 flex items-center gap-1.5 text-white text-xs font-semibold">
                            <FiExternalLink size={11} />
                            View Live
                        </div>
                    </div>
                )}
            </div>

            <div className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {title}
                    </h3>
                    <div className="bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] px-2 py-1 rounded-md uppercase font-bold tracking-tighter">
                        Web App
                    </div>
                </div>

                <p className="text-slate-600 dark:text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                    {description || "Modern user interface design with high performance and smooth user experience."}
                </p>
                <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-xs text-slate-500 dark:text-gray-500 font-medium">
                        {tags || "React • Next.js • Tailwind"}
                    </span>
                </div>
            </div>
        </motion.div>
    );

    if (href) {
        return (
            <Link href={href} target="_blank" rel="noopener noreferrer" className="block">
                {card}
            </Link>
        );
    }

    return card;
};

export default ProjectCard;