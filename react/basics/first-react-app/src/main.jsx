import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SmallPara from './myname.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
      <SmallPara></SmallPara>
    </div>
  </StrictMode>
);
