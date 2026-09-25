import React from 'react'
import { useForm } from 'react-hook-form'

function Register() {

  const{
    register,
    handleSubmit,
    formState:{errors}
  }=useForm()

  const Submit = (data)=>{
    console.log(data);
    alert("Register successfull")
    localStorage.setItem("user" , JSON.stringify(data));
  }

  return (
    <div>
      <h2>Register page</h2>
      <form onSubmit={handleSubmit(Submit)}>

      <label>Username:</label>
      <input type="text" {...register("name" , {required:"Username required"})} />
      <p>{errors.name?.message}</p>

      <label>Email: </label>
      <input type="email" {...register("email" , {required:"Email required" ,
       pattern:{
           value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
           message:"Invalid Email Format"
      }
      })}/>

      <p>{errors.email?.message}</p>

      <label>Password:</label>
      <input type="password" {...register("password", {required:"Password required" ,
      minLength:{
        value:8,
        message:"password must contains 8 character"
      }
      })}/>
      
      <p>{errors.password?.message}</p>

      <button>Register</button>
      </form>

    </div>
  )
}

export default Register
