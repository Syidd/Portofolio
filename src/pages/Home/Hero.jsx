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
                <p className="text-base/loose mb-2 opacity-50">Saya selalu tertarik dengan dunia teknologi, terutama di bidang software development dan data. Selama kuliah di jurusan Computer Science, saya banyak belajar tentang bagaimana teknologi bisa digunakan untuk memecahkan masalah nyata dan membuat sesuatu yang bermanfaat bagi orang lain.</p>

                <p className="text-base/loose mb-2 opacity-50">Saya senang bereksperimen dengan ide-ide baru, mengulik cara kerja sistem di balik layar, dan membangun sesuatu yang bisa benar-benar digunakan. Ke depannya, saya ingin terus mengembangkan kemampuan saya di berbagai bidang seperti Data Analyst, Software Engineer, Back-End Developer, dan Front-End Developer.</p>

                <p className="text-base/loose mb-2 opacity-50">Bagi saya, belajar dan beradaptasi dengan teknologi baru adalah bagian paling seru dari perjalanan ini.</p>
                <div className="flex items-center sm:gap-4 gap-2">
                    <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Download CV <i class="ri-download-line ri-lg"></i></a>
                    <a href="#" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">My Project <i className="ri-arrow-down-line"></i></a>
                </div>
            </div>
            <img src={me} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s" loading="lazy" />
        </div>
    )
}

export default Hero