import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;



  return (
    <>

    <div className='d-flex justify-content-evenly'>
        <Link to="/">
        <img src={logo} alt='Logo' width={160} height={32} loading='lazy'/>
        </Link>

        <nav>
            <ul className='d-flex gap-3  '>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        {/* Login - signup - Logout - Dashboard */}

        <div className='d-flex gap-3 ms-3 '>
            { !isLoggedIn &&
                <Link to="/login">
                    <button>
                        Login
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button>
                        Sign Up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button>
                        DashBoard
                    </button>
                </Link>
            }
        </div>

    </div>
      
    </>
  )
}

export default Navbar
