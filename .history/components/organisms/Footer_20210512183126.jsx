import React from "react";
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
                ></pattern>
              </defs>
              <rect
                id="ETI-Logo"
                width="160"
                height="57"
                fill="url(#pattern)"
              />
            </svg>
            <p class="opacity-60">
              Concord Royal Court (3rd floor) Dhanmondi, Dhaka 1209, Bangladesh.
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
  );
};

export default Footer;
