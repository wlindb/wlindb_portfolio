import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
const email = 'wlindb@kth.se';
const sitekey = '6Lefp-UUAAAAABVn9n3qzrUsw_hp7p4fRaT7Sidu'; //process.env.REACT_APP_SITE_RECAPTCHA_KEY;

const Contact = () => {
    const [values, setValues] = useState({name: '', email: '', message: '', msgStatus: ''});

    const handleChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }

    const encode = data => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = e => {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...values })
        })
        .then(() => setValues({name: '', email: '', message: '', msgStatus: 'Message sent'}))
        .catch(error => setValues({msgStatus: 'Message failed to send'}));
        setTimeout(() => {setValues({msgStatus: ''})}, 4000);
    };

    return (
        <div className="contact-container">
          <h2 className="contact-header">CONTACT</h2>
          {/* <ul>
            {this.state.customers.map(customer => 
              <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
            )}
          </ul> */}
          <div className="contact-box">
            <p>Contact me at <a href={`mailto:${email}`}>{email}</a> or fill in the form below</p>
            <form name="contact" id="contact-form" method='POST' onSubmit={handleSubmit} data-netlify="true" data-netlify-honeypot="bot-field" data-netlify-recaptcha="true">
              <p hidden>
                <label>
                  Don’t fill this out:{" "}
                  <input name="bot-field" onChange={handleChange} />
                </label>
              </p>
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-group">
                  <input required type="text" placeholder="Name" name='name' value={values.name} className="form-control" id="name" onChange={handleChange} />
              </div>
              <div className="form-group">
                  <input required type="email" placeholder="Email" name='email' value={values.email} className="form-control" id="email" aria-describedby="emailHelp" onChange={handleChange}/>
              </div>
              <div className="form-group">
                  <textarea required className="form-control" name='message' placeholder="Message" value={values.message} onChange={handleChange}  rows={5} id="message"></textarea>
              </div>
              <ReCAPTCHA size='invisible' sitekey={'6Lefp-UUAAAAABVn9n3qzrUsw_hp7p4fRaT7Sidu'}/>
              <div className="btn-container">
                <button type="submit" className="submit-btn">Submit</button>
              </div>
              <p style={{float:'right', color: values.msgStatus === '' ? 'transparent' : 'white'}}>{values.msgStatus}</p>
          </form>
          </div>
        </div>
    )
}

export default Contact;
