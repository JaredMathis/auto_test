import { element } from './../node_modules/m00/src/element.mjs';
import { defaults_set } from './../node_modules/m00/src/defaults/set.mjs';
import { element_input } from './../node_modules/m00/src/element/input.mjs';
export function main() {
    defaults_set(element.name, { width: '100%' });
    defaults_set(element_input.name, { width: '100%' });
    element_input(document.body);
}