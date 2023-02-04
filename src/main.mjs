import { element_style_default } from './../node_modules/m00/src/element/style/default.mjs';
import { defaults_set } from './../node_modules/m00/src/defaults/set.mjs';
import { element_style_default } from 'm00/src/element/style/default.mjs';
import { element_input } from './../node_modules/m00/src/element/input.mjs';
import { element_with_text } from './../node_modules/m00/src/element/with/text.mjs';
export function main() {
    defaults_set('input', { width: '50%' });
    element_with_text(document.body, 'div', 'Hello');
    element_input(document.body);
}