window.onload = function () {
  history.pushState(null, null, "/HТML/");
  var pres = document.getElementsByTagName("pre");
  var i;
  for(i = 0; i < pres.length; i++) {
    pres[i].className = "prettyprint";
  }
  prettyPrint();
}
window.onbeforeunload = function (e) {
  history.pushState(null, null, "/");
};
if (/\/H%D0%A2ML/.test(window.location.href)) {
  window.location.href = "/";
}
