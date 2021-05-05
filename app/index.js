import * as myModule from "./my-custom-module";
// Imports from node_modules work as expected, e.g:
// import { fromEvent } from "rxjs";

const rust = import("./pkg");

rust
  .then((m) => {
    console.log("JS initialized, sending request to WASM");
    const response = m.handle_request();
    console.log(`Response from WASM received: ${response}`);
    myModule.sayHello();
  })
  .catch(console.error);
