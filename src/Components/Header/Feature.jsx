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
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center my-4">Advanced Featured Assignment</h1>
            <p className="md:w-2/4 mb-8 mx-auto text-center">Access a vast library of assignments covering various subjects and topics, carefully curated to meet educational standards and promote learning.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                { datas.length !== 0 ?
                    datas.map(data => <FeatureCard
                    key={data._id}
                    singledata={data}
                    ></FeatureCard>)

                    : 
                    <div className="h-[300px]   md:col-span-2 lg:col-span-3 flex justify-center items-center">
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                }
            </div>
        </div>
    );
};

export default Feature;