mod utils;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn handle_request() -> String {
    utils::get_response()
}
