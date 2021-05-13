import React, { Fragment } from "react";
import Logo from "../atoms/Logo";
import IconYouTube from "../atoms/icons/IconYouTube";
import IconInstagram from "../atoms/icons/IconInstagram";
import IconLinkedin from "../atoms/icons/IconLinkedin";
import IconSpotify from "../atoms/icons/IconSpotify";
import IconTikTok from "../atoms/icons/IconTikTok";
import IconTwitter from "../atoms/icons/IconTwitter";
import Button from "../atoms/Button";

const Footer = () => {
  return (
    <>
      <div class="w-full bg-purple-500 text-white">
        <div class="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10">
          <div class="w-full pt-12 flex flex-col sm:flex-row space-y-2  justify-start">
            <div class="w-full sm:w-2/5 pr-6 flex flex-col space-y-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="160"
                height="57"
                viewBox="0 0 160 57"
              >
                <defs>
                  <pattern
                    id="pattern"
                    preserveAspectRatio="none"
                    width="100%"
                    height="100%"
                    viewBox="0 0 197 70"
                  >
                    <Logo />
                  </pattern>
                </defs>
              </svg>
              <p class="opacity-60">
                Concord Royal Court (3rd floor) Dhanmondi, Dhaka 1209,
                Bangladesh.
              </p>
            </div>
            <div class="w-full sm:w-1/5 flex flex-col space-y-4">
              <a class="opacity-60">About Us</a>
              <a class="opacity-60">Responsibilities</a>
              <a class="opacity-60">Out Services</a>
              <a class="opacity-60">Contact</a>
            </div>
            <div class="w-full sm:w-1/5 flex flex-col space-y-4">
              <a class="opacity-60">Disclaimer</a>
              <a class="opacity-60">Testimonials</a>
              <a class="opacity-60">Privacy Policy</a>
              <a class="opacity-60">Terms of Service</a>
            </div>
            <div class="w-full sm:w-1/5 pt-6 flex items-end mb-1">
              <div class="flex flex-row space-x-4">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-google"></i>
              </div>
            </div>
          </div>
          <div class="opacity-60 pt-2">
            <p>© 2020 Executive Trade International.</p>
          </div>
        </div>
      </div>
      <div
        className="
     
      border-current border-2 bg-gray-700 
      grid grid-cols-1 lg:grid-cols-3 divide-white
      p-2 md:p-4 "
      >
        <div className=" border-b-2 border-white p-2 lg:border-r-4 lg:p-4 lg:border-b-0">
          <p className="text-white text-xl text-justify">
            Siguenos en redes sociales.
          </p>
          <div className="flex flex-auto items-baseline justify-between m-4">
            <IconInstagram link="https://www.instagram.com/de_area_/?hl=es" />
            <IconTikTok link="https://vm.tiktok.com/ZSPFA7VT/" />
            <IconYouTube link="https://www.youtube.com/channel/UCxQwfFTrLSWq5wQj9dBsGdA/playlists?view_as=subscriber" />
            <IconSpotify link="#" />
            <IconTwitter link="https://twitter.com/dearea16?s=08" />
            <IconLinkedin link="#" />
          </div>
          <div className="text-white text-sm text-justify">
            Iconos diseñados por
            <a href="https://www.flaticon.es/autores/freepik" title="Freepik">
              Freepik
            </a>
            from
            <a href="https://www.flaticon.es/" title="Flaticon">
              www.flaticon.es
            </a>
          </div>
        </div>
        <div className="border-b-2 border-white p-2 lg:border-r-4  lg:p-4 lg:border-b-0">
          <p className="text-white text-xl text-center">
            ¿Tienes algo que contar?
          </p>
          <div className="flex justify-center ">
            <Button
              bgColor="bg-purple-700"
              hoverColor="bg-green-400"
              borderColor="border-purple-700"
              value="Contactanos"
            />
          </div>
        </div>
        <div className="border-white border-b-2  p-2 lg:border-r-4 lg:p-4 lg:border-b-0">
          <div className="flex justify-center">{/* <Logo /> */}</div>
          <p className="text-white text-sm break-words text-justify">
            Somos una organización que busca empoderar y mostrar el futbol
            femenino en latinoamerica
          </p>
          <span className="pt-4 text-white text-xs break-words text-justify">
            Todos los derechos reservados © 2020 | De Área a Área
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
