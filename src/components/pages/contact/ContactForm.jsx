export default function ContactForm() {
  return (
    <section className="ht-contact-form-area section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="subtitle wow fadeInUp" data-wow-delay=".2s">
            Contact Us
          </span>
          <h2 className="title wow fadeInUp text-black" data-wow-delay=".5s">
            Have questions? <br />
            contact us!
          </h2>
        </div>
        <div className="ht-contact-wrapper">
          <form action="#" method="post">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" placeholder="Your name" required />
                  </div>
                  <div className="col-md-6">
                    <input type="email" placeholder="Email address" required />
                  </div>
                  <div className="col-12">
                    <input type="text" placeholder="Select subject" required />
                  </div>
                  <div className="col-12">
                    <textarea
                      placeholder="Type your message"
                      required
                    ></textarea>
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="ht-btn style-2">
                      SEND MESSAGE HERE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
