import React, { useEffect, useState } from "react";
import Food from "../Food/Food";
import Order from "../Order/Order";

const Container = () => {
  const [foods, setFoods] = useState([]);
  const [additem, setAdditem] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, []);
  const addToMenu = (food) => {
    if(additem.includes(food)){
        alert("you have already added the items in the Order Menu");
        return;
    }
    const newItem = [...additem, food];
    setAdditem(newItem);
    // console.log(food);
  };
  return (
    <div className="row ">
      <div className="col-lg-9 border border-secondary  border-3 rounded-3">
        <div className="row  p-2">
          {foods.map((food) => (
            <Food food={food} key={food.idMeal} addToMenu={addToMenu}></Food>
          ))}
        </div>
      </div>
      <div className="col-lg-3 text-center bg-info border border-dark rounded-2 p-3 position-relative  ">
     
        <Order additem={additem}
        key={additem.idMeal}></Order>
      </div>
    </div>
  );
};

export default Container;
