export const AddTodo = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const task = e.target[0].value;

    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: 1,
        title: task,
        completed: false,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h3>Add a To Do</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
