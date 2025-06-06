import React, {useState} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const[email, setEmail] = useState("");
  const[name, setName] = useState("");
  const[message, setMessage] = useState("");

  function sendMessage(e) {
    e.preventDefault();

    const serviceID = 'service_744c3mr';
    const templateID = 'template_jqi02ai';
    const publicKey = 'BWhOUHeq9heEDsAJi';

    const templateParams = {
      name: name,
      email: email,
      message: message
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Message sent successfully!");
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert("Message failed to send.");
      });
  }

  return (
    <div id='contact' className='conCont'>
      <header className='headerCont'>
        <h1 className='headerTitleCont'>Contact Me</h1>
      </header>
      <section className='con-container'>
        <div className='conInfo'>
          <h1 className='conT'>Send me a message...</h1>
          <div className='inputs'>
            <input className='infoInput' placeholder='name' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
            <input className='infoInput' placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            <textarea className='messageInput' placeholder='message' value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
            <button className="button" onClick={sendMessage}><span className='buttonText'>Send</span></button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact