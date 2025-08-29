
  import { useState,useEffect } from "react";

  function Hooks()
  {
  
  const [seconds, setSeconds] = useState(0);

  useEffect(
    () => {
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);
 
    return () => clearInterval(interval);
  }, []); }

export default Hooks;