import React from 'react';


import './catalog-list.scss';
import Spinner from '../spinner'
import ErrorIndicator from '../errorindicator'


const CatalogList = ({catalog, doFetch}) => {
    const {isLoading, isError, data} = catalog;
   
      
    const dummyNewCat = {
        name: "Бревнозахваты",
        categoryName: "brevnozahvat",
        newCat: true,
        srcCat: '../../images/brevnozah.jpeg',
        catFor: 'для перегрузки сортимента',
        linkCat: 'brevnozahvat',
        values: []
    };
    const dummyUpdCat = {
        name: "Изменненная Бревнозахваты",
        categoryName: "Update brevnozahvat",
        newCat: true,
        srcCat: '../../images/brevnozah.jpeg',
        catFor: 'для перегрузки сортимента',
        linkCat: 'brevnozahvat',
        
    };
    const dummyScrIm = 
      {
      im : "https://image.shutterstock.com/image-photo/homemade-beauty-facial-mask-clay-600w-1069052690.jpg"
      };
    

    const dummyItem = {
      label: 'Трактор 11',
      newest: false,
      srcIm: [],
      shortRead : "Short Read",
      fullRead : "Full Read",
   
    };
    // console.log(window.localStorage.getItem('access_token'));
    // dummyItem.srcIm.push(dummyScrIm);
    
    // console.log(dummyItem);
  if(isLoading){
    return <Spinner/>
    
  }else if(isError){
      return <ErrorIndicator />
  }else if(window.localStorage.getItem('access_token')){
    return(
        <>
            <button
            onClick={()=>doFetch({url:`/category/new`,post:true, postData: dummyNewCat})}
            >новая категория</button>
            
          
            <ul>
            {
              data.map(itemInCat=>{
                // console.log(itemInCat);
                  return(
                    <li key={itemInCat._id ? itemInCat._id: 1}>
                        <p>{itemInCat.name}</p>
                        <button
                        onClick={()=>doFetch({url:`/category/${itemInCat._id}?_method=DELETE`,post:true})}
                        >Удалить</button>
                        <button
                        onClick={()=>doFetch({url:`/category/${itemInCat._id}?_method=PUT`,post:true, postData: dummyUpdCat})}
                        >Изменить</button>
                        <button
                        onClick={()=>doFetch({url:`/category/${itemInCat._id}/item/new`,post:true, postData: {dummyItem:dummyItem, dummyScrIm:dummyScrIm}})}
                        >новый Товар в Категорию</button>  
                    </li>
                  );
              })  
            }
           
          

        </ul>
        </>
        
    );
  }else{
    return(
      <>
          <ul>
          {
            data.map(itemInCat=>{
              // console.log(itemInCat);
                return(
                  <li key={itemInCat._id ? itemInCat._id: 1}>
                      <p>{itemInCat.name}</p>                  
                  </li>
                );
            })  
          }
         
        

      </ul>
      </>
      
  );
  }
  
}

export default CatalogList;