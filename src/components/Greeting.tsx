import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Greeting() {
  return (
    <div>
      <FontAwesomeIcon icon={faEnvelope} />
      <h1>Greeting</h1>
    </div>
  );
}
