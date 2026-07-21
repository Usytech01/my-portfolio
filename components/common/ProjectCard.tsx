import { motion } from "framer-motion";
import { ProjectProps } from "../interfaces";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";

/* ─────────────────────────────────────────
   Featured card — used for highlighted projects (Edu-Learn, My_Fix, D TECH Social)
───────────────────────────────────────── */
const FeaturedCard: React.FC<ProjectProps> = ({ image, title, description, tags, href, badge }) => {
  const titleLower = title.toLowerCase();
  const isEduLearn = titleLower.includes("edu");
  const isDTech = titleLower.includes("d tech") || titleLower.includes("d-tech") || titleLower.includes("social");

  // Theme styling based on project
  const theme = isEduLearn
    ? {
        border: "border-purple-500/30 hover:border-purple-400/80 shadow-purple-900/20",
        glow: "group-hover:from-purple-500/20 group-hover:via-indigo-400/10 group-hover:to-purple-500/20",
        badgeBg: "bg-purple-950/80 border-purple-400/50 text-purple-200 shadow-md backdrop-blur-md",
        badgeDot: "bg-purple-400",
        titleHover: "group-hover:text-purple-300",
        accentText: "text-purple-400",
        tagDot: "bg-purple-400",
        subtitle: "Data-Driven LMS Platform",
        visitBadge: "bg-purple-500/10 border-purple-500/30 text-purple-300 group-hover:bg-purple-500 group-hover:text-white",
        linkText: "text-purple-400 group-hover:text-indigo-300",
        displayUrl: "edu-learn1.netlify.app",
        divider: "from-purple-500/40 via-indigo-400/20 to-transparent",
      }
    : isDTech
    ? {
        border: "border-cyan-500/30 hover:border-cyan-400/80 shadow-cyan-900/20",
        glow: "group-hover:from-cyan-500/20 group-hover:via-sky-400/10 group-hover:to-blue-500/20",
        badgeBg: "bg-cyan-950/80 border-cyan-400/50 text-cyan-200 shadow-md backdrop-blur-md",
        badgeDot: "bg-cyan-400",
        titleHover: "group-hover:text-cyan-300",
        accentText: "text-cyan-400",
        tagDot: "bg-cyan-400",
        subtitle: "Social Media & Connect Platform",
        visitBadge: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300 group-hover:bg-cyan-500 group-hover:text-white",
        linkText: "text-cyan-400 group-hover:text-sky-300",
        displayUrl: "d-tech-social.vercel.app",
        divider: "from-cyan-500/40 via-sky-400/20 to-transparent",
      }
    : {
        border: "border-emerald-500/30 hover:border-emerald-400/80 shadow-emerald-900/20",
        glow: "group-hover:from-emerald-500/20 group-hover:via-amber-400/10 group-hover:to-emerald-500/20",
        badgeBg: "bg-emerald-950/80 border-emerald-400/50 text-emerald-200 shadow-md backdrop-blur-md",
        badgeDot: "bg-emerald-400",
        titleHover: "group-hover:text-emerald-300",
        accentText: "text-amber-400",
        tagDot: "bg-emerald-400",
        subtitle: "Lagos Home Services Marketplace",
        visitBadge: "bg-amber-500/10 border-amber-500/30 text-amber-300 group-hover:bg-amber-500 group-hover:text-white",
        linkText: "text-emerald-400 group-hover:text-amber-300",
        displayUrl: "my-fix1.vercel.app",
        divider: "from-emerald-500/40 via-amber-400/20 to-transparent",
      };

  const renderTitle = () => {
    if (isEduLearn) {
      return (
        <>
          Edu-<span className={theme.accentText}>Learn</span>
        </>
      );
    }
    if (isDTech) {
      return (
        <>
          D <span className={theme.accentText}>TECH</span> Social
        </>
      );
    }
    return (
      <>
        My<span className={theme.accentText}>_Fix</span>
      </>
    );
  };

  return (
    <Link
      href={href ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="block group h-full"
      aria-label={`View ${title} project`}
    >
      <motion.div
        whileHover={{ y: -8 }}
        className={`relative rounded-3xl overflow-hidden border ${theme.border} transition-all duration-500 shadow-xl bg-slate-900/90 dark:bg-[#0f172a] flex flex-col h-full`}
      >
        {/* Glow ring on hover */}
        <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br from-transparent via-transparent to-transparent ${theme.glow} transition-all duration-700 pointer-events-none z-10`} />

        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
            priority
          />
          {/* Subtle bottom gradient overlay for readability without obscuring top header */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent opacity-80" />

          {/* LIVE pulse badge */}
          {badge && (
            <div className={`absolute top-3 left-3 flex items-center gap-2 border ${theme.badgeBg} text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full z-20`}>
              <span className={`w-1.5 h-1.5 rounded-full ${theme.badgeDot} animate-pulse`} />
              {badge}
            </div>
          )}

          {/* Arrow icon top-right on hover */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0 z-20">
            <div className="bg-slate-950/80 backdrop-blur-md border border-white/20 rounded-full p-2.5 text-white shadow-lg">
              <FiArrowUpRight size={16} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 relative z-20 flex flex-col flex-grow justify-between">
          <div>
            {/* Title row */}
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className={`text-2xl font-bold text-white ${theme.titleHover} transition-colors duration-300`}>
                  {renderTitle()}
                </h3>
                <p className="text-slate-400 text-[10px] tracking-[0.2em] uppercase font-semibold mt-0.5">
                  {theme.subtitle}
                </p>
              </div>
              <div className={`flex items-center gap-1.5 border ${theme.visitBadge} text-[10px] px-3 py-1 rounded-full font-bold tracking-wider uppercase transition-colors duration-300`}>
                <FiExternalLink size={10} />
                Visit
              </div>
            </div>

            <p className="text-slate-300 dark:text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3 font-normal">
              {description}
            </p>
          </div>

          <div>
            {/* Divider */}
            <div className={`h-px bg-gradient-to-r ${theme.divider} mb-4`} />

            {/* Tags + CTA */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${theme.tagDot}`} />
                <span className="text-xs text-slate-400 font-medium">{tags}</span>
              </div>
              <span className={`text-xs font-semibold ${theme.linkText} transition-colors flex items-center gap-1`}>
                {theme.displayUrl} <FiArrowUpRight size={11} />
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

/* ─────────────────────────────────────────
   Standard card — for non-featured projects
───────────────────────────────────────── */
const StandardCard: React.FC<ProjectProps> = ({ image, title, description, tags, href, badge }) => {
  const card = (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-blue-500/40 transition-all duration-500 shadow-md dark:shadow-none cursor-pointer flex flex-col h-full"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60" />

        {/* View Live hover badge */}
        {href && (
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 z-20">
            <div className="bg-slate-950/80 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 flex items-center gap-1.5 text-white text-xs font-semibold">
              <FiExternalLink size={11} />
              View Project
            </div>
          </div>
        )}
      </div>

      <div className="p-6 relative z-10 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
            <div className="bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] px-2.5 py-1 rounded-full uppercase font-bold tracking-wider">
              {badge ?? "Web App"}
            </div>
          </div>

          <p className="text-slate-600 dark:text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
            {description ?? "Modern user interface design with high performance and smooth user experience."}
          </p>
        </div>

        <div className="flex items-center gap-2 pt-3 border-t border-slate-200/50 dark:border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <span className="text-xs text-slate-500 dark:text-gray-400 font-medium">
            {tags ?? "React • Next.js • Tailwind"}
          </span>
        </div>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {card}
      </Link>
    );
  }
  return card;
};

/* ─────────────────────────────────────────
   Public export — routes to correct variant
───────────────────────────────────────── */
const ProjectCard: React.FC<ProjectProps> = (props) => {
  if (props.featured) return <FeaturedCard {...props} />;
  return <StandardCard {...props} />;
};

export default ProjectCard;