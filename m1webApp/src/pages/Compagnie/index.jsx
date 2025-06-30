import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getCompagnieById} from "../../services/api.jsx";
import View from "./view";

export default function CompagnieDetail() {
    const {id}=  useParams();
    const [company, setCompany] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchCompany() {
            try{
                const data = await getCompagnieById(id);
                setCompany(data);
            }catch(error){
                setError("Error lors du chargement de la compagnie");
            }finally {
                setLoading(false);
            }
        }
        fetchCompany();
    }, [id]);

    return (
        <View
            company={company}
            loading={loading}
            error={error}
            />
    )
}