interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

function addLocalStorage(data: User[]): void {
  localStorage.setItem("name", JSON.stringify(data[0].name));
  localStorage.setItem("email", JSON.stringify(data[0].email));
  localStorage.setItem("picture", JSON.stringify(data[0].picture));
}

function removeLocalStorage(): void {
  localStorage.clear();
}

export { addLocalStorage, removeLocalStorage };
