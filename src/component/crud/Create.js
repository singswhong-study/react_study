function Create(props){

  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={event => {
        event.preventDefault(); //리로드 막음
        const title = event.target.title.value;
        // console.log(title)
        const body = event.target.title.body;
        //props를 준 대상의 onCreate함수 호출
        props.onCreate(title, body); 
      }}>
        <p>
          <input type="text" name="title" placeholder="타이틀 입력하슈" />
        </p>
        <p>
          <textarea name="body" placeholder="본문 입력하슈" />
        </p>
        <p>
          <button type="submit" value="create">생성</button>
        </p>
      </form>
    </article>
  )
}

export default Create;