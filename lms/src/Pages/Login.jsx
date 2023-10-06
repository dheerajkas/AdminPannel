import React from "react";
import lms from "../Image/pae.jpg"
import hlogo from '../Image/logo.jpg'

function Login (){
     return(
        <div className="formContainer">
            <img src={lms} className="lmsimg" />

            <div className="formWrapper">

                <form>
                    <img src={hlogo} className="logoimg"/>
                    <span className="title">
                        Login to your dashboard
                    </span>

                    <label>
                        Email
                    </label>
                    <input placeholder="Enter your Username"/>
                    <label>
                        Password
                    </label>
                    <input placeholder="Enter your Password" />

                    <button>
                        Login
                    </button>

                    
                </form>

            </div>
        </div>
     );
}
export default Login