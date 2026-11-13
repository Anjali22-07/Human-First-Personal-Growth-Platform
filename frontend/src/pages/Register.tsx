
import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import Navbar from "../components/ui/NavBar";
import { useState } from "react";
import type RegisterData  from "../Models/RegisterData";
import toast from "react-hot-toast";
import { registerUser } from "./Services/AuthService";
import { useNavigate } from "react-router";

 
 
export default function Register() {

    const[data, setData]= useState<RegisterData>({
        userName : " ",
        email : " ",
        password : " ",
        about : " "
    })

     const[loading, setLoading]= useState<boolean>(false);
     const[error, setError]= useState(null);

     //Now we bind the data to form 

      const handleInputChange= (e: React.ChangeEvent<HTMLInputElement>)=>{
         
         setData(value=>({           //value is just a variable name. It contains the previous state.
             ...value,               //Keep everything that was already written in my notebook
             [e.target.name]:e.target.value     //Find the input box that changed and update its value
         }));
      }

      //handling form submit

      const navigate= useNavigate();
       
       const handleFormSubmit =async(e: React.SubmitEvent<HTMLFormElement>)=>{
              e.preventDefault();      //stops the browser from doing its default action
              console.log(data);      
              //adding validation in form 

              if(data.userName.trim() === ""){
                 toast.error("Username is Required");
                 return;
              }
              if(data.email.trim() === ""){
                toast.error("Email is Required");
                return;

              }
              if(data.password.trim() === ""){
                toast.error("Password is Required");
                return;
              }

              //form submit for registration
              try{
                const resp= await registerUser(data);
                console.log(resp);
                toast.success("You are registerd");
                 setData({
                userName: "",
                email: "",
                password: "",
                about: ""

             });
             navigate("/login")
              }catch(error){
                toast.error("Some error Occured");
              }finally {
        setLoading(false);
    }
       }
  return (
    <>
     <Navbar/>
    <div className="flex min-h-screen items-center justify-center bg-[#F5F3E9] px-4 py-10">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md"
      >
        <Card className="w-full border border-[#C8D2BE] bg-transparent shadow-none rounded-3xl">

          <CardHeader className="space-y-3 text-center">
            <a href="/" className="text-2xl font-bold tracking-tight text-[#365943]">
              rooted.
            </a>

            <CardTitle className="text-3xl font-semibold text-[#365943]">
              Begin your journey
            </CardTitle>

            <CardDescription className="text-[#718074]">
              A little space to grow, at your own pace.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleFormSubmit} className="space-y-5">

              {/* Username */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#365943]">
                  Username
                </Label>

                <Input
                  id="userName"
                  name="userName"
                  type="userName"
                  placeholder="Choose a username"
                  required
                  value={data.userName}
                  onChange={handleInputChange}
                  className="border-[#C8D2BE] bg-white/40 text-[#365943] placeholder:text-[#9AA596] focus-visible:ring-[#91A98B]"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#365943]">
                  Email
                </Label>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                   value={data.email}
                  onChange={handleInputChange}
                  className="border-[#C8D2BE] bg-white/40 text-[#365943] placeholder:text-[#9AA596] focus-visible:ring-[#91A98B]"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-[#365943]">
                  Password
                </Label>

                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  required
                   value={data.password}
                  onChange={handleInputChange}
                  className="border-[#C8D2BE] bg-white/40 text-[#365943] placeholder:text-[#9AA596] focus-visible:ring-[#91A98B]"
                />
              </div>

              {/* About */}
              <div className="space-y-2">
                <Label htmlFor="about" className="text-[#365943]">
                  A little about yourself
                </Label>

                <Input
                  id="about"
                  name="about"
                  type="text"
                  placeholder="What brings you here?"
                   value={data.about}
                  onChange={handleInputChange}
                  className="h-14 border-[#C8D2BE] bg-white/40 text-[#365943] placeholder:text-[#9AA596] focus-visible:ring-[#91A98B]"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full rounded-full bg-[#426C52] py-6 text-white hover:bg-[#31563F]"
              >
                Create account →
              </Button>

            </form>
          </CardContent>

          <CardFooter className="justify-center">
            <p className="text-sm text-[#718074]">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-semibold text-[#365943] hover:underline"
              >
                Sign in
              </a>
            </p>
          </CardFooter>

        </Card>
      </motion.div>
    </div>
  </>
  );
}
