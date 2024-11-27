import { Tabs } from "./Tabs/Tabs";
import { ReduxToolkitStore } from "./0-redux-toolkit-store/ReduxToolkitStore";
import { ActionCreators } from "./1-action-creators/ActionCreators";
import { ReducerCreators } from "./2-reducer-creators/ReducerCreators";
import { Slices } from "./3-slices/Slices";

export const App = () => (
  <Tabs>
    <ReduxToolkitStore />
    <ActionCreators />
    <ReducerCreators />
    <Slices />
  </Tabs>
);
