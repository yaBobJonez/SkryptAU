/*
 * (c) 2024–2025 Mykhailo Stetsiuk
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
// SPDX-License-Identifier: MPL-2.0

import * as Transformers from "./transformers.js";
import {
    fix_french,
    fix_spanish
} from "./exceptions";

const placeholders = {
    "cyr_PL": "Впіш свуј текст тутај і начішьніј пшычіск поніжеј.",
    "lat_UK": "Wvedit́ Vaš tekst tut i natysnit́ knopku nyžče.",
    "cyr_FR": "Сэзисє вотръ тэкст иси єт апюийє сюр лъ буто̃н си-дэсу.",
    "cyr_DE": "Гебен Зі һір̌ Ірен Текст айн унд кликен Зі ауф ді Шалтфлэхье унтен.",
    "cyr_ES": "Интрод̆уҙка акѝ су тексто и пулсе ел бото̀н де авахо.",
    "lat_BE": "Uviadzicie svoj tekst tut i nacisnicie knopku nižej.",
    "cyr_IT": "Инсерите куи ил востро тесто е премете ил пулсанте соттостанте.",
    "cyr_NL": "Вур г̑ір йе текст ін ен дрюк оп де кноп г̑ірондер.",
    "lat_KO": "Yōkie theksūthūrūl ipryōkhako arè pōthūnūl nurūpnita.",
};
const transformers = {
    "cyr_PL": Transformers.cyrillizePolish,
    "lat_UK": Transformers.romanizeUkrainian,
    "cyr_FR": Transformers.cyrillizeFrench,
    "cyr_DE": Transformers.cyrillizeGerman,
    "cyr_ES": Transformers.cyrillizeSpanish,
    "lat_BE": Transformers.romanizeBelarusian,
    "cyr_IT": Transformers.cyrillizeItalian,
    "cyr_NL": Transformers.cyrillizeDutch,
    "lat_KO": Transformers.romanizeKorean,
};
const exception_handlers = {
    "cyr_PL": x => x,
    "lat_UK": x => x,
    "cyr_FR": fix_french,
    "cyr_DE": x => x,
    "cyr_ES": fix_spanish,
    "lat_BE": x => x,
    "cyr_IT": x => x,
    "cyr_NL": x => x,
    "lat_KO": x => x,
};

window.onSetMode = function (radio) {
    currentMode = radio.id;
    document.getElementById('input').placeholder = placeholders[currentMode];
    document.getElementById('hyphen-notice').style.display = ["cyr_DE"].includes(currentMode)
        ? "block" : "none";
    optionsOpen = true;
    toggleOptions();
}

window.perform = function () {
    let text = document.getElementById("input").value;
    if (currentMode == "cyr_FR")
        text = exception_handlers[currentMode](text, document.querySelector('#options-cyr_FR [name="phoneticize"]').checked);
    else
        text = exception_handlers[currentMode](text);
    let options = {};
    for (const option of document.querySelectorAll(`#options-${currentMode} input`)) {
        if (option.type == "range")
            options[option.name] = +option.value;
        else
            options[option.name] = option.checked;
    } text = transformers[currentMode](text, options);
    document.getElementById('output').value = text;
}

var optionsOpen = false;
window.toggleOptions = function () {
    for (let mode of Object.keys(transformers)) {
        document.getElementById("options-"+mode).style.display = "none";
    }
    document.getElementById("options-"+currentMode).style.display = optionsOpen? "none" : "block";
    optionsOpen = !optionsOpen;
}

var currentMode = "cyr_PL";
onSetMode({"id": currentMode});
