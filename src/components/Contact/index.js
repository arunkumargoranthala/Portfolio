/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-extraneous-dependencies */
import {useState, useRef} from 'react'
import emailjs from '@emailjs/browser'
import './index.css'
// eslint-disable-next-line import/no-extraneous-dependencies
import {AiFillGithub, AiFillInstagram} from 'react-icons/ai'
import {FaLinkedinIn, FaHackerrank} from 'react-icons/fa'

const Contact = () => {
  const form = useRef()
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  })
  const [errors, setErrors] = useState({
    user_name: '',
    user_email: '',
    message: '',
  })

  const handleInputChange = e => {
    const {name, value} = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const validateForm = () => {
    const newErrors = {
      user_name: '',
      user_email: '',
      message: '',
    }

    let isValid = true

    if (!formData.user_name.trim()) {
      newErrors.user_name = 'Please enter your name'
      isValid = false
    }

    if (!formData.user_email.trim()) {
      newErrors.user_email = 'Please enter your email'
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const sendEmail = e => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setLoading(true)

    emailjs
      .sendForm(
        'service_07t234l',
        'template_kw37pm5',
        form.current,
        '0Thqx9s95gzBPBAW-',
      )
      .then(result => {
        console.log(result.text)
        setSent(true)
        setLoading(false)
        setFormData({
          user_name: '',
          user_email: '',
          message: '',
        })
        setTimeout(() => {
          setSent(false)
        }, 3000) // Hide success message after 3 seconds
      })
      .catch(error => {
        console.log(error.text)
        setLoading(false)
      })
  }

  return (
    <div className="contact-container">
      <h1>Contact me</h1>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          name="user_name"
          id="Name"
          value={formData.user_name}
          onChange={handleInputChange}
        />
        {errors.user_name && (
          <div className="error-message">{errors.user_name}</div>
        )}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="user_email"
          id="email"
          value={formData.user_email}
          onChange={handleInputChange}
        />
        {errors.user_email && (
          <div className="error-message">{errors.user_email}</div>
        )}
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        />
        {errors.message && (
          <div className="error-message">{errors.message}</div>
        )}
        <input type="submit" value="Send" />
      </form>
      {loading && <div className="loading">Loading...</div>}
      {sent && <div className="success-message">Message has been sent!</div>}
      <div style={{textAlign: 'center'}}>
        <p className="findme-heading">Find me on</p>
        <ul className="home-about-social-links">
          <li className="social-icons">
            <a
              href="https://github.com/arunkumargoranthala"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/arun-kumar-goranthala/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.hackerrank.com/profile/arunkumargorant1"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <FaHackerrank />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.instagram.com/aruun.exe/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <AiFillInstagram />
            </a>
          </li>
        </ul>
        <p>Email: arunkumargoranthala18@gmail.com</p>
        <p>Phone No: 9160937909</p>
      </div>
    </div>
  )
}

export default Contact
