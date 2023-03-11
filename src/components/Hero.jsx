import React, { useEffect, useRef, useState } from "react";
import foto1 from "../assets/foto1.png";
import foto2 from "../assets/foto2.png";
import skeletonfoto from "../assets/skeletonfoto.svg"
import Loading from "./Loading";

const Hero = () => {
  const [imageSrc, setImageSrc] = useState(foto1);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const textElement1 = useRef(null);
  const textElement2 = useRef(null);
  const textElement3 = useRef(null);
  const textElement4 = useRef(null);
  const [text, setText] = useState("");
  const typingDelay = 200;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageLoaded(false); // reset imageLoaded state
      setImageSrc((prevSrc) => (prevSrc === foto1 ? foto2 : foto1));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true); // set imageLoaded state to true
    setTimeout(() => setShowImage(true), 100); // show image after a delay
  };

  useEffect(() => {
    let index = 0;
    const fullText = "Hello I'm"; // full text to be typed

    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, typingDelay);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // delay between each character typing

  useEffect(() => {
    function handleScroll() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      textElement1.current.style.transform = `translateX(-${scrollTop}px)`;
      textElement2.current.style.transform = `translateX(-${scrollTop}px)`;
      textElement3.current.style.transform = `translateX(${scrollTop}px)`;
      textElement4.current.style.transform = `translateX(${scrollTop}px)`;
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Loading />
      <div className="flex w-full h-full justify-center">
        <div className="max-w-[1920px] h-full items-center flex justify-between z-10 overflow-hidden">
          <img
            className={`w-full ml-[-60px] object-cover h-[50vh] ipon5:h-[50vh] realme:h-[50vh] iponxr:h-[50vh] ipad:h-screen lg:ml-[-120px] ${
              showImage ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000 ease-in-out`}
            src={imageSrc}
            alt="foto nich"
            onLoad={handleImageLoad}
          />
          <div className="w-full text-white font-montserrat ml-[-50px] ipon5:ml-2 realme:ml-[-30px]">
            <h1 className="typing text-sm ipon5:text-[12px] realme:text-[10px] ipad:text-lg">{text}</h1>
            <h4 data-text="Rafael Alferdyas Putra Alfansyah" className="text-lg font-bold ipon5:hidden ipad:block ipad:text-2xl lg:text-3xl 2xl:text-4xl">
              Rafael Alferdyas Putra Alfansyah
            </h4>
            <h4 data-text="Rafael Alferdyas Putra" className="text-lg font-bold ipon5:text-sm realme:text-sm ipad:hidden">
              Rafael Alferdyas Putra
            </h4>
            <h3 className="text-sm ipon5:text-[8px] realme:text-[8px] ipad:text-lg">Currently Working as IT Specialist BCA</h3>
          </div>
        </div>

        <div className=".no_out absolute bottom-[350px] ipon5:bottom-[264px] realme:bottom-[370px] iponxr:bottom-[428px] ipad:bottom-[-16px] lg:bottom-[-24px] text-[24px] ipon5:text-[24px] realme:text-[28px] iponxr:text-[28px] lg:text-[100px] md:text-[70px] xl:text-[130px] z-2 text-white font-black font-monument whitespace-nowrap overflow-hidden w-full leading-none">
          <h2 ref={textElement1}>FRONT END DEVELOPER IT BCA</h2>
          <h2
            ref={textElement3}
            className="ml-auto ipon5:ml-[-250px] realme:ml-[-300px] iponxr:ml-[-300px] ipad:ml-[-700px] lg:ml-[-1100px] xl:ml-[-1200px] xxl:ml-[-600px]"
          >
            LIVE STREAMER CONTENT CREATOR LIVE STREAMER
          </h2>
        </div>

        <div className=".with_out absolute bottom-[350px] ipon5:bottom-[264px] realme:bottom-[370px] iponxr:bottom-[428px] ipad:bottom-[-16px] lg:bottom-[-24px] text-[24px] ipon5:text-[24px] realme:text-[28px] iponxr:text-[28px] lg:text-[100px] md:text-[70px] xl:text-[130px] text-red-400 text-opacity-0 z-20 font-black block font-monument whitespace-nowrap overflow-hidden w-full leading-none">
          <h2 ref={textElement2}>FRONT END DEVELOPER IT BCA</h2>
          <h2
            ref={textElement4}
            className="ml-auto ipon5:ml-[-250px] realme:ml-[-300px] iponxr:ml-[-300px] ipad:ml-[-700px] lg:ml-[-1100px] xl:ml-[-1200px] xxl:ml-[-600px]"
          >
            LIVE STREAMER CONTENT CREATOR LIVE STREAMER
          </h2>
        </div>
      </div>
    </>
  );
};

export default Hero;
