// observer options
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.50,
}

// create observer
const observer = new IntersectionObserver( entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      // add an observed class to the section
      entry.target.classList.add('observed'); 
      // check the section's id
      document.querySelectorAll('nav a').forEach( link => {
        if(link.hash === `#${entry.target.id}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };
  });
}, options);

// Observe all sections that have an `id` applied
const sections = document.querySelectorAll('section[id]').forEach(section => {
  observer.observe(section);
});

//export module
export {
  options,
  sections,
  observer
}