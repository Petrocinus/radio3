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

var audio, context, analyser, src, array, logo;

logo = document.getElementById("logo").style;

audio = document.getElementById("audio");

window.onclick = function(){
    if(!context){
        preparation();
    }
    if(audio.paused){
        audio.play();
        loop();
    }else{
        audio.pause();
    }
};

function preparation(){
    context = new AudioContext();
    analyser = context.createAnalyser();
    src = context.createMediaElementSource(audio);
    src.connect(analyser);
    analyser.connect(context.destination);
    loop();
}

function loop(){
    if(!audio.paused){
        window.requestAnimationFrame(loop);
    }
    array = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(array);

    logo.minHeight = (array[40])+"px";
    logo.width =  (array[40])+"px";
}
