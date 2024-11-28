import { SECRET_KEY } from "./const";




const CryptoJS = require("crypto-js");


export function encryption(cipherText) {
    if (cipherText) {
        return CryptoJS.AES.encrypt(
            JSON.stringify(cipherText),
            SECRET_KEY
        ).toString();
    }else {
        console.error("No cipherText provided.");
      }
}

export function decryption(cipherText){
    if (cipherText){
        let bytes =CryptoJS.AES.decrypt(cipherText,SECRET_KEY);
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
    }
}


// 
