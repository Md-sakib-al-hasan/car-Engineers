import { FaArrowDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../../images/banner/1.jpg";
import img2 from "../../images/banner/2.jpg";
import img3 from "../../images/banner/3.jpg";
import img4 from "../../images/banner/4.jpg";
import img5 from "../../images/banner/5.jpg";
import img6 from "../../images/banner/6.jpg";
export default function Banner() {
  return (
    <div>
      <div className="carousel h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full" />
          <div></div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1">
            <h2>
              Affordable <br></br>
              Price For car <br></br>
              servicing
            </h2>
            <p>
              There are many variations of passges of avable but ht maory have
              suffer in some form
            </p>
            <a href="#slide4" className="btn btn-circle m-2">
              <FaArrowRight />
            </a>
            <a href="#slide2" className="btn btn-circle m-2">
              <FaArrowDown />
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h/3">
          <img src={img2} className="w-full" />
          <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-1">
            <a href="#slide1" className="btn btn-circle m-2">
              <FaArrowRight />
            </a>
            <a href="#slide3" className="btn btn-circle m-2">
              <FaArrowDown />
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full 
        
        "
        >
          <img src={img3} className="w-full" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1">
            <a href="#slide2" className="btn btn-circle m-2">
              <FaArrowRight />
            </a>
            <a href="#slide4" className="btn btn-circle m-2">
              <FaArrowDown />
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item relative w-full 
        
        "
        >
          <img src={img4} className="w-full" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1">
            <a href="#slide3" className="btn btn-circle m-2">
              <FaArrowRight />
            </a>
            <a href="#slide5" className="btn btn-circle m-2">
              <FaArrowDown />
            </a>
          </div>
        </div>
        <div
          id="slide5"
          className="carousel-item relative w-full 
        
        "
        >
          <img src={img5} className="w-full" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1">
            <a href="#slide4" className="btn btn-circle m-2">
              <FaArrowRight />
            </a>
            <a href="#slide6" className="btn btn-circle m-2">
              <FaArrowDown />
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full ">
          <img src={img6} className="w-full" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1">
            <a href="#slide5" className="btn btn-circle m-2">
              <FaArrowRight />
            </a>
            <a href="#slide1" className="btn btn-circle m-2">
              <FaArrowDown />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
