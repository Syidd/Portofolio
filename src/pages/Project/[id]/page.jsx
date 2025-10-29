import { useParams } from "react-router-dom";

const projectLinks = {
    1: "https://project1-olive-zeta.vercel.app/",
    2: "https://project2.vercel.app/",
    3: "https://project3.vercel.app/",
};

export default function ProjectDetail() {
    const { id } = useParams();
    const projectUrl = projectLinks[id];

    return (
        <div>
            <h1>Project Detail</h1>
            {projectUrl ? (
                <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                    Visit Project {id}
                </a>
            ) : (
                <p>Project not found.</p>
            )}
        </div>
    );
}
