import React, { useEffect, useRef, useState } from "react";
import "./register.css";
import {
  FaCheck,
  FaTimes,
  FaInfoCircle,
  FaSignInAlt,
  FaUserCircle,
  FaPhoneSquareAlt,
  FaDownload,
} from "react-icons/fa";
import { USER_REGEX, EMAIL_REGEX, PHONE_REGEX } from "../../utils/constants";
import { RiMailFill } from "react-icons/ri";
import QRCode from "qrcode";
import { randomString, toastMessage } from "../../utils/helper";
import { QrReader } from "react-qr-reader";

const Register = () => {
  const userNameRef = useRef();

  // states for each input fields
  const [userName, setUserName] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [userEmail, setUserEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [userPhone, setUserPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  const [gender, setGender] = useState("");
  const [validGender, setValidGender] = useState(false);
  const [genderFocus, setGenderFocus] = useState(false);

  const [date, setDate] = useState("");
  const [validDate, setValidDate] = useState(false);
  const [dateFocus, setDateFocus] = useState(false);

  // other states
  const [success, setSuccess] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [ticketDetails, setTicketDetails] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    gender: "",
    date: "",
  });

  // effects for each input fields
  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(userName));
  }, [userName]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(userEmail));
  }, [userEmail]);

  useEffect(() => {
    setValidPhone(PHONE_REGEX.test(userPhone));
  }, [userPhone]);

  useEffect(() => {
    if (gender) {
      setValidGender(true);
    } else {
      setValidGender(false);
    }
  }, [gender]);

  useEffect(() => {
    //Must be 18years old and above -- lols
    if (date) {
      const year = date.substring(0, 4);
      if (Number(new Date().getFullYear()) < Number(year)) {
        setValidDate(false);
      } else if (Number(new Date().getFullYear()) - Number(year) < 18) {
        setValidDate(false);
      } else if (Number(new Date().getFullYear()) - Number(year) >= 18) {
        setValidDate(true);
      } else {
        setValidDate(false);
      }
    } else {
      setValidDate(false);
    }
  }, [date]);

  // submit form handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // prevent submission button hack using inspect elemnts
    //return if there's an invalid input
    const p1 = USER_REGEX.test(userName);
    const p2 = EMAIL_REGEX.test(userEmail);
    const p3 = PHONE_REGEX.test(userPhone);

    if (!p1 || !p2 || !p3 || !validDate || !validGender) {
      toastMessage("error", "Invalid Input(s)");
      return;
    }

    try {
      const response = await QRCode.toDataURL(`FullName: ${userName},
      \n Email: ${userEmail},
      \n Phone: ${userPhone},
      \n Gender: ${gender},
      \n DOB: ${date}`);

      setImageURL(response);
      setSuccess(true);
      toastMessage(
        "success",
        "Congratulations, Your registration was successful. Download your QRCode"
      );
      //set ticket details
      setTicketDetails({
        userName,
        userEmail,
        userPhone,
        gender,
        date,
      });
      //clear state and controlled inputs
      setUserName("");
      setGender("");
      setUserEmail("");
      setUserPhone("");
      setDate("");
    } catch (err) {
      toastMessage("error", err);
    }
  };

  const [qrscan, setQrscan] = useState("");
  const handleScan = (data) => {
    if (data) {
      setQrscan(data);
    }
  };
  const handleError = (err) => {
    // console.error(err);
  };

  return (
    <>
      <div className="register-top"></div>
      <div className="register">
        <div className="container">
          {!success ? (
            <>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-7 col-md-12">
                  <div className="register-box p-4 shadow-lg rounded">
                    <h1>Register</h1>
                    <hr />
                    <form onSubmit={handleSubmit}>
                      {/* fullname field */}
                      <div className="form-row my-4">
                        <div className="col-12">
                          <label htmlFor="username">
                            FullName:
                            <FaCheck className={validName ? "valid" : "hide"} />
                            <FaTimes
                              className={
                                validName || !userName ? "hide" : "invalid"
                              }
                            />
                          </label>
                          <div className="input-box">
                            <FaUserCircle className="input-icon" />
                            <input
                              className={validName ? "validinput" : ""}
                              type="text"
                              id="username"
                              ref={userNameRef}
                              autoComplete="off"
                              onChange={(e) => setUserName(e.target.value)}
                              value={userName}
                              required
                              pattern="^[a-zA-Z ]{3,50}$"
                              placeholder="Enter your fullname"
                              aria-invalid={validName ? "false" : "true"}
                              aria-describedby="uidnote"
                              onFocus={() => setUserFocus(true)}
                              onBlur={() => setUserFocus(false)}
                            />
                          </div>

                          {/*display instructions */}
                          <p
                            id="uidnote"
                            className={
                              userFocus && userName && !validName
                                ? "instructions alert alert-danger"
                                : "offscreen"
                            }
                          >
                            <FaInfoCircle />
                            3 to 50 characters.
                            <br />
                            Must begin with a letter.
                            <br />
                            Numbers, underscores, hyphens not allowed.
                          </p>
                        </div>
                      </div>

                      <div className="form-row my-4">
                        {/* email field */}
                        <div className="col-6">
                          <label htmlFor="useremail">
                            Email:
                            <FaCheck
                              className={validEmail ? "valid" : "hide"}
                            />
                            <FaTimes
                              className={
                                validEmail || !userEmail ? "hide" : "invalid"
                              }
                            />
                          </label>

                          <div className="input-box">
                            <RiMailFill className="input-icon" />
                            <input
                              className={validEmail ? "validinput" : ""}
                              type="email"
                              id="useremail"
                              autoComplete="off"
                              onChange={(e) => setUserEmail(e.target.value)}
                              value={userEmail}
                              required
                              pattern="^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$"
                              placeholder="Enter your email"
                              aria-invalid={validEmail ? "false" : "true"}
                              aria-describedby="uidnote"
                              onFocus={() => setEmailFocus(true)}
                              onBlur={() => setEmailFocus(false)}
                            />
                          </div>
                          {/* display intruction  */}
                          <p
                            id="uidnote"
                            className={
                              emailFocus && userEmail && !validEmail
                                ? "instructions alert alert-danger"
                                : "offscreen"
                            }
                          >
                            <FaInfoCircle />
                            Please enter a valid email
                          </p>
                        </div>

                        {/* phone number field */}
                        <div className="col-6">
                          <label htmlFor="userphone">
                            Phone:
                            <FaCheck
                              className={validPhone ? "valid" : "hide"}
                            />
                            <FaTimes
                              className={
                                validPhone || !userPhone ? "hide" : "invalid"
                              }
                            />
                          </label>
                          <div className="input-box">
                            <FaPhoneSquareAlt className="input-icon" />
                            <input
                              className={validPhone ? "validinput" : ""}
                              type="tel"
                              id="userphone"
                              pattern="^\(?([0])\)?([7|8|9])\)?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$"
                              autoComplete="off"
                              onChange={(e) => setUserPhone(e.target.value)}
                              value={userPhone}
                              required
                              placeholder="Enter your phone number"
                              aria-invalid={validPhone ? "false" : "true"}
                              aria-describedby="uidnote"
                              onFocus={() => setPhoneFocus(true)}
                              onBlur={() => setPhoneFocus(false)}
                            />
                          </div>

                          {/* display instruction  */}
                          <p
                            id="uidnote"
                            className={
                              phoneFocus && userPhone && !validPhone
                                ? "instructions alert alert-danger"
                                : "offscreen"
                            }
                          >
                            <FaInfoCircle />
                            Please enter a valid Phone Number <br />
                            Format : 09XX XXX XXXX || 08XX XXX XXXX || 07XX XXX
                            XXXX
                          </p>
                        </div>
                      </div>

                      <div className="form-row">
                        {/* gender  field */}
                        <div className="col-lg-6 col-md-6 col-sm-6 my-3">
                          <label htmlFor="gender">
                            Gender:
                            <FaCheck
                              className={validGender ? "valid" : "hide"}
                            />
                            <FaTimes
                              className={
                                validGender || !gender ? "hide" : "invalid"
                              }
                            />
                          </label>
                          <select
                            className={validGender ? "validinput" : ""}
                            name="gender"
                            id="gender"
                            autoComplete="off"
                            onChange={(e) => {
                              setGender(e.target.value);
                            }}
                            value={gender || "DEFAULT"}
                            required
                            placeholder="Select your gender"
                            aria-invalid={validGender ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => {
                              setGenderFocus(true);
                            }}
                            onBlur={() => setGenderFocus(false)}
                          >
                            <option value="DEFAULT" disabled>
                              -- Gender --
                            </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                          </select>

                          {/* display instruction  */}
                          <p
                            id="uidnote"
                            className={
                              genderFocus && gender && !validGender
                                ? "instructions alert alert-danger"
                                : "offscreen"
                            }
                          >
                            <FaInfoCircle />
                            Select Gender
                          </p>
                        </div>

                        {/* date of birth field  */}
                        <div className="col-lg-6 col-md-6 col-sm-6 my-3">
                          <label htmlFor="date">
                            Date of Birth:
                            <FaCheck className={validDate ? "valid" : "hide"} />
                            <FaTimes
                              className={
                                validDate || !date ? "hide" : "invalid"
                              }
                            />
                          </label>
                          <input
                            className={validDate ? "validinput" : ""}
                            type="date"
                            id="date"
                            autoComplete="off"
                            onChange={(e) => setDate(e.target.value)}
                            value={date}
                            required
                            placeholder="MM/DD/YYYY"
                            aria-invalid={validDate ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => {
                              setDateFocus(true);
                            }}
                            onBlur={() => setDateFocus(false)}
                          />

                          {/* display instruction  */}
                          <p
                            id="uidnote"
                            className={
                              dateFocus && date && !validDate
                                ? "instructions alert alert-danger"
                                : "offscreen"
                            }
                          >
                            <FaInfoCircle />
                            Sorry, you must be above 18years old to attend this
                            event.
                          </p>
                        </div>
                      </div>

                      <hr />

                      {/* submit button  */}
                      <button
                        className="button mt-4 shadow-lg"
                        disabled={
                          !validName ||
                          !validGender ||
                          !validEmail ||
                          !validPhone ||
                          !validDate
                            ? true
                            : false
                        }
                      >
                        <span className="d-flex justify-content-center align-items-center">
                          <FaSignInAlt className="mx-2" /> Register
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </>
          ) : (
            //display screen after submission
            <>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 col-md-6 col-sm-6 my-2">
                  <div className="register-box py-2 px-4 shadow-lg rounded">
                    <p>
                      <b className="text-primary"> Ticket Id: </b>
                      {randomString(10)}
                    </p>
                    <hr />
                    <p className="my-0 py-0">
                      <strong>Fullname:</strong> {ticketDetails.userName}
                    </p>
                    <p className="my-0 py-0">
                      <strong>Email:</strong> {ticketDetails.userEmail}
                    </p>
                    <p className="my-0 py-0">
                      <strong>Phone:</strong> {ticketDetails.userPhone}
                    </p>
                    <p className="my-0 py-0">
                      <strong>Gender:</strong> {ticketDetails.gender}
                    </p>
                    <p className="my-0 py-0">
                      <strong>Date of Birth:</strong> {ticketDetails.date}
                    </p>
                    {imageURL && (
                      <>
                        <div className="text-center">
                          <img
                            src={imageURL}
                            alt="qrcode"
                            className="img-fluid"
                          />
                        </div>
                        <hr />
                        <div>
                          <a
                            href={imageURL}
                            className="d-flex justify-content-center align-items-center shadow-lg btn_one my-3"
                            download
                          >
                            <FaDownload className="mx-2" /> Download
                          </a>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 my-2">
                  <div className="register-box shadow-lg py-2 px-4 text-center rounded">
                    {!qrscan && (
                      <>
                        <p className="text-primary my-0 py-0">
                          <b>Scan QrCode</b>
                        </p>
                        <QrReader
                          delay={300}
                          onError={handleError}
                          onScan={handleScan}
                          onResult={(result, error) => {
                            if (!!result) {
                              setQrscan(result?.text);
                            }
                            if (!!error) {
                              // console.info(error);
                            }
                          }}
                          style={{ height: 150, width: 150 }}
                        />
                      </>
                    )}

                    <p>
                      <b className="text-primary my-0 py-0">Scan Result</b>
                    </p>
                    <p> {qrscan}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Register;
