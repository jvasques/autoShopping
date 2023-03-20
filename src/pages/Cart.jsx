import React, { useState } from 'react';
import { getItem, setItem } from '../services/LocalStorageFuncs';
import { BsFillHeartFill, BsFillCartFill } from 'react-icons/bs';
import { ProductsArea } from '../css/style'
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export const Cart = () => {
    const [data, setData] = useState( getItem('carrinho') || [])
    const removeItem = (obj) => {
        const arrFilter = data.filter((e) => e.id !== obj.id)
        setData(arrFilter)
        setItem('carrinho', arrFilter)
    }

    const goToStore = (e) => {
        window.open(e.permalink, '_blank')
    }

    return (
        <div>
            <Header />
            <ProductsArea>
                {
                    data.map((e) => (
                        <div key={e.id}>
                            <h4>{e.title}</h4>
                            <img src={`http://http2.mlstatic.com/D_${e.thumbnail_id}-F.jpg`} alt={e.title} />
                            <h4>{`R$: ${e.price}`}</h4>
                            <span>
                                <button
                                    onClick={ () => removeItem(e)} title='Remover dos Favoritos'
                                >
                                    <BsFillHeartFill />
                                </button>
                                <button
                                    onClick={ () => goToStore(e)} title='Ir Até a Loja'
                                >
                                    <BsFillCartFill />
                                </button>
                            </span>
                        </div>
                    ))
                }
            </ProductsArea>
            <Footer />
        </div>
    )
}