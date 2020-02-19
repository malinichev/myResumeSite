import React, {useState} from 'react'


import Spinner from '../../spinner'
import ErrorIndicator from '../../errorindicator'
import CatalogList from '../../catalog-list'
import ItemInCatalogList from '../../item-in-catalog-list'
import NavBar from '../../nav-bar'
import Login from '../../login';
import Register from '../../register';
import TitleSlider from '../../title-slider'

const urlApi="http://90.188.237.123:2222/api";  //УРЛ ДЛЯ АПИ
// const urlApi="http://localhost:2222/api";  //УРЛ ДЛЯ АПИ

const Homepage = ({data,doFetch}) =>{
    const [formShow, setFormShow] = useState(false);
   
   
    // console.log(value)
 
   return(
    <>
        <NavBar setFormShow={setFormShow} formShow={formShow}/>

        {data.isError ? <ErrorIndicator /> : <span></span>}
        {formShow.login ? <Login urlApi={urlApi} setFormShow={setFormShow} /> : null}
        {formShow.register ? <Register urlApi={urlApi} setFormShow={setFormShow}/> : null}

        <TitleSlider item={data} doFetch={doFetch}/>

       

        {data.isLoading ? <Spinner/> :  (<div><CatalogList catalog={data} doFetch={doFetch}/>
                                        <ItemInCatalogList item={data} doFetch={doFetch} /> </div>)}
    
    </>
     
      
        
   );
   
}

export default Homepage;