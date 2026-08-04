import { useState , useEffect } from "react";
import {getLocations} from "../data/Location";
import { fetchLocationImage } from "../utils/fetchImage";

export function useLocation(){
  const [location ,setLocation] = useState([]);
  const [loading , setLoading] = useState(true);
  const [error , setError] = useState(null);

  useEffect(()=>{
    async function loadLocations(){
      try{
        setLoading(true);
        const baseData = getLocations();
        const withImages = await Promise.all(
          baseData.map(async (location) => {
            const image = await fetchLocationImage(location.name);
            return { ...location, image };
          })
        );
        setLocation(withImages); 
      }catch(err){
        setError(err.message);
      }finally{
        setLoading(false);
      }
    }

  loadLocations()
  },[])

  return { location , loading , error};

}