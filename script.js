/*
 * (c) 2024 Mykhailo Stetsiuk
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
// SPDX-License-Identifier: MPL-2.0

var placeholders = {
    "cyr_PL": "Впіш свуј текст тутај і начішьніј пшычіск поніжеј.",
    "lat_UK": "Vvedit́ Vaš tekst tut i natysnit́ knopku nyžče.",
    "cyr_FR": "Сэзисєз вотръ тэкстъ иси єт апюийєз сюр лъ буто̃н си-дэсус.",
    "cyr_DE": "Гебен Зі һір̌ Ірен Текст айн унд кликен Зі ауф ді Шалтфлэхе унтен.",
    "cyr_ES": "Интрод̆уҙка акѝ су тексто и пулсе ел бото̀н де авахо.",
    "lat_BE": "Uviadzicie svoj tekst tut i nacisnicie knopku nižej.",
    "cyr_IT": "Инсерите куи ил востро тесто е премете ил пулсанте соттостанте.",
    "cyr_NL": "Вур г̑ір йе текст ін ен дрюк оп де кноп г̑ірондер.",
    "lat_KO": "Yōkie theksūthūrūl ipryōkhako arè pōthūnūl nurūpnita."
};
var transformers = {
    "cyr_PL": cyrillizePolish,
    "lat_UK": romanizeUkrainian,
    "cyr_FR": cyrillizeFrench,
    "cyr_DE": cyrillizeGerman,
    "cyr_ES": cyrillizeSpanish,
    "lat_BE": romanizeBelarusian,
    "cyr_IT": cyrillizeItalian,
    "cyr_NL": cyrillizeDutch,
    "lat_KO": romanizeKorean
};
var exception_handlers = {
    "cyr_PL": x => x,
    "lat_UK": x => x,
    "cyr_FR": fix_french,
    "cyr_DE": x => x,
    "cyr_ES": fix_spanish,
    "lat_BE": x => x,
    "cyr_IT": x => x,
    "cyr_NL": x => x,
    "lat_KO": x => x
};

function onSetMode(radio) {
    currentMode = radio.id;
    document.getElementById('input').placeholder = placeholders[currentMode];
    optionsOpen = true;
    toggleOptions();
}

function perform() {
    let text = document.getElementById("input").value;
    text = exception_handlers[currentMode](text);
    let options = {};
    for (let row of document.getElementById("options-"+currentMode).rows) {
        let option = row.cells[1].firstChild;
        if (option.type == "range") options[option.name] = +option.value;
        else options[option.name] = option.checked;
    }
    if (currentMode == "cyr_IT") text = transformers[currentMode](text);
    else text = transformers[currentMode](text, options);
    document.getElementById('output').value = text;
}

var optionsOpen = false;
function toggleOptions() {
    for (let mode of Object.keys(transformers)) {
        document.getElementById("options-"+mode).style.display = "none";
    }
    document.getElementById("options-"+currentMode).style.display = optionsOpen? "none" : "block";
    optionsOpen = !optionsOpen;
}

var currentMode = "cyr_PL";
onSetMode({"id": currentMode});
