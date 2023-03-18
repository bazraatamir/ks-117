function Blog({data,deleteHandler}) {
  console.log(data)
    return ( 
    <div>
        { data.map((el)=>(
        <div key={el.id}>
             <h1>{el.title}</h1>
            <p>{el.body}</p>
            <button onClick={()=>deleteHandler(el.id)}>hello</button>
        </div>
       
       ))}
    </div>);
}

export default Blog;