import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssMoludes";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
