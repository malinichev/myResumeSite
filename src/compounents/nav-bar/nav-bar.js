
import React from 'react'


const NavBar = ({formShow, setFormShow}) =>{




    




    const handleFormShow = (event)=> {
        
        // console.log(event.target.name); 
        
        setFormShow({
            // ...formShow,
            [event.target.name]: true,
            isLogin: false
          });
        //   console.log(formShow);  
    };


    const IsLogin = ()=>{
        if(window.localStorage.getItem('user_email')){
            
            
            return (
                <div>
                    <h1>Здравствуйте! {window.localStorage.getItem('user_email')}</h1><br/>
                    <button
                    onClick={()=>{

                        window.localStorage.clear();
                        
                        setFormShow({register: false, login:false, isLogin: false});
                        
                    }}
                    >Выход</button> 
                </div>
                
            );
        }else{
            return null
        }
        
    };

    const IsReg = ()=>{
        if(window.localStorage.getItem('user_email')){
            return null;
        }else{
            if(!formShow.isLogin && !formShow.login && !formShow.register){
                return(
                    <div>
                        <button
                        name='register'
                        onClick={handleFormShow}     
                        >Register</button> 
                        <button
                        name='login'
                        onClick={handleFormShow}
                        >Login</button>
                    </div>  
                );
            }else if(formShow.register || formShow.login){
               return( <button
                onClick={()=>setFormShow({register: false, login:false, isLogin: false})}
                >Закрыть</button>);
            }

            
        }
        
    }
   

   

    return(
            <div>
                <IsReg />
                <IsLogin />
            </div>
    );
}

export default NavBar