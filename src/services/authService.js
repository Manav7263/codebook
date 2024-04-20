import { toast } from "react-toastify";

export async function login(authDetail){

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authDetail)
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/login`,requestOptions);
    
    const data = await response.json();
    console.log(data)

    if(data.accessToken){
        sessionStorage.setItem("token",JSON.stringify(data.accessToken));
        sessionStorage.setItem("cdid",JSON.stringify(data.user.id))
    }

    return data;
}

export async function register(authDetail){
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authDetail)
      }

    const response = await fetch(`${process.env.REACT_APP_HOST}/register`,requestOptions);
    
    const data = await response.json();
  
    if(data.accessToken){
      sessionStorage.setItem("token",JSON.stringify(data.accessToken));
      sessionStorage.setItem("cdid",JSON.stringify(data.user.id))
    }

    return data;
      
}

export function logout(){
    
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("cdid");
    toast(<div><i className="bi bi-check-circle"></i> Successfully logged out!</div>,{position:"top-right",autoClose: 2000,hideProgressBar: false,closeOnClick: true,pauseOnHover: false, closeButton:true,theme:"colored",className: 'my-custom-toast-login'})
}