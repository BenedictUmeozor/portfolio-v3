export const getTheme = () => {
  let theme =
    window &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "dark";
  theme = JSON.parse(localStorage.getItem("theme")!) ?? theme;
  return theme;
};
