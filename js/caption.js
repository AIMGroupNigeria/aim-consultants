/*
		GNU General Public License version 2 or later; see LICENSE.txt
*/
var JCaption=new Class({initialize:function(a){this.selector=a;$$(a).each(function(a){this.createCaption(a)},this)},createCaption:function(a){var f=document.createTextNode(a.title),c=document.createElement("div"),d=document.createElement("p"),e=a.getAttribute("width"),b=a.getAttribute("align");if(!e)e=a.width;b||(b=a.getStyle("float"));if(!b)b=a.style.styleFloat;if(b==""||!b)b="none";d.appendChild(f);d.className=this.selector.replace(".","_");a.parentNode.insertBefore(c,a);c.appendChild(a);a.title!=
""&&c.appendChild(d);c.className=this.selector.replace(".","_");c.className=c.className+" "+b;c.setAttribute("style","float:"+b);c.style.width=e+"px"}});
/*
     FILE ARCHIVED ON 02:49:30 Jan 07, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:00:05 Oct 02, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 118.938 (3)
  esindex: 0.008
  captures_list: 135.171
  CDXLines.iter: 11.591 (3)
  PetaboxLoader3.datanode: 124.702 (5)
  exclusion.robots: 0.226
  exclusion.robots.policy: 0.212
  RedisCDXSource: 1.84
  PetaboxLoader3.resolve: 175.778 (2)
  load_resource: 302.804
*/