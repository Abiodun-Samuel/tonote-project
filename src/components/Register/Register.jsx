import { useEffect, useRef, useState } from "react";
import "./register.css";
import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
import { USER_REGEX, EMAIL_REGEX, PHONE_REGEX } from "../../utils/constants";
import { FaSignInAlt } from "react-icons/fa";

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

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

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
    if (gender || gender !== "") {
      setValidGender(true);
    } else {
      setValidGender(false);
    }
  }, [gender]);

  useEffect(() => {
    const year = date.substring(0, 4);
    let diff = Number(new Date().getFullYear()) - Number(year);
    if (Math.sign(diff) === -1 || Math.sign(diff) === -0) {
      diff = diff * -1;
    }
    if (diff < 18) {
      setValidDate(false);
    } else {
      setValidDate(true);
    }
  }, [date]);

  // useEffect(() => {
  //   setErrMsg("");
  // }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(userName);

    if (!v1) {
      setErrMsg("Invalid Entry");
      return;
    }
    // try {
    //   const response = await axios.post(
    //     REGISTER_URL,
    //     JSON.stringify({ user, pwd }),
    //     {
    //       headers: { "Content-Type": "application/json" },
    //       withCredentials: true,
    //     }
    //   );
    //   console.log(response?.data);
    //   console.log(response?.accessToken);
    //   console.log(JSON.stringify(response));
    //   setSuccess(true);
    //   //clear state and controlled inputs
    //   //need value attrib on inputs for this
    //   setUser("");
    //   setPwd("");
    //   setMatchPwd("");
    // } catch (err) {
    //   if (!err?.response) {
    //     setErrMsg("No Server Response");
    //   } else if (err.response?.status === 409) {
    //     setErrMsg("Username Taken");
    //   } else {
    //     setErrMsg("Registration Failed");
    //   }
    //   errRef.current.focus();
    // }
  };

  return (
    <div className="register">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="register-box bg-white p-4 shadow-lg rounded">
              <h1>Register</h1>
              <hr />
              <form onSubmit={handleSubmit}>
                {/* fullname  */}
                <div className="form-row my-3">
                  <div className="col-12">
                    <label htmlFor="username">
                      FullName:
                      <FaCheck className={validName ? "valid" : "hide"} />
                      <FaTimes
                        className={validName || !userName ? "hide" : "invalid"}
                      />
                    </label>
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
                    <p
                      id="uidnote"
                      className={
                        userFocus && userName && !validName
                          ? "instructions"
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

                <div className="form-row my-3">
                  {/* email  */}
                  <div className="col-6">
                    <label htmlFor="useremail">
                      Email:
                      <FaCheck className={validEmail ? "valid" : "hide"} />
                      <FaTimes
                        className={
                          validEmail || !userEmail ? "hide" : "invalid"
                        }
                      />
                    </label>
                    <input
                      className={validEmail ? "validinput" : ""}
                      type="text"
                      id="useremail"
                      autoComplete="off"
                      onChange={(e) => setUserEmail(e.target.value)}
                      value={userEmail}
                      required
                      pattern={EMAIL_REGEX}
                      placeholder="Enter your email"
                      aria-invalid={validEmail ? "false" : "true"}
                      aria-describedby="uidnote"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    />
                    <p
                      id="uidnote"
                      className={
                        emailFocus && userEmail && !validEmail
                          ? "instructions"
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
                      <FaCheck className={validPhone ? "valid" : "hide"} />
                      <FaTimes
                        className={
                          validPhone || !userPhone ? "hide" : "invalid"
                        }
                      />
                    </label>
                    <input
                      className={validPhone ? "validinput" : ""}
                      type="tel"
                      id="userphone"
                      pattern={PHONE_REGEX}
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
                    <p
                      id="uidnote"
                      className={
                        phoneFocus && userPhone && !validPhone
                          ? "instructions"
                          : "offscreen"
                      }
                    >
                      <FaInfoCircle />
                      Please enter a valid Phone Number <br />
                      Format : 09XX XXX XXXX || 08XX XXX XXXX || 07XX XXX XXXX
                    </p>
                  </div>
                </div>

                <div className="form-row my-3">
                  {/* select gender  */}
                  <div className="col-6">
                    <label htmlFor="gender">
                      Gender:
                      <FaCheck className={validGender ? "valid" : "hide"} />
                      <FaTimes
                        className={validGender || gender ? "hide" : "invalid"}
                      />
                    </label>
                    <select
                      className={validPhone ? "validinput" : ""}
                      name="gender"
                      id="gender"
                      autoComplete="off"
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                      value={gender}
                      required
                      placeholder="Enter your fullname"
                      aria-invalid={validGender ? "false" : "true"}
                      aria-describedby="uidnote"
                      // onSelect={() => setValidGender(false)}
                      onFocus={() => {
                        setGenderFocus(true);
                        setValidGender(false);
                      }}
                      onBlur={() => setGenderFocus(false)}
                    >
                      <option value=""> - Gender - </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </select>

                    <p
                      id="uidnote"
                      className={
                        genderFocus && gender && !validGender
                          ? "instructions"
                          : "offscreen"
                      }
                    >
                      <FaInfoCircle />
                      Select Gender
                    </p>
                  </div>

                  <div className="col-6">
                    <label htmlFor="date">
                      Date Of Birth:
                      <FaCheck className={validDate ? "valid" : "hide"} />
                      <FaTimes
                        className={validDate || !date ? "hide" : "invalid"}
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
                      placeholder="Enter your date of birth"
                      aria-invalid={validDate ? "false" : "true"}
                      aria-describedby="uidnote"
                      onFocus={() => setDateFocus(true)}
                      onBlur={() => setDateFocus(false)}
                    />
                    <p
                      id="uidnote"
                      className={
                        dateFocus && date && !validDate
                          ? "instructions"
                          : "offscreen"
                      }
                    >
                      <FaInfoCircle />
                      Sorry, you must be above 18years old to attend this event.
                    </p>
                  </div>
                </div>

                <hr />

                <button
                  className="button"
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
      </div>
    </div>
  );
};

export default Register;
