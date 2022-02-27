import React from "react";
import Slider from "react-slick";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
import "./deliveryCollections.css";
import DeliveryItem from "./deliveryItem";

const deliveryItems = [
  {
    id: 1,
    title: "Idli",
    cover:
      "https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png",
  },
  {
    id: 2,
    title: "Vada",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/bf4bde7b78d517ac8460ea03d4c64a7f1632716550.png",
  },
  {
    id: 3,
    title: "Dosa",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
  },
  {
    id: 4,
    title: "Pongal",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/fee832f6c837b40004750fb3185da6791632716576.png",
  },
  {
    id: 5,
    title: "Juice",
    cover:
      "https://b.zmtcdn.com/data/dish_images/76337f566ed166fad8a5ad6b5e29d75b1634805122.png",
  },
  {
    id: 6,
    title: "Tea",
    cover:
      "https://b.zmtcdn.com/data/dish_images/743abc4d4dad9c3f8163084ae4b30bad1635165809.png",
  },
  {
    id: 7,
    title: "Uttapam",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/7ab7679bbd422b52205ba598502674291632716549.png",
  },
  {
    id: 8,
    title: "Coffe",
    cover:
      "https://b.zmtcdn.com/data/dish_images/865258169afc30225d6747c54041e8951634966783.png",
  },
  {
    id: 9,
    title: "Sandwich",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
  },
  {
    id: 10,
    title: "Parotta",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/19ce59acccda91b9ed7a407c970028721634401116.png",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const DeliveryCollections = () => {
  return (
    <div className="delivery-collections">
      <div className="max-width">
        <div className="collection-title">Eat what makes you happy</div>
        <Slider {...settings}>
          {deliveryItems.map((item) => {
            return <DeliveryItem item={item} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default DeliveryCollections;
