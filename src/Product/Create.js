import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Create = () => {
    let navigate = useNavigate();
    const [ products, setProducts ] = React.useState({
        name : '',
        stock : 0,
        price : 0,
        status : false
    });

    const handleChange = (e, name) => {
        const value = e.target.value;
        setProducts({
            ...products,
            [name]:value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:3000/product', products);
            console.log(response);
            if(response.status === 201 && response.data){
                const { message } = response.data;
                navigate('/product');
                alert(message)
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
            <input type="number" size={30} value={products.stock} onChange={(e) => handleChange(e, 'stock')} />
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

export default Create;