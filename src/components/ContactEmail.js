import React, {useState, useEffect} from "react";

function Contact(){
    const [sendName, setName] = useState('');
    const [sendMail, setMail] = useState('');
    const [sendMsg, setMsg] = useState('');
    const [flaskReplyMsg, setFlaskRplMSG] = useState('wow');

    const onSubmit = (event) => {
        event.preventDefault();
        submitForm();
    }
  //submits the form and call the hangleresponse
  //usrN and Pass are variable holders being sent to python
  const submitForm = (usrN, pass) => {
    fetch('/api/sendMail', {
      method: 'POST', body: JSON.stringify({
        mName: sendName, mMail: sendMail, mMsg: sendMsg
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" }

    }).then(response => response.json()).then(
      message => handleResponse(message))
    setName('');
    setMail('');
    setMsg('');
  }

  useEffect(() => {
    fetch('/api/sendMail').then(response =>
      response.json().then(data => {
        console.log("hello");
      }));
  }, [])
  
//hangles the response from flask
const handleResponse = (message) => {
    var tempMessage = message.msg;
    setFlaskRplMSG(tempMessage);
  }

//=----------
//Used to make sure the message keeps getting updated on the screen
const onNameChange = (UN) => {
    setName(UN);
}
//Handles the event of you typing
const handleNameChange = (event) => {
    onNameChange(event.target.value);
}
//---------------
//=----------
//Used to make sure the message keeps getting updated on the screen
const onMailChange = (UN) => {
    setMail(UN);
}
//Handles the event of you typing
const handleMailChange = (event) => {
    onMailChange(event.target.value);
}
//---------------
//=----------
//Used to make sure the message keeps getting updated on the screen
const onMSGChange = (UN) => {
    setMsg(UN);
}
//Handles the event of you typing
const handleMSGChange = (event) => {
    onMSGChange(event.target.value);
}
//---------------

    return(
        <section id="email-back-col">
          <div className="email-container-box">
            <h1 id="Contact-mail-header">Contact</h1>
            <div className="email-container-send-box">
            <form onSubmit={onSubmit} method="POST">
                <div className="email-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control"  placeholder="Ivan" value = {sendName} onChange = {handleNameChange}/>
                </div>
                <div className="email-group">
                    <label htmlFor="exampleInputEmail1">Email address:</label>
                    <input type="text" className="form-control"  placeholder="ivan@gmail.com" value = {sendMail} onChange = {handleMailChange}/>
                </div>
                <div className="email-group">
                    <label htmlFor="message">Message:</label>
                    <textarea className="form-control" rows="5"  placeholder="Type your message here. Keep in mind the message limit is 2000 words." value = {sendMsg} onChange = {handleMSGChange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <h2>{flaskReplyMsg}</h2>
          </div>   
        </section>
    )
}

export default Contact;


