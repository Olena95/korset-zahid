const PagesHeading = ({ title }) => {
  return (
    <section className="paddind-header bg-light d-table w-100">
      <div className="container">
        <div className="row  justify-content-center">
          <div className="col col-lg-12 text-center">
            <div className="pages-heading">
              <h4 className="title mb-0">{title}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PagesHeading;
