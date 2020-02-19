import React from 'react';
import  {Link} from 'react-router-dom';
import './item-in-catalog-page.scss';
import Spinner from '../../spinner';
import ErrorIndicator from '../../errorindicator';

const ItemInCatalogPage = ({doFetch, catDat})=>{
    // console.log(catDat)
    const {data, isLoading, isError} = catDat;
    // const dummyItem = {
    //     label: 'Трактор 11',
    //     newest: false,
    //     srcIm: [],
    //     shortRead : "Short Read",
    //     fullRead : "Full Read",
     
    //   };

    // const { catname } = useParams();
    if(isLoading){
        return <Spinner/>
        
      }else if(isError){
          return <ErrorIndicator />
      }else{
        return(
    <div>
        <ul>
        {/* {
            data.map((el)=>{
                // console.log(el);
                if(el._id){
                    return (
                        <li
                        key={el._id}
                        >
                            {`${el.name}`}
                            <button
                                onClick = {()=>doFetch({url: `http://localhost:2222/api/category/${el._id}/item/new`, post: true, postData: dummyItem})}
                            >
                                Add item
                            </button>
                        </li>);
                    
                }
            })
        } */}
        </ul>
        <Link to={`/`}> Go home </Link>
        {
             data.map(( el ) =>{
                
                if(el && el.values ){
                    
                    return <div>Hello</div>
                    
                }else{
                    return undefined;
                }
             })
        }
    </div>
    );
    }
}

export default ItemInCatalogPage