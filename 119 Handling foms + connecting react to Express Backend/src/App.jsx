
import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isSubmitting }
  } = useForm()

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000)
    })
  }

  const onSubmit = async (data) => {
    // await delay(4)        //simulating network delay
    let r = await fetch("http://localhost:3000/", {method: "POST",  body: JSON.stringify(data)})
    let res = await r.text()
    console.log(data, res)

    // if(data.username !== "shubham"){
    //   setError("myform",{message:"credentials are invalid"})
    // }
    // if(data.username === "rohan"){
    //   setError("blocked",{message:"this user is blocked"})
    // }
  }

  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>

          <input type="text" placeholder='username'{...register("username", { required: { value: true, message: "this field is required" }, minLength: { value: 3, message: "minimum length is 3 characters" }, maxLength: { value: 8, message: "maximum length is 8 characters" } })} />

          {errors.username && <div className='red'>{errors.username.message}</div>}
          <br />

          <input type="password" placeholder='password' {...register("password", { minLength: { value: 7, message: "password should be 8 characters" } })} />

          {errors.password && <div className='red'>{errors.password.message}</div>}
          <br />

          <input type="submit" vlaue="Submit" disabled={isSubmitting} />

          {errors.myform && <div className='red'>{errors.myform.message}</div>}
          {errors.blocked && <div className='red'>{errors.blocked.message}</div>}

        </form>
      </div>
    </>
  )
}

export default App
