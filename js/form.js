function addSpecialization() {
    const container = document.getElementById('specialization-container');
    const newGroup = document.createElement('div');
    newGroup.className = 'specialization-group';
    newGroup.innerHTML = `
        <label>Main Category:</label>
        <input type="text" name="mainCategory[]" required>
        <label>Subcategory:</label>
        <input type="text" name="subCategory[]" required>
    `;
    container.appendChild(newGroup);
}

function addQualification() {
    const container = document.getElementById('qualification-container');
    const newGroup = document.createElement('div');
    newGroup.className = 'qualification-group';
    newGroup.innerHTML = `
        <input type="text" name="qualification[]" required>
        <label>Qualification Proof:</label>
        <input type="file" name="qualificationProof[]" accept=".pdf, .jpg, .jpeg, .png" required>
    `;
    container.appendChild(newGroup);
}

function addResearch() {
    const container = document.getElementById('research-container');
    const newGroup = document.createElement('div');
    newGroup.className = 'research-group';
    newGroup.innerHTML = `
        <label>Research Title:</label>
        <input type="text" name="researchTitle[]">
        <label>Research Proof:</label>
        <input type="file" name="researchProof[]" accept=".pdf, .jpg, .jpeg, .png">
    `;
    container.appendChild(newGroup);
}

function addPublication() {
    const container = document.getElementById('publication-container');
    const newGroup = document.createElement('div');
    newGroup.className = 'publication-group';
    newGroup.innerHTML = `
        <label>Publication Title:</label>
        <input type="text" name="publicationTitle[]">
        <label>Publication Proof:</label>
        <input type="file" name="publicationProof[]" accept=".pdf, .jpg, .jpeg, .png">
    `;
    container.appendChild(newGroup);
}

function addExperience() {
    const container = document.getElementById('experience-container');
    const newGroup = document.createElement('div');
    newGroup.className = 'experience-group'
newGroup.innerHTML = `
    <label>Experience Title:</label>
    <input type="text" name="experienceTitle[]">
    <label>Experience Proof:</label>
    <input type="file" name="experienceProof[]" accept=".pdf, .jpg, .jpeg, .png">
`;
container.appendChild(newGroup);
}