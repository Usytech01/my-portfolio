import { motion } from "framer-motion";
import { ProjectProps } from "../interfaces";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";

/* ─────────────────────────────────────────
   Featured card — used for highlighted projects (e.g. My_Fix)
───────────────────────────────────────── */
const FeaturedCard: React.FC<ProjectProps> = ({ image, title, description, tags, href, badge }) => (
  <Link
    href={href ?? "#"}
    target="_blank"
    rel="noopener noreferrer"
    className="block group"
    aria-label={`View ${title} project`}
  >
    <motion.div
      whileHover={{ y: -8 }}
      className="relative rounded-3xl overflow-hidden border border-emerald-500/20 hover:border-emerald-400/60 transition-all duration-500 shadow-xl shadow-emerald-900/10 bg-[#111827]"
    >
      {/* Glow ring on hover */}
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-emerald-500/0 via-amber-400/0 to-emerald-500/0 group-hover:from-emerald-500/20 group-hover:via-amber-400/10 group-hover:to-emerald-500/20 transition-all duration-700 pointer-events-none z-10" />

      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transform group-hover:scale-105 transition-transform duration-700"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/30 to-transparent" />

        {/* LIVE pulse badge */}
        {badge && (
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/40 text-emerald-300 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {badge}
          </div>
        )}

        {/* Arrow icon top-right on hover */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-2 text-white">
            <FiArrowUpRight size={16} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-20">
        {/* Title row */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">
              My<span className="text-amber-400">_Fix</span>
            </h3>
            <p className="text-emerald-500/80 text-[10px] tracking-[0.2em] uppercase font-semibold mt-0.5">
              Your Trusted Home Fix
            </p>
          </div>
          <div className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] px-3 py-1 rounded-full font-bold tracking-wider uppercase">
            <FiExternalLink size={10} />
            Visit
          </div>
        </div>

        <p className="text-slate-400 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-emerald-500/30 via-amber-400/20 to-transparent mb-4" />

        {/* Tags + CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-xs text-slate-500 font-medium">{tags}</span>
          </div>
          <span className="text-xs font-semibold text-emerald-400 group-hover:text-amber-400 transition-colors flex items-center gap-1">
            my-fix1.vercel.app <FiArrowUpRight size={11} />
          </span>
        </div>
      </div>
    </motion.div>
  </Link>
);

/* ─────────────────────────────────────────
   Standard card — for all other projects
───────────────────────────────────────── */
const StandardCard: React.FC<ProjectProps> = ({ image, title, description, tags, href, badge }) => {
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

        {/* View Live hover badge */}
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
            {badge ?? "Web App"}
          </div>
        </div>

        <p className="text-slate-600 dark:text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
          {description ?? "Modern user interface design with high performance and smooth user experience."}
        </p>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <span className="text-xs text-slate-500 dark:text-gray-500 font-medium">
            {tags ?? "React • Next.js • Tailwind"}
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

/* ─────────────────────────────────────────
   Public export — routes to correct variant
───────────────────────────────────────── */
const ProjectCard: React.FC<ProjectProps> = (props) => {
  if (props.featured) return <FeaturedCard {...props} />;
  return <StandardCard {...props} />;
};

export default ProjectCard;