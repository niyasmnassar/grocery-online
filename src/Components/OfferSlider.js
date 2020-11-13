import React, {useEffect,useState} from "react";
import Slider from "react-slick";
import axios from "axios";

function OfferSlider () {
    useEffect(() => {
        // axios.get('https://my-json-server.typicode.com/niyasmnassar/demo/db').then(res => {setItems(res.data)});
        axios
          .get("https://my-json-server.typicode.com/niyasmnassar/demo/db")
          .then((res) => {
            setSlider(res.data.bannersliders)
            console.log(res.data.bannersliders);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
    
      const [slider, setSlider] = useState([]);
      const imgBaseUrl = process.env.PUBLIC_URL + '/media/banner/';
     
    const renderSlides = () =>
        slider.map((img,id) => (
        <div key={id}>
          <div className="slider-bg d-flex align-items-center" style={{
            backgroundImage: `url(${imgBaseUrl +
            img.url})`
          }}>
            <div className="banner-content mx-auto">
              <h1>{img.title}</h1>
              <p>{img.desc}</p>
            </div>
          </div>
         
            {/* <img className="img-fluid" src={imgBaseUrl + img.url} alt="banner" /> */}
        </div>
    ));
  
    return <div>
        <section className="">
        <Slider dots={true} arrows={false}>{renderSlides()}</Slider>
        </section>
      </div>
}
export default OfferSlider;

