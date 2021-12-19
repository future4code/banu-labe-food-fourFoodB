import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.css";






const RestaurantDetails = () => {

    const params = useParams() 

    const [details, setDetails] = useState([])
    const [category, setCategory] = useState([])
    const [restaurant, setRestaurant] = useState({})
    


    const getDetails = async () =>{
        try {
            const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants/${params.id}`, {
                headers: {
                    auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZBOGlWQ2RVZ3k2R01OSE1BU1AxIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjEyMzQ1NjEyMzc2NSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSdWEgZGEgbW9vY2EsIDIwMCAtIE1vb2NhIiwiaWF0IjoxNjM5MTM1NzE3fQ.ZHou42e0gEocWpckhtvYcX0R-nCQhpGGbzjOLIX0p0Y"
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



            
        }catch (error){
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
                        <span className="DeliveryTime">{restaurant.deliveryTime} min</span>
                        <span className='Shipping'>R${restaurant.shipping}</span>
                        <span className="Address">{restaurant.address}</span>
                    </div>          
                </div>
            )
        }
    }

/*     const categories = details && details.map((element) => {
        if(category.includes(element.category) === false){
            setCategory([...category, element.category ])
        }        

    }) */
    
   
       
    const renderProducts = () => {
        
       const product = details && details.map((product) => {
            return(
                <div>
{/*                     <span className="PrincipaisCopy"> {product.category} </span>
                    <span className="PathCopy" />    */}  
                    <div className="ProductCard" key={product.id} >
                            <img src={product.photoUrl}  className="ProductImage" />
                            <span className="ItemName">
                                {product.name}
                            </span>
                            <span className="ItemDescription">
                                {product.description}
                            </span>
                            <span className="Price">
                                R${product.price}
                            </span>
                            <button className="BotaoAdicionar">adicionar</button>
                            
                        
                    </div>   
                </div>
            )

        })

        return product

        
    } 

   
  
    return (
        <div className="Restaurante">
            <div className="Bar">Restaurante</div>
            {restaurantRender()}
            {renderProducts()}
            
                       
        </div>
    )
}
export default RestaurantDetails