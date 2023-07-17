import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'

const Single = () => {
    let navigate = useNavigate();
    const { productId } = useParams();
    const [ products, setProducts ] = React.useState({
        name : '',
        stock : 0,
        price : 0,
        status : false
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
                alert(error.message);
                console.log(error.message);
            }
        })()
    }, [productId]);

    const deleteHandle = async(id) => {
        if(window.confirm('anda yakin ingin menghapus data ini?')){
            try {
                const product = await axios.delete(`http://127.0.0.1:3000/product/${productId}`);
                if(product.status === 200 && product.data){
                    const { message } = product.data;
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
    }

    return <>
        <h2>Halaman Single Product</h2>
            {products && <>
                <div>Name : {products.name}</div>
                <div>Price : {products.price}</div>
                <div>Stock : {products.stock}</div>
                <div>Status : {products.status ? 'on' : 'off'}</div>
            </>}
        <button onClick={() => navigate('/product')}> &laquo; back
        </button>
        <button onClick={() => deleteHandle(products._id)}> &laquo; Hapus
        </button>
    </>

}

export default Single;