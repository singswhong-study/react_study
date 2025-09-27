function Header(props){
  //Header tag에 입력한 attribute 들이 props객체에 들어오게됨. {props.xxx}로 사용
  console.log(props)
  return (
    <header>
      <h1>
        <a href="/" onClick={(event) => {
            event.preventDefault(); //기본동작 방지
            props.onChangeMode();   //props 로 전달한 함수 호출
        }}>
            {props.title}
        </a>
      </h1>
    </header>
  )
}

export default Header;
