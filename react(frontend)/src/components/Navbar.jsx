import React from 'react'

function Navbar() {

    const logout = () => {
       
    
        localStorage.clear();
        window.location.href = "/";
      };
    
  return (
   <>
        <nav
        className="navbar navbar-light "
        style={{ backgroundColor: "#ffc2d1" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand">TODO</a>

          <button
            class="btn btn-outline-success"
            type="submit"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </nav>
   </>
  )
}

export default Navbar