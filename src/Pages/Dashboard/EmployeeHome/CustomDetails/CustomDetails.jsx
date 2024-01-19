import { useParams } from "react-router-dom";

const CustomDetails = () => {
    const {id} = useParams()
    console.log(id);
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

export default CustomDetails;