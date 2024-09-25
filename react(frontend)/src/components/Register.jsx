import React, { useState } from "react";
import "./Login.css";
import { Link } from 'react-router-dom';

function Register() {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  console.log(name, address, contact, email, password);

  const handleSubmit = () => {
    let param = {
      name: name,
      address: address,
      contact: contact,
      email: email,
      password: password,
      status:0
    };

    fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(param),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
//     <div
//     style={{
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       minHeight: '100vh',
//       width: '100%',
//       padding: '0 10px',
//       position: 'relative',
//       margin: 0,
//       backgroundColor: '#000', 
//       fontFamily: '"Open Sans", sans-serif',
//       backgroundImage: "url('img.jpg')",
//     }}
//   >
//     <div
//       style={{
//         width: '400px',
//         borderRadius: '8px',
//         padding: '30px',
//         textAlign: 'center',
//         border: '1px solid rgba(255, 255, 255, 0.5)',
//         backdropFilter: 'blur(8px)',
//         WebkitBackdropFilter: 'blur(8px)',
        
//       }}
//     >
//       <h2
//         style={{
//           fontSize: '2rem',
//           marginBottom: '20px',
//           color: '#fff',
//         }}
//       >
//         Register
//       </h2>

//       <div
//         style={{
//           position: 'relative',
//           borderBottom: '2px solid #ccc',
//           margin: '15px 0',
//         }}
//       >
//         <input
//           type="text"
//           required
//           onChange={(e) => setName(e.target.value)}
//           style={{
//             width: '100%',
//             height: '40px',
//             background: 'transparent',
//             border: 'none',
//             outline: 'none',
//             fontSize: '16px',
//             color: '#fff',
//           }}
//           placeholder="Enter your Name"
//         />
        
//       </div>

//       <div
//         style={{
//           position: 'relative',
//           borderBottom: '2px solid #ccc',
//           margin: '15px 0',
//         }}
//       >
//         <input
//           type="text"
//           required
//           onChange={(e) => setAddress(e.target.value)}
//           style={{
//             width: '100%',
//             height: '40px',
//             background: 'transparent',
//             border: 'none',
//             outline: 'none',
//             fontSize: '16px',
//             color: '#fff',
//           }}
//           placeholder="Enter your Address"
//         />
      
//       </div>

//       <div
//         style={{
//           position: 'relative',
//           borderBottom: '2px solid #ccc',
//           margin: '15px 0',
//         }}
//       >
//         <input
//           type="text"
//           required
//           onChange={(e) => setContact(e.target.value)}
//           style={{
//             width: '100%',
//             height: '40px',
//             background: 'transparent',
//             border: 'none',
//             outline: 'none',
//             fontSize: '16px',
//             color: '#fff',
//           }}
//           placeholder="Enter your Contact"
//         />
        
//       </div>

//       <div
//         style={{
//           position: 'relative',
//           borderBottom: '2px solid #ccc',
//           margin: '15px 0',
//         }}
//       >
//         <input
//           type="email"
//           required
//           onChange={(e) => setEmail(e.target.value)}
//           style={{
//             width: '100%',
//             height: '40px',
//             background: 'transparent',
//             border: 'none',
//             outline: 'none',
//             fontSize: '16px',
//             color: '#fff',
//           }}
//           placeholder="Enter your Email"
//         />
       
//       </div>

//       <div
//         style={{
//           position: 'relative',
//           borderBottom: '2px solid #ccc',
//           margin: '15px 0',
//         }}
//       >
//         <input
//           type="password"
//           required
//           onChange={(e) => setPassword(e.target.value)}
//           style={{
//             width: '100%',
//             height: '40px',
//             background: 'transparent',
//             border: 'none',
//             outline: 'none',
//             fontSize: '16px',
//             color: '#fff',
//           }}
//           placeholder="Enter your password"
//         />
        
//       </div>

//       <button
//         type="submit"
//         onClick={handleSubmit}
//         style={{
//           background: '#fff',
//           color: '#000',
//           fontWeight: 600,
//           border: 'none',
//           padding: '12px 20px',
//           cursor: 'pointer',
//           borderRadius: '3px',
//           fontSize: '16px',
//           border: '2px solid transparent',
//           transition: '0.3s ease',
//         }}
//         onMouseOver={(e) =>
//           (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)')
//         }
//         onMouseOut={(e) =>
//           (e.currentTarget.style.background = '#fff')
//         }
//       >
//         Register
//       </button>
//       <p style={{ color: 'white' }}>
//         You have an account? <Link to="/">Login</Link>
//       </p>
//     </div>
//   </div>

<div
style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  width: '100%',
  padding: '0 10px',
  position: 'relative',
  margin: 0,
  backgroundColor: '#000', 
  fontFamily: '"Open Sans", sans-serif',
}}
>
<div
  style={{
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: "url('img.jpg')", 
  }}
></div>
<div
  style={{
    width: '400px',
    borderRadius: '8px',
    padding: '30px',
    textAlign: 'center',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
  }}
>
<h2
        style={{
          fontSize: '2rem',
          marginBottom: '20px',
          color: '#fff',
        }}
      >
        Register
      </h2>

      <div
        style={{
          position: 'relative',
          borderBottom: '2px solid #ccc',
          margin: '15px 0',
        }}
      >
        <input
          type="text"
          required
          onChange={(e) => setName(e.target.value)}
          style={{
            width: '100%',
            height: '40px',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            fontSize: '16px',
            color: '#fff',
          }}
          placeholder="Enter your Name"
        />
        
      </div>

      <div
        style={{
          position: 'relative',
          borderBottom: '2px solid #ccc',
          margin: '15px 0',
        }}
      >
        <input
          type="text"
          required
          onChange={(e) => setAddress(e.target.value)}
          style={{
            width: '100%',
            height: '40px',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            fontSize: '16px',
            color: '#fff',
          }}
          placeholder="Enter your Address"
        />
      
      </div>

      <div
        style={{
          position: 'relative',
          borderBottom: '2px solid #ccc',
          margin: '15px 0',
        }}
      >
        <input
          type="text"
          required
          onChange={(e) => setContact(e.target.value)}
          style={{
            width: '100%',
            height: '40px',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            fontSize: '16px',
            color: '#fff',
          }}
          placeholder="Enter your Contact"
        />
        
      </div>

      <div
        style={{
          position: 'relative',
          borderBottom: '2px solid #ccc',
          margin: '15px 0',
        }}
      >
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: '100%',
            height: '40px',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            fontSize: '16px',
            color: '#fff',
          }}
          placeholder="Enter your Email"
        />
       
      </div>

      <div
        style={{
          position: 'relative',
          borderBottom: '2px solid #ccc',
          margin: '15px 0',
        }}
      >
        <input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: '100%',
            height: '40px',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            fontSize: '16px',
            color: '#fff',
          }}
          placeholder="Enter your password"
        />
        
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        style={{
          background: '#fff',
          color: '#000',
          fontWeight: 600,
          border: 'none',
          padding: '12px 20px',
          cursor: 'pointer',
          borderRadius: '3px',
          fontSize: '16px',
          border: '2px solid transparent',
          transition: '0.3s ease',
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)')
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.background = '#fff')
        }
      >
        Register
      </button>
      <p style={{ color: 'white' }}>
        You have an account? <Link to="/">Login</Link>
      </p>
    </div>
  </div>

);
};

export default Register;
