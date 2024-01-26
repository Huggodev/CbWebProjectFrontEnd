import React from "react";
import Header from "../../components/Header/Header"
import Cluster from "../../components/Cluster/Cluster"
import imgFondo from'../../assets/imagenes/fondoHome.jpg'
const Home = () => {

    return (

        <div>
            {/* <Header/> */}
            <img className='fondoHome' src= {imgFondo} alt="Fondo Home" />
             <Cluster/> 
        </div>
    )

}

export default Home;