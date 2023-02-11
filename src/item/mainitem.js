import img1 from "./z.png";
import React from "react";
import Item from "./item";
import "./mainitem.css";
let MainItem = (props) => {
  let NewItem = [
    {
      id: "el",
      Title: "Pav Bhaji",
      Rate: "5 Star",
      Cost: 150,
      Image: img1,
    },
    {
      id: "e2",
      Title: "Paratha",
      Rate: 5,
      Cost: 546,
      Image: img1,
    },
    {
      id: "e3",
      Title: "Pizza",
      Rate: 5,
      Cost: 200,
      Image: img1,
    },
    {
      id: "e4",
      Title: "Fires",
      Rate: 5,
      Cost: 50,
      Image: img1,
    },
  ];
  let NewItem1 = [
    {
      id: "el",
      Title1: "paratha",
      Rate1: "3",
      Cost1: 23,
      Image1: img1,
    },
    {
      id: "e2",
      Title1: "Fires",
      Rate1: 5,
      Cost1: 126,
      Image1: img1,
    },
    {
      id: "e3",
      Title1: "Pav bhaji",
      Rate1: 4,
      Cost1: 57,
      Image1: img1,
    },
    {
      id: "e4",
      Title1: "Pani Puri",
      Rate1: 5,
      Cost1: 5,
      Image1: img1,
    },
  ];

  return (
    <div className="harsh">
      <Item
        Rate={NewItem[0].Rate}
        Title={NewItem[0].Title}
        Cost={NewItem[0].Cost}
        Image={NewItem[0].Image}
        Rate1={NewItem1[0].Rate1}
        Title1={NewItem1[0].Title1}
        Cost1={NewItem1[0].Cost1}
        Image1={NewItem1[0].Image}
      />
      <Item
        Rate={NewItem[1].Rate}
        Title={NewItem[1].Title}
        Cost={NewItem[1].Cost}
        Image={NewItem[1].Image}
        Rate1={NewItem1[1].Rate1}
        Title1={NewItem1[1].Title1}
        Cost1={NewItem1[1].Cost1}
        Image1={NewItem1[1].Image}
      />
      <Item
        Rate={NewItem[2].Rate}
        Title={NewItem[2].Title}
        Cost={NewItem[2].Cost}
        Image={NewItem[2].Image}
        Rate1={NewItem1[2].Rate1}
        Title1={NewItem1[2].Title1}
        Cost1={NewItem1[2].Cost1}
        Image1={NewItem1[2].Image}
      />
      <Item
        Rate={NewItem[3].Rate}
        Title={NewItem[3].Title}
        Cost={NewItem[3].Cost}
        Image={NewItem[3].Image}
        Rate1={NewItem1[3].Rate1}
        Title1={NewItem1[3].Title1}
        Cost1={NewItem1[3].Cost1}
        Image1={NewItem1[3].Image}
      />
    </div>
  );
};

export default MainItem;
