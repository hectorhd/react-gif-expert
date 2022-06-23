import { useState , useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    

    const getImages = async () =>{
        const newImages = await getGifs(category);
        //UseState
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( ()=>{ 
        getImages();
        } , []
    );

    return {
        images,
        isLoading 
        /*
            Es lo mismo a ya que el atibuto tiene el mismo nombre
            isLoading : isLoading
        */
    }
}
