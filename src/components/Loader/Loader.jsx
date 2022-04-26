import "./loader.css";

const Loader = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center fade show"
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "rgba(255,255,255,0.4)",
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: 100000000000,
        }}
      >
        <div className="loadingio-spinner-double-ring-oyrkz54zs9b fade show">
          <div className="ldio-nqr3jrvjvtf">
            <div></div>
            <div></div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
