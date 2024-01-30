// LoginSignup.js

import React, { useState } from "react";
import { handleSignup, handleLogin, handleLogout } from '../firebase';
import {  useNavigate, Link } from "react-router-dom";
import Navbar from '../component/Navbar';

const LoginSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(true);
  const Navigate =  useNavigate();

  const handleAuth = async (e, action) => {
    e.preventDefault();
    try {
      let userCredential;

      if (action === 'signup') {
        userCredential = await handleSignup(email, password, name);
      } else {
        userCredential = await handleLogin(email, password);
      }

      if (userCredential && userCredential.user && userCredential.user.displayName) {
        setName(userCredential.user.displayName);
      }

      setLoggedIn(true);

      console.log('User authenticated:', userCredential.user);
      setEmail('');
      setPassword('');

      // Redirect to the main page after successful login/signup
      Navigate.push('/');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogoutClick = () => {
    handleLogout()
      .then(() => {
        setLoggedIn(false);
        setName('');
      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  };

  return (
    <>
      <Navbar name={name} loggedIn={loggedIn} handleLogoutClick={handleLogoutClick} />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          {loggedIn ? (
            <>
              <p className="text-lg font-semibold mb-4">
                Welcome, {name}
              </p>
              {loggedIn && (
                <Link to="/">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Go to Home
                  </button>
                </Link>
              )}
            </>
          ) : (
            <>
              {isLoginPage ? (
                <form onSubmit={(e) => handleAuth(e, 'signup')} className="mb-4">
                  <h1 className="text-2xl font-semibold mb-4">Create Account</h1>
                  {error && <p className="text-red-500 mb-4">{error}</p>}
                  <label className="block mb-2">
                    Name:
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-input mt-1 block w-full"
                    />
                  </label>
                  <label className="block mb-2">
                    Email address:
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-input mt-1 block w-full"
                    />
                  </label>
                  <label className="block mb-2">
                    Password:
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-input mt-1 block w-full"
                    />
                  </label>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Sign Up
                  </button>
                  <p>
                    Already have an account?{' '}
                    <span
                      className="text-blue-500 cursor-pointer"
                      onClick={() => setIsLoginPage(false)}
                    >
                      Log in
                    </span>
                  </p>
                </form>
              ) : (
                <form onSubmit={(e) => handleAuth(e, 'login')}>
                  <h1 className="text-2xl font-semibold mb-4">Log In to your Account</h1>
                  {error && <p className="text-red-500 mb-4">{error}</p>}
                  <label className="block mb-2">
                    Email address:
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-input mt-1 block w-full"
                    />
                  </label>
                  <label className="block mb-2">
                    Password:
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-input mt-1 block w-full"
                    />
                  </label>
                  <div className="button-container">
                    <button
                      type="submit"
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Log In
                    </button>
                  </div>
                  <p>
                    Don't have an account?{' '}
                    <span
                      className="text-blue-500 cursor-pointer"
                      onClick={() => setIsLoginPage(true)}
                    >
                      Sign up
                    </span>
                  </p>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
