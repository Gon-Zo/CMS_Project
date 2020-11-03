import React, {useState} from "react";
import logo from "../../images/logo.svg";
import {useDispatch, useSelector} from "react-redux";
import AwesomeComponent from "../../component/awesome-component.jsx";
import {fetchLogin} from "./login.action";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link, useHistory} from "react-router-dom";

const LoginContainer = () => {

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const history = useHistory()

    const {load, data, err} = useSelector(state => {
        const payload = state.Login
        return {
            load : payload.load,
            error : payload.error,
            data : payload.data
        }
    })

    const _onLogin = () => {
        dispatch(fetchLogin({"email": email, "password": password}, history))
    }

    const _onLoginToKakao = () => {
        history.push("/")
    }

    const _onLoginToGoogle = () => {
    }

    const _handlerKeyPress = (e) => {
        if (e.key === "Enter") {
            _onLogin()
        }
    }

    return (

        <div className="login-wrap">

            {
                load === true && <AwesomeComponent color={"#61dafb"}/>
            }

            <div className="login-box">

                <div className="login-header">
                    <img src={logo} alt="logo"/>
                    <span className="ft-color-turquoiseBlue">React CMS</span>
                </div>
                {/*header*/}

                <div className="login-body pl-3 pr-3 pt-lg-5">

                    <div className="login-input p-2">
                        <label>Email</label>
                        <input onKeyPress={_handlerKeyPress}
                               type={"text"} value={email}
                               onChange={event =>
                                   setEmail(event.target.value)}/>
                    </div>

                    <div className="login-input p-2 mt-5">
                        <label>Password</label>
                        <input onKeyPress={_handlerKeyPress}
                               type={"password"}
                               value={password}
                               onChange={event =>
                                   setPassword(event.target.value)}/>
                    </div>

                </div>
                {/*body*/}

                <div className="pl-5 pr-5 login-footer">
                    <button className="btn btn-turquoiseBlue btn-block" onClick={() => _onLogin()}>
                        <FontAwesomeIcon icon={['fas', 'sign-in-alt']}/>
                        <span className="ml-2">Login</span>
                    </button>
                    <button className="btn btn-warning btn-block" onClick={() => _onLoginToKakao()}>
                        <FontAwesomeIcon icon={['fas', 'comment']}/>
                        <span className="ml-2">Kakao</span>
                    </button>
                    <button className="btn btn-light btn-block" onClick={() => _onLoginToGoogle()}>
                        <FontAwesomeIcon icon={['fab', 'google']}/>
                        <span className="ml-2">Google</span>
                    </button>

                    <div className="text-box mt-1">
                        <Link to={"/cms/sign-in"}>계정만들기</Link>
                    </div>
                </div>
                {/*footer*/}

            </div>

        </div>

    )

}

export default LoginContainer
