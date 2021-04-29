import Api from './Api';

function App() {
  return (
    <div className="App">
      <article>
        <h1>
          <span className="first">Save</span>
          <span className="second">The</span>
          <span className="third">Super Heroes</span>
          <span className="fourth">A Few Stories we are all familiar with...</span>
        </h1>
        
      </article>
      <a href="donate" class="float-button">
        <div className="float-button-text">
          Donate
        </div>
        
      </a>
      <Api />
      
    </div>
  );
}

export default App;
