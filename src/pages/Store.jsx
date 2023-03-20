import React, {useEffect, useState} from 'react';
import { BsFillHeartFill, BsFillHeartbreakFill } from 'react-icons/bs';
import { getItem, setItem } from '../services/LocalStorageFuncs';
import { ProductsArea } from '../css/style';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export const Store = () => {

    const [data, setData] = useState([]);
    const [cart, setCart] = useState(getItem('carrinho') || []);

    useEffect(() => {
        const fetchApi = async () => {
            const url = 'https://api.mercadolibre.com/sites/MLB/search?q=carros'
            const response = await fetch(url);
            const objJson = await response.json();
            setData(objJson.results)
        }
        fetchApi();
    }, [])

    const handleClick = (obj) => {
        const element = cart.find((e) => e.id === obj.id)
        if(element) {
            const arrFilter = cart.filter((e) => e.id !== obj.id)
            setCart(arrFilter)
            setItem('carrinho', arrFilter)
        } else {
            setCart([...cart,obj])
            setItem('carrinho', [...cart,obj])
        }
    }

    const getTitle = (obj) => {
        return cart.some((itemCart) => itemCart.id === obj.id)
        ?'Remover dos Favoritos'
        :'Adicionar à Lista de Favoritos'
    }

    return (
        <div>
            <Header />
            <ProductsArea>
                {
                    data.map((e) => (
                        <div key={e.id} >
                            <h4>{e.title}</h4>
                            <img src={`http://http2.mlstatic.com/D_${e.thumbnail_id}-F.jpg`} alt="" />
                            <h4>{`R$: ${e.price}`}</h4>
                            <button
                                onClick={() => handleClick(e)} title={getTitle(e)}>
                                {
                                    cart.some((itemCart) => itemCart.id === e.id) ? (
                                        <BsFillHeartFill />
                                    ) : (
                                        <BsFillHeartbreakFill />
                                    )
                                }
                            </button>
                        </div>
                    ))
                }
            </ ProductsArea>
            <Footer />
        </div>
    )
}