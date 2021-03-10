import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faHighlighter } from "@fortawesome/free-solid-svg-icons";

function initFontAwesome() {
  library.add(
    faCode,
    faHighlighter
    // more icons go here
  );
  library.add(fab, faTwitterSquare, faFacebook, faLinkedin, faGithub);
}
export default initFontAwesome;
