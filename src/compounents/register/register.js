import React, {useState} from 'react'

const RegisterAndLogin = ({urlApi, setFormShow}) =>{
  const [user, setUser] = useState('');
  // console.log(user);
  const handleChange = (event)=> {
    setUser({
          ...user,
          [event.target.name]: event.target.value
        });
    }


    
  const handleSubmit =(event)=>{
    // console.log(value)
    fetch(`${urlApi}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${window.localStorage.getItem('access_token')? window.localStorage.getItem('access_token') : ''}`
        },
      body: JSON.stringify({user})
      })
      .then(el=>el.json())
      .then(el=>{
        // console.log(el.user)
        if(el.user.token){
          window.localStorage.setItem('access_token', el.user.token);
          window.localStorage.setItem('user_email', el.user.email);
          el.user.token ? setFormShow({register: false, login:false, isLogin: true}) : setFormShow({"register" : true})
          
        }
        
      })
      .catch(err=>{
        window.localStorage.clear();
        // console.log(err,'ddddddd');
     
      });
    event.preventDefault();
  }
    return (

<form 
        onSubmit={handleSubmit} 
        style={{
            display: 'flex',
            flexFlow: "column",
            width:"50%",
            margin:"0 auto"

        }}>
            <h1>Регистрация</h1>
        <label>
        email:
          <input 
            type="email"
            name="email"
            onChange={handleChange}   
          />
        </label>
       
        <label>
        Пароль:
          <input 
          type="password" name="password"  placeholder="pass"  
          onChange={handleChange}  
          />
        </label>
       
        <button>Отправить </button>
      </form>


    );
}

export default RegisterAndLogin;