import React, { useState } from "react";
import { useSprings } from "react-spring/hooks";
import { useHistory } from "react-router-dom";
import { useGesture } from "react-with-gesture";

import Card from "./Card";
import { kpop, kdrama } from "../data/data";

import './styles/Deck.css'
import {
  Like,
  Dislike
} from "../styles"

let selected = [];

const to = i => ({
  x: 0,
  y: -50,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100
});
const from = i => ({ rot: 0, scale: 1.5, y: -1000 });

const trans = (r, s) =>
  `(${s})`;

function Deck(info) {
  let data = [];
  console.log("esta es la categoria", info.category);
  if (info.category === "K-POP") {
    data = kpop;
  } else {
    data = kdrama;
  }
  const [gone] = useState(() => new Set());
  let history = useHistory()

  const [props, set] = useSprings(data.length, i => ({
    ...to(i),
    from: from(i)
  }));

  function redirectfinalScreen() {
    history.push("/finalscreen")
  }

  const bind = useGesture(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity
    }) => {
      const trigger = velocity > 0.2;

      const dir = xDir < 0 ? -1 : 1;

      if (!down && trigger) {
        gone.add(index);
        if (dir == 1) {
          selected.push(data[index].name);
        }
      }

      set(i => {
        if (index !== i) return;
        const isGone = gone.has(index);

        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;

        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);

        const scale = down ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 }
        };
      });

      if (!down && gone.size === data.length) {
        console.log(selected);
        redirectfinalScreen()
        localStorage.setItem('interests', selected);
        setTimeout(() => gone.clear() || set(i => to(i)), 600);
      }
    }
  );

  return props.map(({ x, y, rot, scale }, i) => (
    <Card
      key={i}
      i={i}
      x={x}
      y={y}
      rot={rot}
      scale={scale}
      trans={trans}
      data={data}
      bind={bind}
    />
  ));
}

export default Deck;
