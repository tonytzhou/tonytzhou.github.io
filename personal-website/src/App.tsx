import { Message } from "./message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      {" "}
      {/* {
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      } */}
      {/* <Alert text={text} /> */}
      <Button onClick={() => console.log("you clciked me!")}>hi :3</Button>
    </div>
  );
}

export default App;
