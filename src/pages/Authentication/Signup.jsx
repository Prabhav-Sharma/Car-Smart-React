import React from "react";
import "./auth.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import FormTextInput from "../../components/FormInputText/FormInputText";
import { useAuthForm } from "../../hooks/useAuthForm/useAuthForm";
import axios from "axios";
import { useAuth } from "../../contexts/Providers/AuthProvider/AuthProvider";
import { useEffect } from "react";
import { toast } from "react-toastify";

const EMAIL_REGEX = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

function Signup() {
  useDocumentTitle("Signup | CarSmart");

  const { authFormState, authFormDispatch } = useAuthForm();
  const { authDispatch } = useAuth();
  const { fullName, email, password, loading, confirmPassword, agreement } =
    authFormState;

  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    return () => authFormDispatch({ type: "LOADING_OFF" });
  }, []);

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      authFormDispatch({ type: "LOADING_ON" });
      if (password.length === 0 || fullName.length === 0) {
        toast.info("Credentials can't be blank");
        return;
      }

      if (!EMAIL_REGEX.test(email)) {
        toast.info("Please enter a valid email address");
        return;
      }

      if (confirmPassword !== password) {
        toast.info("Passwords Don't Match");
        return;
      }
      // Will enable when T&C page is added
      // if (!agreement) {
      //   alert(
      //     "You must accept the terms & conditions in order to create account"
      //   );
      //   return;
      // }
      const response = await axios.post(`/api/auth/signup`, {
        userName: fullName,
        email,
        password,
      });
      localStorage.setItem("token", response.data.encodedToken);
      authDispatch({
        type: "SIGNUP",
        payload: {
          user: response.data.createdUser,
          token: response.data.encodedToken,
        },
      });
      toast.success(
        `Ahoy, welcome aboard, ${response.data.createdUser.userName}`
      );
      const pathName = location?.state?.from?.pathname;
      navigate(pathName ? pathName : "/");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    } finally {
      authFormDispatch({ type: "LOADING_OFF" });
    }
  };
  return (
    <main className="flex-column auth-main">
      <form className="flex-column">
        <h3 className="login-title">Sign Up</h3>
        <FormTextInput
          legend={"Full Name"}
          placeholder={"John Doe"}
          value={fullName}
          onChange={(e) =>
            authFormDispatch({
              type: "FULL_NAME",
              payload: e.target.value.trim(),
            })
          }
        ></FormTextInput>
        <FormTextInput
          legend={"Email"}
          placeholder={"john.doe@example.com"}
          type={"email"}
          value={email}
          onChange={(e) =>
            authFormDispatch({ type: "EMAIL", payload: e.target.value.trim() })
          }
        ></FormTextInput>
        <FormTextInput
          legend={"Password"}
          placeholder={"************"}
          type={"Password"}
          value={password}
          onChange={(e) =>
            authFormDispatch({
              type: "PASSWORD",
              payload: e.target.value.trim(),
            })
          }
        />
        <FormTextInput
          legend={"Confirm Password"}
          placeholder={"Confirm Password"}
          type={"Password"}
          value={confirmPassword}
          onChange={(e) =>
            authFormDispatch({
              type: "CONFIRM_PASSWORD",
              payload: e.target.value.trim(),
            })
          }
        />
        {/* Only for illustration, will add functionality when T&C page is implemented */}
        <label>
          <input
            type="checkbox"
            value={agreement}
            onChange={() => authFormDispatch({ type: "AGREEMENT" })}
          />
          I accept all Terms & Conditions
        </label>
        <button
          className="btn prim-btn"
          id="signup-btn"
          onClick={(e) => signupHandler(e)}
        >
          {loading ? <i className="fa fa-spinner fa-spin" /> : "Sign Up"}
        </button>
        <Link className="new-acc-link" to="/login">
          Already have an Account? ❯
        </Link>
      </form>
    </main>
  );
}

export default Signup;
