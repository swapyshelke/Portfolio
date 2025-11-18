import React, { useEffect, useState } from 'react'

const DataFetcher = ({url}) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!url) return;

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status : ${response, status}`);
                }
                return response.json();
            })
            .then((jsonData) => {
                setData(jsonData);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, [url]); 

    return {
       data, loading, error
   }
}

export default DataFetcher