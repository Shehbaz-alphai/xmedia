import { useLottie, useLottieInteractivity } from "lottie-react";
import likeButton from "../../src/assets/groovyWalk1.json";

const options = {
  animationData: likeButton,
};

const Example = () => {
  const lottieObj = useLottie(options);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      
    ],
  });

  return Animation;
};

export default Example;