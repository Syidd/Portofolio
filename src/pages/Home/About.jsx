import me from "../../../public/assets/me.jpg";
import { listTools } from "../../data";

const About = () => {
    return (
        <div>
            <div className="mt-32 py-10" id="about">
                <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    <img src={me} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
                    <p className="text-base/loose mb-5">Saya adalah mahasiswa Computer Science yang senang membangun sesuatu yang benar-benar berfungsi. Selama kuliah, saya telah mengerjakan beberapa proyek web, seperti website penjualan mobil menggunakan HTML, CSS, dan JavaScript; website toko baju online dengan React, Laravel, dan MySQL; aplikasi prediksi umur menggunakan Flask dan model machine learning; serta proyek House Price Prediction yang membandingkan performa algoritma XGBoost, LightGBM, dan CatBoost.</p>
                    <p className="text-base/loose mb-5">
                        Selain itu, saya juga mulai mempelajari penggunaan Docker untuk pengemasan aplikasi dan optimasi ukuran file, serta mengeksplorasi dasar cloud deployment melalui AWS. Dari setiap proyek tersebut, saya terbiasa mempelajari teknologi baru, memahami cara kerja sistem dari sisi front-end hingga back-end, dan memastikan hasil akhirnya benar-benar bisa digunakan sesuai tujuannya.</p>
                    <div className="flex items-center justify-between">
                        <img src={me} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy" />
                        <div className="flex items-center gap-6 ">
                            <h1 className="text-4xl mb-1">4 <span className="text-violet-500">+</span></h1>
                            <p>Proyek Selesai</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="tools mt-32">
                <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools digunakan</h1>
                <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini tools yang dipakai</p>
                <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                    {listTools.map(tool => (
                        <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md group-hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
                            <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy" />
                            <div>
                                <h4 className="font-bold">{tool.nama}</h4>
                                <p className="opacity-50">{tool.ket}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default About