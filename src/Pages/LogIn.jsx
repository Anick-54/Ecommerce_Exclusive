import { BredCrumb } from "../Components/BredCrumb"
import { Container } from "../Components/Container"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import S from "../assets/SU.png"
import { useNavigate } from "react-router-dom"
import { useState } from "react";




export const LogIn = () => {
  const [email, setEmail] = useState(" ")
  const [password, setPassword] = useState(" ")

  const navigate = useNavigate();
  


 const auth = getAuth();



  const handleLogin = (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate ("/");


        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        alert(errorCode);
        alert(errorMessage);

      });
        






  }




  return (
    <>
      <Container className="mt-10 ">
        <BredCrumb/>
        <div className="mt-10 mb-[140px] lg:flex gap-35">
          <div>
            <div className="lg:w-[805px] lg:h-[781px]">
              <img src={S} alt="SU" />
            </div>
          </div>

          <div className="mt-[125px] pl-1">
            <div className="">
              <h2 className="text-4xl font-medium font-inter mb-6">Log in to Exclusive</h2>
              <p className="text-[16px] mb-12">Enter your details below</p>
            </div>
            {/* <div>
              <input type="text" placeholder="Enter Your Name" className="w-[370px] h-8 border-b" />

            </div> */}
            <div className="mt-10 mb-10">
              <input type="email" placeholder="Email Or Phone Number" className="w-[370px] h-8 border-b focus:outline-none" onChange = {(e) => setEmail(e.currentTarget.value)}/>

            </div>
            <div>
              <input type="password" placeholder="Password" className="w-[370px] h-8 border-b focus:outline-none" onChange={(e) => setPassword(e.currentTarget.value)} />

            </div>
            <div className="flex justify-between mt-10 ">
              <button className="bg-primary text-white w-[143px] h-14 rounded-md hover:bg-red-700 cursor-pointer" onClick={handleLogin}>Log In</button>
              <button className="border-1 border-secondary  rounded-md w-[143px] h-14 hover:bg-secondary cursor-pointer">Forget Password</button>
            </div>
            
          </div>
        </div>
      </Container>


    </>
  )
}
