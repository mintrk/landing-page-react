import "./Banner.css"
import React from 'react'

let bannerData = {
    title: "React Landing Page",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia iusto velit est culpa voluptas unde eum amet dolore, iste illum beatae, accusamus ullam alias itaque ea accusantium tempore sed nam."
}


function Banner() {
    return (
        <div className="banner-bg">
            <div className="container">
                <div className="banner-con">
                    <div className="banner-text">
                        <h1>{bannerData.title}</h1>
                        <p>
                            {bannerData.desc}
                        </p>
                        <a href="#" className="banner-btn">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
