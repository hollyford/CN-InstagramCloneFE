import { useState } from "react";
import { loginFetch, signUpFetch } from "../utils";

export const Login = ({ setUser }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [logBool, setLogBool] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (email) {
        signUpFetch(username, email, pass, setUser);
      } else {
        loginFetch(username, pass, setUser);
      }
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        {!logBool && (
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        )}
        <input
          onChange={(e) => setPass(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
      <button
        onClick={(e) => {
          e.preventDefault();
          setLogBool(!logBool);
        }}
      >
        {logBool ? "Sign Up?" : "Log In?"}
      </button>
    </div>
  );
};