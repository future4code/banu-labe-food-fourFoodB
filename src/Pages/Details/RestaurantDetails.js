import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./styles.css";
import { urlBase, token } from "../../constants/constants";
import  sinalmedio from "../../img/sinal-medio.png";
import battery from "../../img/battery.png";
import back from "../../img/back.png"



const RestaurantDetails = () => {

    const navigate = useNavigate()
    const params = useParams() 
    const [details, setDetails] = useState([])
    const [category, setCategory] = useState([])
    const [restaurant, setRestaurant] = useState({})
  

    const getDetails = async () =>{
        
        try {
         
            const response = await axios.get(`${urlBase}/restaurants/${params.id}`, {
                headers: {
                    auth: token                    
                }
            })

            setDetails(response.data.restaurant.products) 
            setRestaurant({
                name: response.data.restaurant.name,
                logoUrl: response.data.restaurant.logoUrl,
                address: response.data.restaurant.address,
                deliveryTime: response.data.restaurant.deliveryTime,
                shipping: response.data.restaurant.shipping,
                category: response.data.restaurant.category})

        } catch (error){
            console.log(error.message)
        }
    }

    useEffect(() => {
        getDetails()
        
    }, [])
    

    const restaurantRender = () =>  {
         if (restaurant){
            return (
                <div className="Restaurante">
                    <img src={restaurant.logoUrl}  className="RestaurantImage" /> 
                    
                    <div className="RestaurantInfo"> 
                        <span className="RestauranteName">{restaurant.name}</span>
                        <div className="DeliveryAndShipping">
                            <span className="DeliveryTime">{restaurant.deliveryTime} min</span>
                            <span className='Shipping'>Frete R${restaurant.shipping}</span>
                        </div>
                        
                        <span className="Address">{restaurant.address}</span>
                    </div>          
                </div>
            )
        }
    } 


    
    const prodCard = (product) => {
        return <div className="ProductCard" key={product.id} >
                <img src={product.photoUrl}  className="ProductImage" />
                <div className="ProductInfo">
                    <span className="ItemName">
                    {product.name}
                    </span>
                    <span className="ItemDescription">
                    {product.description}
                    </span>
                    <span className="Price">
                    R${product.price}
                    </span>
                    </div>
                
                <button className="BotaoAdicionar">Adicionar</button>   
            </div>          
    }
    


  const renderProducts = () => {

        const categories = details && details.map((element) => {
            if(category.includes(element.category) === false){
                setCategory([...category, element.category ])
            } 
    
        })

        const p = category && category.map((c) =>{
            return(
                <span>
                    <div className="Copys">
                        <span className="PrincipaisCopy">{c}</span>
                        <span className="PathCopy" />
                    </div>
                
                <div className="ListaProdutos">{details.map((e) => {
                    if(e.category === c){
                        return prodCard(e)
                    }
                })}</div>
                </span>
                
            )
        })

        return p
    } 
        
    
 

  
    return (
        <main className="Restaurante-detalhes">
            <div className="Black">
                 <img className="Mobile-Signal" src={sinalmedio}/>
                 <time>10:00AM</time>
                 <span className="Bateria">100%</span>
                 <img className="Charge" src={battery}/>
            </div>
            
            <div className="Bar">
                <img className="voltar" src={back} onClick={() => {navigate(-1)}} />
                Restaurante</div>
            {restaurantRender()} 
            {renderProducts()}
            
                       
        </main>
    )
}
export default RestaurantDetails