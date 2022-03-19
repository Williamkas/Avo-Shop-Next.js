import React from 'react';
import { useRouter } from 'next/router';

const ProductItem = () => {
    const { query: { productId },} = useRouter(); //El id debe ser el mismo nombre que está dentro de los [] en el título del archivo [id].

    return (
        <div>Esta es la página del producto: {productId}.</div>
    )
}

export default ProductItem