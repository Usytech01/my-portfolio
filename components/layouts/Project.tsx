import React from 'react'
import ProjectCard from '../common/ProjectCard'
import PrimaryButton from '../common/PrimaryButton';


const Project: React.FC = () => {
  return (
    <section className="bg-[#061427] py-24">
      <div className="max-w-7x1 max-auto px-16 bg-[#0B1F3D]">
        <h2 className="text-4xl font-bold text-white mb-12">Recent Projects</h2>

        <div className="grid md:grid-cols-3 gap-8 justify-center">
          <ProjectCard image="./assets/p1.jpg" title="Digital App UI" />
          <ProjectCard image="./assets/p3.png" title="Social Media Web" />
          <ProjectCard image="./assets/p2.jpg" title="Admin Dashboard" />
        </div>

        <div className="py-6 bg-blue6"><PrimaryButton>See More..</PrimaryButton>
</div>
      </div>
    </section>
  )
}

export default Project;