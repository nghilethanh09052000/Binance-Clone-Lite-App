import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#1D1D1B", // primary
    secondary: "#F3BA2F",   // yellow

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",

    noFocus:'#676767'
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

const Theme = { COLORS, SIZES };

export default Theme;