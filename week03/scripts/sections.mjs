export function setSectionSelection(sections) {
  const sectionSelect = document.querySelector("#sectionNumber");
  // ✅ Use the sections parameter instead of byuiCourse.sections
  sections.forEach((section) => {
    const option = document.createElement("option");
    option.value = section.sectionNumber;
    option.textContent = `${section.sectionNumber}`;
    sectionSelect.appendChild(option);
  });
}
