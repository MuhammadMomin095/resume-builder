// Toggle functionality for Skills and Education sections
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
// Adding Education functionality
var addEducationButton = document.getElementById('add-education');
var educationList = document.getElementById('education-list');
// Handle adding education
addEducationButton === null || addEducationButton === void 0 ? void 0 : addEducationButton.addEventListener('click', function () {
    var education = document.getElementById('education').value;
    if (education) {
        var educationItem = document.createElement('div');
        educationItem.textContent = education;
        educationList.appendChild(educationItem);
        document.getElementById('education').value = ''; // Clear the input
    }
});
// Adding Skills functionality
var addSkillsButton = document.getElementById('add-skills');
var skillsList = document.getElementById('skills-list');
// Handle adding skills
addSkillsButton === null || addSkillsButton === void 0 ? void 0 : addSkillsButton.addEventListener('click', function () {
    var skills = document.getElementById('skills').value.split(',');
    if (skills) {
        skills.forEach(function (skill) {
            var skillItem = document.createElement('div');
            skillItem.textContent = skill.trim();
            skillsList.appendChild(skillItem);
        });
        document.getElementById('skills').value = ''; // Clear the input
    }
});
