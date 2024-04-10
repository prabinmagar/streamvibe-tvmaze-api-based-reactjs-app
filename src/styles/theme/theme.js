import { css } from "styled-components";

// Main theme file
export const theme = {
  colors: {
    primary: "#b30000",
    secondary: "#141414",
    white: "#fff",
    black: "#000",
    gray60: "#999",
    gray75: "#bfbfbf",
    black10: "#1a1a1a ",
    black12: "#1f1f1f",
    black06: "#0f0f0f",
    black15: "#262626",
    hover: "",
    active: "",
  },

  typography: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: {
      xxsmall: "10px",
      xsmall: "12px",
      small: "14px",
      medium: "16px",
      large: "18px",
      xlarge: "20px",
      xxlarge: "24px",
      title: "32px",
      superTitle: "48px",
    },
    lineHeight: {
      small: "1.5",
      medium: "1.7",
      large: "2",
    },
    fontWeight: {
      extraLight: "200",
      light: "300",
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    letterSpacing: {
      tight: "-0.5px",
      normal: "0",
      wide: "0.5px",
    },
  },

  breakpoints: {
    xs: "480px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1440px",
    xxxl: "1600px",
  },

  spacing: {
    xxs: "2px",
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "40px",
  },

  borders: {
    radius: "6px",
    width: "1px",
    color: "#e50000",
    styles: {
      solid: "solid",
      dashed: "dashed",
      dotted: "dotted",
    },
    get solidRed() {
      return `${this.width} ${this.styles.solid} ${this.color}`;
    },
  },

  shadows: {
    small: "0 2px 4px rgba(0, 0, 0, 0.1)",
    medium: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
    large: "0 6px 8px rgba(0, 0, 0, 0.1)",
  },

  zIndex: {
    header: 1000,
    modal: 2000,
    tooltip: 3000,
    overlay: 4000,
    dropdown: 5000,
  },

  transitions: {
    easeInOut: "0.3s ease-in-out",
    easeOut: "0.3s ease-out",
    easeIn: "0.3s ease-in",
    cubicBezier: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
    get allEaseInOut() {
      return `all ${this.easeInOut}`;
    },
  },

  opacity: {
    disabled: "0.5",
    semiTransparent: "0.7",
    transparent: "0.1",
  },

  linearGradient: {
    full: "linear-gradient(222deg, rgba(229, 0, 0, 0.50) -208.03%, rgba(229, 0, 0, 0.00) 41.32%), #0F0F0F",
    fadeOut:
      "linear-gradient(180deg, rgba(26, 26, 26, 0.00) 0%, #1A1A1A 101.79%)",
  },
};

// Reusable media query function
export const media = {
  xxl: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.xxl}) {
      ${css(...args)}
    }
  `,
  xl: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
      ${css(...args)}
    }
  `,
  lg: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
      ${css(...args)}
    }
  `,
  md: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      ${css(...args)}
    }
  `,
  sm: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      ${css(...args)}
    }
  `,
  xs: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
      ${css(...args)}
    }
  `,
};
