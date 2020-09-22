import React from "react";
import "./mysass.scss";

const ScrollEffect = (props) => {
  return (
    <div className="parallax">
      <div className="parallax__layer parallax__layer__0">
        <img src="images/layer1.png" />
      </div>
      <div className="parallax__layer parallax__layer__1">
        <img src="images/layer2.png" />
      </div>
      <div className="parallax__layer parallax__layer__2">
        <img src="images/layer3.png" />
      </div>
      <div className="parallax__layer parallax__layer__3">
        <img src="images/layer4.png" />
      </div>
      <div className="parallax__layer parallax__layer__4">
        <img src="images/layer5.png" />
      </div>
      {/* <div className="parallax__layer parallax__layer__5">
        <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_5.png?raw=true" />
      </div>
      <div className="parallax__layer parallax__layer__6">
        <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_6.png?raw=true" />
      </div> */}
      <div class="parallax__cover">{props.children}</div>
    </div>
  );
};

export default ScrollEffect;
