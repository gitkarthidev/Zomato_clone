import React from "react";
import { diningOut } from "../../data/diningOut";
import Collection from "../common/collection";
import Filters from "../common/filters";
import ExploreSection from "../common/exploreSection";
import "./diningOut.css";

const collectionList = [
  {
    id: 1,
    title: "Veggie Friendly",
    cover:
      "	https://b.zmtcdn.com/data/collections/041950720ae7dae44fdd9e4391628719_1625582022.jpg",
    places: "10 Places",
  },
  {
    id: 2,
    title: "Frozen Delight",
    cover:
      "https://b.zmtcdn.com/data/collections/1f0bdedba48aedd922d978630b16b441_1625577669.jpg",
    places: "14 Places",
  },
  {
    id: 3,
    title: "Best of Chennai",
    cover:
      "https://b.zmtcdn.com/data/collections/6bbbaa1ccabe15209c45f5cfddfdef6a_1620291802.jpg",
    places: "76 Places",
  },
  {
    id: 4,
    title: "Brilliant Briyanis",
    cover:
      "	https://b.zmtcdn.com/data/collections/81dc179878a8d9e8b2ab03e4eaeab0df_1459434256.jpg",
    places: "13 Places",
  },
  {
    id: 5,
    title: "Best Pizza Places In Town",
    cover:
      "https://b.zmtcdn.com/data/collections/99384005af05393bad27980abd0ef3ee_1618993177.jpg",
    places: "11 Places",
  },
  {
    id: 6,
    title: "Flavours of the North",

    cover:
      "https://b.zmtcdn.com/data/collections/26ec96dfdd3e06f08fba4cce646e50e9_1618995559.jpg",
    places: "10 Places",
  },
  {
    id: 7,
    title: "Terrific Thalis",
    cover:
      "https://b.zmtcdn.com/data/collections/c577e0ca5b896facbba4ef70ffbba204_1618994185.jpg",
    places: "8 Places",
  },
  {
    id: 8,
    title: "Kickass Burgers",

    cover:
      "https://b.zmtcdn.com/data/collections/c9a13aa54e83ed6eb04c11cb7fca09ac_1625637908.jpg",
    places: "10 Places",
  },
];

const diningFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,

    title: "Rating: 4.0+",
  },
  {
    id: 3,

    title: "Safe and Hygeneic",
  },
  {
    id: 4,

    title: "Pure Veg",
  },
  {
    id: 5,
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
    title: "Delivery Time",
  },
  {
    id: 6,

    title: "Great Offers",
  },
];

const dinningList = diningOut;
const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filterList={diningFilters} />
      </div>
      <ExploreSection
        list={dinningList}
        collectionName="Dine-Out Restaurants in Chennai"
      />
    </div>
  );
};

export default DiningOut;
