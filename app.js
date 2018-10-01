var App = () => (
    <div>
      <h2>My Grocery List</h2>
      <GroceryList items = {['Kale', 'Bees']} />
    </div>
  );

var GroceryList = (props) => (
    <ul>
        {props.items.map(name => <GroceryListItem name = {item} /> )}
    </ul>
);
var GroceryListItem = (props) => (<li>{props.name}</li>); 


ReactDOM.render(<App />, document.getElementById("app"));
