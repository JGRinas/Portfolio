import { useContext } from "react";
import {
  SpaceBackgroundContextProps,
  SpaceBackgroundContext,
} from "../space-background-provider";

export const useSpaceBackground = (): SpaceBackgroundContextProps => {
  const context = useContext(SpaceBackgroundContext);
  if (!context) {
    throw new Error(
      "useSpaceBackground must be used within a SpaceBackgroundProvider"
    );
  }
  return context;
};
