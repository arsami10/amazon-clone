import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img 
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            alt=""
            />

            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product
                id="12321341"
                title="The Lean Startup: How Constant Innovative Creates Radically Succssful Business Paperback"
                price={11.96}
                rating={5}
                image="https://4.bp.blogspot.com/-k0TrL9RNU-o/WxX3_VMnz7I/AAAAAAAAZ0Q/taLG3cBhrVkA8emeXkvTIpYiL5HhcRDxQCLcBGAs/s1600/%25E0%25A6%2589%25E0%25A6%259A%25E0%25A7%258D%25E0%25A6%259A%25E0%25A6%25A4%25E0%25A6%25B0%2B%25E0%25A6%2597%25E0%25A6%25A3%25E0%25A6%25BF%25E0%25A6%25A4%2B%25E0%25A6%25B8%25E0%25A6%25AE%25E0%25A6%25BE%25E0%25A6%25A7%25E0%25A6%25BE%25E0%25A6%25A8%2B%25E0%25A7%25A7%25E0%25A6%25AE%2B%25E0%25A6%25AA%25E0%25A6%25A4%25E0%25A7%258D%25E0%25A6%25B0%2B-%2B%25E0%25A6%25AE%25E0%25A7%258B.%2B%25E0%25A6%2595%25E0%25A7%2587%25E0%25A6%25A4%25E0%25A6%25BE%25E0%25A6%25AC%2B%25E0%25A6%2589%25E0%25A6%25A6%25E0%25A7%258D%25E0%25A6%25A6%25E0%25A6%25BF%25E0%25A6%25A8%2BHigher%2BMath%2BSolution%2B1st%2BPaper%2Bby%2BMd.%2BKetab%2BUddin%2Bpdf.jpg"
                />
                <Product
                id="12321341"
                title="Hero Glamour Disc 125cc Motor Bike"
                price={536}
                rating={4}
                image="https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/45ef6a29e812-hero-glamour-disc-125-cc-4.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                id="12321341"
                title="Miyako Blue Bird Blender 750W"
                price={132}
                rating={4}
                image="https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/0df716b9d309-25.jpg"
                />
                <Product
                id="12321341"
                title="Nylon Revolving Chair - Black"
                price={269}
                rating={5}
                image="https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/71e2b8556a5f-2.png"
                />
                <Product
                id="12321341"
                title="Drill machine tool set"
                price={96}
                rating={5}
                image="https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/watermarked/2018-12-12_052538.35555903.jpg"
                />
            </div>
               
            <div className="home__row">
            <Product
                id="12321341"
                title="Kemei KM-680A Multifunction Rechargeable Electric Trimmer For Men - Silver"
                price={239}
                rating={3}
                image="https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/2019-05-08_134334.931362Kemei_KM-680A_Multifunction_Rechargeable_Electric_Trimmer_Shaver-5PN3_3027_1A00__SGT2561.png"
                />
            </div>

            {/* Product */}
        </div>
    );
}

export default Home;
