function App() {
  const name = 'StarGazers'
  return (
    <hgroup>
      <div class="ff"></div>
      <div className="bob"></div>
      <img src="images/group.svg" alt="StarGazers Group" />
      <h1>Meet the <i style={{ color: "red" }}>{name}</i></h1>
      <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
      <button className="outline" onClick={() => alert('hi there')}>Click Me</button>
    </hgroup >
  )
}
export default App
