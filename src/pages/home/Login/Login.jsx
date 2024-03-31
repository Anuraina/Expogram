import './login.css'
export default function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Expogram</h3>
                <span className="loginDesc">
                    Connect with friends and the world on Expogram
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                <input placeholder='Username' className="loginInput" />
                    <input placeholder='Email' className="loginInput" />
                    <input placeholder='Password' className="loginInput" />
                    <input placeholder='Password Again' className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password</span>
                    <button className="loginRegisterButton">Create a new Account</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}
