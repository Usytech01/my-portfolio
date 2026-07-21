
export const navItems = ["Home", "About", "Project", "Service", "Contact"]

export interface ProjectProps{
    image: string;
    title: string;
    description?: string;
    tags?: string;
    href?: string;
    badge?: string;
    featured?: boolean;
}

export const services = [
    "UI Design",
    "UX Research",
    "Web Development",
    "Brand Identity",
]
