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

    useEffect(() => {
        setRestaurants({...restaurants, isLoading: true})

        const header = {
            "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZBOGlWQ2RVZ3k2R01OSE1BU1AxIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjEyMzQ1NjEyMzc2NSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSdWEgZGEgbW9vY2EsIDIwMCAtIE1vb2NhIiwiaWF0IjoxNjM4OTIwMTA0fQ.wdhmB2CIj17KH4TBc_Ehm36I0Ux7op_XhBrhrR0gUsY",
            "Content-Type" : "application/json"
        }

        axios
            .get(`${urlBase}/restaurants`, header)
            .then((res) => {
                console.log('res', res)
            })
            .catch((err)  => {
                console.log('er', err)
            })
    }, [])

    return (
        <div>
            <header style={{backgroundColor: 'red'}}>
                Ifuture
            </header>

            <main>
        
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