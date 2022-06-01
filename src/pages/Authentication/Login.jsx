import React, { useEffect } from "react";
import "./auth.css";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import FormTextInput from "../../components/FormInputText/FormInputText";
import axios from "axios";
import { useAuthForm } from "../../hooks/useAuthForm/useAuthForm";
import { useAuth } from "../../contexts/Providers/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoading } from "../../hooks/useLoading";
import { toast } from "react-toastify";
const EMAIL_REGEX = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

function Login() {
  const { authDispatch } = useAuth();
  const { authFormState, authFormDispatch } = useAuthForm();
  const { email, password, loading } = authFormState;

  const { loading: guestLoading, setLoading: setGuestLoading } = useLoading();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    return () => authFormDispatch({ type: "LOADING_OFF" });
  }, []);

  const loginHandler = async (e) => {
    e.preventDefault();
    authFormDispatch({ type: "LOADING_ON" });
    try {
      if (!EMAIL_REGEX.test(email)) {
        toast.info("Please enter a valid email address");
        return;
      }
      if (password.length === 0) {
        toast.info("Password can't be blank");
        return;
      }
      const response = await axios.post(`/api/auth/login`, {
        email: email,
        password: password,
      });

      localStorage.setItem("token", response.data.encodedToken);
      authDispatch({
        type: "LOGIN",
        payload: {
          user: response.data.foundUser,
          token: response.data.encodedToken,
        },
      });

      const pathName = location?.state?.from?.pathname;
      navigate(pathName ? pathName : "/");

      toast.success(`Welcome Back, ${response.data.foundUser.userName} `);
    } catch (error) {
      console.log(error);
      toast.error("Wrong credentials");
    } finally {
      authFormDispatch({ type: "LOADING_OFF" });
    }
  };

  const guestLoginHandler = async (e) => {
    e.preventDefault();
    setGuestLoading(true);
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: "guest@gmail.com",
        password: "guest@gmail.com",
      });
      localStorage.setItem("token", response.data.encodedToken);
      authDispatch({
        type: "LOGIN",
        payload: {
          user: response.data.foundUser,
          token: response.data.encodedToken,
        },
      });
      setGuestLoading(false);
      const pathName = location?.state?.from?.pathname;
      navigate(pathName ? pathName : "/");
      toast.success(`Welcome Back, ${response.data.foundUser.userName}`);
    } catch (e) {
      console.log(e);
      setGuestLoading(false);
    }
  };

  useDocumentTitle("Login | CarSmart");
  return (
    <main className="flex-column auth-main">
      <form className="flex-column">
        <h3 className="login-title">Login</h3>
        <FormTextInput
          legend={"Email"}
          placeholder={"john.doe@example.com"}
          value={email}
          type={"email"}
          onChange={(e) =>
            authFormDispatch({ type: "EMAIL", payload: e.target.value.trim() })
          }
        />
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
        <div className="flex-row form-wrapper">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a>Forgot Password?</a>
        </div>
        <button
          className="btn prim-btn"
          id="login-btn"
          onClick={(e) => loginHandler(e)}
        >
          {loading ? <i className="fa fa-spinner fa-spin" /> : "Login"}
        </button>
        <button
          className="btn prim-acc-btn"
          id="login-btn"
          onClick={(e) => guestLoginHandler(e)}
        >
          {guestLoading ? (
            <i className="fa fa-spinner fa-spin" />
          ) : (
            "Guest Login"
          )}
        </button>
        <Link
          className="new-acc-link"
          to="/signup"
          state={{ from: location?.state?.from }}
        >
          Create New Account ❯
        </Link>
      </form>
    </main>
  );
}

export default Login;
