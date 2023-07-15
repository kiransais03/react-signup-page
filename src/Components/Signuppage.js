import React,{useState} from "react";
import { ReactDOM } from "react-dom";
import { Helmet } from "react-helmet";
import leftimg from "./images/Abstraction.png"
import google from "./images/search 1.png"
import fb from "./images/facebook 1.png"

const Signuppage =()=>{

  let [userdetails,setUserdetails] =useState({name:"",email:"",password:"",confirmpassword:""});
  let [error,setError]=useState("");
  let [success,setSuccess]=useState(""); 

  console.log(userdetails)

  function validateform(event) {
       event.preventDefault();
       console.log("donethis",userdetails)
    //    setUserdetails({name:"",email:"",password:"",confirmpassword:""})
    if(userdetails.name.length>=1 && userdetails.email.length>=1 && userdetails.password.length>=1 && userdetails.confirmpassword.length>=1)
    {
        console.log("HI")
      if(userdetails.email.includes('@') && userdetails.email.includes('.'))
       {
         if(userdetails.password===userdetails.confirmpassword)
         {  
            setError("")
            setSuccess("Account successfully created.Please Login!");
            setTimeout(() => {
                window.location.reload();
            }, 1000);
         } else {
            setError("Error:Please make sure your password and confirm password match.")
         }

      }else {
        setError("Error:Email is not valid.")
      }
    } else {
       setError("Error:All the fields should be filled.");
       console.log("error")
    }
  }



    return (
        <>
        <Helmet>
            <meta charSet="UTF-8"/>
            <meta name="author" content="Guduru Kiran Sai"/>
            <meta name="description" content="Signup page in the react library"/>
            <meta name="keywords" content="singup,signin,login,createaccount"/>
            <meta name="viewport" content="widht=device-width,initial-scale=1.0"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>
            <title>SignUp Page In React</title>
        </Helmet>
        <div className="main-container shadow-lg">
           <div className="page-data d-flex justify-content-between">
             <div className="left">
                <p style={{color:"#FFFFFF"}} className="fs-1 m-5">Find 3D Objects Mockups and Illustrations here.</p>
                <img src={leftimg} className="img-fluid img-rounded position-relative" style={{left:"15%"}} alt="logo"/>
             </div>
             <div className="right shadow-lg rounded-start-5">
                <div className="right-div mx-auto">
                <h2 className="mt-4">Create Account</h2>

                <div className="d-flex flex-wrap justify-content-between mt-4" style={{fontSize:"15px"}}>
                    <div className="d-flex align-items-center p-2 google" style={{borderRadius:"8px",border:"2px solid grey"}}><img src={google} alt="google"/>-Sign up with Google</div>
                    <div className="d-flex align-items-center p-2 fb" style={{borderRadius:"8px",border:"2px solid grey"}}><img src={fb} alt="fb"/>-Sign up with Facebook</div>
                </div>

                <div style={{textAlign:"center",fontSize:"35px",color:"grey"}} className="mt-3">- OR -</div>
                
                <form onSubmit={validateform} className="d-flex flex-column row-gap-4">
                    <input type="text" placeholder="Full Name" className="mt-4" id="name" onChange={(event)=>{setUserdetails({...userdetails,name:event.target.value})}}/>
                    <input type="emai" placeholder="Email Address" id="email" onChange={(event)=>{setUserdetails({...userdetails,email:event.target.value})}}/>
                    <input type="password" placeholder="Password" id="pass" onChange={(event)=>{setUserdetails({...userdetails,password:event.target.value})}}/>
                    <input type="password" placeholder="Confirm Password" id="confirmpass" onChange={(event)=>{setUserdetails({...userdetails,confirmpassword:event.target.value})}}/>
                    <button type="submit" className="btn btn-info text-white fw-bold">Create Account</button>
                </form>

                      { success && <p className="green m-3">{success}</p> }
                      { error && <p className="red m-3">{error}</p> }
             </div>
             </div>
           </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
        </>
    )
}

export default Signuppage;



/* <div class="spinner-border text-primary">
     <span class="visually-hidden">Loading...</span>
 </div> */