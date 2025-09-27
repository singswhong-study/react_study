import { useState } from "react";

function Update(props){

  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);

  return (
    <article>
      <h2>Update</h2>
      <form onSubmit={event => {
        event.preventDefault(); //리로드 막음
        props.onUpdate(title, body); 
      }}>
        <p>
          <input type="text" name="title" value={title} onChange={event => {
            //props.title 로 해도 값이 변하지 않음.
            // => state와 onChange 활용 
            setTitle(event.target.value)
          }}/>
        </p>
        <p>
          <textarea name="body" value={body} onChange={event => {
            setBody(event.target.value)
          }}/>
        </p>
        <p>
          <button type="submit" value="update">수정</button>
        </p>
      </form>
    </article>
  )
}

export default Update;