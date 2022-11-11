function CreateBook() {
  return (
    <form>
      <input type="text" className="book" placeholder="Book" />
      <input className="author" type="text" placeholder="Author" />
      <input className="add-btn" type="submit" value="Add Book" />
    </form>
  );
}

export default CreateBook;
