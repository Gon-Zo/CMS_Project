import React from "react";
import {Link} from "react-router-dom";

const SignInContainer = () => {
    return (
        <div>
           <span>
               Sign in
           </span>
            <Link to={"/"}>
                Go to Home
            </Link>
        </div>
    )
}

export default SignInContainer
