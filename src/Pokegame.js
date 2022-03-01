import Pokedex from "./Pokedex";

function Pokegame({ cards }) {
  const cardList = [...cards];
  const numCards = cardList.length;
  let deckOne = [];
  let deckTwo = [];


  for (let i = 0; i < numCards / 2; i++) {
    const cardIdx = choice(cardList);
    deckOne.push(cardList[cardIdx]);
    cardList.splice(cardIdx, 1);
  }

  deckTwo = cardList;

  console.log("deckOne", deckOne);
  console.log("deckTwo", deckTwo);

  const deckOneExp = deckOne.reduce(
    function (totalExp, currentCard) {
      return totalExp + currentCard.base_experience;
    }, 0
  );

  const deckTwoExp = deckTwo.reduce(
    function (totalExp, currentCard) {
      return totalExp + currentCard.base_experience;
    }, 0
  );

  const deckOneWins = (deckOneExp > deckTwoExp) ? true : false;

  const myStyles = {
    display: "flex",
    flexDirection: "column",
    margin: "10px",
    flexWrap: "nowrap",
  }

  return (
    <div style={myStyles}>
      <Pokedex cards={deckOne} totalExp={deckOneExp} isWinner={deckOneWins} />
      <Pokedex cards={deckTwo} totalExp={deckTwoExp} isWinner={!deckOneWins} />

    </div>
  );
}

function choice(items) {
  return Math.floor(Math.random() * items.length);
}

export default Pokegame;