import axios from "axios";
import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";


const Feature = () => {
    const [ datas, setDatas] = useState([]);
    useEffect(() => {
        axios.get('https://assignment-11-server-4.vercel.app/feature')
        .then(res => {
            setDatas(res.data);
        })
        .catch(error => console.log(error))
    }, [])
    return (
        <div className="my-24">
            <h1 className="text-4xl font-bold text-center my-4">Advanced Featured Assignment</h1>
            <p className="w-2/4 mb-8 mx-auto text-center">Access a vast library of assignments covering various subjects and topics, carefully curated to meet educational standards and promote learning.</p>
            <div className="grid grid-cols-3 gap-8">
                {
                    datas.map(data => <FeatureCard
                    key={data._id}
                    singledata={data}
                    ></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default Feature;