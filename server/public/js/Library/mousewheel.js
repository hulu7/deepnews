define(function(k,m,u){function p(a){var b=a||window.event,k=r.call(arguments,1),f=0,d=0,c=0,g=0,l=0,m=0;a=e.event.fix(b);a.type="mousewheel";"detail"in b&&(c=-1*b.detail);"wheelDelta"in b&&(c=b.wheelDelta);"wheelDeltaY"in b&&(c=b.wheelDeltaY);"wheelDeltaX"in b&&(d=-1*b.wheelDeltaX);"axis"in b&&b.axis===b.HORIZONTAL_AXIS&&(d=-1*c,c=0);f=0===c?d:c;"deltaY"in b&&(f=c=-1*b.deltaY);"deltaX"in b&&(d=b.deltaX,0===c&&(f=-1*d));if(0!==c||0!==d){1===b.deltaMode?(g=e.data(this,"mousewheel-line-height"),f*=
g,c*=g,d*=g):2===b.deltaMode&&(g=e.data(this,"mousewheel-page-height"),f*=g,c*=g,d*=g);g=Math.max(Math.abs(c),Math.abs(d));if(!h||g<h)h=g,n.settings.adjustOldDeltas&&"mousewheel"===b.type&&0===g%120&&(h/=40);n.settings.adjustOldDeltas&&"mousewheel"===b.type&&0===g%120&&(f/=40,d/=40,c/=40);f=Math[1<=f?"floor":"ceil"](f/h);d=Math[1<=d?"floor":"ceil"](d/h);c=Math[1<=c?"floor":"ceil"](c/h);n.settings.normalizeOffset&&this.getBoundingClientRect&&(b=this.getBoundingClientRect(),l=a.clientX-b.left,m=a.clientY-
b.top);a.deltaX=d;a.deltaY=c;a.deltaFactor=h;a.offsetX=l;a.offsetY=m;a.deltaMode=0;k.unshift(a,f,d,c);q&&clearTimeout(q);q=setTimeout(t,200);return(e.event.dispatch||e.event.handle).apply(this,k)}}function t(){h=null}var e=jQuery=k("jquery");k=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"];var l="onwheel"in document||9<=document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],r=Array.prototype.slice,q,h;if(e.event.fixHooks)for(m=k.length;m;)e.event.fixHooks[k[--m]]=
e.event.mouseHooks;var n=e.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var a=l.length;a;)this.addEventListener(l[--a],p,!1);else this.onmousewheel=p;e.data(this,"mousewheel-line-height",n.getLineHeight(this));e.data(this,"mousewheel-page-height",n.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var a=l.length;a;)this.removeEventListener(l[--a],p,!1);else this.onmousewheel=null;e.removeData(this,"mousewheel-line-height");e.removeData(this,
"mousewheel-page-height")},getLineHeight:function(a){a=e(a);var b=a["offsetParent"in e.fn?"offsetParent":"parent"]();b.length||(b=e("body"));return parseInt(b.css("fontSize"),10)||parseInt(a.css("fontSize"),10)||16},getPageHeight:function(a){return e(a).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};e.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});