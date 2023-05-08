var data = 1;
document.getElementById("counter").innerText = data;
meh(0);

function meh(val){
    if (data + val > 5 || data + val < 1)
        return;
    data += val;
    document.getElementById("inc").setAttribute('state', data == 5 ? 'disabled' : '');
    document.getElementById("dec").setAttribute('state', data == 1 ? 'disabled' : '');
    document.getElementById("counter").innerText = data;
}

function increment() {
    meh(1);
}
function decrement() {
    meh(-1);
}

function startAnimation(){
    document.getElementById("leftKnob").classList.add("knobLAnimated");
    document.getElementById("rightKnob").classList.add("knobRAnimated");
    document.getElementById("leftKnobShadow").classList.add("shadow1Animated");
    document.getElementById("rightKnobShadow").classList.add("shadow7Animated");
}