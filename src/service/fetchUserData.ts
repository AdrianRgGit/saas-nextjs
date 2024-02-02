export const fetchUserData = async () => {
  try {
    const response = await fetch("/mocks/users.json");
    const users = await response.json();
    return users;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};
