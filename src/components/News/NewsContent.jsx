import data from "./data"

const NewsContent = data.map((store) => {
  const { id, title, description, image } = store;
  return (
    <div key={id} className="card">
      <img src={image} alt=""></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
});
export default NewsContent
