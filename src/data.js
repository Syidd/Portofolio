import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/Rlogo.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/rapidminer logo.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/docker.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/mysql.jpg";
import Tools10 from "/assets/tools/python.jpeg";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/laravel.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "R Studio",
    ket: "Data Analysis Tool",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "RapidMiner",
    ket: "Data Mining Platform",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Docker",
    ket: "Container",
    dad: "700",
  },
  // {
  //   id: 8,
  //   gambar: Tools8,
  //   nama: "Github",
  //   ket: "Repository",
  //   dad: "800",
  // },
  {
    id: 9,
    gambar: Tools9,
    nama: "MySQL",
    ket: "Database",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Python",
    ket: "Languange",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Laravel",
    ket: "Framework",
    dad: "1200",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";


export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Online Clothing Store",
    desk: "Platform toko baju online berbasis React dan Laravel yang mendukung integrasi database MySQL dan autentikasi pengguna.",
    tools: ["React", "Laravel", "MySQL"],
    link: "https://project3-beta-two.vercel.app/",
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Car Shop Website",
    desk: "Website penjualan mobil menggunakan HTML, CSS, dan JavaScript.",
    tools: ["HTML", "CSS", "Javascript"],
    link: "https://project1-olive-zeta.vercel.app/",
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Age Prediction Website",
    desk: "Aplikasi prediksi umur berbasis Flask yang memanfaatkan model machine learning untuk memproses data biologis dan gaya hidup pengguna, serta menampilkan hasil estimasi secara interaktif.",
    tools: ["HTML", "CSS", "JavaScript", "Flask", "Machine Learning"],
    link: "https://github.com/Syidd/AgePrediction",
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "House Price Prediction",
    desk: "Proyek analisis data yang membandingkan performa algoritma XGBoost, LightGBM, dan CatBoost dalam memprediksi harga rumah berdasarkan fitur numerik dan spasial.",
    tools: ["Python", "Pandas", "CatBoost", "LightGBM", "XGBoost"],
    link: "https://github.com/Syidd/HousePricePrediction",
    dad: "500",
  }
];
