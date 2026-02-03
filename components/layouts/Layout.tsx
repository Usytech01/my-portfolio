import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedPhotoBackground from "../common/AnimatedPhotoBackground";
import OutlineButton from "../common/OutlineButton";

const Layout: React.FC = () => {
    return(
        <section className="min-h-screen bg-[#061427] flex items-center pt-10">
             {/* Background */}
             {/* <AnimatedPhotoBackground /> */}

            <div className="mx-auto grid md:grid-cols-2 gap-8 px-6">
                {/* Left Content */}
                
                <motion.div
                    initial={{opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{duration: 0.6}}
                >
                   <OutlineButton>Usman O. Dio</OutlineButton>
                    <h1 className="text-3xl md:text-6Xl font-bold text-white leading-tight my-2">HI! I'M USMAN <br/> 
                        <span className="text-blue-500">I'M A DESIGNER AND A DEVELOPER</span>
                    </h1>

                    <p className="text-gray-400 mt-6 max-w-md">I Design Modern UI/UX Experience Clean Aesthetics And Smooth Interactions | <br/>
                        <span className="">Professional Fullstack Web Developer, Crafting Modern React & Next.js Experiences.</span>
                    </p>

                    <div className="flex items-center gap-4 mt-8">
                        <button className="bg-blue-500 px-6 py-3 rounded-full text-white hover:scale-105 transition">Get In Touch</button>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1}}
                    className="flex justify-center"
                >
                    <div className="flex grid-cols-2 gap-2">
                        <Image
                            src="/assets/pic.jpeg"
                            alt="profile"
                            width={300}
                            height={300}
                            className="h-[300px] w-[300px] object-cover rounded-full border border-blue-500/30 hover:scale-110 transition-transform duration-300 overflow-hidden"
                         />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Layout;