import React from "react";
import axios from "axios";
// import { useHistory } from 'react-router-dom'

const List = () => {
    const [products, setProducts] = React.useState([])
    // const history = useHistory()
    React.useEffect(() => {
        (async () => {
            try {
              const product = await axios.get('http://127.0.0.1:3000/product');
              (product.status === 200 && product.data.data) ? setProducts(product.data.data) : setProducts();
            } catch (err) {
                console.log(err);
                alert(err.message);
            }
          })();
    }, [])
    return <>
    <h2>Halaman List Product</h2>
    <a href="/product/create">+ Create</a>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Aksi</th>
            </tr>
        </thead>
        <tbody>
            {products && products.map((product, index) => {
            return <tr key={index}>
                <td>
                    <a href={`/product/single/${product._id}`}>
                        {product.name}
                    </a>
                </td>
                <td className="center">{product.price}</td>
                <td className="center">{product.stock}</td>
                <td className="center">
                    <a href={`/product/update/${product._id}`}>Edit</a>
                </td>
            </tr>
            })}
        </tbody>
    </table>
    </>
}


export default List;