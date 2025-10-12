document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const courseList = button.closest(".semester-card").querySelector(".course-list");
      const isVisible = courseList.style.display === "block";

      document.querySelectorAll(".course-list").forEach((list) => list.style.display = "none");
      document.querySelectorAll(".toggle-btn").forEach((btn) => btn.textContent = "View Courses ▾");

      if (!isVisible) {
        courseList.style.display = "block";
        button.textContent = "Hide Courses ▴";
      } else {
        courseList.style.display = "none";
        button.textContent = "View Courses ▾";
      }
    });
  });
});
