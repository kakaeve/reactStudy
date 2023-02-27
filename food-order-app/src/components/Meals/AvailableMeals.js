import React from "react";

import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "초밥",
    description: "맛있는 초밥",
    price: 18000,
  },
  {
    id: "m2",
    name: "프레즐",
    description: "크림치즈가 듬뿍 프레즐!",
    price: 5000,
  },
  {
    id: "m3",
    name: "바게트 버거",
    description: "본고장의 맛!",
    price: 12000,
  },
  {
    id: "m4",
    name: "샐러드",
    description: "건강식!!",
    price: 8500,
  },
];

function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map(cur => (
    <MealItem
      key={cur.id}
      name={cur.name}
      description={cur.description}
      price={cur.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
