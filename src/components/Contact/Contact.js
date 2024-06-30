import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className='contact-buttons'>
        <a href={gmailUrl} target='_blank' rel='noopener noreferrer'>
          <span type='button' className='btn btn--outline'>
            Email me
          </span>
        </a>
      </div>
    </section>
  )
}

export default Contact
