import React from "react";

const Animateonclick = () => {
  const [wobble, setWobble] = React.useState(0)
  return (
    <img
      className={styles.image}
      onClick={() => setWobble(1)}
      onAnimationEnd={() => setWobble(0)}
      wobble={wobble}
    />
  )
}

export default Animateonclick;