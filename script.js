// window.AudioContext = window.AudioContext || window.webkitAudioContext;
//
// var context = new AudioContext(),
//     audio = document.getElementById('audio');
//
// var createFilter = function (frequency) {
//     var filter = context.createBiquadFilter();
//
//     filter.type = 'peaking'; // тип фильтра
//     filter.frequency.value = frequency; // частота
//     filter.Q.value = 1; // Q-factor
//     filter.gain.value = 0;
//
//     return filter;
// };
//
// var createFilters = function () {
//     var frequencies = [60, 170, 310, 600, 1000, 3000, 6000, 12000, 14000, 16000],
//         filters = frequencies.map(createFilter);
//
//     filters.reduce(function (prev, curr) {
//         prev.connect(curr);
//         return curr;
//     });
//
//     return filters;
// };
//
// var equalize = function (audio) {
//     var source = context.createMediaElementSource(audio),
//         filters = createFilters();
// }