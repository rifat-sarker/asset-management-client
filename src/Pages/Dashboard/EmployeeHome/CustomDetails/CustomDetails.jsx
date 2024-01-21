import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const CustomDetails = () => {
    const {id} = useParams()
    const axiosSecure = useAxiosSecure();
    console.log(id);
    const {data: details=[]}= useQuery({
        queryKey: ['customDetails'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/custom/:id')
            console.log(res.data);
            return res.data;
        }
    })
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

export default CustomDetails;