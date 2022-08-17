import { getDownloadURL, ref } from "firebase/storage";
import { useState } from "react";
import { useEffect } from "react"
import dbStorage from "../../firebase/firebaseConfig";

export const useFetchImg = (storagePath) => {
  
    const [url, setUrl] = useState('/assets/noImg.gif');

    useEffect(() => {
        const fetchStorage = async () => {
            const reference = ref( dbStorage, storagePath );
            await getDownloadURL(reference).then((x) =>{
                setUrl(x);
            } )
        }

        fetchStorage();
    }, [])

    return {
        url: url,
    }
}
