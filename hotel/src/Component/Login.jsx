// import { Link } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";
// import {useNavigate} from "react-router-dom";
// function Login()
// {
    
//   const[email,setEmail]=useState()
//   const[password,setPassword]=useState()
// const navigate=useNavigate()
// const handleSubmit=(e)=>{
//   e.preventDefault()
//   axios.post('https://localhost:5000/login',{email,password})
//   .then(result=>
//     {console.log(result)
//         if(result.data==="success")
//         {
//             navigate('/Home')
//         }
 
//     })
//   .catch(err=>console.log(err))

// }
//     return(
//         <div>
//             <h2>Login</h2>
//            <form onSubmit={handleSubmit}>
        

//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} required />

//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} required />

//         {/* <button type="submit">Register</button> */}
//       </form>
//      <button>
//       <Link to="/Home"> submit</Link>
//       </button>
//         </div>
//     )
// }
// export default Login

import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import './Login.css'; // Import the CSS file

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://localhost:5000/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          navigate('/Home');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-container"> {/* Added a class for styling */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* <button type="submit">Submit</button> */}
      </form>
      <p>Don't have an account?</p>
      <button>
        <Link to="/Home"><h4><b>Signup</b></h4></Link>
      </button>
    </div>
  );
}

export default Login;
