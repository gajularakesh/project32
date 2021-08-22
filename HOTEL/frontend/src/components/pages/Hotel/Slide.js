import React from 'react';
import './Slide.css';
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FFBB12"];
const delay = 2500;

function Slideshow(props) {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  
  const lists =  [
  {
      url:props.url1,
      code: <a href="/register"><button className="slidebutton">Join us</button></a>
  },
  {
    url:props.url2,
    //code: <a href="/register"><button className="slidebutton">Join us</button></a>
  },
  {
    url:props.url3
  },
  {
    url:props.url4
  }
]
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);


  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {lists.map((list, index) => (
          <div
            className="slide"
            key={index}
            // style={{ backgroundColor }}
          ><img src={list.url} alt="anil" ></img>{list.code}</div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;