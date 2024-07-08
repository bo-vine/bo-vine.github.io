function scrollToElement(e) {
  console.log(e);
  console.log(e.getAttribute("section"));
  const sectionID = e.getAttribute("section");
  const sectionElement = document.getElementById(sectionID);
  sectionElement.scrollIntoView();
}