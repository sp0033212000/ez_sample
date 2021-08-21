import React from "react";
import classNames from "classnames";
import fakeData from "@data/fake.data";
import RestaurantCard from "@Feature/RestaurantCard";

const App = () => {
  return (
    <main className={classNames("p-6")}>
      <h1 className={classNames("text-center", "font-bold", "text-xl", "mb-8")}>
        餐廳列表
      </h1>
      <ul
        className={classNames(
          "max-w-contentList",
          "mx-auto",
          "sm:grid",
          "sm:grid-cols-2",
          "gap-x-4",
          "md:grid-cols-3",
          "lg:grid-cols-4"
        )}
      >
        {fakeData.map((content) => (
          <RestaurantCard key={content.id} {...content} />
        ))}
      </ul>
    </main>
  );
};

export default App;
