// Write your JS code here
import './index.css'

import {Component} from 'react'

class RegistrationFrom extends Component {
  state = {
    formSubmited: false,
    firstName: '',
    isFirstNameEmpty: false,
    lastName: '',
    isLastNameEmpty: false,
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  validateLastName = () => {
    const {lastName} = this.state

    return lastName !== ''
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()

    this.setState({isLastNameEmpty: !isValidLastName})
  }

  renderLastName = () => {
    const {lastName, isLastNameEmpty} = this.state
    const inputClassName = isLastNameEmpty ? 'red-input-field' : 'input-field'
    return (
      <div className="input-container">
        <label className="first-name-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          className={inputClassName}
          value={lastName}
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
          placeholder="Last Name"
        />
        <p className="required-text">{isLastNameEmpty && 'Required'}</p>
      </div>
    )
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  validateFirstName = () => {
    const {firstName} = this.state

    return firstName !== ''
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()

    this.setState({isFirstNameEmpty: !isValidFirstName})
  }

  renderFirstName = () => {
    const {firstName, isFirstNameEmpty} = this.state
    const inputClassName = isFirstNameEmpty ? 'red-input-field' : 'input-field'
    return (
      <div className="input-container">
        <label className="first-name-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          className={inputClassName}
          value={firstName}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
          placeholder="First Name"
        />
        <p className="required-text">{isFirstNameEmpty && 'Required'}</p>
      </div>
    )
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({formSubmited: true})
    } else {
      this.setState({
        formSubmited: false,
        isFirstNameEmpty: !isValidFirstName,
        isLastNameEmpty: !isValidLastName,
      })
    }
  }

  renderForm = () => (
    <form className="form-container" onSubmit={this.onSubmitForm}>
      {this.renderFirstName()}
      {this.renderLastName()}
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  )

  submitAnotherResponse = () => {
    this.setState({
      formSubmited: false,
      firstName: '',
      isFirstNameEmpty: false,
      lastName: '',
      isLastNameEmpty: false,
    })
  }

  renderSubmittedView = () => (
    <div className="submited-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="succes-logo"
      />
      <p className="success-description">Submitted Successfully</p>
      <button
        type="button"
        className="submit-another-button"
        onClick={this.submitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {formSubmited} = this.state
    return (
      <div className="registration-container">
        <h1 className="registration-heading">Registration</h1>
        <>{formSubmited ? this.renderSubmittedView() : this.renderForm()}</>
      </div>
    )
  }
}

export default RegistrationFrom
