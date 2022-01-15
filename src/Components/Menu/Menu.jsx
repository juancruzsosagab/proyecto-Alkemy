import Recipe from "./Recipe";

const Menu = ({ recipes }) => {
  return (
    <>
      {recipes.map((recipeData) => {
        return <Recipe recipeData={recipeData} key={recipeData.id}/>;
      })}
    </>
  );
};

export default Menu;
