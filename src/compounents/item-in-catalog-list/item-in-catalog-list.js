import React from 'react';

import Spinner from '../spinner'
import ErrorIndicator from '../errorindicator'
import './item-in-catalog-list.scss';

const ItemInCatalogList = ({item, doFetch}) => {   
 

    const dummyItemUPD = {
        label: 'Трактор 222 UPD',
        newest: false,
        // srcIm: [],
        shortRead : "Short Read UPD",
        fullRead : "Full Read UPD",
     
      };

     
      const dummyScrIm = 
            {
            im : "https://image.shutterstock.com/image-photo/homemade-beauty-facial-mask-clay-600w-1069052690.jpg"
            };
      if(item.isLoading){
        return <Spinner/>
        
      }else if(item.isError){
          return <ErrorIndicator />
        }else if(window.localStorage.getItem('access_token')){
            return (
                <>
               
                {
                    item.data.map(foundCat=>{
                        if(foundCat.values){
                            return (
                                foundCat.values.map(it=>{
                                // console.log(it)
                                    return (
                                        <div
                                        key={it._id}
                                        >
                                            {it.label}
                                            <button
                                            onClick={()=>doFetch({url:`/category/${foundCat._id}/item/${it._id}?_method=DELETE`,post:true})}
                                            >Удалить Товар</button>
                                             <button
                                            onClick={()=>doFetch({url:`/category/${foundCat._id}/item/${it._id}?_method=PUT`,post:true, postData: dummyItemUPD})}
                                            >Изменить</button>
                                             <button
                                            onClick={()=>doFetch({url:`/category/${foundCat._id}/item/${it._id}/im/new`,post:true, postData: dummyScrIm})}
                                            >Добавить картинку</button>
                                        </div>
                                    );
                                })
                            );
                            
                        }else{
                            return undefined;
                        }
                        
                    })
                }
                </>
            );
    }else{
        return (
            <>
        
            {
                item.data.map(foundCat=>{
                    if(foundCat.values){
                        return (
                            foundCat.values.map(it=>{
                                return (
                                    <div
                                    key={it._id}
                                    >
                                        {it.label}
                                       
                                    </div>
                                );
                            })
                        );
                        
                    }else{
                        return undefined;
                    }
                })
            }
            </>
        );
    }
}

export default ItemInCatalogList;