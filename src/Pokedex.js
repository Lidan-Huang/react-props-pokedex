import PokeCard from "./Pokecard";

function Pokedex({ cards, totalExp, isWinner }) {
  const myStyles = {
    display: "flex",
    gap: "10px",
  }

  return (
    <div style={myStyles}>
      {cards.map(card => <PokeCard card={card} />)}
      <p>Total exp: {totalExp}</p>
      {(isWinner) ? <p>"This hand wins"</p> : null}
    </div>
  );
}

export default Pokedex;