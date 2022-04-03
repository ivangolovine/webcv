function Contact(){
    return(
        <section id="email-back-col">
            <div className="col-md-6 center">
                <div className="email-outer-inner">
                    <h2>CONTACT</h2>
                </div>
            </div>
            <div className="col-md-3 center">
            <form>
                <div className="email-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="email-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="ivan@gmail.com"/>
                </div>
                <div className="email-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
                
                
        </section>
    )
}

export default Contact;


