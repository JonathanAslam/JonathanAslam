import React, {useState} from 'react'
import emailjs from '@emailjs/browser'
import './ContactMe.css'


//referenced sendEmail function from https://medium.com/@thomasaugot/create-a-react-contact-form-with-email-js-cad2c8606f33 
const ContactMe = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    userEmail: "",
    socialMediaLink: "https://",
    message: "",
  });
  
  const[isSubmitting, setIsSubmitting] = useState(false);
  const[stateMessage, setStateMessage] = useState(null);

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const sendEmail = (event) => {
    event.preventDefault(); // Prevent form submission
    setIsSubmitting(true);

    const fullName = `${formData.fname} ${formData.lname}`;
    const email = `${formData.userEmail}`;
    const socialMedia = `${formData.socialMediaLink}`;
    const message = `${formData.message}`;
    emailjs
    .send( // use env variables to hide sensitive information in the env file.
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        { //email values needed
          from_name: fullName, 
          from_email: email, 
          website_link: socialMedia,
          message: message, 
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          event.target.reset();
          setFormData({ fname: "", lname: "", userEmail: "", socialMediaLink: "https://", message: "" }); // Reset state
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );
    
    // Clears the form after sending the email
    
  };

  return (
    <div className='contact-page-content' id='contact-page'>
      {/* simple contact form */}
      <h1>Contact Me:</h1>
      <div className='contact-form'>
        <form onSubmit={sendEmail}>
          <div className='fname'>
            <label htmlFor="fname">First Name:</label>
            <br />
            <input type="text" name="fname" id="fname" placeholder='*First ...' value={formData.fname} onChange={handleValueChange} required />
          </div>
          <div className='lname'>
            <label htmlFor="lname">Last Name:</label>
            <br />
            <input type="text" name="lname" id="lname" placeholder='*Last ...' value={formData.lname} onChange={handleValueChange} required />
          </div>
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input type="email" name="userEmail" id="email" placeholder='*Email ...' value={formData.userEmail} onChange={handleValueChange} required />
          <br />
          <label htmlFor="website-link">Social Media Link:</label>
          <br />
          <input type="url" name="socialMediaLink" id="website-link" placeholder='Link ...' value={formData.socialMediaLink} onChange={handleValueChange} required/>
          <br />
          <label htmlFor="website-link">Write Any Messages Here:</label>
          <br />
          <textarea name="message" id="message" placeholder='Message ...' value={formData.message} onChange={handleValueChange}></textarea>
          <br />
          <br />
          <input type="submit" value="Send" disabled={isSubmitting} />
        {stateMessage && <p>{stateMessage}</p>}
        </form>
      </div>
      <div className='contact-button'>
          <div className='contact-me-button'>
            <p>Contact Me:</p>
            <button onClick={() => window.location = 'mailto:jonathanaslam@gmail.com'}>Email</button>
          </div> 
      </div>
    </div>

  )
}

export default ContactMe
    