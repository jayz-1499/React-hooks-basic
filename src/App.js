import "./App.css";
// import ColorBox from "./components";
import { useState, useEffect } from "react";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import queryString from "query-string";
import PostFilterForm from "./components/PostFilterForm";
import Clock from "./components/Clock";
import BetterClock from "./components/BetterClock";
import MagicBox from "./components/magicBox";
import Hero from "./components/Hero";
//import TodoList from "./components/TodoList";
//import TodoForm from "./components/TodoForm";

function App() {
  // const [todoList, setTodoList] = useState([
  //   { id: 1, title: "I love Easy Frontend! 😍" },
  //   { id: 2, title: "We love Easy Frontend! 🥰" },
  //   { id: 3, title: "They love Easy Frontend! 🚀" },
  // ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });
  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });
        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("faile to fetch post list:", error.message);
      }
    }
    fetchPostList();
  }, [filters]);

  function handlePageChange(newPage) {
    console.log("New Page:", newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }
  // function handleTodoClick(todo) {
  //   const index = todoList.findIndex((x) => x.id === todo.id);
  //   if (index < 0) return;
  //   const newTodoList = [...todoList];
  //   newTodoList.splice(index, 1);
  //   setTodoList(newTodoList);
  // }
  // function handleToDoFormSubmit(formValues) {
  //   console.log("Form submit: ", formValues);
  //   const newTodo = {
  //     id: todoList.length + 1,
  //     ...formValues,
  //   };
  //   const newTodoForm = [...todoList];
  //   newTodoForm.push(newTodo);
  //   setTodoList(newTodoForm);
  // }
  function handleFilterChange(newFilter) {
    console.log("New filters", newFilter);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilter.searchTerm,
    });
  }
  const [showClock, setShowClock] = useState(true);
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>React hooks - Post List</h1>
      {/* <TodoForm onSubmit={handleToDoFormSubmit} /> */}
      {/* <TodoList todos={todoList} onTodoClick={handleTodoClick}></TodoList> */}
      {/* <PostFilterForm onSubmit={handleFilterChange}></PostFilterForm>
      <PostList posts={postList} />
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      ></Pagination> */}
      {/* {showClock && <Clock></Clock>}
      <BetterClock></BetterClock>
      <button onClick={() => setShowClock(false)}>Hide clock</button> */}
      {/* <MagicBox></MagicBox> */}
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <div></div>
      <Hero name="Jayz"></Hero>
    </div>
    //lua nhau
  );
}

export default App;
