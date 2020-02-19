import React, { useEffect, useState } from 'react';
import './title-slider.scss';

// const urlDbTit = 'http://localhost:2222/api/title-slider';
const urlDbTit = 'http://90.188.237.123:2222/api/title-slider';
const TitleSlider = ({doFetch})=>{
  
    const [tit, setTit] = useState([]);
    useEffect(() => {
      const abortController = new AbortController();
      const signal = abortController.signal;
      fetch(urlDbTit, { signal: signal })
        .then(results => results.json())
        .then(data => {
            setTit(data);
        })
        .catch(err=>console.log(err))
      return function cleanup() {
        abortController.abort();
      };
    }, [doFetch]);

    




  

    
   
    
      
   
   
    const dummTitile = 
      {
        srcCat: 'https://image.shutterstock.com/image-photo/dead-sea-mud-mask-beauty-600w-1081881509.jpg',
        catFor: 'для перегрузки сортимента',
      };
    const dummTitileUPD = 
      {
        srcCat: 'https://image.shutterstock.com/image-photo/street-colorful-buildings-canal-burano-600w-1517586428.jpg',
        catFor: 'для перегрузки сортимента',
      };
    if(window.localStorage.getItem('access_token')){
        return(
           <div>
             <h1>Title Slide!</h1>
                <button
                onClick={()=>doFetch({url:`/title-slider/new`,post:true, postData: dummTitile})}
                >Новый титл</button>
                <br/>
                { 
                    tit.map(el=>{
                        return(
                            <div
                            key={el._id}
                            >
                                <img src={el.srcCat} alt={el.label}/>
                                <button
                                onClick={()=>doFetch({url:`/title-slider/${el._id}?_method=DELETE`,post:true})}
                                >Удалить титл</button>
                                <button
                                onClick={()=>doFetch({url:`/title-slider/${el._id}?_method=PUT`,post:true,postData: dummTitileUPD })}
                                >Обновить титл</button>
                                <br/>
                            </div>
    
                           ); 
                    
                       
                    }) 
                }
            </div>
        );     
              
    }else if( !window.localStorage.getItem('access_token')){
       
            return (
                <>
                    <h1>Title Slide!</h1>
                    
                    {
                    tit.map((el)=>{
                        return (
                            <div
                            key={el._id}
                            >
                                <img src={el.srcCat} alt={el.label}/>
                               
                                <br/>
                            </div>
                            );
                    }) 
                    }
                </>
                );
    }else{
        return <h1>Is LOADING!</h1>
    }
       
    
}

export default TitleSlider