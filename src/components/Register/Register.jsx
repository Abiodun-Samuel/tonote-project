import { useEffect, useRef, useState } from "react";
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
import { toastMessage } from "../../utils/helper";

const Register = () => {
  const userNameRef = useRef();

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

  const [success, setSuccess] = useState(false);
  const [imageURL, setImageURL] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // prevent javascript submission button hack
    const p1 = USER_REGEX.test(userName);
    const p2 = EMAIL_REGEX.test(userEmail);
    const p3 = PHONE_REGEX.test(userPhone);

    if (!p1 || !p2 || !p3 || !validDate || !validGender) {
      toastMessage("error", "Invalid Input");
      return;
    }

    try {
      const response = await QRCode.toDataURL(userName);
      setImageURL(response);
      setSuccess(true);
      toastMessage(
        "success",
        "Congratulations, Your registration was successful. Download your QRCode"
      );

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

  return (
    <>
      <div className="register-top"></div>

      <div className="register">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-7 col-md-12">
              <div className="register-box p-4 shadow-lg rounded">
                {!success ? (
                  <>
                    <h1>Register</h1>
                    <hr />

                    <form onSubmit={handleSubmit}>
                      {/* fullname  */}
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
                              placeholder="Enter your fullname"
                              aria-invalid={validName ? "false" : "true"}
                              aria-describedby="uidnote"
                              onFocus={() => setUserFocus(true)}
                              onBlur={() => setUserFocus(false)}
                            />
                          </div>

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
                        {/* email  */}
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
                              // pattern={EMAIL_REGEX}
                              placeholder="Enter your email"
                              aria-invalid={validEmail ? "false" : "true"}
                              aria-describedby="uidnote"
                              onFocus={() => setEmailFocus(true)}
                              onBlur={() => setEmailFocus(false)}
                            />
                          </div>

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

                        {/* phone number  */}
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
                              // pattern={PHONE_REGEX}
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

                      <div className="form-row my-4">
                        {/* select gender  */}
                        <div className="col-6">
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
                            value={gender}
                            required
                            placeholder="Select your gender"
                            aria-invalid={validGender ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => {
                              setGenderFocus(true);
                            }}
                            onBlur={() => setGenderFocus(false)}
                          >
                            <option value="" selected disabled>
                              -- Gender --
                            </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                          </select>

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

                        <div className="col-6">
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
                  </>
                ) : (
                  <div className="text-center">
                    <h1>Registered</h1>
                    <hr />
                    {imageURL && (
                      <>
                        <div className="my-2">
                          <img
                            src={imageURL}
                            alt="qrcode"
                            className="img-fluid"
                          />
                        </div>
                        <hr />
                        <div className="my-2">
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
