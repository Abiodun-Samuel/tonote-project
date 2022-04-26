const Footer = () => {
  var date = new Date().getFullYear();

  return (
    <div className="bg-dark p-5 text-center">
      <p className="text-light small">
        Copyright © {date} ToNote Technologies, All rights reserved. <br />
        Designed & Developed By{" "}
        <a target="_blank" href="https://abiodunsamuel.com/" rel="noreferrer">
          Abiodun Samuel
        </a>
      </p>
    </div>
  );
};

export default Footer;
