import { useState } from "react";
import siteData from 'island:site-data';
export function Layout() {
  console.log("siteData", siteData);
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>This is Layout Component</h1>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>Add Count111</button>
      </div>
    </div>
  );
}
