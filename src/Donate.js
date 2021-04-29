

function Donate() {
  return (
    <div className="donate">
            <article>
        <h1>
          <span className="first">Save</span>
          <span className="second">The</span>
          <span className="third">Super Heroes</span>
          <span className="fourth">Please Donate what You can</span>
          
        </h1>
      </article>
      <div className="donateform">
      <form action="/">
            <label for="name" id="name">Name</label>
            <input type="text"></input>
            <label for="email" id="email">Email</label>
            <input type="email" id="email"></input>
            <label for="money" id="money">How Much Would you like to donate</label>
            <input type="number" min="1" step="any" id="money"></input>
            <input type="submit" value="submit"></input>
        </form>
        </div>
    </div>
  );
}

export default Donate;
