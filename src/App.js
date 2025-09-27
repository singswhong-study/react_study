// import logo from './logo.svg';
import './App.css';
import Article from './component/Article';
import Header from './component/Header';
import Nav from './component/Nav';
import { useState, useEffect, use } from 'react';

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

function App() { 
/*
  //#1. 최초 이걸로 테스트
  const topics = [
    {id : 1, title : 'html', body: 'html is..'},
    {id : 2, title : 'css', body: 'css is..'},
    {id : 3, title : 'javascript', body: 'js is..'},
  ]
  //#2. topics를 유동적으로 변경하기 위해 useState 사용
*/
  
  /* state
  const _mode = useState('WelCome');
  console.log(_mode); 
    //0,1 인덱스의 내용이 존재함
    // ['WelCome', ƒ]
    // 0: "WelCome"
    // 1: ƒ ()
    // length : 2
  const mode = _mode[0] //해당 state의 밸류
  const setMode = _mode[1] //해당 state의 밸류를 변경하는 함수
  */

  let content;
  let contextControl = null; //read 일때만 수정모드가 나오게 하는 구분

  //아래처럼 사용하면 위의 문법과 같음. 
  const [mode, setMode] = useState('Header');
  const [id, setId] = useState(null);
  const [topics, setTopics] = useState([
    {id : 1, title : 'html', body: 'html is..'},
    {id : 2, title : 'css', body: 'css is..'},
    {id : 3, title : 'javascript', body: 'js is..'},
  ])
  // XXXX const [nextId, setNextId] = useState(id+1); => 이런식으로 상태를 결합해서 사용하면 문제생김
  const nextId = topics.length + 1;
  
  if(mode === 'Header'){
    content = <Article title="헤더 클릭했음" body="아티클"></Article>
  } else if(mode === 'Nav') {
    // content = <Article title="네비 클릭했음" body="아티클"></Article>
    // id state 를 활용
    let title, body;
    for(let i = 0; i < topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
        break;
      }
    }
    content = <Article title={title} body={body}></Article>;
    contextControl = <li><a href={'/update/'+id} onClick={event => {
      event.preventDefault();
      setMode('Update');
    }}>Update</a></li>;
    
  } else if(mode === 'Create'){
    content = <Create onCreate={(_title, _body) => {
      const _topic = {id: nextId, title: _title, body: _body}
      //원본데이터를 복사해서 변경해야 컴포넌트가 리로드된다.
      //원본객체를 수정해도 메모리주소는 그대로이기 때문에 같은걸로 취급.
      // const newTopics = [...topics]
      // newTopics.push(_topic)
      // setTopics(newTopics)

      //위 소스를 축약한것
      setTopics([...topics, _topic]);
      setMode('Nav');
      setId(nextId);
    }}></Create>
  } else {
    //UPDATE
    // let title, body;
    // for(let i = 0; i < topics.length; i++){
    //   if(topics[i].id === id){
    //     title = topics[i].title;
    //     body = topics[i].body;
    //   }
    // }
    // console.log(title, body)
    content = <Update title={topics[id-1].title} body={topics[id-1].body} onUpdate={(_title, _body)=>{
      console.log(_title, _body)
      const newTopics = [...topics];
      const _topic = {id: id, title: _title, body: _body}
      for(let i = 0; i < newTopics.length; i++){
        if(newTopics[i].id === id){
          newTopics[i] = _topic;
          break;
        }
      }
      setTopics(newTopics);
      setMode('Nav');
    }}></Update>
  }

  const customFunction = () => {
    // alert('Header2');
    setMode('Header')
  }

  //변화 감지
  useEffect(() => {
    console.log('현재 ID', id);
  }, [id]);
  
  return (
    <div className="App">
{/*       
      <header>
        <h1><a href="/">WEB</a></h1>
      </header> 
*/}
      {/* <Header title="REACT" onChangeMode={() => { alert('Header')}}></Header> */}
      <Header title="REACT" onChangeMode={customFunction}></Header>
{/*       
      <nav>
        <ol>
          <li><a href="/read/1">html</a></li>
          <li><a href="/read/2">css</a></li>
          <li><a href="/read/3">js</a></li>
        </ol>
      </nav>
*/}
      <Nav topics={topics} clickFunc={(id)=>{ alert(id); setMode('Nav'); setId(id)}}></Nav>
{/*       
      <article>
        <h2>welcome</h2>
        Hello, WEB
      </article>
*/}
      {/* <Article title="Welcome" body="아티클 첫번째"></Article> */}
      {/* <Article title="Hi" body="아티클 두번째"></Article> */}

      {content}

      <ul>
        <li>
          <a href="/create" onClick={event => {
            event.preventDefault();
            setMode('Create');
          }}>Create</a>
        </li>

        {contextControl}
      </ul>
    </div> 
  );
}

export default App;
