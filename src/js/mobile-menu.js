export const startMobileMenu = () => {
  const mobileMenuButton = document.querySelector(".main-header__open");
  const mobileMenu = document.querySelector(".main-header__list");
  const mobileMenuClose = document.querySelector(".main-header__close-button");
  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.add("open");
  }); // датчик открытия меню, и что должно произойти
mobileMenuClose.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
}); // датчик закрытия меню, и что должно произойти
};
