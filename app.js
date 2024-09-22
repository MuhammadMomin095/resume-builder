// Toggle functionality for Skills section
var toggleSkillsButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
var toggleEducationButton = document.getElementById('toggle-education');
var educationSection = document.getElementById('education');
// Toggle Skills Section
toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener('click', function () {
    if (skillsSection) {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    }
});
// Toggle Education Section
toggleEducationButton === null || toggleEducationButton === void 0 ? void 0 : toggleEducationButton.addEventListener('click', function () {
    if (educationSection) {
        educationSection.style.display = educationSection.style.display === 'none' ? 'block' : 'none';
    }
});
