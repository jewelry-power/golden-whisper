import React,{useState,useEffect} from 'react'

function SignUp() {
   
const [name,setName]=useState("")
const [password,setPassword]=useState("")
const [email,setEmail]=useState("")
const [info,setInfo]=useState([])
const [storeData,setdata]=useState()

const [saveToLocal,setLocal]=useState([])
useEffect(() => {
    if (info.length > 0)  
    {localStorage.setItem("infoUser", JSON.stringify(info))}
    else{

        setInfo(JSON.parse(localStorage.getItem("infoUser"))) 
    }
}, [info]);
function handelSubmit(e){
    e.preventDefault()
    const user={name,email,password}
    const data=[...info,user]
    setInfo(data) 
}

  


// console.log(info)
  return (
    <div> <section className="flex flex-col md:flex-row h-screen items-center">
    
   
    
    <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center">
  
      <div className="w-full h-100">
  
  
        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">sign up here</h1>
  
        <form className="mt-6" action="#" method="POST">
          <div>
            <label className="block text-gray-700">full Name</label>
            <input type="text" name="" id="" placeholder="full name " className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-amber-300 focus:amber-300 focus:outline-none   focus:bg-white"  value={name} onChange={(e)=>setName(e.target.value)} />
          </div>
  
          <div className="mt-4">
            <label className="block text-gray-700">email</label>
            <input type="email" name="" id="" placeholder="Enter your email "  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-amber-300
                  focus:bg-white focus:outline-none" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" name="" id="" placeholder="Enter Password"  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-amber-300
                  focus:bg-white focus:outline-none" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className="text-right mt-2">
            <a className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
          </div>
  
          <button type="submit" className="w-full block bg-amber-400  hover:bg-amber-300 focus:bg-amber-200 text-white font-semibold rounded-lg
                px-4 py-3 mt-6" onClick={(e)=>{handelSubmit(e)}}>sign up </button>
        </form>
        <p className="mt-8">do you have account? <a  className="text-blue-500 hover:text-blue-700 font-semibold">log in here</a></p>
  
  
      </div>
    </div>
    <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
      <img src="/src/assets/login.png" alt="" className="w-full h-full object-cover" />
    </div>
  </section></div>
  )
}

export default SignUp