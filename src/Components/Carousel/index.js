import React, { useEffect, useState } from "react";

const Carousel = (props) => {
  const [active, setActive] = useState(0);
  let scrollInterval = null;
  const style = {
    carouselItem: {
      position: "absolute",
      visibility: "hidden",
      height: "550px",
      width: "100%",
      objectFit: "cover",
    },
    visible: {
      visibility: "visible",
    },
  };
  useEffect(() => {
    scrollInterval = setTimeout(() => {
      const { carouselItems } = props;
      setActive((active + 1) % carouselItems.length);
    }, 5000);
  });

  const { carouselItems, ...rest } = props;

  return (
    <div className="u-hero-v1" style={{ height: "550px" }}>
      <div className="js-slick-carousel u-slick slick-initialized slick-slider">
        <div className="slick-track">
          {carouselItems.map((item, index) => {
            const activeStyle = active === index ? style.visible : {};
            const className = `js-slide slick-slide slick-current ${
              active === index ? "slick-active" : ""
            }`;
            return React.cloneElement(item, {
              ...rest,
              style: {
                ...style.carouselItem,
                ...activeStyle,
              },
              className: className,
            });
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
