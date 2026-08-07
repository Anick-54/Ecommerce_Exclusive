import { BredCrumb } from "../Components/BredCrumb"
import { Container } from "../Components/Container"
import S from "../assets/SU.png"
import Goole from "../assets/Google.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification  } from "firebase/auth";


export const SingUp = () => {




  const [name,setName] = useState ('')
  const [email,setEmail] = useState ('')
  const [password,setPassword] = useState ('')

  const navigate = useNavigate();

  const handleClick = (e) => {
    
    if(name && email && password){
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
          sendEmailVerification(auth.currentUser).then(()=>{
            updateProfile(auth.currentUser, {
              displayName:name,
            })
            .then(()=>{
              const user = userCredential.user;
              console.log(user);
              
              navigate("/login");
            })
            .catch((error)=>{
              console.log(error);
              
            })
          })
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert('fil the all ');
          console.log(errorMessage);
          
          
        });
    }
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
              <h2 className="text-4xl font-medium font-inter mb-6">Create an account</h2>
              <p className="text-[16px] mb-12">Enter your details below</p>
            </div>
            <div>
              <input type="text" placeholder="Enter Your Name" className="w-[370px] h-8 border-b focus:outline-none" onChange={(e) => setName (e.currentTarget.value)} />

            </div>
            <div className="mt-10 mb-10">
              <input type="email" placeholder="Email Or Phone Number" className="w-[370px] h-8 border-b focus:outline-none" onChange={(e) => setEmail (e.currentTarget.value)}/>

            </div>
            <div>
              <input type="password" placeholder="Password" className="w-[370px] h-8 border-b focus:outline-none" onChange={(e) => setPassword (e.currentTarget.value)}/>

            </div>
            <button className="w-[371px] h-14 bg-primary text-white rounded-md mt-10 cursor-pointer hover:bg-red-700" onClick={handleClick}>Create Account</button>

            <button className="mt-10 mb-10  w-[371px] h-14 border-1 border-secondary rounded-md hover:bg-secondary cursor-pointer ">
              <div className="flex justify-center gap-4">
                <div className="items-center">
                  <img src={Goole} alt="icon"/>
                </div>
                <div>
                  Sign up with Google
                </div>
              
              </div>
              
            </button>
            <div className="text-center">
                <h4>Already have account? <Link to="/login"><span className="border-b font-semibold">Log in</span></Link></h4>
            </div>
          </div>
        </div>
      </Container>


    </>
  )
}
