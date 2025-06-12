import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import React, { useEffect, useState } from 'react';
import './Login.css';

const firebaseConfig = {
  apiKey: "AIzaSyB2X3fS0DAuzxWSsDdpKZsVLKzhgwQ4zzw",
  authDomain: "foodappdata-78a99.firebaseapp.com",
  databaseURL: "https://foodappdata-78a99-default-rtdb.firebaseio.com",
  projectId: "foodappdata-78a99",
  storageBucket: "foodappdata-78a99.appspot.com",
  messagingSenderId: "961564187893",
  appId: "1:961564187893:web:9af28167a0eb98e5c139bc",
};

// Initialize Firebase only once
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

const Login = ({ SetShowLogin }) => {
  const [currentState, setCurrentState] = useState('Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [user, setUser] = useState(null); // Track the current logged-in user

  // Listen to the auth state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user); // Set the logged-in user
        setCurrentState('Sign Out'); // Change state to Sign Out
      } else {
        setUser(null); // No user logged in
        setCurrentState('Login'); // Change state to Login
      }
    });
    return () => unsubscribe(); // Cleanup the listener on component unmount
  }, []);

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (currentState === 'Sign Up') {
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }

      try {
        await auth.createUserWithEmailAndPassword(email, password);
        const user = auth.currentUser;
        await user.sendEmailVerification();
        alert(`Account created for ${name}. Please verify your email.`);
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
    } else if (currentState === 'Login') {
      try {
        await auth.signInWithEmailAndPassword(email, password);
        alert('Logged in successfully!');
        SetShowLogin(false);
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
    } else if (currentState === 'Sign Out') {
      try {
        await auth.signOut();
        alert('Logged out successfully!');
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
    }
  };

  const handleForgotPassword = async () => {
    try {
      await auth.sendPasswordResetEmail(email);
      alert('Password reset email sent!');
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="login">
      <form className="login-popup" onSubmit={handleRegistration}>
        <h2>{currentState === 'Login' ? 'Sign In' : currentState === 'Sign Up' ? 'Sign Up' : 'Sign Out'}</h2>
        <i className="fa-solid fa-xmark s1" onClick={() => SetShowLogin(false)}></i>
        <div className="form-input-group">
          {currentState === 'Sign Up' && (
            <input
              type="text"
              name="name"
              placeholder="Enter your Name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email Address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
          <input
            type="password"
            name="password"
            placeholder="Enter the password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {currentState === 'Sign Up' && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password..."
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}
          {currentState === 'Login' && (
            <p className="pass" onClick={handleForgotPassword}>
              Forgot Password? <span>Click Here</span>
            </p>
          )}
        </div>
        <button className="btn btn-primary">
          {currentState === 'Sign Up'
            ? 'Create Account'
            : currentState === 'Login'
            ? 'Login'
            : 'Sign Out'}
        </button>
        <div className="login-form">
          <input type="checkbox" className="form-check-input" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
          <div className="social-media">
            <p>Login With</p>
            <div className="hh">
              <i className="fa-brands fa-google"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
        {currentState === 'Login' ? (
          <p className="hello">
            Don't have an account?{' '}
            <span onClick={() => setCurrentState('Sign Up')}>Sign Up Here</span>
          </p>
        ) : (
          <p className="hello">
            Already have an account?{' '}
            <span onClick={() => setCurrentState('Login')}>Sign In Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
