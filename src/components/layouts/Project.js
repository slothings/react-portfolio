import React from 'react'

const Project = ({ id, name, url, description }) => {
  return (
    <div data-aos="fade-up" className=" col-12 col-lg-4 project-card">
      <div className="image-project">
        <div id={id} className="img-pro"></div>
      </div>
      <a title={url} className="project-name" rel="noopener noreferrer" target="_blank" href={url}><h2>{name}</h2></a>
      { description && <h3>{description.map(description => description)}</h3>}
    </div>
  )
}

export default Project