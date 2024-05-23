// Write your code here
import './index.css'

const EventItem = props => {
  const {list, onClickingEvent} = props
  const {id, imageUrl, name, location} = list
  const clickingOnEvent = () => {
    onClickingEvent(id)
  }
  return (
    <li className="event">
      <button type="button" className="event-button" onClick={clickingOnEvent}>
        <img src={imageUrl} alt="event" />
      </button>
      <p className="name-para">{name}</p>
      <p className="location-para">{location}</p>
    </li>
  )
}
export default EventItem
