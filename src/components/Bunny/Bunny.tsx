import React, { useCallback, useEffect, useState } from "react";
import { useKeyPress } from "../../lib/utils/keyPress";
import "./styles.css";

function Bunny() {
  const isWalkFrontPress = useKeyPress("ArrowRight");
  const isWalkBackPress = useKeyPress("ArrowLeft");
  //const [moving, setMoving] = useState(false)
  const [position, setPosition] = useState(0);
  const [goFoward, setGoFoward] = useState(true);

  // const movingBunny = useCallback(() => {
  //   if (isWalkFrontPress) {
  //     setGoFoward(true);
  //       setMoving(!moving)
  //   }
  //   if (isWalkBackPress) {
  //     setGoFoward(false);
  //       setMoving(!moving)
  //   }
  //   },
  //   [isWalkBackPress,isWalkFrontPress,moving]
  // ) 
  
  const move = useCallback(
    () => {
      if(isWalkFrontPress){
        setPosition(position+0.1);
        //setMoving(!moving);
        //setGoFoward(true);
      }
      if(isWalkBackPress){
        setPosition(position-0.1);
        //setMoving(!moving);
        //setGoFoward(false);
      } 
    },
    [isWalkFrontPress, isWalkBackPress, position],
  )
  useEffect(() => {
   move();
  // }, [moving, move])
  }, [isWalkFrontPress, isWalkBackPress, move]);

  // useEffect(() => {
  //   movingBunny()
  // }, [isWalkFrontPress, isWalkBackPress, movingBunny]);

  return (
      <div className="bunny" style={{ left:  + "px" }}>
        {!isWalkFrontPress && !isWalkBackPress && (
          <img
            src={`images/${goFoward ? "bunny.png" : "bunnyBack.png"}`}
            alt="bunny"
          />
        )}
        {isWalkFrontPress && (
            <img src={`images/walking.gif`} alt="bunny" />
        )}
        {isWalkBackPress && (
          <img
            className="goBack"
            src={"images/walkingBack.gif"}
            alt="bunnyBack"
          />
        )}
      </div>
  );
}

export default Bunny;
