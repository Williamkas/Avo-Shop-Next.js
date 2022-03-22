import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar/Navbar';

const ProductPage = () => {
    const { query: { id },} = useRouter(); //El id debe ser el mismo nombre que está dentro de los [] en el título del archivo [id].
    const [product, setProduct] = useState([])

    useEffect(() => {
        id &&   (window.fetch(`/api/avo/${query.id}`)
                    .then(response => response.json())
                    .then(({data}) => {
                    setProductList(data)
                })
        )
    }, [])

    return (

        <div>
            <Navbar/>
            <h2>Product: </h2>
            <div>{product.name}</div>
        </div>
    )
}

export default ProductPage