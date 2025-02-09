export const scrollTo = (id: string) => {
  const ele = document.getElementById(id);
  if (ele) {
    const yOffset = -88; // Adjust this value to match the height of your navbar
    const yPosition =
      ele.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: yPosition, behavior: "smooth" });
  }
};
