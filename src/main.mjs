import { element_input } from './../node_modules/m00/src/element/input.mjs';
import { element_with_text } from './../node_modules/m00/src/element/with/text.mjs';
export function main() {
    element_with_text(document.body, 'div', 'Hello');
    element_input(document.body);
}