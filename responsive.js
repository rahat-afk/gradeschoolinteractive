// The hub remains fully navigable when JavaScript is unavailable.
const courseToggle = document.querySelector('.course-toggle');
const courseLinks = document.getElementById('course-links');
if (courseToggle && courseLinks) {
  courseToggle.hidden = false;
  const setExpanded = (expanded) => {
    courseToggle.setAttribute('aria-expanded', String(expanded));
    courseLinks.classList.toggle('is-collapsed', !expanded);
  };
  setExpanded(false);
  courseToggle.addEventListener('click', () => {
    setExpanded(courseToggle.getAttribute('aria-expanded') !== 'true');
  });
  courseLinks.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && matchMedia('(max-width: 860px)').matches) {
      setExpanded(false);
      courseToggle.focus();
    }
  });
}
