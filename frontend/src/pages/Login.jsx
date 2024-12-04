import React,{useState}  from 'react'
import './CSS/Login.css'

const Login = () => {

    const [state,setState] =useState("Login");
    const [formData,setFormData] = useState({
        username:"",
        password:"",
        email:""
    })

    const changeHandler = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const login = async () =>{
        console.log("Login Function Executed",formData);
        let responseData;
        await fetch('http://localhost:4000/login',{
        method:'POST',
        headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
        },
        body: JSON.stringify(formData),
        }).then((response)=> response.json()).then((data)=>responseData=data)
        
        if(responseData.success){
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/");
        }
        else{
        alert(responseData.errors)
        }
        }
    
    const signup = async () =>{
            console.log("Signup Function Executed",formData);
            let responseData;
            await fetch('http://localhost:4000/signup',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData),
            }).then((response)=> response.json()).then((data)=>responseData=data)
            
            if(responseData.success){
                localStorage.setItem('auth-token',responseData.token);
                window.location.replace("/");
            }
            else{
                alert(responseData.errors)
            }
            }
            
   
    return (
        <div className='login'>
            <div className="login_container">
                <h1> {state} </h1>
                <div className="login_fields">
                    {state==="Sign Up"?<input name = 'username' value={formData.username} onChange={changeHandler} type='text' placeholder='Your Name' />:<></>}
                    <input name='email' value={formData.email} onChange={changeHandler} type='email' placeholder='Your Email' />
                    <input name='password' value={formData.password} onChange={changeHandler} type='password' placeholder='Password' />

                </div>
                <button onClick={()=> {state==="Login"?login():signup()}}> Continue</button>
                {state === "Sign Up"?<p className='signup'>Already have an account? <span onClick={()=> {setState("Login")}}> Login here </span> </p>
                :<p className='signup'>Create an account <span onClick={()=> {setState("Sign Up")}}> Click here </span> </p>}
                
                
                <div className="login_agree">
                    <input type='checkbox' name='' id='' />
                    <p> By continuing, I agree to the terms and conditions.</p>
                </div>
            </div>

        </div>
    )
}
export default Login 