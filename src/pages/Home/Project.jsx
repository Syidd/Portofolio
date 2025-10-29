import { listProyek } from "../../data";

const Project = () => {
    return (
        <div className="proyek mt-32 py-10" id="project">
            <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h1>
            <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut beberapa proyek yang telah dibuat</p>
            <div className="proyek-box mt-14 grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5">
                {listProyek.map(proyek => (
                    <div key={proyek.id} className="p-4 bg-zinc-800 rounded-xl w-full max-w-[650px] flex flex-col justify-between shadow-md
                    container mx-auto px-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
                        <img src={proyek.gambar} alt="Proyek Image" className="w-full h-[300px] object-cover rounded-md" loading="lazy" />
                        <div className="mt-4 flex flex-col flex-grow">
                            <h1 className="text-2xl font-bold mb-2">{proyek.nama}</h1>
                            <p className="text-base leading-relaxed mb-4">{proyek.desk}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {proyek.tools.map((tool, index) => (
                                    <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                                ))}
                            </div>
                            <div className="mt-8 text-center">
                                <a
                                    href={proyek.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600 transition"
                                >
                                    Lihat Proyek
                                </a>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project