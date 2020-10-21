import React, {useEffect} from 'react'
import KeplerGl from "kepler.gl"

function Map(){

    const REACT_APP_MAPBOX_API = "pk.eyJ1IjoiamFiYWxsb2dpYW4iLCJhIjoiY2tnaXp5NDF3MGJ1NjJ0cGVuczh2b3hpcyJ9.DCwkQRt9dEGAy5lfiLAugw"

    const url = "https://gist.githubusercontent.com/leighhalliday/a994915d8050e90d413515e97babd3b3/raw/a3eaaadcc784168e3845a98931780bd60afb362f/covid19.json"
    useEffect(() => {
        fetch(url)
            .then((response) => {
                return(
                    response.json()
                )
            })
            .then(responseJson => {
                console.log(responseJson)
            })
    }, [])

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