function animateSectionItems(sectionSelector, itemSelector, animationClass) {
  const section = document.querySelector(sectionSelector);
  const items = section.querySelectorAll(itemSelector);

  items.forEach((item) => {
    item.classList.add(animationClass);
  });
}
