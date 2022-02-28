function Pokecard({ id, name, type, base_experience }) {
    return (
        <div>
            <h3>{ name }</h3>
            <img src=
            {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} 
            alt="Pokemon" />
            <p>Type: { type }</p>
            <p> EXP:{ base_experience } </p>
        </div>
    );
}

export default Pokecard;