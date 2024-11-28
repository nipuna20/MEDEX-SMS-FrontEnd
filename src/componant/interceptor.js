import axios from "axios";
import { decryption } from "./comonFuntions.tsx";
import { openErrorDialog } from "./openErrorDialog.tsx";



const interceptor = axios.create({
    baseURL:
    process.env.NODE_ENV ==="development"
        ? process.env.REACT_APP_API_DEV
        : process.env.REACT_APP_API_PROD,
});

interceptor.interceptors.request.use(
    (req) => {
        if(localStorage.getItem("profile")) {
            const user = JSON.parse(localStorage.getItem("profile")||"");
            let decryptedDefoltData = decryption(user);
            req.headers[
                "Authorization"
            ] = `Bearer ${decryptedDefoltData.token}`;
        }
        return req;
    },
    (error) => {
        return Promise.reject(error);
    }
);

interceptor.interceptors.response.use(
    (Response) => {
        return Response;  
    },
    (error) => {
        if (error.response.status === 401) {
           openErrorDialog(error.response.data.status,error.response.data.comment);
           localStorage.removeItem("profile");
           window.location.replace("/");
        }else{
            openErrorDialog(error.response.data.status, error.response.data.comment);
        }
    }
);

export default interceptor;