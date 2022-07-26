// scale Page code start
var pageWidth, pageHeight;
var basePage = {
  width: 1366,
  height: 1024,
  scale: 1,
  scaleX: 1,
  scaleY: 1
};     
var $page = $('#wrapper');
getPageSize();
scalePages($page, pageWidth, pageHeight);
//using underscore to delay resize method till finished resizing window
$(window).resize(_.debounce(function () {
getPageSize();            
scalePages($page, pageWidth, pageHeight);
}, 150));
function getPageSize() {
  pageHeight = $(window).height();
  pageWidth = $(window).width();
}
function scalePages(page, maxWidth, maxHeight) {            
  var scaleX = 1, scaleY = 1;                      
  scaleX = maxWidth / basePage.width;
  scaleY = maxHeight / basePage.height;
  basePage.scaleX = scaleX;
  basePage.scaleY = scaleY;
  basePage.scale = (scaleX > scaleY) ? scaleY : scaleX;

  var newLeftPos = Math.abs(Math.floor(((basePage.width * basePage.scale) - maxWidth)/2));
  var newTopPos = 0

  page.attr('style', '-webkit-transform:scale(' + basePage.scale + ');left:' + newLeftPos + 'px;top:' + newTopPos + 'px;');
}
// scale Page code end