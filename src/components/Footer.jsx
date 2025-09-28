import instagram from "../../public/assets/icons/instagram.png"
import github from "../../public/assets/icons/github.png"
const Footer = () => {
    return (
        <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
            <h1 className="text-2xl font-bold">Portofolio</h1>
            <div className="flex gap-7">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#project">Project</a>
            </div>
            <div className="flex items-center gap-3">
                <a href="#">
                    <img src={instagram} className="w-8 h-8" alt="" />
                </a>
                <a href="#">
                    <img src={github} className="w-8 h-8" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Footer