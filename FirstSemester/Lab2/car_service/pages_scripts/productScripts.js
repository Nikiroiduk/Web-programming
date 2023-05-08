document.addEventListener('DOMContentLoaded',() => {
  var val1 = document.getElementById('mehCmon1');
  var val2 = document.getElementById('mehCmon2');
  // val.setAttribute('value', parseFloat(val.getAttribute('value')) * 4);

  val1.dispatchEvent(new Event('input', {bubbles:true}));
  val2.dispatchEvent(new Event('input', {bubbles:true}));
});