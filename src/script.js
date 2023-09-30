const addBookButton = document.querySelector("#add-book");
const gridOfBooks = document.querySelector("#grid-of-books");
const form = document.querySelector("#form");
const formContiner = document.querySelector("#form-cont");
const submitButton = document.querySelector("#submit");

const booksList = [];

function Book(arr) {
  this.arr = arr;

  let card = document.createElement("div");
  card.classList.add("card");

  let title = document.createElement("p");
  title.textContent = this.arr[0];
  card.appendChild(title);

  let author = document.createElement("p");
  author.textContent = this.arr[1];
  card.appendChild(author);

  let pages = document.createElement("p");
  pages.textContent = this.arr[2];
  card.appendChild(pages);

  let readButton = document.createElement("button");

  if (arr[3] == undefined) {
    readButton.textContent = "Not read";
    readButton.classList.add("bg-red-300");
  } else {
    readButton.textContent = "Read";
    readButton.classList.add("bg-green-300");
  }

  readButton.classList.add("btn");
  card.appendChild(readButton);

  readButton.addEventListener("click", () => {
    if (readButton.textContent == "Read") {
      readButton.textContent = "Not read";
      readButton.classList.remove("bg-green-300");
      readButton.classList.add("bg-red-300");
    } else {
      readButton.textContent = "Read";
      readButton.classList.remove("bg-red-300");
      readButton.classList.add("bg-green-300");
    }
  });

  booksList.push(card);
}

function displayBooks() {
  for (i of booksList) {
    gridOfBooks.appendChild(i);
    console.log(i);
  }
}

addBookButton.addEventListener("click", () => {
  formContiner.classList.remove("hidden");
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  let book = new Book([...formData.values()]);

  formContiner.classList.add("hidden");

  gridOfBooks.innerHTML = "";

  displayBooks();
});
