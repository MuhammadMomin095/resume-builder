// Toggle functionality for Skills and Education sections
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

// Adding Education functionality
const addEducationButton = document.getElementById('add-education') as HTMLButtonElement;
const educationList = document.getElementById('education-list') as HTMLElement;

// Handle adding education
addEducationButton?.addEventListener('click', () => {
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  if (education) {
    const educationItem = document.createElement('div');
    educationItem.textContent = education;
    educationList.appendChild(educationItem);
    (document.getElementById('education') as HTMLTextAreaElement).value = ''; // Clear the input
  }
});

// Adding Skills functionality
const addSkillsButton = document.getElementById('add-skills') as HTMLButtonElement;
const skillsList = document.getElementById('skills-list') as HTMLElement;

// Handle adding skills
addSkillsButton?.addEventListener('click', () => {
  const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
  if (skills) {
    skills.forEach(skill => {
      const skillItem = document.createElement('div');
      skillItem.textContent = skill.trim();
      skillsList.appendChild(skillItem);
    });
    (document.getElementById('skills') as HTMLInputElement).value = ''; // Clear the input
  }
});
