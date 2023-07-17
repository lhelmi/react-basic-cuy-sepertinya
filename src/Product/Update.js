import React from "react";
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'

const Update = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const [ products, setProducts ] = React.useState({
        name: '',
        price: 0,
        stock: 1,
        status: true
    });

    React.useEffect(() => {
        (async () => {
            try {
                const product = await axios.get(`http://127.0.0.1:3000/product/${productId}`);
                if(product.status === 200 && product.data.data){
                    const { data } = product.data;
                    setProducts(data);
                }
            } catch (error) {
                let message = null;
                console.log(error);
                if(message = error.response?.data?.message){
                    return alert(message);
                }
                return alert(error.message);   
            }
            
        })()  
    }, [productId]);

    const handleChange = (e, name) => {
        const value = e.target.value
        setProducts({
            ...products,
            [name]: value 
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://127.0.0.1:3000/product/${productId}`, products)
            if(response.status === 200 && response.data){
                const { message } = response.data;
                alert(message);
                navigate('/product');
            }
        } catch (error) {
            let message = null;
            console.log(error);
            if(message = error.response?.data?.message){
                return alert(message);
            }
            return alert(error.message);
        }
    }

    return <>
        <h2>Halaman Form Create Product</h2>
        <form>
            <label>Name </label>
            <input type="text" size={50} value={products.name} onChange={(e) => handleChange(e, 'name')} />
            <label>Price </label>
            <input type="number" value={products.price} onChange={(e) => handleChange(e, 'price')} />
            <label>Stock </label>
            <input type="number" size={30} value={products.stock} onChange= {(e) => handleChange(e, 'stock')} />
            <label>Status </label>
            <select value={products.status} onChange={(e) => handleChange(e, 'status')}>
                <option value={false}>off</option>
                <option value={true}>on</option>
            </select>
            <label></label>
            <button onClick={ handleSubmit }> submit </button>
        </form>
        <button onClick={() => navigate('/product')}> &laquo; back
        </button>

    </>
}

export default Update;