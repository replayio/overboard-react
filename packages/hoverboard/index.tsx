import lottie, { AnimationItem } from "lottie-web";
import { interpolate } from "@popmotion/popcorn";
import React, { useEffect, useRef } from "react";

import animationData from "./hoverboard.json";

type Colorway = any;

export function Hoverboard({ color, rotate }: { color?: Colorway; rotate?: number }) {
  const containerRef = useRef(null);
  const previousColor = useRef(null);
  const animationRef = useRef<AnimationItem>();
  const timeoutId = useRef<ReturnType<typeof setTimeout>>(null);

  // function reset() {
  //   clearTimeout(timeoutId.current);
  //   animationRef.current.stop();
  //   animationRef.current.setSpeed(1);
  // }

  // function wave() {
  //   animationRef.current.playSegments([0, 24]);
  // }

  // function flip() {
  //   animationRef.current.playSegments([24, animationRef.current.totalFrames], true);
  // }

  useEffect(() => {
    if (!containerRef.current) return;

    const animation = lottie.loadAnimation({
      container: containerRef.current!,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData,
    });

    animationRef.current = animation;

    return () => {
      animation?.destroy();
    };
  }, []);

  // useEffect(() => {
  //   /** Offsets the start frame to keep rotate={180} true to flipping the board 180 degrees in the Lottie animation. */
  //   const startOffset = 35;
  //   const nextFrame = Math.floor(
  //     interpolate(
  //       [-startOffset, 360 - startOffset],
  //       [24, animationRef.current.totalFrames]
  //     )(rotate - startOffset) as number
  //   );

  //   animationRef.current?.goToAndStop(nextFrame, true);
  // }, [rotate]);

  // useLayoutEffect(() => {
  //   if (previousColor.current === null) {
  //     wave();
  //   } else if (previousColor.current !== color) {
  //     flip();
  //     // flip().then(wave);
  //   }

  //   previousColor.current = color;
  // }, [color]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
}