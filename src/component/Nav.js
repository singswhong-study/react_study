function Nav(props){
  console.log(props)

  const list = [
    // <li><a href="/read/1">html</a></li>,
    // <li><a href="/read/2">css</a></li>,
    // <li><a href="/read/3">js</a></li>
  ]

  for(let i = 0; i < props.topics.length; i++){
    let t = props.topics[i]
    //반복문 안에는 vue 처럼 고유한key attribute가 필요함.
    //변경된 tag를 추적하기 위해서. 
    list.push(
      <li key={t.id}> 
        <a href={'/read/'+ t.id}>{t.title}</a>
      </li>
    )
  }

  //위처럼 하는것은 일반적은 for문.
  //react에서는 map을 권장

  return (
    <nav>
      <ol>        
        {/* {list} */}

        {props.topics.map((t) => (
          <li key={t.id}>
            <a href={"/read/" + t.id} onClick={event => {
                event.preventDefault();
                props.clickFunc(t.id);
            }}>{t.title}</a>
          </li>
        ))}

      </ol>
    </nav>
  )
}

export default Nav;