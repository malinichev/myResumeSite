import  {
   
    useState,
    useEffect,
    useReducer,
  } from 'react';
  
import dataFetchReducer from '../reducers/dataFetchReducer';


const dbPhath = 'http://90.188.237.123:2222/api';   //основная дата
// const dbPhath = 'http://localhost:2222/api';   //основная дата



  
const useDataApi = (initialUrl, initialData) => {
    const [url, setUrl] = useState({
        url:initialUrl,
        post:false,
        title:false,
        postData:[dbPhath],
       
    });
    
    const [state, dispatch] = useReducer(dataFetchReducer, {       //ТУТ и Редюсер и ИНИШИАЛСТЭЙТ на выходе имеем СТАЙТ и ДИСПАТЧ
      isLoading: false,
      isError: false,
      data: [dbPhath],
     
      
     
    });
  
    useEffect(() => {
      let didCancel = false;
  
      const fetchData = async () => {           //Пытаемся получить дату с запроса
        dispatch({ type: 'FETCH_INIT' });
        try {   
                    if(url.post){
                      fetch( dbPhath + url.url, {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${window.localStorage.getItem('access_token')? window.localStorage.getItem('access_token') : ''}`
                        },
                        body: JSON.stringify(url.postData)
                        })
                        .then(el=>el.json())
                        .then((ell)=>{
                            // console.log(ell);
                            fetch(dbPhath)
                            .then(rr=>rr.json())
                            .then(cat=>{
                                if (!didCancel) {
                                    dispatch({ type: 'FETCH_SUCCESS', payload: cat });
                                }
                            })
                        })
                        .catch(err=>console.log(err))
                        
                        
                    }else if(url.url){
                      // console.log(dbPhath+url.url);
                        fetch(dbPhath+url.url)
                        .then(rr=>rr.json())
                        .then(cat=>{

                            if (!didCancel) {

                                dispatch({ type: 'FETCH_SUCCESS', payload: cat });
                            }
                        })
                        .catch(err=>console.log(err))
                    }else{
                      fetch(dbPhath)
                      .then(rr=>rr.json())
                      .then(cat=>{

                          if (!didCancel) {

                              dispatch({ type: 'FETCH_SUCCESS', payload: cat });
                          }
                      })
                    }
                      
                 
           
                 
               
            
               
                                
                  //пробуем если ОК то сюда
  
          
          
        } catch (error) {                       //если ошибка то сюда
            if (!didCancel) {
              dispatch({ type: 'FETCH_FAILURE' });
            }
          }
        };
  
      fetchData();
  
      return () => {
        didCancel = true;
      };
  
    }, [url]);
  
    return [state, setUrl];
  };
  export default useDataApi