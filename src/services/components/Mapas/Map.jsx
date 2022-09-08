import { GoogleMap, useLoadScript, MarkerF, InfoWindow } from '@react-google-maps/api'
import { useMemo } from 'react'
import credentials from '../../helpers/credentials'

export const Map = () => {

    const center = useMemo(() => ({ lat: 22.129531753271987, lng: -100.9762583736067 }), [])
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: credentials.mapsKey,
    })

    if (!isLoaded) return <div><img src="/assets/basic/noImg.gif" alt="Loading..." /></div>

    return (
        <>
            <GoogleMap
                zoom={18}
                center={center}
                mapContainerClassName="googleMap-container"
            >
                    <MarkerF
                        position={center}
                    >
                        <InfoWindow position={center}>
                            <div className='bgDark p-2 text-center'>
                                <p className='text-white fs-5'>Malagón Ortodoncia y Estética Dental</p>
                            </div>
                        </InfoWindow>
                    </MarkerF>
            </GoogleMap>
        </>
    )
}
