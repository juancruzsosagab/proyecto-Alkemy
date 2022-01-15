import { useState, useEffect } from "react";
import { getRecipies } from "../Services/getRecipies";
import Menu from "../Components/Menu/Menu";

function General() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getRecipies("715538,716429");
      //console.log(response);
      setRecipes(response.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <h2>General</h2>
      <Menu recipes={recipes} />
    </>
  );
}

export default General;
