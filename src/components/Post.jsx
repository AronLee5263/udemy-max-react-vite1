const names = ["Maximiaan", "Manuel"];

function Post() {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <div>
      <p>{chosenName}</p>
      <p>React.js Demo Appp start</p>
    </div>
  );
}

export default Post;
