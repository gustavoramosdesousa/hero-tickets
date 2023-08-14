'use client'
import { GoogleMap ,Marker,useJsApiLoader} from "@react-google-maps/api";
import { useEffect, useState } from "react";

const containerStyle = {
    width: '100%',
    height: '100vh',
    maxHeight: '100vh'
};

const center_default = {
    lat: -3.745,
    lng:-38.523
};

const markers =[
    {lat: -19.899613, lng: -43.9364789},
    {lat: -19.89965, lng: -43.9364789},
    {lat: -19.89919, lng: -43.937981},
    {lat: -19.968614, lng: -43.405302},
];

export const MapContainer = () =>{
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if(!apiKey) throw new Error ('API KEY NOT FOUND');


    const [center,setCenter] = useState(center_default);

    const {isLoaded} = useJsApiLoader({
        id: 'google-maps-script',
        googleMapsApiKey: apiKey,

    });

    useEffect(()=>{
        if(navigator.geolocation){
            //primeiro callback: sucesso, segundo: erro
            navigator.geolocation.getCurrentPosition(
                (position)=>{
                    console.log('Sucesso ao buscar localização.', position);
                    const {latitude, longitude} = position.coords;
                    setCenter({lat:latitude, lng:longitude});
                },
                (error)=>{
                    console.log('Erro ao buscar localização.')
                }
            )
        }
    },[]);


    return isLoaded ?(
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} /*onLoad={onLoad} onUnmount={onUnmount}*/>
           {markers.map((marker, index)=>(
            <Marker key={index} position={{lat: marker.lat, lng: marker.lng}} />

           ))}
            
        </GoogleMap>
    ): <p> carregando ... </p>
}