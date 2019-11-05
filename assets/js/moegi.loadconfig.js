if (typeof main_color == 'undefined') {
    var main_color = '#242424';
}
document.body.style.setProperty('--main-color', main_color);

/* 配置项读取 */
/* FOOTER-TEXT */
if (typeof footer_text == 'undefined') {
    var footer_text = "";
}
if (footer_text) {
    $("#footer-text").text(" | " + footer_text);
} 