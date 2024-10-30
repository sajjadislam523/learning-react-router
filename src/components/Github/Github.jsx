// import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

const Github = () => {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/sajjadislam523")
    //         .then((res) => res.json())
    //         .then((data) => setData(data));
    // }, []);
    return (
        <div className="p-4 m-4 text-center text-white bg-gray-600">
            <h1 className="text-3xl">Github Followers: {data.followers}</h1>
            <img src={data.avatar_url} alt={data.name} width={300} />
        </div>
    );
};

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/sajjadislam523");
    return response.json();
};
