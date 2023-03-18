
import Blog from './component/blog';
import './App.css';
import { useEffect, useState } from 'react';



function App() {
  const [blog,setblog] = useState(null);
const deleteHandler = (id)=>{
 const newBlog = blog.filter((el)=>{
    return (id !== el.id)
  })
  setblog(newBlog)
}
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users/1/posts')
  .then((response) => response.json())
  .then((json) => {
    setblog(json) 
  });
})
  return (
    <div className="App">
     { blog && <Blog data={blog} deleteHandler = {deleteHandler}/>}
    </div>
  );
}


export default App;
