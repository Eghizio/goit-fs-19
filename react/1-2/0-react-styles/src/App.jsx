import { Tabs } from "./Tabs";
import { StyleProp } from "./0-style-prop/StyleProp";
import { Css } from "./1-css/Css";
import { ClassComposition } from "./2-class-composition/ClassComposition";
import { Clsx } from "./3-clsx/Clsx";
import { Globals } from "./4-globals/Globals";
import { ReusingStyles } from "./5-reusing-styles/ReusingStyles";
import { CssModules } from "./6-css-modules/CssModules";
import { Normalization } from "./7-normalization/Normalization";
import { ReactIcons } from "./8-react-icons/ReactIcons";

export const App = () => (
  <Tabs>
    <Tabs.Tab name="Style prop">
      <StyleProp />
    </Tabs.Tab>
    <Tabs.Tab name="CSS">
      <Css />
    </Tabs.Tab>
    <Tabs.Tab name="Class composition">
      <ClassComposition />
    </Tabs.Tab>
    <Tabs.Tab name="Clsx">
      <Clsx />
    </Tabs.Tab>
    <Tabs.Tab name="Globals">
      <Globals />
    </Tabs.Tab>
    <Tabs.Tab name="Reusing styles">
      <ReusingStyles />
    </Tabs.Tab>
    <Tabs.Tab name="CSS Modules">
      <CssModules />
    </Tabs.Tab>
    <Tabs.Tab name="Normalization">
      <Normalization />
    </Tabs.Tab>
    <Tabs.Tab name="React Icons">
      <ReactIcons />
    </Tabs.Tab>
  </Tabs>
);
