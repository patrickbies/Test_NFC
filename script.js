let txt = window.location.search.replaceAll('%20', ' ');
let uinfo = txt.split(',');

document.getElementById('name').innerHTML = uinfo[0].substr(1, uinfo[0].length);
document.getElementById('number').innerHTML = uinfo[1];