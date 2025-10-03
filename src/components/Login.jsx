import React, { useState } from 'react'
import { useAppContext } from '../hooks/useAppContext';

const Login = () => {

  const { setShowUserLogin, setUser } = useAppContext();

  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setUser({
      email: "test@aliefarfn.dev",
      name: "StackRiv"
    })
    setShowUserLogin(false);
  }

  return (
    <div onClick={() => setShowUserLogin(false)} className='fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center text-sm text-gray-600 bg-black/50 justify-center'>
      <div onClick={(e) => e.stopPropagation()} className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
        {state === "register" ? (
          <h2 className="text-2xl font-semibold mb-6 text-center text-primary">Sign <span className='text-gray-500'>up</span></h2>
        ) : (
          <h2 className="text-2xl font-semibold mb-6 text-center text-primary">Welcome <span className='text-gray-500'>back</span></h2>
        )}

        <form onSubmit={onSubmitHandler}>
          {state === "register" && (
            <input
              id='name'
              onChange={(e) => setName(e.target.value)}
              value={name}
              className='w-full bg-transparent border mt-3 border-gray-500/30 outline-primary rounded-full py-2.5 px-4'
              type='text'
              placeholder='Enter your name'
              required
            />
          )}

          <input
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full bg-transparent border my-3 border-gray-500/30 outline-primary rounded-full py-2.5 px-4"
            type="email"
            placeholder="Enter your email"
            required
          />

          <input
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password} className="w-full bg-transparent border mb-3 border-gray-500/30 outline-primary rounded-full py-2.5 px-4"
            type="password"
            placeholder="Enter your password"
            required
          />

          {state === "login" && (
            <div className="text-right pb-4">
              <a className="text-primary underline" href="#">Forgot Password</a>
            </div>
          )}

          <button type="submit" className="w-full mb-3 bg-primary py-2.5 rounded-full text-white hover:cursor-pointer">
            {state === "register" ? "Sign up" : "Log in"}
          </button>
        </form>

        {state === "register" ? (
          <p className="text-center mt-4">
            Already have account? <span></span>
            <a onClick={() => setState("login")} href="#" className="text-primary underline">
              Signin
            </a>
          </p>
        ) : (
          <p className="text-center mt-4">
            Don’t have an account? <span></span>
            <a onClick={() => setState("register")} href="#" className="text-primary underline">
              Signup
            </a>
          </p>
        )
        }

        <button type="button" className="w-full flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800 hover:cursor-pointer">
          <img className="h-4 w-4" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png" alt="googleFavicon" />
          Log in with Google
        </button>
      </div >
    </div>
  )
}

export default Login