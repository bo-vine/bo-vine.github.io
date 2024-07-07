function scrollToElement(e) {
  console.log(e);
  console.log(e.getAttribute("section"));
  const sectionElement = document.getElementById(e.getAttribute("section"));
  sectionElement.scrollIntoView();
}