import React from "react";
import Collection from "../common/collection";
import Filters from "../common/filters";
import ExploreSection from "../common/exploreSection";
import "./nightlife.css";
import { nightLife } from "../../data/nightlife";

const nightFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Pro Offers",
    icon: <i className="fi fi-rr-angle-down absolute-center"></i>,
  },
  {
    id: 3,
    title: "Distance",
    icon: <i className="fi fi-rr-Apps-sort absolute-center"></i>,
  },
  {
    id: 4,
    title: "Pubs & Bars",
  },
  {
    id: 5,
    title: "Rating: 4.0+",
  },
];

const collectionList = [
  {
    id: 1,
    title: "Microbreweries",
    cover:
      "https://b.zmtcdn.com/data/collections/df4ccbf9f6b6db21b07d12a18577b5af_1582106658.jpg",
    places: "29 Places",
  },
  {
    id: 2,
    title: "Best Bars & Pubs",
    cover:
      "https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
    places: "23 Places",
  },
  {
    id: 3,
    title: "Artisan Cocktails",
    cover:
      "https://b.zmtcdn.com/data/collections/42e666d436d9a3b90431e6cc4a6b242d_1582106525.jpg",

    places: "18 Places",
  },
  {
    id: 4,
    title: "Where is The Party",
    cover:
      "https://b.zmtcdn.com/data/collections/4c645d68d0ad4c624abab81374c8997c_1582106595.jpg",
    places: "10 Places",
  },
  {
    id: 5,
    title: "Happy Hours",
    cover:
      "https://b.zmtcdn.com/data/collections/67c4acc3f607dbcff71a8e1e77a70c8a_1535469199.jpg",
    places: "18 Places",
  },
];

const nightList = nightLife;

const Nightlife = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filterList={nightFilters} />
      </div>
      <ExploreSection
        list={nightList}
        collectionName="Nightlife Restaurants in Chennai, India"
      />
    </div>
  );
};

export default Nightlife;
