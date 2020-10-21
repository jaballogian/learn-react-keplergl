import React from 'react'
import KeplerGl from "kepler.gl"

function Map(){

    const REACT_APP_MAPBOX_API = "pk.eyJ1IjoiamFiYWxsb2dpYW4iLCJhIjoiY2tnaXp5NDF3MGJ1NjJ0cGVuczh2b3hpcyJ9.DCwkQRt9dEGAy5lfiLAugw"
    
    return(
        <KeplerGl
            id="covid"
            mapboxApiAccessToken={REACT_APP_MAPBOX_API}
            width={window.innerWidth}
            heigth={window.innerHeight}
        />
    )
}

export default Map