import error from "../../../images/error.jpg";
const NotFound = () => {
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center mt-3">
        <div className="col-lg-6 text-center">
          <img src={error} className="img-fluid" alt="error 404" />
          <h5 className="text-danger">Oops, Page not found</h5>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
