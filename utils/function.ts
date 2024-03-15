export const getTheme = () => {
  const theme = JSON.parse(localStorage.getItem("theme")!) ?? "dark";
  return theme;
};
