import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <Pizza
        name="Peperonni Pizza"
        description="The Classic spicy cold cut pizza everybody loves"
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="Hawaiian"
        description="Ham & Pineapple"
        image={"/public/pizzas/hawaiian.webp"}
      />
      <Pizza
        name="Meat Lovers"
        description="Pepperoni + Ham + Sausage + Chicken"
        image={"/public/pizzas/big_meat.webp"}
      />
    </div>
  );
};

export default App;
