import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar/Navbar';

const ProductItem = () => {
    const { query: { productId },} = useRouter(); //El id debe ser el mismo nombre que está dentro de los [] en el título del archivo [id].
   
    return (

        <div>
            <Navbar/>
            <h2>Product: {productId}.</h2>
            
        </div>
    )
}

export default ProductItem