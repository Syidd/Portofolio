import { useParams } from "react-router-dom";

export default function projectDetail() {
    const { id } = useParams(); // Grab dynamic param from URL

    return (
        <div>
            <h1>Project Detail</h1>
            <p>Project ID: {id}</p>
        </div>
    );
}