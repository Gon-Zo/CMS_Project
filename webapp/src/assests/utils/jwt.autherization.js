import axios from "axios";

const setToAuthorization = () => axios.defaults.headers.common.Authorization;

export const getToRoles = (name) => {
    const token = setToAuthorization()
    getToJwtValue(token, name)
}

const getToJwtValue = (token, name) => decodedToToken(token)[`${name}`];

const decodedToToken = (token) =>{

}

