import pokeCard from "./Pokecard";

function Pokedex({ pokeCards }) {
    return(
        <div>
            {pokeCards.map(card => pokeCard(card))}
        </div>
    );
}

export default Pokedex;