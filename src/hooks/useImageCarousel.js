import companyOne from "../assets/images/company1.jpg";
import companyTwo from "../assets/images/company2.jpg";
import companyThree from "../assets/images/company3.jpg";
import companyFour from "../assets/images/company4.jpg";
import companyFive from "../assets/images/company5.jpg";
import companySix from "../assets/images/company6.jpg";
import companySeven from "../assets/images/company7.jpg";
import companyEight from "../assets/images/company8.jpg";
import { useState } from "react";

const useImageCarousel = (activeImages = 5) => {
  const imgArr = [
    companyOne,
    companyTwo,
    companyThree,
    companyFour,
    companyFive,
    companySix,
    companySeven,
    companyEight,
  ];
  const [activeImgIndex, setActiveImgIndex] = useState([
    ...Array(activeImages).keys(),
  ]);
  const [activeImgArr, setActiveImgArr] = useState(
    activeImgIndex.map(idx => imgArr[idx])
  );

  const slideLeft = () => {
    setActiveImgIndex(prev => {
      let arr = [...prev];
      arr.pop();
      if (arr[0] - 1 < 0) {
        arr.unshift(imgArr.length - 1);
      } else {
        arr.unshift(arr[0] - 1);
      }
      return arr;
    });
    console.log(activeImgIndex);
    setActiveImgArr(activeImgIndex.map(idx => imgArr[idx]));
  };
  const slideRight = () => {
    setActiveImgIndex(prev => {
      let arr = [...prev];
      arr.shift();
      if (arr[arr.length - 1] + 1 >= imgArr.length) {
        arr.push(0);
      } else {
        arr.push(arr[arr.length - 1] + 1);
      }
      return arr;
    });
    console.log(activeImgIndex);
    setActiveImgArr(activeImgIndex.map(idx => imgArr[idx]));
  };

  return [activeImgArr, slideLeft, slideRight];
};

export default useImageCarousel;
