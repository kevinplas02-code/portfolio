import ProjectCard from './ProjectCard'

import p1_img1 from '../assets/Plas_Kevin_Shape_02122025.jpg'
import p1_img2 from '../assets/Plas_Kevin_Value_02262025.jpg'
import p1_img3 from '../assets/thumbnail_IMG_5362.jpg'

import p2_img1 from '../assets/Final_lvl1.gif'
import p2_img2 from '../assets/Final_lvl2.gif'
import p2_img3 from '../assets/Final_lvl3.gif'

import p3_img1 from '../assets/screenshot1.png'
import p3_img2 from '../assets/screenshot2.png'
import p3_img3 from '../assets/screenshot3.png'

export default function Projects() {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Projects</h2>

      <div className="projects-container">

        <ProjectCard
          title="2D Art"
          description="Art pieces done by way of micron pens, graphite, and stencil work"
          media={[p1_img1, p1_img2, p1_img3]}
        />

        <ProjectCard
          title="Game Art"
          description="2D Platformer Level Concepts"
          media={[p2_img1, p2_img2, p2_img3]}
        />

        <ProjectCard
          title="Web Design"
          description="Websites with functional text boxes, SQLs, and table formats"
          media={[p3_img1, p3_img2, p3_img3]}
        />

      </div>
    </div>
  )
}