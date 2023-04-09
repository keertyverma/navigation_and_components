import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

export default function ButtonPage() {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div>
      <div>
        <Button className="mb-5" onClick={handleClick} primary>
          <GoBell />
          Click Me
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          <GoCloudDownload />
          Buy Now
        </Button>
      </div>
      <div>
        <Button success>See Deal</Button>
      </div>
      <div>
        <Button warning success rounded>
          <GoDatabase />
          Hide Ads
        </Button>
      </div>
      <div>
        <Button danger>Something</Button>
      </div>
    </div>
  );
}
