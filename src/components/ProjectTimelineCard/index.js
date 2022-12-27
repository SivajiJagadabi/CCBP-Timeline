// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    duration,
    description,
    projectUrl,
  } = projectDetails
  return (
    <div className="project-details-container">
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="project-title-duration-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="icon-duration">
          <AiFillCalendar />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a className="link" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
