import { useEffect, useState } from "react";

const ResizeWeb = () => {
  const [length, setLength] = useState(1000);
  useEffect(() => {
    if (window.innerWidth) setLength(window.innerWidth);
    if (length < 640) {
        return 1;
      } else {
        return 2;
      }
  }, [window.innerWidth]);

  
};
export default ResizeWeb;
