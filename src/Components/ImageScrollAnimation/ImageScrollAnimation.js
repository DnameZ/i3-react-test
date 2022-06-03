import React, { useLayoutEffect, useRef, useState } from "react";


export const ImageScrollAnimation = ({src}) => {


  const preScroll = useRef(null);
  const elemRef = useRef(null);
  const [scale, setScale] = useState(0);

  let style = {
    width:"100%",
    height:"100%",
    transition: "transform 1000ms ease-in-out",
    transform: `scale(${scale})`,
  };

  
  useLayoutEffect(() => {
    const botPos = (element) => element.getBoundingClientRect().bottom;
    const onScroll = () => {
      const divBotPos = botPos(elemRef.current);
      const scrollPos = preScroll.current > window.scrollY;
      preScroll.current = window.scrollY;
      if (scrollPos == null) {
        return;
      }
      if (scrollPos && divBotPos > window.innerHeight) {
        setScale(0);
        return;
      }
      if (divBotPos < window.innerHeight) {
        setScale(.7);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div ref={elemRef} style={{ overflow: "hidden" }}>
        <img src = {src} style={style}/>
      </div>
    </>
  );
};


export default ImageScrollAnimation;