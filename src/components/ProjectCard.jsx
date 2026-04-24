import { useState } from 'react'

export default function ProjectCard({ title, description, media = [], link }) {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <>
      <div className="project-card">
        <div className="media-gallery">
          {media.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={title}
              className="project-image"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

        <h3>{title}</h3>
        <p>{description}</p>

        {link && (
          <a href={link} target="_blank" rel="noreferrer">
            View Project
          </a>
        )}
      </div>

      {/* FULLSCREEN LIGHTBOX (outside card) */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Expanded view" />
        </div>
      )}
    </>
  )
}