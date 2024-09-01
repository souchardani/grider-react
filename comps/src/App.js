import Button from "./Button";
import { GoBell } from "react-icons/go";
import { GoDatabase } from "react-icons/go";
import { GoCloud } from "react-icons/go";

function App() {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div>
      <div>
        <Button
          onClick={handleClick}
          className="mb-1"
          secondary
          rounded
          outline
        >
          <GoBell />
          Click me
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloud />
          Primary
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase /> Buy now
        </Button>
      </div>
      <div>
        <Button secondary outline>
          See deal
        </Button>
      </div>
      <div>
        <Button primary rounded>
          See deal
        </Button>
      </div>
    </div>
  );
}

export default App;
