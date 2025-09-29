export const validateData =(email,password)=>{
    let passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    let emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if(!emailReg.test(email)){
        return "Invalid Email"
    }
    if(!passwordReg.test(password)){
        return "Password must contain at least 8 characters, including UPPER/lowercase and numbers"
    }
    return null;
}