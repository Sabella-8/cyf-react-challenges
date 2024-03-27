function Card({ data }) {
  return (
    <div className="card">
      <img src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <h1>{data.name}</h1>
      <h2>{data.capital}</h2>
      <p>{data.population}</p>
    </div>
  );
}
export default Card;
