/*
 * (c) 2024–2025 Mykhailo Stetsiuk
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
// SPDX-License-Identifier: MPL-2.0

import { hyphenateSync as hyphenate_de } from "hyphen/de";

export function romanizeUkrainian(word, {expandShch = true, separateW = true, alternativeG = false, assimilation = false}) {
    const isLetter = s => "аеєиіоуюябвгґджзїйклмнпрстфхцчшщь".includes(s);
    word = " " + word + "   ";
    let result = "";
    for (let i = 1; i < word.length-3; i++) {
        const cOrig = word[i];
        const cM1 = word[i - 1].toLowerCase();
        const c = cOrig.toLowerCase();
        const cP1 = word[i + 1].toLowerCase();
        let buff = "";
        switch (c) {
            case "а": buff += "a"; break;
            case "б": buff += "b"; break;
            case "в":
                if (!separateW) buff += "v";
                else if (!"бвгґджзклмнпрстфхцчшщ".includes(cM1) && "бвгґджзклмнпрстфхцчшщ".includes(cP1)
                    || "аеєиіоуюя".includes(cM1) && !isLetter(cP1)
                ) buff += "w";
                else buff += "v";
                break;
            case "г":
                buff += alternativeG ? "g" : "h"; break;
            case "ґ":
                buff += alternativeG ? "g̀" : "g"; break;
            case "д": buff += "d"; break;
            case "е": buff += "e"; break;
            case "є":
                if ("бвгґджзклмнпрстфхцчшщ".includes(cM1)) buff += "ie";
                else if(cM1 == "й") buff += "e";
                else buff += "je";
                break;
            case "ж":
                if (assimilation && "сц".includes(cP1)) buff += "z";
                else buff += "ž";
                break;
            case "з":
                if (assimilation && "шжч".includes(cP1)) buff += "ž";
                else buff += "z";
                break;
            case "и": buff += "y"; break;
            case "і": buff += "i"; break;
            case "ї": buff += "ji"; break;
            case "й": buff += "j"; break;
            case "к": buff += "k"; break;
            case "л": buff += "l"; break;
            case "м": buff += "m"; break;
            case "н": buff += "n"; break;
            case "о": buff += "o"; break;
            case "п": buff += "p"; break;
            case "р": buff += "r"; break;
            case "с":
                if (assimilation && cP1 == "ш") buff += "š";
                else buff += "s";
                break;
            case "т":
                if (assimilation && "чш".includes(cP1)) buff += "č";
                else buff += "t";
                break;
            case "у": buff += "u"; break;
            case "ф": buff += "f"; break;
            case "х": buff += "ch"; break;
            case "ц": buff += "c"; break;
            case "ч":
                if (assimilation && "сц".includes(cP1)) buff += "c";
                else buff += "č";
                break;
            case "ш":
                if (assimilation && "сц".includes(cP1)) buff += "s";
                else buff += "š";
                break;
            case "щ":
                buff += expandShch? "šč" : "ŝ"; break;
            case "ь":
                if (!(cM1 == "т" && cP1 == "с")) buff += "\u0301";
                break;
            case "ю":
                if ("бвгґджзклмнпрстфхцчшщ".includes(cM1)) buff += "iu";
                else if(cM1 == "й") buff += "u";
                else buff += "ju";
                break;
            case "я":
                if ("бвгґджзклмнпрстфхцчшщ".includes(cM1)) buff += "ia";
                else if(cM1 == "й") buff += "a";
                else buff += "ja";
                break;
            case "'":
            case "ʼ":
            case "’": break;
            default: buff += c;
        } if(cOrig.toUpperCase() == cOrig){
            if ("єїхюя".includes(c)){
                let nl = /\p{L}/u.test(word[i+1]) ? 1
                    : /\p{L}/u.test(word[i+2]) ? 2
                    : 3;
                if (word[i+nl].toUpperCase() != word[i+nl])
                    result += buff.charAt(0).toUpperCase() + buff.slice(1);
                else result += buff.toUpperCase();
            } else result += buff.toUpperCase();
        } else result += buff;
    } return result;
}

export function cyrillizePolish(word, {useShcha = true, cyrillicYot = false, ukrainianYe = false, ukrainianY = false, phonetic = true}) {
    word = " "+word+"   ";
    let result = "";
    for (let i = 1; i < word.length-3; i++) {
        const cOrig = word[i];
        const cM1 = word[i-1].toLowerCase();
        const c = cOrig.toLowerCase();
        const cP1 = word[i+1].toLowerCase();
        const cP2 = word[i+2].toLowerCase();
        const cP3 = word[i+3].toLowerCase();
        let buff = "";
        switch (c) {
            case "a": buff += "а"; break;
            case "ą":
                if (
                    "kg".includes(cP1) ||
                    "tdc".includes(cP1) ||
                    cP1 == "d" && "zż".includes(cP2) ||
                    cP1 == "c" && cP2 == "z"
                ) buff += "он";
                else if ("pb".includes(cP1)) buff += "ом";
                else if (
                    "śźć".includes(cP1) ||
                    (cP1 == "d" && cP2 == "ź") ||
                    ("szc".includes(cP1) && cP2 == "i") ||
                    (cP1 == "d" && cP2 == "z" && cP3 == "i")
                ) buff += "онь";
                else if ("lł".includes(cP1)) buff += "о";
                else buff += phonetic? "оў" : "он";
                break;
            case "b": buff += "б"; break;
            case "c":
                if (cP1 == "h") i += 1, buff += "х";
                else if ("z".includes(cP1) ||
                         (cP1 == "i" && "aąeęioóuy".includes(cP2))){
                    i += 1, buff += "ч";
                } else if (cP1 == "i") buff += "ч";
                else buff += "ц";
                break;
            case "ć": buff += "чь"; break;
            case "d": buff += "д"; break;
            case "e": buff += "е"; break;
            case "ę":
                if (
                    "fwszżh".includes(cP1) ||
                    "sr".includes(cP1) && cP2 == "z" ||
                    cP1 == "c" && cP2 == "h"
                ) buff += phonetic? "еў" : "ен";
                else if (
                    "kg".includes(cP1) ||
                    "tdc".includes(cP1) ||
                    cP1 == "d" && "zż".includes(cP2) ||
                    cP1 == "c" && cP2 == "z"
                ) buff += "ен";
                else if ("pb".includes(cP1)) buff += "ем";
                else if (
                    "śźć".includes(cP1) ||
                    cP1 == "d" && cP2 == "ź" ||
                    "szc".includes(cP1) && cP2 == "i" ||
                    cP1 == "d" && cP2 == "z" && cP3 == "i"
                ) buff += "ень";
                else buff += "е";
                break;
            case "f": buff += "ф"; break;
            case "g": buff += "г"; break;
            case "h": buff += "х"; break;
            case "i":
                if (cP1 == "a") i += 1, buff += "я";
                else if (cP1 == "e"){ i += 1; buff += ukrainianYe? "є" : "ѐ"; }
                else if (cP1 == "i"){ i += 1; buff += cyrillicYot? "йі" : "јі"; }
                else if (cP1 == "o") i += 1, buff += "ё";
                else if (cP1 == "u") i += 1, buff += "ю";
                else if (cP1 == "y"); //Do nothing
                else if ("ąęó".includes(cP1)) buff += "ь";
                else buff += "і";
                break;
            case "j":
                buff += cyrillicYot ? "й" : "ј"; break;
            case "k": buff += "к"; break;
            case "l": buff += "л"; break;
            case "ł": buff += "ў"; break;
            case "m": buff += "м"; break;
            case "n": buff += "н"; break;
            case "ń": buff += "нь"; break;
            case "o": buff += "о"; break;
            case "ó": buff += "у"; break;
            case "p": buff += "п"; break;
            case "q": buff += "к"; break;
            case "r":
                if (cP1 == "z"){
                    i += 1;
                    buff += "kpth".includes(cM1)? "ш" : "ж";
                } else buff += "р";
                break;
            case "s":
                if ("z".includes(cP1) ||
                    (cP1 == "i" && "aąeęioóuy".includes(cP2))){
                    i += 1, buff += "ш";
                } else if (cP1 == "i") buff += "ш";
                else buff += "с";
                break;
            case "ś": buff += "шь"; break;
            case "t": buff += "т"; break;
            case "u": buff += "у"; break;
            case "v": buff += "в"; break;
            case "w": buff += "в"; break;
            case "x": buff += "кс"; break;
            case "y": buff += ukrainianY? "и" : "ы"; break;
            case "z":
                if (cP1 == "i" && "aąeęioóuy".includes(cP2))
                    i += 1, buff += "ж";
                else if (cP1 == "i") buff += "ж";
                else buff += "з";
                break;
            case "ź": buff += "жь"; break;
            case "ż": buff += "ж"; break;
            default: buff += c;
        } if(cOrig.toUpperCase() == cOrig){
            if ("ąćęińśxź".includes(c)){
                let nl = /\p{L}/u.test(word[i+1]) ? 1
                    : /\p{L}/u.test(word[i+2]) ? 2
                    : 3;
                if (word[i+nl].toUpperCase() != word[i+nl])
                    result += buff.charAt(0).toUpperCase() + buff.slice(1);
                else result += buff.toUpperCase();
            } else result += buff.toUpperCase();
        } else result += buff;
    } if (useShcha) {
        result = result.replace(/ШЬ(ЧЬ|чь)/gu, "ЩЬ");
        result = result.replace(/шь(ЧЬ|чь)/gu, "щь");
        result = result.replace(/Ш[Чч]/gu, "Щ");
        result = result.replace(/ш[Чч]/gu, "щ");
    } return result;
}

export function cyrillizeFrench(word, {compatMode = true, tryToGuessE = true, yerSolidification = 0, removeFinalNasals = false, phoneticize = true}){
    word = " "+word+"   ";
    let result = "";
    const isLetter = s => "aàâæeéèêëiîïoôœuûùüÿbcçdfghjklmnpqrstvwxyz".includes(s);
    const isPrevNasal = () => /(а̃|е̃|ө\u0303|ӫ|о̃)$/iu.test(result);
    for (let i = 1; i < word.length-3; i++){
        const cOrig = word[i];
        const cM1 = word[i-1].toLowerCase();
        const c = cOrig.toLowerCase();
        const cP1 = word[i+1].toLowerCase();
        const cP2 = word[i+2].toLowerCase();
        const cP3 = word[i+3].toLowerCase();
        let buff = "";
        switch (c){
            case "a":
                if (cP1 == 'i' && "nm".includes(cP2)
                   && !"aàâæeéèêëiîïoôœuûùüyÿ".includes(cP3)){
                    if (isLetter(cP3) || removeFinalNasals) i += 1;
                    i += 1; buff += "е̃";
                } else if ("eë".includes(cP1) && cP2 == 'n' && !"aàâæeéèêëiîïoôœuûùüyÿ".includes(cP3)){
                    if (isLetter(cP3) || removeFinalNasals) i += 1;
                    i += 1; buff += "а̃";
                } else if (cP1 == 'o' && cP2 == 'n'){
                    i += 1;
                    if ("aàâæeéèêëiîïoôœuûùüyÿ".includes(cP3)
                       || cP3 == 'n') buff += "а";
                    else {
                        if (isLetter(cP3) || removeFinalNasals) i += 1;
                        buff += "а̃";
                    }
                } else if (cP1 == 'i' && (cP2 != "l" || cP3 != "l")
                          || cP1 == 'î'){
                    i += 1; buff += "э";
                } else if (cP1 == 'n'
                           && cP2 != 'm' && cP2 != 'n'
                           && !"aàâæeéèêëiîïoôœuûùüyÿ".includes(cP2)){
                    if (isLetter(cP2) || removeFinalNasals) i += 1;
                    buff += "а̃";
                } else if (cP1 == 'm'
                           && cP2 != 'n' && cP2 != 'm'
                           && "bcçdfghjklmnpqrstvwxyz".includes(cP2)){
                    i += 1; buff += "а̃";
                } else if (cP1 == 'e'){
                    i += 1;
                    buff += !isLetter(cP2)? "е" : "а";
                } else if (cP1 == 'u' || cP1 == 'w'){
                    i += 1; buff += "о";
                } else if (cP1 == 'y'){
                    if (!isLetter(cP2)) i += 1;
                    buff += "э";
                } else buff += "а";
                break;
            case "â":
            case "à":
                buff += "а"; break;
            case "æ": buff += "є"; break;
            case "b":
                if (cP1 == 'b') i += 1;
                buff += "б";
                break;
            case "c":
                if (cP1 == "q"); //Do nothing
                else if (cP1 == "h"){
                    i += 1; buff += "ш";
                } else if (cP1 == "c"){
                    i += 1;
                    buff += "æeéèêëiîïyÿ".includes(cP2)? "кс" : "к";
                } else if ("'’ʼæeéèêëiîïyÿ".includes(cP1)) buff += "с";
                else if (cP1 == 'œ' && "cdlmnt".includes(cP2)) buff += "с";
                else if (phoneticize && isPrevNasal()){
                    if (cP1 == "s" && !isLetter(cP2)) i += 1;
                    else if (!isLetter(cP1)); //Do nothing
                    else {
                        if (cP1 == 'k') i += 1;
                        buff += "к";
                    }
                } else {
                    if (cP1 == 'k') i += 1;
                    buff += "к";
                } break;
            case "ç": buff += "с"; break;
            case "d":
                if (phoneticize){
                    if (cP1 == "s" && !isLetter(cP2)){
                        i += 1; buff += "haàâæeéèêëiîïoôœuûùüyÿ".includes(cP3)? "т" : "";
                    } else if (!isLetter(cP1)){
                        buff += "haàâæeéèêëiîïoôœuûùüyÿ".includes(cP2)? "т" : "";
                    } else {
                        if (cP1 == 'd') i += 1;
                        buff += "д";
                    }
                } else {
                    if (cP1 == 'd') i += 1;
                    buff += "д";
                } break;
            case "ë":
            case "e":
                if (cP1 == 'a' && cP2 == 'u'
                   || cP1 == 'o' && cP2 == 'i'); //Do nothing
                else if (cP1 == 'i' && "nm".includes(cP2)
                         && !"aàâæeéèêëiîïoôœuûùüyÿ".includes(cP3)){
                    if (isLetter(cP3) || removeFinalNasals) i += 1;
                    i += 1; buff += "е̃";
                } else if (cP1 == 'i' || cP1 == 'î'){
                    if (cP2 != 'l' || cP3 != 'l' && isLetter(cP3)) i += 1;
                    buff += "э";
                } else if (cP1 == 'm' && "bp".includes(cP2)){
                    i += 1; buff += "а̃";
                } else if ((cP1 == 'n' || cP1 == 'm')
                           && cP2 != 'm' && cP2 != 'n'
                           && !"aàâæeéèêëiîïoôœuûùüyÿ".includes(cP2)){
                    if (isLetter(cP2) || removeFinalNasals) i += 1;
                    if ("éiy".includes(cM1)){
                        if (cP2 == 't' || (cP2 == 'c' && "æeéèêëiîïyÿ".includes(cP3))) buff += "а̃";
                        else buff += "е̃";
                    } else buff += "е̃";
                } else if (cP1 == 'u' && cP2 == 'n' && !"aàâæeéèêëiîïoôœuûùüyÿ".includes(cP3)){
                    if (isLetter(cP3) || removeFinalNasals) i += 1;
                    i += 1; buff += "ө\u0303";
                } else if (cP1 == 'u' || cP1 == 'û'){
                    i += 1; buff += "ө";
                } else if (cP1 == 'a' || cP1 == 'e'){
                    i += 1; buff += "и";
                } else if (cP1 == 'w'){
                    i += 1; buff += "ью";
                } else if (cP1 == 'y'){
                    i += 1;
                    buff += isLetter(cP2)? "эй" : "э";
                } else if (phoneticize && !isLetter(cP1)){
                    if ("bcçdfghjklmnpqrstvwxyz".includes(cP2)) buff += (yerSolidification > 0)? "е" : "ъ";
                } else if (tryToGuessE){
                    if ("bcçdfghjklmnpqrstvwxyz".includes(cP1) && "bcçdfghjklmnpqrsvwxyz".includes(cP2)
                        || "dhpstxz".includes(cP1) && cP2 == 't'
                        || cP1 == 'x'
                        || "bcfgjklmqv".includes(cP1) && !isLetter(cP2)
                        /* next case is for "et" */
                        || isLetter(cM1) && cP1 == 't' && !isLetter(cP2)) buff += "э";
                    else if ("dhpsxz".includes(cP1) && !isLetter(cP2)
                             || "bcçfgjklmnqrvwy".includes(cP1) && cP2 == 't'
                             || cM1 == 'i' && "dr".includes(cP1) && !isLetter(cP2) //TODO? don't guess -ier
                             /* next case is for "et" */
                             || !isLetter(cM1) && cP1 == 't' && !isLetter(cP2)) buff += "є";
                    else if (cP1 == 'r' && !isLetter(cP2)) buff += "е";
                    else if (yerSolidification < 0) buff += "ъ";
                    else if (yerSolidification > 0) buff += "е";
                    else buff += isLetter(cP1)? "е" : "ъ";
                } else buff += "е";
                break;
            case "é": buff += "є"; break;
            case "è":
            case "ê":
                buff += "э"; break;
            case "f":
                if (cP1 == "f") i += 1;
                buff += "ф";
                break;
            case "g":
                if (cP1 == 'e' && "aàâæeéèêiîoôœuûùy".includes(cP2)){
                    i += 1; buff += "ж";
                } else if (cP1 == 'n'){
                    i += 1;
                    if (cP2 == 'i' && "aàâæeéèêiîoôœuûùy".includes(cP3)) i += 1;
                    buff += "нь";
                } else if (cP1 == 'g'){
                    if ("eéèêëiîïyÿ".includes(cP2)) buff += "г";
                } else if (cP1 == 'u' && "eéèêîiy".includes(cP2) || cP1 == 'h'){
                    i += 1; buff += "г";
                } else if ("eéèêiîy".includes(cP1)) buff += "ж";
                else if (phoneticize && isPrevNasal()){
                    if (cP1 == "s" && !isLetter(cP2)) i += 1;
                    else if (!isLetter(cP1)); //Do nothing
                    else buff += "г";
                } else buff += "г";
                break;
            case "h": break; //Silent
            case "i":
                if (cP1 == 'l' && cP2 == 'l'){
                    i += 2;
                    if ("aàâæeéèêëiîïoôœuûùüyÿ".includes(cM1)) buff += "љ";
                    else if (!isLetter(cM1)) buff += "ил";
                    else buff += "иљ";
                } else if (cP1 == 'l' && cP2 == 'h'){
                    i += 2;
                    if (cM1 == 'u') buff += "и";
                    buff += "й";
                } else if (cP1 == 'l' && !isLetter(cP2)){
                    i += 1;
                    if ("aàâæeéèêëiîïoôœuûùüyÿ".includes(cM1)) buff += "љ";
                    else buff += "ил";
                } else if (cP1 == 'n' && cP2 == 'g') buff += "и";
                else if ((cP1 == 'n' || cP1 == 'm')
                           && cP2 != 'm' && cP2 != 'n'
                           && !"aàâæeéèêëiîïoôœuûùüyÿ".includes(cP2)){
                    if (isLetter(cP2) || removeFinalNasals) i += 1;
                    buff += "е̃";
                } else if (cP1 == 'e' && (!isLetter(cP2)
                           || cP2 == 'r' && !isLetter(cP3)) ) buff += "и";
                else if ("aàâæeéèêiîoôœuûùy".includes(cP1)) buff += "й";
                else buff += "и";
                break;
            case "î":
                if (cP1 == 'n' && !"aàâæeéèêëiîïoôœuûùüyÿ".includes(cP2)){
                    if (isLetter(cP2) || removeFinalNasals) i += 1;
                    buff += "е̃";
                } else buff += "и";
                break;
            case "ï":
                if ("aàâæeéèêëiîïoôœuûùüyÿ".includes(cM1) && "aàâæeéèêëiîïoôœuûùüyÿ".includes(cP1)
                   || !isLetter(cM1)) buff += "й";
                else buff += "и";
                break;
            case "j": buff += "ж"; break;
            case "k": buff += "к"; break;
            case "l":
                if (cP1 == "l" && cP2 == "i"){
                    i += 2; buff += "й";
                } else {
                    if (cP1 == "l") i += 1;
                    buff += "л";
                } break;
            case "m":
                if (cP1 == 'm') i += 1;
                buff += "м";
                break;
            case "n":
                if (cP1 == 'n') i += 1;
                buff += "н";
                break;
            case "ô":
            case "o":
                if ("ië".includes(cP1) && cP2 == 'n'){
                    if (isLetter(cP3) || removeFinalNasals) i += 1;
                    i += 1; buff += "уе̃";
                } else if ("êiîŷ".includes(cP1)){
                    i += 1; buff += "уа";
                } else if (cP1 == 'e'){
                    if (cP2 == 'u'); //Do nothing
                    else if (!isLetter(cM1)){
                        i += 1; buff += "ө";
                    } else buff += "о";
                } else if (cP1 == 'ë'){
                    i += 1; buff += "оэ";
                } else if (cP1 == 'y'){
                    i += 1;
                    buff += !isLetter(cM1)? "о" : "уа";
                    if ("aàâæeéèêëiîïoôœuûùüyÿ".includes(cP2)) buff += "й";
                } else if ((cP1 == 'm' || cP1 == 'n')
                           && cP2 != 'n' && cP2 != 'm'
                           && !"aàâæeéèêëiîïoôœuûùüyÿ".includes(cP2)){
                    if (isLetter(cP2) || removeFinalNasals) i += 1;
                    buff += "о̃";
                } else if (cP1 == 'u' || cP1 == 'û'){
                    i += 1; buff += "у";
                } else {
                    if (cP1 == 'w') i += 1;
                    buff += "о";
                } break;
            case "œ":
                if (cP1 == 's' && cP2 == 't') buff += "э";
                else if ("bcçdfghjklmnpqrstvwxyz".includes(cP1)) buff += "є";
                else {
                    if (cP1 == 'u') i += 1;
                    buff += "ө";
                } break;
            case "p":
                if (cP1 == 'h'){
                    i += 1; buff += "ф";
                } else if (phoneticize){
                    if (cP1 == "s" && !isLetter(cP2)){
                        i += 1; buff += "haàâæeéèêëiîïoôœuûùüyÿ".includes(cP3)? "п" : "";
                    } else if (!isLetter(cP1)){
                        buff += "haàâæeéèêëiîïoôœuûùüyÿ".includes(cP2)? "п" : "";
                    } else {
                        if (cP1 == 'p') i += 1;
                        buff += "п";
                    }
                } else {
                    if (cP1 == 'p') i += 1;
                    buff += "п";
                } break;
            case "q":
                if (cP1 == 'u' && "'’ʼaàâæeéèêëiîïoôœuûùüyÿ".includes(cP2)) i += 1;
                buff += "к";
                break;
            case "r":
                if (cP1 == 'r' && cP2 == 'h') i += 2;
                else if (cP1 == 'r' || cP1 == 'h') i += 1;
                buff += "р";
                break;
            case "s":
                if ("aàâæeéèêëiîïoôœuûùüyÿ".includes(cM1)
                   && "aàâæeéèêëiîïoôœuûùüyÿ".includes(cP1)) buff += "з";
                else if (cP1 == 'c' && cP2 == 'h'){
                    i += 2; buff += "ш";
                } else if (phoneticize && !isLetter(cP1))
                    buff += "haàâæeéèêëiîïoôœuûùüyÿ".includes(cP2)? "з" : "";
                else {
                    if (cP1 == 'c' && "eéèêëiîïyÿ".includes(cP2)
                       || cP1 == 'ç' || cP1 == 's') i += 1;
                    buff += 'с';
                } break;
            case "t":
                if (cP1 == 'i' && "aàâæeéèêiîoôœuûùy".includes(cP2)){
                    i += 1;
                    if (!isLetter(cM1) || cM1 == 's'
                        || cP2 == 'é' && !isLetter(cP3)) buff += "тй";
                    else if (cP2 == 'e' && !isLetter(cP3)){
                        buff += (cM1 != 'a')? "ти" : "си";
                    } else buff += "сй";
                } else if (phoneticize){
                    if (cP1 == "s" && !isLetter(cP2)){
                        i += 1; buff += "haàâæeéèêëiîïoôœuûùüyÿ".includes(cP3)? "т" : "";
                    } else if (!isLetter(cP1)){
                        buff += "haàâæeéèêëiîïoôœuûùüyÿ".includes(cP2)? "т" : "";
                    } else {
                        if (cP1 == 'h' || cP1 == 't') i += 1;
                        buff += "т";
                    }
                } else {
                    if (cP1 == 'h' || cP1 == 't') i += 1;
                    buff += "т";
                } break;
            case "û":
            case "ù":
            case "u":
                if ((cP1 == 'm' || cP1 == 'n')
                    && cP2 != 'n' && cP2 != 'm'
                    && !"aàâæeéèêëiîïoôœuûùüyÿ".includes(cP2)){
                    if (isLetter(cP2) || removeFinalNasals) i += 1;
                    buff += "ө\u0303";
                } else if (cP1 == 'y' && isLetter(cP2)) buff += "юи"
                else buff += "ю";
                break;
            case "ü": buff += "ю"; break;
            case "v":
            case "w": buff += "в"; break;
            case "x":
                if (cP1 == 'c' && "eéèêëiîïyÿ".includes(cP2)
                    || cP1 == 'h') buff += "к";
                else if (phoneticize && !isLetter(cP1))
                    buff += "haàâæeéèêëiîïoôœuûùüyÿ".includes(cP2)? "з" : "";
                else buff += "кс";
                break;
            case "y":
                if ((cP1 == 'm' || cP1 == 'n')
                    && cP2 != 'n' && cP2 != 'm'
                    && !"aàâæeéèêëiîïoôœuûùüyÿ".includes(cP2)){
                    if (isLetter(cP2) || removeFinalNasals) i += 1;
                    buff += "е̃";
                } else if ("aàâæeéèêiîoôœuûùy".includes(cP1)) buff += "й";
                else buff += "и";
                break;
            case "ÿ": buff += "и"; break;
            case "z":
                if (cP1 == "h"){
                    i += 1; buff += "ж";
                } else if (phoneticize && !isLetter(cP1))
                    buff += "haàâæeéèêëiîïoôœuûùüyÿ".includes(cP2)? "з" : "";
                else buff += "з";
                break;
            default: buff += c;
        } if(word[i-1] == 'H' || cOrig.toUpperCase() == cOrig){
            if ("cëegiôotûùux".includes(c)){
                let nl = /\p{L}/u.test(word[i+1]) ? 1
                    : /\p{L}/u.test(word[i+2]) ? 2
                    : 3;
                if (word[i+nl].toUpperCase() != word[i+nl])
                    result += buff.charAt(0).toUpperCase() + buff.slice(1);
                else result += buff.toUpperCase();
            } else result += buff.toUpperCase();
        } else result += buff;
    } if (compatMode) {
        result = result.replaceAll("ө\u0303", "ӫ");
        result = result.replaceAll("Ө\u0303", "Ӫ");
    } return result;
}

export function cyrillizeGerman(word, {softCh = false, markReducedR = true, useYaAndYe = false, khaWithDescender = false}) {
    const isLetter = s => "abcdefghijklmnopqrstuvwxyzäöüß".includes(s);
    // Split words by syllables but only before "st" or "sp"
    word = hyphenate_de(word).replace(/\u00AD(?!s[tp])/g, '');
    word = "  "+word+"    ";
    let result = "";
    for (let i = 2; i < word.length-4; i++) {
        const cOrig = word[i];
        const cM2 = word[i-2].toLowerCase();
        const cM1 = word[i-1].toLowerCase();
        const c = cOrig.toLowerCase();
        const cP1 = word[i+1].toLowerCase();
        const cP2 = word[i+2].toLowerCase();
        const cP3 = word[i+3].toLowerCase();
        const cP4 = word[i+4].toLowerCase();
        let buff = "";
        switch (c) {
            case "a":
                if (cP1 == "e"){
                    i += 1; buff += "э";
                } else if (cP1 == "i"){
                    i += 1; buff += "ай";
                } else if (cP1 == "a"){
                    i += 1; buff += "а̄";
                } else if (!markReducedR && cP1 == "r" && !"aäeioöuü".includes(cP2)){
                    i += 1; buff += "а̄";
                } else buff += "а";
                break;
            case "ä":
                if (cP1 == "u"){
                    i += 1; buff += "ой";
                } else buff += "э";
                break;
            case "b": buff += "б"; break;
            case "c":
                if (cP1 == "k"){
                    i += 1; buff += "к";
                } else if (cP1 == "h"){
                    i += 1;
                    buff += "х";
                    if (softCh && !"aou".includes(cM1)) buff += "ь";
                } else if ("äeiö".includes(cP1)) buff += "ц";
                else buff += "к";
                break;
            case "d":
                if (cP1 == "s" && cP2 == "c" && cP3 == "h"){
                    i += 3; buff += "дж";
                } else if (cP1 == "s" && cP2 == "h"){
                    i += 2; buff += "дж";
                } else if (cP1 == "t"){
                    i += 1; buff += "т";
                } else buff += "д";
                break;
            case "e":
                if (cP1 == "e"){
                    i += 1; buff += "е̄";
                } else if (cP1 == "i"){
                    i += 1; buff += "ай";
                } else if (cP1 == "u"){
                    i += 1; buff += "ой";
                } else buff += "е";
                break;
            case "f": buff += "ф"; break;
            case "g":
                if (cM1 == "i" && !isLetter(cP1)) buff += "х";
                else buff += "г";
                break;
            case "h":
                if (!"aäeouü".includes(cP1) && "aäeioöuü".includes(cM1)) buff += "\u0304";
                else buff += khaWithDescender? "ҳ" : "һ";
                break;
            case "i":
                if (cP1 == "e" && cP2 == "h"){
                    i += 2; buff += "і";
                } else if (cP1 == "e"){
                    i += 1; buff += "і";
                } else if (cP1 == "h"){
                    if (!"aäeioöuü".includes(cP2)) i += 1;
                    buff += "і";
                } else if (cM1 == "u") buff += "й";
                else buff += "и";
                break;
            case "j":
                if (cP1 == "o" && cP2 == "u"){
                    i += 2; buff += "жу";
                } else if (useYaAndYe && cP1 == "a"){
                    i += 1; buff += "я";
                } else if (useYaAndYe && cP1 == "e"){
                    i += 1; buff += "є";
                } else buff += "й";
                break;
            case "k": buff += "к"; break;
            case "l": buff += "л"; break;
            case "m": buff += "м"; break;
            case "n": buff += "н"; break;
            case "o":
                if (cP1 == "e"){
                    i += 1; buff += "ё";
                } else if (cP1 == "o"){
                    i += 1; buff += "о̄";
                } else if (cP1 == "i"){
                    i += 1; buff += "ой";
                } else buff += "о";
                break;
            case "ö":
                if (cP1 == "h" && !"aäeioöuü".includes(cP2)) i += 1;
                buff += "ё";
                break;
            case "p":
                if (cP1 == "h"){
                    i += 1; buff += "ф";
                } else buff += "п";
                break;
            case "q":
                buff += "к";
                if (cP1 == "u"){
                    i += 1; buff += "в";
                } break;
            case "r":
                if (cP1 == "h"){
                    i += 1; buff += "р";
                } else if ("aäeioöuü".includes(cP1)) buff += "р";
                else if (markReducedR) buff += "р̌";
                else buff += "а";
                break;
            case "s":
                if (cP1 == "c" && cP2 == "h"){
                    i += 2; buff += "ш";
                } else if (cP1 == "p" || cP1 == "t"){
                    if (!isLetter(cM1)) buff += "ш";
                    else buff += "с";
                } else if (cP1 == "s"){
                    i += 1; buff += "с";
                } else if ("aäeioöuü".includes(cP1)) buff += "з";
                else buff += "с";
                break;
            case "t":
                if (cP1 == "z" && cP2 == "s" && cP3 == "c" && cP4 == "h"){
                    i += 4; buff += "тш";
                } else if (cP1 == "s" && cP2 == "c" && cP3 == "h"){
                    i += 3; buff += "ч";
                } else if (cP1 == "i" && (
                              cP2 == "o" && cP3 == "n"
                           || cP2 == "ä" && cP3 == "r"
                           || cP2 == "a" && cP3 == "l"
                           || cP2 == "e" && cP3 == "l" && cP4 == "l"
                           )){
                    i += 1; buff += "цй";
                } else if (cP1 == "h"){
                    i += 1; buff += "т";
                } else if (cP1 == "z"); //Do nothing
                else buff += "т";
                break;
            case "u":
                if (cP1 == "e" && !"aäeioöuü".includes(cM1)){
                    i += 1; buff += "ю";
                } else buff += "у";
                break;
            case "ü":
                buff += "ю";
                break;
            case "v": buff += "ф"; break;
            case "w": buff += "в"; break;
            case "x": buff += "кс"; break;
            case "y":
                buff += "aäeioöuü".includes(cP1)? "й" : "ю";
                break;
            case "z":
                if (cP1 == "s" && cP2 == "c" && cP3 == "h"){
                    i += 3; buff += "ч";
                } else buff += "ц";
                break;
            case "ß":
                if ("aäeioöuü".includes(cM1) && !"aäeioöuü".includes(cM2)) buff += "\u0304";
                buff += "с";
                break;
            default: buff += c;
        } if(cOrig.toUpperCase() == cOrig){
            if ("aädejotx".includes(c)){
                let nl = /\p{L}/u.test(word[i+1]) ? 1
                    : /\p{L}/u.test(word[i+2]) ? 2
                    : 3;
                if (word[i+nl].toUpperCase() != word[i+nl])
                    result += buff.charAt(0).toUpperCase() + buff.slice(1);
                else result += buff.toUpperCase();
            } else result += buff.toUpperCase();
        } else result += buff;
    } if (softCh) {
        if (useYaAndYe) result = result.replaceAll("ьа", "я");
        result = result.replaceAll("ьо", "ё");
        if (useYaAndYe) result = result.replaceAll("ье", "є");
    } result = result.replaceAll('\u00AD', '');
    return result;
}

export function cyrillizeSpanish(word, {markH = true}) {
    const isLetter = s => "aábcdeéfghiíjklmnñoópqrstuúvwxyz".includes(s);
    word = " "+word+"   ";
    let result = "";
    for (let i = 1; i < word.length-3; i++) {
        const cOrig = word[i];
        const cM1 = word[i-1].toLowerCase();
        const c = cOrig.toLowerCase();
        const cP1 = word[i+1].toLowerCase();
        const cP2 = word[i+2].toLowerCase();
        const cP3 = word[i+3].toLowerCase();
        let buff = "";
        switch (c) {
            case "á": buff += "а̀"; break;
            case "a": buff += "а"; break;
            case "b":
            case "v":
                if (!isLetter(cM1) || cM1 == "m" || cM1 == "n") buff += "б";
                else buff += "в";
                break;
            case "c":
                if (cP1 == "h"){
                    i += 1; buff += "ч";
                } else if (cP1 == "e" || cP1 == "i") buff += "ҫ";
                else if ("bdgv".includes(cP1)) buff += "г";
                else buff += "к";
                break;
            case "d":
                if (!isLetter(cM1) || cM1 == "l" || cM1 == "n") buff += "д";
                else buff += "д̆";
                break;
            case "é": buff += "ѐ"; break;
            case "e": buff += "е"; break;
            case "f": buff += "ф"; break;
            case "g":
                if (cP1 == "u" && (cP2 == "e" || cP2 == "i")){
                    i += 1; buff += "г";
                } else if (cP1 == "e" || cP1 == "i") buff += "х";
                else buff += "г";
                break;
            case "h":
                if (cP1 == "i" && "aáeéoóuú".includes(cP2)){
                    i += 2; buff += "й";
                } else if (cP1 == "u" && "aáeéoóuú".includes(cP2)){
                    i += 1; buff += "у";
                } else buff += markH? "ҳ" : "";
                break;
            case "í": buff += "ѝ"; break;
            case "i":
                buff += "aáeéoóuú".includes(cP1)? "й" : "и";
                break;
            case "j":
                if (cP1 == "h"){
                    i += 1; buff += "дж";
                } else buff += "х";
                break;
            case "k": buff += "к"; break;
            case "l":
                if (cP1 == "l"){
                    i += 1; buff += "љ";
                } else buff += "л";
                break;
            case "m":
                buff += !isLetter(cP1)? "н" : "м";
                break;
            case "n": buff += "н"; break;
            case "ñ": buff += "њ"; break;
            case "ó": buff += "о̀"; break;
            case "o": buff += "о"; break;
            case "p":
                if (cP1 == "t") buff += "в";
                else buff += "п";
                break;
            case "q":
                if (cP1 == "u") i += 1;
                buff += "к";
                break;
            case "r": buff += "р"; break;
            case "s":
                if ("lmbdgv".includes(cP1)
                    || cP1 == "h" && cP2 == "u" && "aáeéoóuú".includes(cP3)) buff += "з";
                else buff += "с";
                break;
            case "t":
                if (cP1 == "z"){
                    i += 1; buff += "ц";
                } else buff += "т";
                break;
            case "ú": buff += "у̀"; break;
            case "ü":
            case "u": buff += "у"; break;
            case "w": buff += "в"; break;
            case "x":
                if (!isLetter(cM1)) buff += "с";
                else {
                    if (cP1 == "s") i += 1;
                    buff += "кс";
                } break;
            case "y":
                buff += "aáeéiíoóuú".includes(cP1)? "й" : "и";
                break;
            case "z":
                if ("aáeéiíoóuú".includes(cP1) || !isLetter(cP1)) buff += "ҫ";
                else buff += "ҙ";
                break;
            default: buff += c;
        } if(!markH && word[i-1] == 'H' || cOrig.toUpperCase() == cOrig){
            if ("jx".includes(c)){
                let nl = /\p{L}/u.test(word[i+1]) ? 1
                    : /\p{L}/u.test(word[i+2]) ? 2
                    : 3;
                if (word[i+nl].toUpperCase() != word[i+nl])
                    result += buff.charAt(0).toUpperCase() + buff.slice(1);
                else result += buff.toUpperCase();
            } else result += buff.toUpperCase();
        } else result += buff;
    } return result;
}

//TODO check ł; separateW = false?
export function romanizeBelarusian(word, {taraskCompat = true, separateW = true}) {
    word = " "+word+"   ";
    let result = "";
    for (let i = 1; i < word.length-3; i++) {
        const cOrig = word[i];
        const cM1 = word[i-1].toLowerCase();
        const c = cOrig.toLowerCase();
        const cP1 = word[i+1].toLowerCase();
        let buff = "";
        switch (c) {
            case "а": buff += "a"; break;
            case "б": buff += "b"; break;
            case "в": buff += "v"; break;
            case "г": buff += taraskCompat? "h" : "g"; break;
            case "ґ": buff += "g"; break;
            case "д": buff += "d"; break;
            case "е":
                if ("бвгґджзклмнпрстўфхцчш".includes(cM1)) buff += "ie";
                else if (cM1 == "й") buff += "e";
                else buff += "je";
                break;
            case "ё":
                if ("бвгґджзклмнпрстўфхцчш".includes(cM1)) buff += "io";
                else if (cM1 == "й") buff += "o";
                else buff += "jo";
                break;
            case "ж": buff += "ž"; break;
            case "з": buff += "z"; break;
            case "і": buff += "i"; break;
            case "й": buff += "j"; break;
            case "к": buff += "k"; break;
            case "л": buff += "l"; break;
            case "м": buff += "m"; break;
            case "н": buff += "n"; break;
            case "о": buff += "o"; break;
            case "п": buff += "p"; break;
            case "р": buff += "r"; break;
            case "с": buff += "s"; break;
            case "т": buff += "t"; break;
            case "у": buff += "u"; break;
            case "ў":
                if (separateW && "бвгґджзклмнпрстўфхцчш".includes(cP1)) buff += "ł";
                else buff += "ŭ";
                break;
            case "ф": buff += "f"; break;
            case "х": buff += "ch"; break;
            case "ц": buff += "c"; break;
            case "ч": buff += "č"; break;
            case "ш": buff += "š"; break;
            case "ы": buff += "y"; break;
            case "ь": buff += "\u0301"; break;
            case "э": buff += "e"; break;
            case "ю":
                if ("бвгґджзклмнпрстўфхцчш".includes(cM1)) buff += "iu";
                else if (cM1 == "й") buff += "u";
                else buff += "ju";
                break;
            case "я":
                if ("бвгґджзклмнпрстўфхцчш".includes(cM1)) buff += "ia";
                else if (cM1 == "й") buff += "a";
                else buff += "ja";
                break;
            case "'":
            case "ʼ":
            case "’": break;
            default: buff += c;
        } if(cOrig.toUpperCase() == cOrig){
            if ("еёхюя".includes(c)){
                let nl = /\p{L}/u.test(word[i+1]) ? 1
                    : /\p{L}/u.test(word[i+2]) ? 2
                    : 3;
                if (word[i+nl].toUpperCase() != word[i+nl])
                    result += buff.charAt(0).toUpperCase() + buff.slice(1);
                else result += buff.toUpperCase();
            } else result += buff.toUpperCase();
        } else result += buff;
    } return result;
}

export function cyrillizeItalian(word, {tryToGuessY = false, monographizeDzh = 2}) {
    const isLetter = s => "aàbcdeèéfghiìíîjklmnoòópqrstuùúvwxyz".includes(s);
    word = " "+word+"   ";
    let result = "";
    for (let i = 1; i < word.length-3; i++) {
        const cOrig = word[i];
        const cM1 = word[i-1].toLowerCase();
        const c = cOrig.toLowerCase();
        const cP1 = word[i+1].toLowerCase();
        const cP2 = word[i+2].toLowerCase();
        const cP3 = word[i+3].toLowerCase();
        let buff = "";
        switch (c) {
            case "à":
            case "a": buff += "а"; break;
            case "b": buff += "б"; break;
            case "c":
                if (cP1 == "c" && cP2 == "i" && "aàoòóuùú".includes(cP3)){
                    i += 2; buff += "тч";
                } else if (cP1 == "c" && "eèéiìíîy".includes(cP2)){
                    i += 1; buff += "тч";
                } else if (cP1 == "i" && "aàoòóuùú".includes(cP2)){
                    i += 1; buff += "ч";
                } else if ("eèéiìíîy".includes(cP1)
                           || "'’ʼ".includes(cP1) && "eèéiìíîy".includes(cP2)) buff += "ч";
                else buff += "к";
                break;
            case "d": buff += "д"; break;
            case "è": buff += "ѐ"; break;
            case "é": buff += "е̂"; break;
            case "e": buff += "е"; break;
            case "f": buff += "ф"; break;
            case "g":
                if (cP1 == "g" && cP2 == "i" && "aàoòóuùú".includes(cP3)){
                    i += 2; buff += ["ддж", "дӡ", "дҗ"][monographizeDzh];
                } else if (cP1 == "g" && "eèéiìíîy".includes(cP2)){
                    i += 1; buff += ["ддж", "дӡ", "дҗ"][monographizeDzh];
                } else if (cP1 == "i" && "aàoòóuùú".includes(cP2)){
                    i += 1; buff += ["дж", "ӡ", "җ"][monographizeDzh];
                } else if (cP1 == "l" && cP2 == "i"){
                    if ("aàeèéoòóuùú".includes(cM1)) buff += "л";
                    if ("aàeèéoòóuùú".includes(cP3)) i += 1;
                    i += 1; buff += "љ";
                } else if (cP1 == "n"){
                    if ("aàeèéoòóuùú".includes(cM1)) buff += "н";
                    i += 1; buff += "њ";
                } else if ("eèéiìíîy".includes(cP1)) buff += ["дж", "ӡ", "җ"][monographizeDzh];
                else buff += "г";
                break;
            case "h": break; //Silent
            case "ì": buff += "ѝ"; break;
            case "î":
            case "í": buff += "и"; break;
            case "i":
                if ( tryToGuessY && "aàeèéiìíîoòóuùú".includes(cP1)
                    && (isLetter(cP2) || "aàeèéiìíîoòóuùú".includes(cM1)) ) buff += "й";
                else buff += "и";
                break;
            case "j": buff += "ж"; break;
            case "k": buff += "к"; break;
            case "l": buff += "л"; break;
            case "m": buff += "м"; break;
            case "n": buff += "н"; break;
            case "ò": buff += "о̀"; break;
            case "ó": buff += "о̂"; break;
            case "o": buff += "о"; break;
            case "p": buff += "п"; break;
            case "q": buff += "к"; break;
            case "r": buff += "р"; break;
            case "s":
                if (cP1 == "c" && cP2 == "i" && "aàoòóuùú".includes(cP3)){
                    i += 2; buff += "ш"; //TODO long?
                } else if (cP1 == "c" && "eèéiìíîy".includes(cP2)){
                    i += 1; buff += "ш";
                } else if (cP1 == "s"){
                    i += 1; buff += "сс";
                } else if ("bdgjlmnrvwz".includes(cP1)) buff += "з";
                else if ("aàeèéiìíîoòóuùúy".includes(cM1) && "aàeèéiìíîoòóuùúy".includes(cP1)) buff += "з";
                else buff += "с";
                break;
            case "t": buff += "т"; break;
            case "u": buff += "у"; break;
            case "ù": buff += "у̀"; break;
            case "w":
            case "v": buff += "в"; break;
            case "x":
                if (cM1 == "e" && "aàeèéiìíîoòóuùúy") buff += "гз";
                else buff += "кс";
                break;
            case "y": buff += "й"; break;
            case "z": buff += "ц"; break;
            default: buff += c;
        } if(word[i-1] == 'H' || cOrig.toUpperCase() == cOrig){
            if ("cgsx".includes(c)){
                let nl = /\p{L}/u.test(word[i+1]) ? 1
                    : /\p{L}/u.test(word[i+2]) ? 2
                    : 3;
                if (word[i+nl].toUpperCase() != word[i+nl])
                    result += buff.charAt(0).toUpperCase() + buff.slice(1);
                else result += buff.toUpperCase();
            } else result += buff.toUpperCase();
        } else result += buff;
    } return result;
}

//TODO fix zachtjes, aangaven, ochtendzon; -en?
export function cyrillizeDutch(word, {useNeutralI = false, distrinctH = true}) {
    const isLetter = s => "abcdefghijklmnopqrstuvwxĳyz".includes(s);
    word = " "+word+"   ";
    word = word.replaceAll("ij", "ĳ");
    let result = "";
    for (let i = 1; i < word.length-3; i++) {
        const cOrig = word[i];
        const cM1 = word[i-1].toLowerCase();
        const c = cOrig.toLowerCase();
        const cP1 = word[i+1].toLowerCase();
        const cP2 = word[i+2].toLowerCase();
        const cP3 = word[i+3].toLowerCase();
        let buff = "";
        switch (c) {
            case "a":
                if (cP1 == "a" && "iĳy".includes(cP2)
                    || cP1 == "e" && "iĳy".includes(cP2)){
                    i += 2; buff += "а̄й";
                } else if (cP1 == "u" && cP2 == "w"){
                    i += 2; buff += "оў";
                } else if (cP1 == "u" && cP2 == "x"){
                    i += 2; buff += "о̄";
                } else if ("ae".includes(cP1)){
                    i += 1; buff += "а̄";
                } else if (cP1 == "i"){
                    i += 1; buff += "ай";
                } else if ("ĳy".includes(cP1)){
                    i += 1; buff += "а̄й";
                } else if (cP1 == "u"){
                    i += 1; buff += "оў";
                } else buff += "а";
                break;
            case "b":
                if (!isLetter(cP1) && isLetter(cM1)) buff += "п";
                else buff += "б";
                break;
            case "c":
                if (cP1 == "h"){
                    i += 1; buff += "х";
                } else if (cP1 == "k"){
                    i += 1; buff += "к";
                } else if ("eiy".includes(cP1)) buff += "с";
                else buff += "к";
                break;
            case "ç": buff += "с"; break;
            case "d":
                if (!isLetter(cP1) && isLetter(cM1)) buff += "т";
                else buff += "д";
                break;
            case "é":
            case "è":
            case "ê":
            case "e":
                if (cP1 == "e" && cP2 == "u" && cP3 == "w"){
                    i += 3; buff += "е̄ў";
                } else if (cP1 == "a" && cP2 == "u" && cP3 == "x"){
                    i += 3; buff += "о̄";
                } else if (cP1 == "a" && cP2 == "u"){
                    i += 2; buff += "о̄";
                } else if (cP1 == "e"){
                    i += 1; buff += "е̄";
                } else if ("iĳy".includes(cP1)){
                    i += 1; buff += "ей";
                } else if (cP1 == "u"){
                    i += 1; buff += "ё";
                } else buff += "е";
                break;
            case "f": buff += "ф"; break;
            case "g":
                if (cP1 == "c" && cP2 == "h"){
                    i += 2; buff += "х";
                } else if (cP1 == "h"){
                    i += 1;
                    if (!isLetter(cP2) && isLetter(cM1)) buff += "х";
                    else buff += "г";
                } else {
                    if (!isLetter(cP1) && isLetter(cM1)) buff += "х";
                    else buff += "г";
                } break;
            case "h": buff += distrinctH? "г̑" : "г"; break;
            case "i":
                if (cP1 == "e" && cP2 == "u" && cP3 == "w"){
                    i += 3; buff += "і̄ў";
                } else if (cP1 == "e"){
                    i += 1; buff += "і";
                } else buff += useNeutralI? "и" : "і";
                break;
            case "j": buff += "й"; break;
            case "k": buff += "к"; break;
            case "l": buff += "л"; break;
            case "m": buff += "м"; break;
            case "n":
                if (cP1 == "g") i += 1;
                buff += "н";
                break;
            case "o":
                if (cP1 == "e" && "iĳy".includes(cP2)){
                    i += 2; buff += "уй";
                } else if (cP1 == "o" && "iĳy".includes(cP2)){
                    i += 2; buff += "о̄й";
                } else if (cP1 == "u" && cP2 == "w"){
                    i += 2; buff += "оў";
                } else if (cP1 == "e"){
                    i += 1; buff += "у";
                } else if (cP1 == "i"){
                    i += 1; buff += "ой";
                } else if (cP1 == "o"){
                    i += 1; buff += "о̄";
                } else if (cP1 == "u"){
                    i += 1; buff += "оў";
                } else if ("ĳy".includes(cP1)){
                    i += 1; buff += "о̄й";
                } else buff += "о";
                break;
            case "ô": buff += "о̄"; break;
            case "p":
                if (cP1 == "h"){
                    i += 1; buff += "ф";
                } else buff += "п";
                break;
            case "q":
                if (cP1 == "u"){
                    i += 1; buff += "кв";
                } else buff += "к";
                break;
            case "r": buff += "р"; break;
            case "s":
                if (cP1 == "j" || cP1 == "h"){
                    i += 1; buff += "ш";
                } else if (cP1 == "z"){
                    i += 1; buff += "с";
                } else buff += "с";
                break;
            case "t":
                if (cP1 == "s" && cP2 == "j"){
                    i += 2; buff += "ч";
                } else if (cP1 == "j"){
                    i += 1; buff += "ч";
                } else {
                    if (cP1 == "h") i += 1;
                    buff += "т";
                } break;
            case "u":
                if ("iĳy".includes(cP1)){
                    i += 1; buff += "ёю";
                } else if (cP1 == "u"){
                    i += 1; buff += "ю";
                } else if (cP1 == "w"){
                    i += 1; buff += "юў";
                } else buff += "ю";
                break;
            case "v": buff += "в"; break;
            case "w": buff += "ў"; break;
            case "x": buff += "кс"; break;
            case "ĳ": buff += "ай"; break;
            case "y":
                if ("aeiouĳ".includes(cP1) || "aeiouĳ".includes(cM1))
                    buff += "й";
                else buff += useNeutralI? "и" : "і";
                break;
            case "z": buff += "з"; break;
            default: buff += c;
        } if(cOrig.toUpperCase() == cOrig){
            if ("aeioquxĳ".includes(c)){
                let nl = /\p{L}/u.test(word[i+1]) ? 1
                    : /\p{L}/u.test(word[i+2]) ? 2
                    : 3;
                if (word[i+nl].toUpperCase() != word[i+nl])
                    result += buff.charAt(0).toUpperCase() + buff.slice(1);
                else result += buff.toUpperCase();
            } else result += buff.toUpperCase();
        } else result += buff;
    } //TODO ш+ч = щ?
    return result;
}

//TODO fix 있었다, 그것이; capitalization
export function romanizeKorean(word, {silentIeung = true, macronE = false}) {
    word = "  "+word+"   ";
    word = word.normalize("NFD");
    let result = "";
    for (let i = 2; i < word.length-3; i++) {
        const cOrig = word[i];
        const c = cOrig.toLowerCase();
        const cP1 = word[i+1].toLowerCase();
        const cP2 = word[i+2].toLowerCase();
        let buff = "";
        switch (c) {
            case "ᄀ": buff += "k"; break;
            case "ᄁ": buff += "g"; break;
            case "ᄂ": buff += "n"; break;
            case "ᄃ": buff += "t"; break;
            case "ᄄ": buff += "d"; break;
            case "ᄅ": buff += "r"; break;
            case "ᄆ": buff += "m"; break;
            case "ᄇ": buff += "p"; break;
            case "ᄈ": buff += "b"; break;
            case "ᄉ": buff += "s"; break;
            case "ᄊ": buff += "z"; break;
            case "ᄋ": if(!silentIeung) buff += "'"; break;
            case "ᄌ": buff += "c"; break;
            case "ᄍ": buff += "j"; break;
            case "ᄎ": buff += "ch"; break;
            case "ᄏ": buff += "kh"; break;
            case "ᄐ": buff += "th"; break;
            case "ᄑ": buff += "ph"; break;
            case "ᄒ": buff += "h"; break;
            case "ᅡ": buff += "a"; break;
            case "ᅢ": buff += macronE? "ē" : "è"; break;
            case "ᅣ": buff += "ya"; break;
            case "ᅤ": buff += macronE? "yē" : "yè"; break;
            case "ᅥ": buff += "ō"; break;
            case "ᅦ": buff += "e"; break;
            case "ᅧ": buff += "yō"; break;
            case "ᅨ": buff += "ye"; break;
            case "ᅩ": buff += "o"; break;
            case "ᅪ": buff += "wa"; break;
            case "ᅫ": buff += macronE? "wē" : "wè"; break;
            case "ᅬ": buff += "we"; break;
            case "ᅭ": buff += "yo"; break;
            case "ᅮ": buff += "u"; break;
            case "ᅯ": buff += "wō"; break;
            case "ᅰ": buff += "we"; break;
            case "ᅱ": buff += "wi"; break;
            case "ᅲ": buff += "yu"; break;
            case "ᅳ": buff += "ū"; break;
            case "ᅴ": buff += "ūi"; break;
            case "ᅵ": buff += "i"; break;
            case "ᆨ": buff += "k"; break;
            case "ᆩ": buff += "k"; break;
            case "ᆪ":
                if (cP1 == "ᄋ" && "ᅣᅤᅧᅨᅭᅲᅵ".includes(cP2)) buff += "kj";
                else if (cP1 == "ᄋ") buff += "kz";
                else buff += "k";
                break;
            case "ᆫ": buff += "n"; break;
            case "ᆬ":
                buff += "n";
                if (cP1 == "ᄋ") buff += "c";
                break;
            case "ᆭ":
                buff += "n";
                if (cP1 == "ᄋ") buff += "h";
                break;
            case "ᆮ": buff += "t"; break;
            case "ᆯ": buff += "l"; break;
            case "ᆰ":
                if (cP1 == "ᄋ") buff += "lk";
                else if (cP1 == "ᄀ") buff += "l";
                else buff += "k";
                break;
            case "ᆱ":
                buff += "l";
                if (cP1 == "ᄋ") buff += "m";
                break;
            case "ᆲ":
                buff += "l";
                if (cP1 == "ᄋ") buff += "p";
                break;
            case "ᆳ":
                buff += "l";
                if (cP1 == "ᄋ") buff += "s";
                break;
            case "ᆴ":
                buff += "l";
                if (cP1 == "ᄋ") buff += "th";
                break;
            case "ᆵ":
                buff += "l";
                if (cP1 == "ᄋ") buff += "ph";
                break;
            case "ᆶ":
                buff += "l";
                if (cP1 == "ᄋ") buff += "h";
                break;
            case "ᆷ": buff += "m"; break;
            case "ᆸ": buff += "p"; break;
            case "ᆹ":
                if (cP1 == "ᄋ" && "ᅣᅤᅧᅨᅭᅲᅵ".includes(cP2)) buff += "pj";
                else if (cP1 == "ᄋ") buff += "pz";
                else buff += "p";
                break;
            case "ᆺ": buff += "t"; break;
            case "ᆻ": buff += "t"; break;
            case "ᆼ": buff += "ň"; break;
            case "ᆽ": buff += "t"; break;
            case "ᆾ": buff += "t"; break;
            case "ᆿ": buff += "k"; break;
            case "ᇀ": buff += "t"; break;
            case "ᇁ": buff += "p"; break;
            case "ᇂ": buff += "t"; break;
            case "。": buff += ". "; break;
            case "、": buff += ", "; break;
            case "『": buff += " “"; break;
            case "』": buff += "” "; break;
            case "·": buff += ", "; break;
            case "「": buff += " ‘"; break;
            case "」": buff += "’ "; break;
            case "《": buff += " «"; break;
            case "》": buff += "» "; break;
            default: buff += c;
        } result += buff;
    } for (let sep of ['。', '. ', '… ', '! ', '? ', '.', '…', '!', '?']) {
        result = result.split(sep)
            .map(s => s.charAt(0).toUpperCase() + s.slice(1))
            .join(sep);
    } return result;
}
