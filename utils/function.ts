export const getTheme = () => {
  let theme = "dark";
  if (localStorage) {
    theme = JSON.parse(localStorage.getItem("theme")!) ?? "dark";
  }
  return theme;
};
