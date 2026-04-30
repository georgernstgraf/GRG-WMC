import * as view from './assets/view.js';

const app = (() => {
    function init() {
        console.log('start application');
        view.init( 'Beer`o`Mania', 'Daten erfassen', 'Daten anzeigen' );
    }

    // public
    return {
        start : init
    }
})();

window.addEventListener('DOMContentLoaded', app.start);