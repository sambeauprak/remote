import React from "react";

function Item(props) {
  // Ici on peut faire du Javascript

  const [active, setActive] = React.useState(false);

  // PAS IMPORTANT, EXPLICATION COMMENT CA MARCHE
  // propriété (état) active
  // accesseur (setter) setActive
  // function setActive(valeur) {
  //   active = valeur;
  // }

  // Destructuration

  // let tableau = ["a", "b", "c"];
  // let [valeur1, valeur2] = tableau;
  // let valeur1 = tableau[0];
  // let valeur2 = tableau[1];

  let itemClass = "item";
  if (active == true) {
    // ou if(props.active)
    itemClass = itemClass + " active";
  }

  return (
    // Dans le return : Uniquement du JSX
    <div
      className={itemClass}
      style={{
        // backgroundImage: "url(" + props.backgroundUrl + ")",
        backgroundImage: `url(${props.backgroundUrl})`,
      }}
      onClick={() => setActive(!active)}

      // ! signifie l'inverse de la valeur
    >
      <div className="item-desc">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Item;
