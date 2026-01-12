import { motion } from "framer-motion";
import { ProjectProps } from "../interfaces";

const ProjectCard: React.FC<ProjectProps> = ({image, title}) => { 
    // Or you can use this: export default faunction ProjectCard({image, title}: ProjectProps) 
    return(
        <div className="">
            <motion.div
                whileHover={{scale: 1.04}}
                transition={{type: "spring", stiffness: 200 }}
                className="bg-[#0BiF3D] rounded-xl overflow-hidden shadow-lg"
            >
                <img src={image} alt={title} className="width-[100px] height" />

                <div className="p-5">
                    <h3 className="text-white font-semibold">{title}</h3>
                    <p className="text-gray-400 text-sm">UI/UX Design and Web Development</p>
                </div>
            </motion.div>
        </div>
    )
}

export default ProjectCard;