const base_url = "https://raw.githubusercontent.com/";

function Pokecard({ card }) {
  const myStyles = {
    backgroundColor: "gray",
    height: "230px",
    width: "150px",
    borderRadius: "5px",
  };
  const { id, name, type, base_experience } = card;
  return (
    <div style={myStyles} >
      <h3>{name}</h3>
      <img src=
        {`${base_url}PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt="Pokemon" />
      <p>Type: {type}</p>
      <p> EXP:{base_experience} </p>
    </div>
  );
}

export default Pokecard;