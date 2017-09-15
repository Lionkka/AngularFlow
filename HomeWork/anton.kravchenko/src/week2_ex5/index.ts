declare var DEV: boolean;
declare var VERSION: boolean;

import * as $ from "jquery";
import "bootstrap-sass";
import "./styles/styles.scss";
import "./styles/styles.scss";

import SubmitForm from "./src/submitForm";

if (DEV) {
    $("h1").text("DEV build: version " + VERSION);
} else {
    $("h1").text("Prod build");
}


const sf = new SubmitForm("#app");
sf.render();

