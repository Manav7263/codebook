import { useEffect, useState } from "react"
import Logo1 from "../../assets/logo1.png"
import { Link } from "react-router-dom"
import { Search } from "../Sections/Search"
import { DropdownLoggedOut , DropdownLoggedIn } from "../index"
import { useCart } from "../../context";

export const Header = () => {

  const { cartList} = useCart();
  const [darkMode,setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
  const [searchSection,setSearchSection ] = useState(false);
  const [dropdown , SetDropdown] = useState(false);
  const token = JSON.parse(sessionStorage.getItem("token"));

  useEffect(()=>{
    localStorage.setItem("darkMode",JSON.stringify(darkMode));

    if(darkMode){
      document.documentElement.classList.add("dark")
    }
    else{
      document.documentElement.classList.remove("dark")
    }
  },[darkMode])

  return (
    <header>      
      <nav className="bg-white dark:bg-gray-800">
          <div className=" border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
              <Link to="/" className="flex items-center">
                  <img src={Logo1} className="mr-1 mt-2 h-10" alt="CodeBook Logo" />
                  <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">CodeBook</span>
              </Link>
              <div className="flex items-center relative">
                  <span onClick={() => setDarkMode(!darkMode)}className="cursor-pointer text-2xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
                  <span onClick={() => setSearchSection(!searchSection)}className="cursor-pointer text-2xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
                  <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
                    <span className="text-2xl bi bi-cart-fill relative">
                      <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{cartList.length}</span>
                    </span>                    
                  </Link>
                  <span  onClick={()=> SetDropdown(!dropdown)} className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
                  { dropdown && ( token ? <DropdownLoggedIn setDropdown={SetDropdown} /> : <DropdownLoggedOut setDropdown={SetDropdown} /> ) }              
                  </div>
          </div>
      </nav>
      { searchSection && <Search setSearchSection = {setSearchSection}/> }     
    </header>
  )
}
