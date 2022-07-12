import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import { useParams } from 'react-router'


const ProfileBio = ({currentProfile}) => {
    const { id } = useParams()
    
    const currentUser = useSelector((state) => state.currentUserReducer)
    
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);
    const getLocation = () => {
        if(currentUser?.result._id === id){
            if (!navigator.geolocation) {

                setStatus('Geolocation is not supported by your browser');
            } else {
                setStatus('Locating...');
                navigator.geolocation.getCurrentPosition((position) => {
                    setStatus(null);
                    setLat(position.coords.latitude);
                    setLng(position.coords.longitude);
                }, () => {
                    setStatus('Unable to retrieve your location');
                });
            }
        }else{
            alert('you can view your location only.')
        }
      }
    
    
    return (
        <div>
            
            <div>
                {
                    currentProfile?.tags.length !== 0 ? (
                        <>
                            <h4>Tags watched</h4>
                            {
                                currentProfile?.tags.map((tag) => (
                                    <p key={tag}>{tag}</p>
                                ))
                            }
                        </>
                    ) : (
                        <p>0 tags watched</p>
                    )
                }
            </div>
           <div>
                {
                    currentProfile?.about ? (
                        <>
                             <h4>About</h4>
                            <p>{currentProfile?.about}</p>
                        </>
                    ) : (
                        <p>No bio found</p>
                    )
                }
            </div>
            
           
            <div>
                <button className='get-loc-btn' onClick={getLocation}>Get Location</button>
                <h1>Coordinates</h1>
                <p>{status}</p>
                {lat && <p>Latitude: {lat}</p>}
                {lng && <p>Longitude: {lng}</p>}
            </div>
            
            
        </div>
    )
}

export default ProfileBio
