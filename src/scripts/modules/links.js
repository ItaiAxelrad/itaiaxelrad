// observer options
let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.25,
}
// active link observer
const sections = document.querySelectorAll("section");
const linkObserver = new IntersectionObserver(function (entries, linkObserver) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let sectionID = "#" + entry.target.id;
      // navigation link array
      const links = document.querySelectorAll("nav a");
      links.forEach(link => {
        if (link.hash === sectionID) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    };
  });
}, options);

// call link observer
sections.forEach(section => {
  linkObserver.observe(section);
});

//export module
export {
  options,
  sections,
  linkObserver
}