import Toasted from 'toastedjs'

import 'toastedjs/src/sass/toast.scss'

let toasted = new Toasted({ duration: 4000, theme: 'alive' });

export const handleToasted = (type, message) => {
    toasted[type](message);
}