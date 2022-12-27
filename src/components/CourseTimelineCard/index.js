// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {duration, description, courseTitle, tagsList} = courseDetails

  return (
    <div className="course-container">
      <div className="course-duration-title-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="tag-list-container">
        {tagsList.map(tag => (
          <p className="course-tag">{tag.name}</p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
