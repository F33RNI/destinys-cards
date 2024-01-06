/*
 * Copyright (C) 2023-2024 Fern Lane, Destiny's cards app
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const CARDS_MAJOR = [
    require(`./assets/Cards/Data/Major/0.json`),
    require(`./assets/Cards/Data/Major/1.json`),
    require(`./assets/Cards/Data/Major/2.json`),
    require(`./assets/Cards/Data/Major/3.json`),
    require(`./assets/Cards/Data/Major/4.json`),
    require(`./assets/Cards/Data/Major/5.json`),
    require(`./assets/Cards/Data/Major/6.json`),
    require(`./assets/Cards/Data/Major/7.json`),
    require(`./assets/Cards/Data/Major/8.json`),
    require(`./assets/Cards/Data/Major/9.json`),
    require(`./assets/Cards/Data/Major/10.json`),
    require(`./assets/Cards/Data/Major/11.json`),
    require(`./assets/Cards/Data/Major/12.json`),
    require(`./assets/Cards/Data/Major/13.json`),
    require(`./assets/Cards/Data/Major/14.json`),
    require(`./assets/Cards/Data/Major/15.json`),
    require(`./assets/Cards/Data/Major/16.json`),
    require(`./assets/Cards/Data/Major/17.json`),
    require(`./assets/Cards/Data/Major/18.json`),
    require(`./assets/Cards/Data/Major/19.json`),
    require(`./assets/Cards/Data/Major/20.json`),
    require(`./assets/Cards/Data/Major/21.json`)
];

const CARDS_MINOR_CUPS = [
    require(`./assets/Cards/Data/Minor/Cups/0.json`),
    require(`./assets/Cards/Data/Minor/Cups/1.json`),
    require(`./assets/Cards/Data/Minor/Cups/2.json`),
    require(`./assets/Cards/Data/Minor/Cups/3.json`),
    require(`./assets/Cards/Data/Minor/Cups/4.json`),
    require(`./assets/Cards/Data/Minor/Cups/5.json`),
    require(`./assets/Cards/Data/Minor/Cups/6.json`),
    require(`./assets/Cards/Data/Minor/Cups/7.json`),
    require(`./assets/Cards/Data/Minor/Cups/8.json`),
    require(`./assets/Cards/Data/Minor/Cups/9.json`),
    require(`./assets/Cards/Data/Minor/Cups/10.json`),
    require(`./assets/Cards/Data/Minor/Cups/11.json`),
    require(`./assets/Cards/Data/Minor/Cups/12.json`),
    require(`./assets/Cards/Data/Minor/Cups/13.json`),
];

const CARDS_MINOR_PENTACLES = [
    require(`./assets/Cards/Data/Minor/Pentacles/0.json`),
    require(`./assets/Cards/Data/Minor/Pentacles/1.json`),
    require(`./assets/Cards/Data/Minor/Pentacles/2.json`),
    require(`./assets/Cards/Data/Minor/Pentacles/3.json`),
    require(`./assets/Cards/Data/Minor/Pentacles/4.json`),
    require(`./assets/Cards/Data/Minor/Pentacles/5.json`),
    require(`./assets/Cards/Data/Minor/Pentacles/6.json`),
    require(`./assets/Cards/Data/Minor/Pentacles/7.json`),
    require(`./assets/Cards/Data/Minor/Pentacles/8.json`),
    require(`./assets/Cards/Data/Minor/Pentacles/9.json`),
    require(`./assets/Cards/Data/Minor/Pentacles/10.json`),
    require(`./assets/Cards/Data/Minor/Pentacles/11.json`),
    require(`./assets/Cards/Data/Minor/Pentacles/12.json`),
    require(`./assets/Cards/Data/Minor/Pentacles/13.json`),
];

const CARDS_MINOR_SWORDS = [
    require(`./assets/Cards/Data/Minor/Swords/0.json`),
    require(`./assets/Cards/Data/Minor/Swords/1.json`),
    require(`./assets/Cards/Data/Minor/Swords/2.json`),
    require(`./assets/Cards/Data/Minor/Swords/3.json`),
    require(`./assets/Cards/Data/Minor/Swords/4.json`),
    require(`./assets/Cards/Data/Minor/Swords/5.json`),
    require(`./assets/Cards/Data/Minor/Swords/6.json`),
    require(`./assets/Cards/Data/Minor/Swords/7.json`),
    require(`./assets/Cards/Data/Minor/Swords/8.json`),
    require(`./assets/Cards/Data/Minor/Swords/9.json`),
    require(`./assets/Cards/Data/Minor/Swords/10.json`),
    require(`./assets/Cards/Data/Minor/Swords/11.json`),
    require(`./assets/Cards/Data/Minor/Swords/12.json`),
    require(`./assets/Cards/Data/Minor/Swords/13.json`),
];

const CARDS_MINOR_WANDS = [
    require(`./assets/Cards/Data/Minor/Wands/0.json`),
    require(`./assets/Cards/Data/Minor/Wands/1.json`),
    require(`./assets/Cards/Data/Minor/Wands/2.json`),
    require(`./assets/Cards/Data/Minor/Wands/3.json`),
    require(`./assets/Cards/Data/Minor/Wands/4.json`),
    require(`./assets/Cards/Data/Minor/Wands/5.json`),
    require(`./assets/Cards/Data/Minor/Wands/6.json`),
    require(`./assets/Cards/Data/Minor/Wands/7.json`),
    require(`./assets/Cards/Data/Minor/Wands/8.json`),
    require(`./assets/Cards/Data/Minor/Wands/9.json`),
    require(`./assets/Cards/Data/Minor/Wands/10.json`),
    require(`./assets/Cards/Data/Minor/Wands/11.json`),
    require(`./assets/Cards/Data/Minor/Wands/12.json`),
    require(`./assets/Cards/Data/Minor/Wands/13.json`),
];

const IMAGES = {
    "chetverka-kubkov.jpg": require("./assets/Cards/Images/chetverka-kubkov.jpg"),
    "chetverka-mechei.jpg": require("./assets/Cards/Images/chetverka-mechei.jpg"),
    "chetverka-pentaklei.jpg": require("./assets/Cards/Images/chetverka-pentaklei.jpg"),
    "chetverka-zhezlov.jpg": require("./assets/Cards/Images/chetverka-zhezlov.jpg"),
    "desyatka-kubkov.jpg": require("./assets/Cards/Images/desyatka-kubkov.jpg"),
    "desyatka-mechei.jpg": require("./assets/Cards/Images/desyatka-mechei.jpg"),
    "desyatka-pentaklei.jpg": require("./assets/Cards/Images/desyatka-pentaklei.jpg"),
    "desyatka-zhezlov.jpg": require("./assets/Cards/Images/desyatka-zhezlov.jpg"),
    "devyatka-kubkov.jpg": require("./assets/Cards/Images/devyatka-kubkov.jpg"),
    "devyatka-mechei.jpg": require("./assets/Cards/Images/devyatka-mechei.jpg"),
    "devyatka-pentaklei.jpg": require("./assets/Cards/Images/devyatka-pentaklei.jpg"),
    "devyatka-zhezlov.jpg": require("./assets/Cards/Images/devyatka-zhezlov.jpg"),
    "diyavol.jpg": require("./assets/Cards/Images/diyavol.jpg"),
    "dvoika-kubkov.jpg": require("./assets/Cards/Images/dvoika-kubkov.jpg"),
    "dvoika-mechei.jpg": require("./assets/Cards/Images/dvoika-mechei.jpg"),
    "dvoika-pentaklei.jpg": require("./assets/Cards/Images/dvoika-pentaklei.jpg"),
    "dvoika-zhezlov.jpg": require("./assets/Cards/Images/dvoika-zhezlov.jpg"),
    "imperator.jpg": require("./assets/Cards/Images/imperator.jpg"),
    "imperatrica.jpg": require("./assets/Cards/Images/imperatrica.jpg"),
    "kolesnica.jpg": require("./assets/Cards/Images/kolesnica.jpg"),
    "koleso-fortuny.jpg": require("./assets/Cards/Images/koleso-fortuny.jpg"),
    "korol-kubkov.jpg": require("./assets/Cards/Images/korol-kubkov.jpg"),
    "korol-mechei.jpg": require("./assets/Cards/Images/korol-mechei.jpg"),
    "korol-pentaklei.jpg": require("./assets/Cards/Images/korol-pentaklei.jpg"),
    "korol-zhezlov.jpg": require("./assets/Cards/Images/korol-zhezlov.jpg"),
    "koroleva-kubkov.jpg": require("./assets/Cards/Images/koroleva-kubkov.jpg"),
    "koroleva-mechei.jpg": require("./assets/Cards/Images/koroleva-mechei.jpg"),
    "koroleva-pentaklei.jpg": require("./assets/Cards/Images/koroleva-pentaklei.jpg"),
    "koroleva-zhezlov.jpg": require("./assets/Cards/Images/koroleva-zhezlov.jpg"),
    "luna.jpg": require("./assets/Cards/Images/luna.jpg"),
    "mag.jpg": require("./assets/Cards/Images/mag.jpg"),
    "mir.jpg": require("./assets/Cards/Images/mir.jpg"),
    "otshelnik.jpg": require("./assets/Cards/Images/otshelnik.jpg"),
    "padayushaya-bashnya.jpg": require("./assets/Cards/Images/padayushaya-bashnya.jpg"),
    "pazh-kubkov.jpg": require("./assets/Cards/Images/pazh-kubkov.jpg"),
    "pazh-mechei.jpg": require("./assets/Cards/Images/pazh-mechei.jpg"),
    "pazh-pentaklei.jpg": require("./assets/Cards/Images/pazh-pentaklei.jpg"),
    "pazh-zhezlov.jpg": require("./assets/Cards/Images/pazh-zhezlov.jpg"),
    "poveshennyi.jpg": require("./assets/Cards/Images/poveshennyi.jpg"),
    "pyaterka-kubkov.jpg": require("./assets/Cards/Images/pyaterka-kubkov.jpg"),
    "pyaterka-mechei.jpg": require("./assets/Cards/Images/pyaterka-mechei.jpg"),
    "pyaterka-pentaklei.jpg": require("./assets/Cards/Images/pyaterka-pentaklei.jpg"),
    "pyaterka-zhezlov.jpg": require("./assets/Cards/Images/pyaterka-zhezlov.jpg"),
    "rycar-kubkov.jpg": require("./assets/Cards/Images/rycar-kubkov.jpg"),
    "rycar-mechei.jpg": require("./assets/Cards/Images/rycar-mechei.jpg"),
    "rycar-pentaklei.jpg": require("./assets/Cards/Images/rycar-pentaklei.jpg"),
    "rycar-zhezlov.jpg": require("./assets/Cards/Images/rycar-zhezlov.jpg"),
    "semerka-kubkov.jpg": require("./assets/Cards/Images/semerka-kubkov.jpg"),
    "semerka-mechei.jpg": require("./assets/Cards/Images/semerka-mechei.jpg"),
    "semerka-pentaklei.jpg": require("./assets/Cards/Images/semerka-pentaklei.jpg"),
    "semerka-zhezlov.jpg": require("./assets/Cards/Images/semerka-zhezlov.jpg"),
    "shesterka-kubkov.jpg": require("./assets/Cards/Images/shesterka-kubkov.jpg"),
    "shesterka-mechei.jpg": require("./assets/Cards/Images/shesterka-mechei.jpg"),
    "shesterka-pentaklei.jpg": require("./assets/Cards/Images/shesterka-pentaklei.jpg"),
    "shesterka-zhezlov.jpg": require("./assets/Cards/Images/shesterka-zhezlov.jpg"),
    "shut.jpg": require("./assets/Cards/Images/shut.jpg"),
    "sila.jpg": require("./assets/Cards/Images/sila.jpg"),
    "smert.jpg": require("./assets/Cards/Images/smert.jpg"),
    "solnce.jpg": require("./assets/Cards/Images/solnce.jpg"),
    "spravedlivost.jpg": require("./assets/Cards/Images/spravedlivost.jpg"),
    "strashnyi-sud.jpg": require("./assets/Cards/Images/strashnyi-sud.jpg"),
    "troika-kubkov.jpg": require("./assets/Cards/Images/troika-kubkov.jpg"),
    "troika-mechei.jpg": require("./assets/Cards/Images/troika-mechei.jpg"),
    "troika-pentaklei.jpg": require("./assets/Cards/Images/troika-pentaklei.jpg"),
    "troika-zhezlov.jpg": require("./assets/Cards/Images/troika-zhezlov.jpg"),
    "tuz-kubkov.jpg": require("./assets/Cards/Images/tuz-kubkov.jpg"),
    "tuz-mechei.jpg": require("./assets/Cards/Images/tuz-mechei.jpg"),
    "tuz-zhezlov.jpg": require("./assets/Cards/Images/tuz-zhezlov.jpg"),
    "umerennost.jpg": require("./assets/Cards/Images/umerennost.jpg"),
    "verhovaya-zhrica.jpg": require("./assets/Cards/Images/verhovaya-zhrica.jpg"),
    "verhovnyi-zhrec.jpg": require("./assets/Cards/Images/verhovnyi-zhrec.jpg"),
    "vlublennye.jpg": require("./assets/Cards/Images/vlublennye.jpg"),
    "vosmerka-kubkov.jpg": require("./assets/Cards/Images/vosmerka-kubkov.jpg"),
    "vosmerka-mechei.jpg": require("./assets/Cards/Images/vosmerka-mechei.jpg"),
    "vosmerka-pentaklei.jpg": require("./assets/Cards/Images/vosmerka-pentaklei.jpg"),
    "vosmerka-zhezlov.jpg": require("./assets/Cards/Images/vosmerka-zhezlov.jpg"),
    "zvezda.jpg": require("./assets/Cards/Images/zvezda.jpg")
}

const IMAGE_BACK = require("./assets/Cards/Images/card-back.jpg");

const LAYOUTS = require("./assets/Cards/Layouts.json");

const ARCANA_MAJOR = 0;
const ARCANA_WANDS = 1;
const ARCANA_CUPS = 2;
const ARCANA_SWORDS = 3;
const ARCANA_PENTACLES = 4;

export {
    CARDS_MAJOR,
    CARDS_MINOR_CUPS,
    CARDS_MINOR_PENTACLES,
    CARDS_MINOR_SWORDS,
    CARDS_MINOR_WANDS,
    IMAGES,
    IMAGE_BACK,
    LAYOUTS,
    ARCANA_MAJOR,
    ARCANA_WANDS,
    ARCANA_CUPS,
    ARCANA_SWORDS,
    ARCANA_PENTACLES
};