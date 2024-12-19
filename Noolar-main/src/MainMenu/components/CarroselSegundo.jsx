// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import Imigro1 from "../assets/imigrante1.png";
import Imigro2 from "../assets/imigrante2.png";
import Imigro3 from "/bgSlideLingolar.svg";
import CardCarroso from "./cardCarroso";

export default function CarroselSegundo() {
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
          <CardCarroso
            titulo="LingoLar:"
            texto="Faça um teste rápido e descubra o Lingolar, sua ferramenta
         personalizada para aprender idiomas de forma simples!"
     
            bgImage="/bgSlideLingolar.svg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardCarroso
            titulo="Noolar: Inovação no Ensino"
            texto="A Noolar se destaca por seu método de ensino moderno, utilizando tecnologia para proporcionar aprendizado acessível e de qualidade."
            
            bgImage="/bgCarrosoSlide2.svg"
          />
        </SwiperSlide>
        <SwiperSlide >
          <CardCarroso
            titulo="Noolar: Direcionamento de Documentação"
            texto="A Noolar orienta onde os usuários devem retirar documentos necessários, facilitando o acesso a informações e recursos específicos."
   
            bgImage="/bgCarrosoSlide3.svg"
          />
          
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
