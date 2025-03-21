import books from "./books.js";

export const getBooks = (req, res) => {
  res.status(200).json(books);
};

export const getBooksId = (req, res) => {
  const id = req.params.id;
  if (id < 0 || id >= books.length) {
    return res.status(404).json({ message: "Books not found" });
  }
  res.status(200).json(books[id]);
};

export const createBooks = (req, res) => {
  const { author, title, year } = req.body;
  if (!author || !title || !year) {
    return res.status(400).json({ message: "Invalid data" });
  }
  const newBook = { author, title, year };
  books.push(newBook);
  res.status(200).json(newBook);
};

export const updateBooks = (req, res) => {
  const id = req.params.id;
  if (id < 0 || id >= books.length) {
    return res.status(404).json({ message: "Books not found" });
  }
  const { author, title, year } = req.body;
  if (!author || !title || !year) {
    return res.status(400).json({ message: "Invalid data" });
  }
  books[id] = { author, title, year };
  res.status(201).json(books[id]);
};

export const deleteBooks = (req, res) => {
  const id = req.params.id;
  if (id < 0 || id >= books.length) {
    return res.status(404).json({ message: "Books not found" });
  }
  books.splice(id, 1);
  return res.status(200).json({message: "Delete successful"});
};
