import { useTheme } from "@/components/theme-provider";
import { useCallback } from "react";
import {
  DARK_SATURATION_N_LIGHTNESS_TUPLES,
  LIGHT_SATURATION_N_LIGHTNESS_TUPLES,
} from "../constants";

const getRandomHue = (): number => Math.floor(Math.random() * 360) % 360;

const getRandomTuple = (tuples: number[][]): [number, number] => {
  const randomIndex = Math.floor(Math.random() * tuples.length) % tuples.length;
  return tuples[randomIndex] as [number, number];
};

function useGenColors() {
  const { theme } = useTheme();

  return useCallback(() => {
    const tuples =
      theme === "dark"
        ? DARK_SATURATION_N_LIGHTNESS_TUPLES
        : LIGHT_SATURATION_N_LIGHTNESS_TUPLES;

    const [saturation, lightness] = getRandomTuple(tuples);
    const hue = getRandomHue();

    return `hsl(${hue} ${saturation}% ${lightness}%)` as const;
  }, [theme]);
}

export default useGenColors;
