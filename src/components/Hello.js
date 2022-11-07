function Hello({ students, color, fontSize }) {
  console.log('students >> ', students);
  console.log('color >> ', color);
  console.log('fontSize >> ', fontSize);

  return (
    <>
      <div style={{color, fontSize, fontWeight: 900}}>안녕하세요 {students}</div>
    </>
  );
}

export default Hello;
