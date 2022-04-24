import { useEffect, useRef, useState } from "react";
import "./register.css";
import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
import { USER_REGEX, EMAIL_REGEX } from "../../utils/constants";
import { FaSignInAlt } from "react-icons/fa";

const Register = () => {
  const userNameRef = useRef();
  // const genderRef = useRef();
  // const errRef = useRef();

  const [userName, setUserName] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [userEmail, setUserEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [gender, setGender] = useState("");
  const [validGender, setValidGender] = useState(false);
  const [genderFocus, setGenderFocus] = useState(false);

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
    if (gender || gender !== "") {
      setValidGender(true);
    } else {
      setValidGender(false);
    }
  }, [gender]);

  // useEffect(() => {
  //   setErrMsg("");
  // }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(userName);
    // const v2 = PWD_REGEX.test(pwd);
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

                {/* email and phone number */}
                <div className="form-row my-3">
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
                      className={`${validGender} ? "validinput" : "" `}
                      name="gender"
                      id="gender"
                      // ref={genderRef}
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

                  <div className="col-6"></div>
                </div>

                {/* <label htmlFor="password">
                  Password:
                  <FaCheck className={validPwd ? "valid" : "hide"} />
                  <FaTimes className={validPwd || !pwd ? "hide" : "invalid"} />
                </label>

                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                />
                <p
                  id="pwdnote"
                  className={
                    pwdFocus && !validPwd ? "instructions" : "offscreen"
                  }
                >
                  <FaInfoCircle />
                  8 to 24 characters.
                  <br />
                  Must include uppercase and lowercase letters, a number and a
                  special character.
                  <br />
                  Allowed special characters:{" "}
                  <span aria-label="exclamation mark">!</span>{" "}
                  <span aria-label="at symbol">@</span>{" "}
                  <span aria-label="hashtag">#</span>{" "}
                  <span aria-label="dollar sign">$</span>{" "}
                  <span aria-label="percent">%</span>
                </p>

                <label htmlFor="confirm_pwd">
                  Confirm Password:
                  <FaCheck
                    className={validMatch && matchPwd ? "valid" : "hide"}
                  />
                  <FaTimes
                    className={validMatch || !matchPwd ? "hide" : "invalid"}
                  />
                </label>
                <input
                  type="password"
                  id="confirm_pwd"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  value={matchPwd}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                />
                <p
                  id="confirmnote"
                  className={
                    matchFocus && !validMatch ? "instructions" : "offscreen"
                  }
                >
                  <FaInfoCircle />
                  Must match the first password input field.
                </p> */}
                <hr />
                <button disabled={!validName ? true : false}>
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
