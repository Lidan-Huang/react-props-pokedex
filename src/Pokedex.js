import PokeCard from "./Pokecard";

function Pokedex({ pokeCards }) {
    return(
        <div>
            {pokeCards.map(card => <PokeCard card={card} />)}
        </div>
    );
}

export default Pokedex;