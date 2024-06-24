import { useEffect, useRef } from "react";

function useTitleTDK(TDK: any) {
  const prevTitleRef = useRef(document.title);

  useEffect(() => {
    const { title, description, keywords } = TDK;
    document.title = title;
    document.head.description = 
    return () => {
      document.title = prevTitleRef.current;
    };
  }, [TDK]);
}

export default useTitleTDK;
