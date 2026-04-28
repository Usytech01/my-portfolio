import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedPhotoBackground from "../common/AnimatedPhotoBackground";
import OutlineButton from "../common/OutlineButton";
import { BackgroundLines } from "../ui/background-lines";

const Layout: React.FC = () => {
    return(
        <section id="home" className="min-h-screen relative overflow-hidden flex flex-col justify-center py-20">
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 min-h-screen">
                <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                            <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide uppercase">Available for freelance</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-[1.1] mb-6">
                            Hi, I'm <span className="text-gradient">Usman</span> <br/>
                            <span className="text-3xl md:text-5xl text-slate-500 dark:text-gray-400">Designer & Developer</span>
                        </h1>

                        <p className="text-slate-700 dark:text-slate-300 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
                            I craft modern digital experiences with <span className="text-foreground">clean aesthetics</span> and <span className="text-foreground">smooth interactions</span>. Specialist in React, Next.js, and Premium UI Design.
                        </p>


                        <div className="flex flex-wrap items-center gap-6">
                            <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-full text-white font-bold transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-500/20">
                                View My Work
                            </button>
                            <button className="px-8 py-4 rounded-full text-foreground font-bold border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-300">
                                Download CV
                            </button>

                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="relative z-10 p-4">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                                <div className="relative bg-slate-200 dark:bg-slate-900 rounded-full p-2">

                                    <Image
                                        src="/assets/pic.jpeg"
                                        alt="Usman O. Dio"
                                        width={500}
                                        height={500}
                                        className="rounded-full w-full max-w-[400px] aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                        
                        {/* Floating Stats */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="absolute -bottom-4 -left-4 glass p-4 rounded-2xl shadow-2xl z-20"
                        >
                            <p className="text-blue-600 dark:text-blue-400 font-bold text-2xl">3+</p>
                            <p className="text-slate-600 dark:text-gray-400 text-xs uppercase tracking-widest font-semibold">Years Experience</p>
                        </motion.div>

                    </motion.div>
                </div>
            </BackgroundLines>
        </section>
    )
}

export default Layout;