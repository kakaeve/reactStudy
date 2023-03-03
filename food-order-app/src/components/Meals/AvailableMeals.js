import React, { useEffect, useState } from "react";

import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const res = await fetch(process.env.REACT_APP_END_POINT);
      if (!res.ok) {
        throw new Error("뭔가가 잘못되었습니다.");
      }
      const data = await res.json();

      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals().catch(e => {
      setIsLoading(false);
      setError(e.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>로딩중</p>
      </section>
    );
  }
  if (error) {
    return (
      <section className={classes.MealsError}>
        <p>{error}</p>
      </section>
    );
  }
  const mealsList = meals.map(cur => (
    <MealItem
      id={cur.id}
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
