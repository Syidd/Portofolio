import me from "../../../public/assets/me.jpg";

const Hero = () => {
    return (
        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
            <div className="animate__animated animate__fadeInUp animate__delay-3s">
                <div className="flex items-center gap-3 mb-5 bg-zinc-800 w-fit p-4 rounded-2xl">
                    <img src={me} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
                    <q>I am committed to continuous learning and adaptation, because growth is the key to relevance in an ever-changing world</q>
                </div>
                <h1 className="text-5xl/tight font-bold mb-4">Hi, Saya Hasyid Fitra Hasaini</h1>
                <p className="text-base/loose mb-4 opacity-50">Saya tertarik pada dunia teknologi, khususnya bagaimana software dan data dapat digunakan untuk memecahkan masalah nyata. Selama studi di jurusan Computer Science, saya mengerjakan berbagai proyek yang melibatkan pengembangan aplikasi dan analisis data, yang memperkuat minat saya di bidang software engineering dan analisis data.</p>

                <p className="text-base/loose mb-4 opacity-50">Saya senang bereksperimen dengan ide baru, memahami cara kerja sistem dari dalam, dan membangun solusi yang benar-benar bisa digunakan. Saat ini, saya berfokus mengasah kemampuan di area software engineering dan data analytics, sambil terus beradaptasi dengan teknologi baru. Bagi saya, proses belajar dan eksplorasi teknologi adalah bagian paling menarik dari perjalanan ini.</p>
                <div className="flex items-center sm:gap-4 gap-2">
                    {/* <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Download CV <i class="ri-download-line ri-lg"></i></a> */}
                    <a href="#project" className="bg-violet-700 p-4 rounded-2xl hover:bg-zinc-600">My Project <i className="ri-arrow-down-line"></i></a>
                </div>
            </div>
            <img src={me} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s" loading="lazy" />
        </div>
    )
}

export default Hero