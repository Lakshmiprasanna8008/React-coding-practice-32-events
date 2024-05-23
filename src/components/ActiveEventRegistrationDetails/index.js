// Write your code here
import {Component} from 'react'
import './index.css'

class ActiveEventRegistrationDetails extends Component {
  registrationPage = () => (
    <div className="active-reg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1 className="reg-heading">You have already registered for the event</h1>
    </div>
  )

  yetToRegistrationPage = () => (
    <div className="active-reg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-img"
      />
      <p className="yet-to-register-para">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="yet-to-register-btn">
        Register Here
      </button>
    </div>
  )

  registrationClosedPage = () => (
    <div className="active-reg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="yet-to-register-img"
      />
      <h1 className="close-reg-heading">Registration Are Closed Now!</h1>
      <p className="close-reg-para">
        Stay tuned. We will reopen
        <br /> the registrations soon!
      </p>
    </div>
  )

  render() {
    const {registrationStatusDetails} = this.props
    switch (registrationStatusDetails) {
      case 'REGISTERED':
        return this.registrationPage()
      case 'YET_TO_REGISTER':
        return this.yetToRegistrationPage()
      case 'REGISTRATIONS_CLOSED':
        return this.registrationClosedPage()
      default:
        return null
    }
  }
}
export default ActiveEventRegistrationDetails
