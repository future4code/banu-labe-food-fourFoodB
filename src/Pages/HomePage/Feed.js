import React, { useEffect, useState } from "react"

import homepage from '../../img/homepage.svg'
import shoppingcart from '../../img/shoppingcart.svg'
import avatar from '../../img/avatar.svg'
import axios from "axios"
import { token, urlBase } from "../../constants/constants"

const Feed = () => {
    const [restaurants, setRestaurants] = useState({
        data: '',
        isLoading: false,
        error: ''
    })
    const [searchRestaurant, setSearchRestaurant] = useState({
        category: '',
        name: ''
    })

    useEffect(() => {
        setRestaurants({...restaurants, isLoading: true})

        axios
            .get(`${urlBase}/restaurants`, {
                headers: {
                    auth: token
                }
            })
            .then((res) => {
                setRestaurants({...restaurants, data: res.data.restaurants, isLoading: false})
            })
            .catch((err)  => {
                console.log('er', err)
            })
    }, [])

    const restaurantsRender = restaurants.data && restaurants.data.filter((iten) =>{
        if(iten.name.toLowerCase().includes(searchRestaurant.name.toLowerCase())) return true
        return false
    })
    .filter((iten) => {
        if(iten.category.toLowerCase().includes(searchRestaurant.category.toLocaleLowerCase())) return true
        return false
    })
    .map((iten) => {
        return  (
            <div key= {iten.id}>
                <img src= {iten.logoUrl} alt= 'Logo do Restaurante' />
                <h4>{iten.name}</h4>
                <p>{iten.deliveryTime} min</p>
                <p>Frete R${iten.shipping},00</p>


            </div>
        )
    })

    console.log(searchRestaurant)

    return (
        <div>
            <header style={{backgroundColor: 'red'}}>
                Ifuture
            </header>

            <main>
                <input 
                    placeholder= 'Restaurante' 
                    value= {searchRestaurant.name}
                    onChange= {(e) => setSearchRestaurant(e.target.value)}
                />
                {restaurants.data && restaurants.data.map((iten)=>{
                    return(
                        <p 
                            key={iten.id}  
                            onClick={() => {setSearchRestaurant({...searchRestaurant, category: iten.category})}}
                        >
                            {iten.category}
                        </p>
                    )
                })}
                {restaurantsRender}
            </main>

            <footer>
                <img src={homepage} alt='Botão Home' />
                <img src={shoppingcart} alt='Botão Carrinho' />
                <img src={avatar} alt='Botao Perfil' />
            </footer>
        </div>
    )
}

export default Feed