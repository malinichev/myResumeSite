import React, {useState} from 'react'

const Login = ({urlApi, setFormShow}) =>{

  const [user, setUser] = useState('');
  const [errUser, setErrUser] = useState(false);
  // console.log(user);
  const handleChange = (event)=> {
    setUser({
          ...user,
          [event.target.name]: event.target.value
        });
    }


    
  const handleSubmit =(event)=>{
    // console.log(urlApi);
    // console.log(value)  ;
    fetch(`${urlApi}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${window.localStorage.getItem('access_token')? window.localStorage.getItem('access_token') : ''}`
        },
      body: JSON.stringify({user})
      })
      .then(el=>el.json())
      .then(el=>{
        // console.log(el)
        if(el.user.token){
          
          window.localStorage.setItem('access_token', el.user.token);
          
          window.localStorage.setItem('user_email', el.user.email);
          setErrUser(false);
          el.user.token ? setFormShow({register: false, login:false, isLogin: true}) : setFormShow({"login" : true})
          // console.log(window.localStorage.getItem('access_token'))
        }
        
      })
      .catch(err=>{
        setErrUser(true)
        // console.log(err);
     
      });
    event.preventDefault();
  }
    return (
      <>
{errUser ? <span>Неверный логин или пароль!</span> : <span></span>}
<form 
        onSubmit={handleSubmit} 
        style={{
            display: 'flex',
            flexFlow: "column",
            width:"50%",
            margin:"0 auto"

        }}>
            <h1>Вход</h1>
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

</>
    );
}

export default Login;