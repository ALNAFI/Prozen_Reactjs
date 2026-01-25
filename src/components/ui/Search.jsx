export default function Search() {
  return (
    <div className="ht-header-search-bar d-flex align-items-center justify-content-center">
      <button className="ht-search-close">x</button>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="ht-search-bar">
              <h3 className="ht-search-title text-center mb-20">
                What are you looking for?
              </h3>
              <div className="ht-form-box ht-search-form-box">
                <form onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Your Keywords..." />
                  <button type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
