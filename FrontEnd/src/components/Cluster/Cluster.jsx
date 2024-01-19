import React, { useEffect, useState, useRef } from "react";
import clusterStyles from "./Cluster.module.css";
import imgArray from "../../assets/ClusterImg/imgArray";

const Cluster = () => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;

    if (listNode) {
      const imgNode = listNode.querySelectorAll('li > img')[currentIndex];

      if (imgNode) {
        imgNode.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [currentIndex]);

  const scrollToImage = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex((prevIndex) => {
        const isFirstSlide = prevIndex === 0;
        return isFirstSlide ? imgArray.length - 1 : prevIndex - 1;
      });
    } else {
      setCurrentIndex((prevIndex) => {
        const isLastSlide = prevIndex === imgArray.length - 1;
        return isLastSlide ? 0 : prevIndex + 1;
      });
    }
  };

  // Función para avanzar automáticamente al siguiente slide
  const autoScroll = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgArray.length);
  };

  // Configura el intervalo para el desplazamiento automático
  useEffect(() => {
    const intervalId = setInterval(autoScroll, 7000); // Cambia el valor del intervalo según tus necesidades

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={clusterStyles.mainContainer}>
      <div className={clusterStyles.sliderContainer}>
        <div className={clusterStyles.leftArrow} onClick={() => scrollToImage('prev')}>&#10094;</div>
        <div className={clusterStyles.rigthtArrow} onClick={() => scrollToImage('next')}>&#10095;</div>
        <div className={clusterStyles.imageContainer}>
          <ul ref={listRef}>
            {imgArray.map((item) => (
              <li key={item.id}>
                <img src={item.imgUrl}  alt={`Slide ${item.id}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cluster;
        
        