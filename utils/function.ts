export const getTheme = () => {
  if (typeof window !== "undefined") {
    let theme =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    theme = JSON.parse(localStorage.getItem("theme")!) ?? theme;
    return theme;
  }
};
