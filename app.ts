// Toggle functionality for Skills section
const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

const toggleEducationButton = document.getElementById('toggle-education') as HTMLButtonElement;
const educationSection = document.getElementById('education') as HTMLElement;

// Toggle Skills Section
toggleSkillsButton?.addEventListener('click', () => {
  if (skillsSection) {
    skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
  }
});

// Toggle Education Section
toggleEducationButton?.addEventListener('click', () => {
  if (educationSection) {
    educationSection.style.display = educationSection.style.display === 'none' ? 'block' : 'none';
  }
});
