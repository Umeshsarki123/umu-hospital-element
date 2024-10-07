function calculateAge() {
  const birthdate = new Date(document.getElementById("birthdate").value);
  const today = new Date();

  let age = today.getFullYear() - birthdate.getFullYear();
  const monthDifference = today.getMonth() - birthdate.getMonth();

  // Adjust age if the birth month hasn't occurred yet or if it's the same month but the day hasn't passed.
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthdate.getDate())
  ) {
    age--;
  }

  document.getElementById(
    "ageResult"
  ).textContent = `Your age is ${age} years old.`;
}
