const login = async () => {
  return await fetch("/api/auth/login", { method: "POST" })
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP Status ${response.status}`);

      return response.json();
    })
    .catch((e) => console.log(e));
};

const getApod = async () => {
  return await fetch("/api/apod")
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP Status ${response.status}`);

      return response.json();
    })
    .catch((e) => console.log(e));
}

module.exports = {
  login,
  getApod
}
