// Optional: Alert users that all major text is editable
window.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem("editNoticeShown")) {
    alert(
      "You can edit the headline, subheadline, about sections, and final text section directly on the page! Click any of those sections to edit."
    );
    localStorage.setItem("editNoticeShown", "true");
  }
});