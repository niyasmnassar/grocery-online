import React from "react";
import Slider from "react-slick";


function OfferSlider () {
    const renderSlides = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map((num,i) => (
    <div key={i}>
        <img className="img-fluid" src={ process.env.PUBLIC_URL + '/media/banner/banner-dummy.jpg' } alt="bannner"/>
    </div>
    ));
  
    return <div>
        <section className="py-4">
        <Slider dots={true} arrows={false}>{renderSlides()}</Slider>
        </section>
      </div>
}
export default OfferSlider;

