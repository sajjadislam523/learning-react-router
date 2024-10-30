import { useParams } from "react-router-dom";

const User = () => {
    const { id } = useParams();
    return (
        <div className="p-4 bg-gray-600">
            <h1 className="text-3xl text-center text-white">User:{id}</h1>
        </div>
    );
};

export default User;
