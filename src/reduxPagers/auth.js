import { decryption, encryption } from "../componant/comonFuntions.tsx";
import { AUTH, LOGOUT } from "../componant/const";

 const authReducer = ( state = { authData: null }, action) => {
    switch(action.type){
        case AUTH:
            // console.log(action)
            let encryptedData = encryption({...action?.data});
            localStorage.setItem("profile",JSON.stringify(encryptedData));

            let decryptedData = decryption(encryptedData);
            return{...state,authData:decryptedData};

            case LOGOUT:
                localStorage.removeItem("profile");
                return { ...state, authData:null};

            default:
                const user = JSON.parse(localStorage.getItem("profile"));
                let decryptedDefoltData = decryption(user);
                return { ...state,authData:decryptedDefoltData };
    }
};

export default authReducer