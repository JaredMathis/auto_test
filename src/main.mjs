import { element } from './../node_modules/m00/src/element.mjs';
import { defaults_set } from './../node_modules/m00/src/defaults/set.mjs';
import { element_input } from './../node_modules/m00/src/element/input.mjs';
export function main() {
    defaults_set(element.name, { fontSize: '5vh' });
    defaults_set(element_input.name, { width: '100%' });
    let input = element_input(document.body);
}