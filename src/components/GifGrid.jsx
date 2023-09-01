import { useEffect, useState } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';
// import { getGifs } from  '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    const { isloading, images } = useFetchGifs( category );

    console.log({ images, isloading })

   


  return (
        <>
            <h3>{ category }</h3>
           
             {
                 isloading && ( <h2>Cargando....</h2> )

             }   
               
           

            <div className='card-grid'>
                {
                    images.map( (image) => 
                        <GifItem 
                        key={ image.id }
                        {...image}
                        />
                    )
                }
                
            </div>
            
        </>
    )
}



