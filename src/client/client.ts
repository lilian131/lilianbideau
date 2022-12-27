var div:any = document.querySelector('body > div:first-child');
var p = ''
for(var i = 0; i < 50; i++) {
    p += '<p>' + i + '</p>';
}
p += '<div></div>';
div.innerHTML = p