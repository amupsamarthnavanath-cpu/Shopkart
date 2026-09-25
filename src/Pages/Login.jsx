import React from 'react'
import { useForm } from 'react-hook-form'

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const Submit = (data) => {
    console.log(data);
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      alert("User is not register...!")
      return
    }

    const user = JSON.parse(storedUser)

    if (data.email === user.email && data.password === user.password) {
      localStorage.setItem("isLoggedIn", true)
      alert("Login Successfull")
    }
    else {
      alert("Invalid Information..!")
    }
  }

  return (
    <div>
      <h1>into login</h1>

      <form onSubmit={handleSubmit(Submit)}>

        <label>Email</label>
        <input
          type="email"
          {...register("email", { required: "Email Required" })}
        />
        <p>{errors.email?.message}</p>

        <label>Password:</label>
        <input
          type="password"
          {...register("password", { required: "Password Required" })}
        />
        <p>{errors.password?.message}</p>

        <button>Login</button>

      </form>
    </div>
  )
}

export default Login