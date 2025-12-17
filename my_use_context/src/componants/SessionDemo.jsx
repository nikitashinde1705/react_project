import React, { useEffect, useState } from 'react'

const SessionDemo = () => {

  const [user, setUser] = useState("");
  const [timeLeft, setTimeLeft] = useState(120);

  useEffect (() => {
    const savedUser = sessionStorage.getItem("user");
    const savedTime = sessionStorage.getItem("time");

    if(savedUser && savedTime){
      setUser(savedUser);
      setTimeLeft(Number(savedTime));
    }
  },[]);

  useEffect (() => {
    if(!user) return;
    if(timeLeft == 0){
      logout();    //auto logout
      return;
    }

        const timer = setInterval(() => {
        setTimeLeft((prev) => {
          sessionStorage.setItem("time", prev - 1);
          return prev - 1;
        });
      },1000);
      return () => clearInterval(timer);
  },[user,timeLeft]);


  const login = () => {
    if(!user) return alert("Please Enter name");
    sessionStorage.setItem("user", user);
    sessionStorage.setItem("time",120);
    setTimeLeft(120);
  };

  const logout = () => {
    sessionStorage.clear();
    setUser("");
    setTimeLeft(120);
    alert("Session Expired out")
  };

  

  

  return (
    <div>

        <div className="container col-md-6">
          <div className="card">

            <div className="card-header">
              <h2>Auto logout Session Storage</h2>
            </div>

            <div className="card-body">
              {!sessionStorage.getItem("user") ? (
                <div>
                  <input onChange={(e) => setUser(e.target.value)} className='form-control' placeholder='Enter UserName' />
                  <button onClick={login} className='btn btn-success'> Login</button>
                </div>
                
              ) : (
                <>
                  <h5> Welcome {sessionStorage.getItem("user")} </h5>
                  <h5 className='text-danger'>Auto Logout in {timeLeft}</h5>
                  <button onClick={logout} className='btn btn-danger'>Logout</button>
                </>
              )}
            </div>
          </div>
        </div>

      
    </div>
  )
}

export default SessionDemo
