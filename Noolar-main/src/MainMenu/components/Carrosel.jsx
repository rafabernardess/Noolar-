// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import LingolarImg from "../assets/lingolarImg.png";
import Documents from "../assets/documentosNoolar.png";

import CardCarrosel from "./cardCarrosel";
export default function Carrosel() {
  return (
    <div>
      <Swiper
        className="carroso"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        style={{}}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="swiperRadius">
          <CardCarrosel
            titulo="Descubra seu nível de português com a nossa IA!"
            texto="Faça um teste rápido e descubra o Lingolar, sua ferramenta
         personalizada para aprender idiomas de forma simples!"
            classeImagem="imageCarrosel"
            image={LingolarImg}
            bgImage="/bgCarrosel.svg"
            lingolar="https://lingo-lar.vercel.app/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardCarrosel
            titulo="Documentos em Mãos: simplificando Sua Jornada!"
            texto="Descubra de forma simples e rápida quais documentos você precisa para se regularizar no Brasil!"
            classeImagem="imageCarrosel"
            image={Documents}
            bgImage="/bgCarrosel.svg"
            destino="/Documentos"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardCarrosel
            titulo="Venha conhecer um pouco Sobre Nós!"
            texto="Venha conhecer um pouco mais sobre os criadores deste projeto!"
            bgImage="/bgCarrosel.svg"
            classeImagem="imageCarrosel"
            image="/AboutUs.svg"
            destino="/SobreNos"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

// const dadosCarrosel = [
//     {
//         imgUrl: LingolarImg,
//         titulo: "Descubra seu nível de português com a nossa IA!",
//         texto: "Faça um teste rápido e depois conheça o Lingolar, sua ferramenta para aprender e praticar o idioma de forma simples e personalizada!",
//         btn: "Acesse nossa IA"

//     },
//     {
//         imgUrl: Documents,
//         titulo: "Documentos em Mãos: Guiando e simplificando Sua Jornada como Imigrante!",
//         texto: "Descubra de forma simples e rápida quais documentos você precisa para se regularizar no Brasil. Confira a lista completa e facilite sua integração no país!",
//         btn: "Descubra aqui"

//     },
//     {
//         imgUrl: AboutUs,
//         titulo: "Venha conhecer um pouco Sobre Nós!",
//         texto: "Venha conhecer um pouco mais sobre os criadores deste projeto!",
//         btn: "Aperte Aqui"

//     }
// ]
