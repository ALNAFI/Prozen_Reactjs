export default function Form() {
  return (
    <div className="comment-form-wrap">
      <h3>Leave A Comment</h3>
      <p className="my-10">
        Your email address will not be published. Required fields are marked *
      </p>

      <div className="ht-contact-wrapper">
        <form action="#" method="post">
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
              <textarea placeholder="Type your message" required></textarea>
            </div>
            <div className="col-12">
              <button type="submit" className="ht-btn style-2">
                Post Comment
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
