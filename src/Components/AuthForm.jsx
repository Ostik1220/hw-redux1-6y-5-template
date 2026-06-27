import { useDispatch } from "react-redux";
import { createUser, loginUser, logOutUser } from "../redux/users/usersOperation";
import { useState } from "react";

export const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (isLogin) {
      dispatch(loginUser({ email, password }));
    } else {
      dispatch(createUser({ email, password }));
    }

    form.reset();
  };

  return (
    <div className="auth-shell">
      <div className="auth-card">
        <div className="auth-copy">
          <p className="eyebrow">Smart contacts</p>
          <h1>Keep your phonebook organized</h1>
          <p>
            Sign in or create an account to manage contacts in a calm and modern workspace.
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" placeholder="Enter email here" />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" placeholder="Enter password here" />
          </div>

          <button className="primary-btn" type="submit">
            {isLogin ? "Log in" : "Register"}
          </button>

          <button className="secondary-btn" type="button" onClick={() => dispatch(logOutUser())}>
            Log out
          </button>

          <button className="text-btn" type="button" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Don't have an account? Register here" : "Already have an account? Log in here"}
          </button>
        </form>
      </div>
    </div>
  );
};
