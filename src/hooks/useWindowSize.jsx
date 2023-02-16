import { useEffect, useState } from "react";

function useWindowSize(ref, setKey) {
  // const [size, setSize] = useState(0);
  const [width, setWidth] = useState();

  useEffect(() => {
    function updateSize() {
      console.log(ref);
      setWidth(ref.current.scrollWidth - ref.current.offsetWidth);
      console.log(ref.current.scrollWidth);
      console.log(ref.current.offsetWidth);
      setKey((prev) => prev + 1);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return width;
}

export default useWindowSize;
