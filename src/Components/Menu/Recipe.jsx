import parse from 'html-react-parser';

const Recipe = ({ recipeData }) => {
  const { image, title, summary  } = recipeData;
  console.log(recipeData)
   return (
    <div>
        <h2>{title}</h2>
      <img src={image} alt="" />
      {parse(summary)}
      <button>Ver Detalle</button>
      <button>Eliminar</button>
    </div>
  );
};

export default Recipe;
