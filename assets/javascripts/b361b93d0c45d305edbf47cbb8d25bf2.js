window.should_log=true;window.log=function(){log.history=log.history||[];log.history.push(arguments);if(window.should_log&&this.console){arguments.callee=arguments.callee.caller;var a=[].slice.call(arguments);(typeof console.log==="object"?log.apply.call(console.log,console,a):console.log.apply(console,a))}};(function(e){function h(){}for(var g="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),f;f=g.pop();){e[f]=e[f]||h}})((function(){try{console.log();return window.console}catch(a){return window.console={}}})());$.cookie=function(d,e,b){if(arguments.length>1&&String(e)!=="[object Object]"){b=$.extend({},b);if(e===null||e===undefined){b.expires=-1}if(typeof b.expires==="number"){var g=b.expires,c=b.expires=new Date();c.setDate(c.getDate()+g)}e=String(e);return(document.cookie=[encodeURIComponent(d),"=",b.raw?e:encodeURIComponent(e),b.expires?"; expires="+b.expires.toUTCString():"",b.path?"; path="+b.path:"",b.domain?"; domain="+b.domain:"",b.secure?"; secure":""].join(""))}b=e||{};var a,f=b.raw?function(h){return h}:decodeURIComponent;return(a=new RegExp("(?:^|; )"+encodeURIComponent(d)+"=([^;]*)").exec(document.cookie))?f(a[1]):null};(function(I,H,G){function C(b,h){var g=H.createElement(b||"div"),f;for(f in h){g[f]=h[f]}return g}function B(e){for(var d=1,f=arguments.length;d<f;d++){e.appendChild(arguments[d])}return e}function z(K,J,q,p){var o=["opacity",J,~~(K*100),q,p].join("-"),n=0.01+q/p*100,m=Math.max(1-(1-K)/J*(100-n),K),f=D.substring(0,D.indexOf("Animation")).toLowerCase(),e=f&&"-"+f+"-"||"";return E[o]||(A.insertRule("@"+e+"keyframes "+o+"{0%{opacity:"+m+"}"+n+"%{opacity:"+K+"}"+(n+0.01)+"%{opacity:1}"+(n+J)%100+"%{opacity:"+K+"}100%{opacity:"+m+"}}",0),E[o]=1),o}function x(d,c){var k=d.style,j,h;if(k[c]!==G){return c}c=c.charAt(0).toUpperCase()+c.slice(1);for(h=0;h<F.length;h++){j=F[h]+c;if(k[j]!==G){return j}}}function w(e,d){for(var f in d){e.style[x(e,f)||f]=d[f]}return e}function v(f){for(var c=1;c<arguments.length;c++){var h=arguments[c];for(var g in h){f[g]===G&&(f[g]=h[g])}}return f}function u(d){var c={x:d.offsetLeft,y:d.offsetTop};while(d=d.offsetParent){c.x+=d.offsetLeft,c.y+=d.offsetTop}return c}var F=["webkit","Moz","ms","O"],E={},D,A=function(){var b=C("style");return B(H.getElementsByTagName("head")[0],b),b.sheet||b.styleSheet}(),t={lines:12,length:7,width:5,radius:10,color:"#000",speed:1,trail:100,opacity:0.25,fps:20,zIndex:2000000000,className:"spinner",top:"auto",left:"auto"},s=function r(b){if(!this.spin){return new r(b)}this.opts=v(b||{},r.defaults,t)};s.defaults={},s.prototype={spin:function(R){this.stop();var Q=this,P=Q.opts,O=Q.el=w(C(0,{className:P.className}),{position:"relative",zIndex:P.zIndex}),N=P.radius+P.length+P.width,M,L;R&&(R.insertBefore(O,R.firstChild||null),L=u(R),M=u(O),w(O,{left:(P.left=="auto"?L.x-M.x+(R.offsetWidth>>1):P.left+N)+"px",top:(P.top=="auto"?L.y-M.y+(R.offsetHeight>>1):P.top+N)+"px"})),O.setAttribute("aria-role","progressbar"),Q.lines(O,Q.opts);if(!D){var K=0,J=P.fps,n=J/P.speed,l=(1-P.opacity)/(n*P.trail/100),g=n/P.lines;!function f(){K++;for(var b=P.lines;b;b--){var c=Math.max(1-(K+b*g)%n*l,P.opacity);Q.opacity(O,P.lines-b,c,P)}Q.timeout=Q.el&&setTimeout(f,~~(1000/J))}()}return Q},stop:function(){var b=this.el;return b&&(clearTimeout(this.timeout),b.parentNode&&b.parentNode.removeChild(b),this.el=G),this},lines:function(g,f){function h(b,c){return w(C(),{position:"absolute",width:f.length+f.width+"px",height:f.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/f.lines*k)+"deg) translate("+f.radius+"px,0)",borderRadius:(f.width>>1)+"px"})}var k=0,j;for(;k<f.lines;k++){j=w(C(),{position:"absolute",top:1+~(f.width/2)+"px",transform:f.hwaccel?"translate3d(0,0,0)":"",opacity:f.opacity,animation:D&&z(f.opacity,f.trail,k,f.lines)+" "+1/f.speed+"s linear infinite"}),f.shadow&&B(j,w(h("#000","0 0 4px #000"),{top:"2px"})),B(g,B(j,h(f.color,"0 0 1px rgba(0,0,0,.1)")))}return g},opacity:function(e,d,f){d<e.childNodes.length&&(e.childNodes[d].style.opacity=f)}},!function(){var d=w(C("group"),{behavior:"url(#default#VML)"}),c;if(!x(d,"transform")&&d.adj){for(c=4;c--;){A.addRule(["group","roundrect","fill","stroke"][c],"behavior:url(#default#VML)")}s.prototype.lines=function(J,q){function n(){return w(C("group",{coordsize:o+" "+o,coordorigin:-p+" "+-p}),{width:o,height:o})}function g(b,j,e){B(l,B(w(n(),{rotation:360/q.lines*b+"deg",left:~~j}),B(w(C("roundrect",{arcsize:1}),{width:p,height:q.width,left:q.radius,top:-q.width>>1,filter:e}),C("fill",{color:q.color,opacity:q.opacity}),C("stroke",{opacity:0}))))}var p=q.length+q.width,o=2*p,m=-(q.width+q.length)*2+"px",l=w(n(),{position:"absolute",top:m,left:m}),h;if(q.shadow){for(h=1;h<=q.lines;h++){g(h,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)")}}for(h=1;h<=q.lines;h++){g(h)}return B(J,l)},s.prototype.opacity=function(g,f,k,j){var h=g.firstChild;j=j.shadow&&j.lines||0,h&&f+j<h.childNodes.length&&(h=h.childNodes[f+j],h=h&&h.firstChild,h=h&&h.firstChild,h&&(h.opacity=k))}}else{D=x(d,"animation")}}(),I.Spinner=s})(window,document);function Doorman(){var b=function(){return !!$.cookie("age_verified")};var a=function(){var c=["google","googlebot","livebot","msnbot","facebookscraper","facebookexternalhit","ask jeeves"];return navigator.userAgent.match(new RegExp("("+c.join(")|(")+")","i"))!==null};this.verify_age=function(c){if(b()||a()){$("#bouncer-overlay").remove();if(c){c()}return}return this.ask_for_id(c)};this.ask_for_id=function(e){var c=$("#bouncer-overlay"),d=this;c.removeClass("disappear");$("#bouncer .y").click(function(f){f.preventDefault();d.remember_for_later();if(e){e()}c.addClass("disappear");setTimeout(function(){c.remove()},300)});$("#bouncer .n").click(this.i_dont_think_so)};this.remember_for_later=function(){$.cookie("age_verified",true)};this.i_dont_think_so=function(c){c.preventDefault();window.location.href="http://www.google.co.nz/search?q=virgin+cocktails"}}function Suite(){var g=this,b=new Scroll(),c=new Doorman(),a=new ImageLoader(),d=0,e=$("#loading .message");var f={lines:16,length:0,width:5,radius:24,color:"#000",speed:1.2,trail:60,shadow:false,hwaccel:true,className:"spinner",zIndex:2000000000,top:"auto",left:"auto"};this.load=function(){var h=$("#loading .spin");var j=new Spinner(f).spin(h.get(0));a.loadGroup("index",g.menu_preloaded,g.bump_loading);$(function(){b.prepare();setTimeout(function(){c.verify_age(function(){b.init()})},700)})};this.bump_loading=function(){d++;e.html(Math.round(d/9*100)+"%")};this.menu_preloaded=function(h){$.each(h,function(l,j){g.apply_image(l,j.src);log("loaded "+l+" with "+j.src)});a.loadGroup("visuals_low_res",function(){a.loadGroup("visuals_high_res",b.set_positions,g.high_visual_preloaded)},g.low_visual_preloaded);$("#loading-overlay").remove()};this.low_visual_preloaded=function(h){log("Loaded "+h.rel);g.apply_image(h.rel,h.src,{backgroundSize:"cover"})};this.high_visual_preloaded=function(h){log("Loaded "+h.rel);g.apply_image(h.rel,h.src,{backgroundSize:"cover"})};this.apply_image=function(j,k,h){var h=h||{};log("Applying "+j);$(j).css($.extend(h,{backgroundImage:"url("+k+")"}))}}function Scroll(){var a=this;this.s={last_story_index:false,follow:false,num_stories:0,window_height:false,stories:["about-1","about-2","cocktail-1","cocktail-2","white-wine","red-wine","beer-1","whiskey","gin","vodka","bitter","tequila","bourbon","cognac","rum"]};this.classes={prev:"prev",current:"current",bottom:"bottom",fixed:"fixed",next:"next"};this.prepare=function(){a.init_stories();a.scroll_to_hash();a.handle_hash_links();a.menu_preparations()};this.init=function(){a.stories=[];a.set_positions();a.s.num_stories=a.stories.length;$(window).scroll(a.scrollHandler);$(window).resize(a.resizeHandler);a.initMenu()};this.menu_preparations=function(){$(".menu-cocktails").hover(function(){$(this).css("z-index",76)},function(){$(this).css("z-index",74)})};this.scroll_to_hash=function(){if(location.hash){hash=location.hash;a.trigger_ui(hash)}};this.handle_hash_links=function(){$(function(){$("nav a, .menu-item, header a").click(function(c){var b=$(this).attr("href");a.push_hash(b);if(window.location.href.indexOf("scroll=true")==-1){return}c.preventDefault();$("html, body").animate({scrollTop:$(b).offset().top},{duration:200,easing:"easeInOutSine",complete:function(){location.hash=b}})})})};this.resizeHandler=function(){a.set_positions();a.scrollHandler()};this.set_positions=function(){a.s.window_height=a.windowY();$(".story .visual").css({height:a.s.window_height});a.story_positions=[];$(".story").each(function(){a.story_positions.push(a.offsetTop(this));if(method==="style"){a.stories.push($(this).find(".visual"))}else{a.stories.push($(this))}})};this.init_stories=function(){$(".story").each(function(b){story=$(this);story.css({zIndex:b+40});$.each(a.s.stories,function(d,c){if(!story.hasClass(c)){return true}story.prepend($('<div class="visual" />'));return true})})};this.offsetTop=function(c){var b=0;if(c.offsetParent){do{b+=c.offsetTop}while((c=c.offsetParent))}return b};this.scrollY=function(){if(window.pageYOffset){return window.pageYOffset}return Math.max(document.documentElement.scrollTop,document.body.scrollTop)};this.windowY=function(){var b=0;if(document.body&&document.body.offsetWidth){b=document.body.offsetHeight}if(document.compatMode=="CSS1Compat"&&document.documentElement&&document.documentElement.offsetWidth){b=document.documentElement.offsetHeight}if(window.innerWidth&&window.innerHeight){b=window.innerHeight}return b};method="class";this.scrollHandler=function(){y=a.scrollY();follow=true;for(var d=0,b=a.s.num_stories;d<b;d++){pos=a.story_positions[d];if(y>=pos){continue}d--;follow=y<=pos-a.s.window_height;break}match=d===a.s.last_story_index&&follow===a.s.follow;if(!match){method==="style"?a.removeStyles():a.removeClasses(d,follow);method==="style"?a.setStylesAt(d,follow):a.setClassesAt(d,follow);if(d!==a.s.last_story_index&&d!==-1){el=(method==="style"?a.stories[d].parent():a.stories[d]).eq(0);var c=0;while(c<100&&el&&!(id=el.attr("id"))){el=el.prev();c++}if(id){a.push_hash("#"+id,d)}}}a.s.last_story_index=d;a.s.follow=follow};this.push_hash=function(c,b){clearTimeout(a.hash_debounce);a.hash_debounce=setTimeout(function(){c=c.replace(/^#/,"");a.replace_hash(c);if(a.stories[b]){a.stories[b].find("h2").animate({opacity:0},{duration:200,easing:"easeInOutSine",complete:function(){a.stories[b].addClass("delayed");$(this).animate({opacity:1},{duration:500,easing:"easeInOutSine"})}})}_gaq.push(["_trackPageview",c]);a.trigger_ui(c)},150)};this.replace_hash=function(d){var c,b=$("#"+d);if(b.length){c=$("<div></div>").css({position:"absolute",visibility:"hidden",top:a.scrollY()+"px"}).attr("id",d).appendTo(document.body);b.attr("id","")}document.location.hash=d;if(b.length){c.remove();b.attr("id",d)}};this.removeStyles=function(){i=a.s.last_story_index;if(i===false||i===-1){return}a.stories[i].css({position:"absolute",top:"0",bottom:"auto"})};this.removeClasses=function(c,b){if((b&&c!=a.s.last_story_index)||c<a.s.last_story_index){$(".story").removeClass("delayed")}if(c<0){a.startMenuHint();setTimeout(function(){$("header li").removeClass("active");a.replace_hash("main-menu")},500)}c=a.s.last_story_index;if(c===false||c===-1){return}a.stories[c].removeClass(a.classes.fixed);a.stories[c].removeClass(a.classes.bottom)};this.initMenu=function(){a.startMenuHint();$(".menu-item").hover(a.clearMenuHint,function(){a.startMenuHint(6000)})};this.startMenuHint=function(b){a.clearMenuHint();a.menuHintTimeout=setTimeout(function(){hint=$("#main-menu .hint");hint.animate({opacity:0.8},{duraction:300,easing:"easeInOutSine"}).delay(1500).animate({opacity:0},{duraction:300,easing:"easeInOutSine"})},b||4000)};this.clearMenuHint=function(){clearTimeout(a.menuHintTimeout)};this.setStylesAt=function(c,b){if(c===-1){return}if(b){a.stories[c].css({position:"fixed",top:0,bottom:"auto"})}else{a.stories[c].css({position:"absolute",top:"auto",bottom:0})}};this.setClassesAt=function(c,b){if(c===-1){return}a.stories[c].addClass(b?a.classes.fixed:a.classes.bottom)};this.trigger_ui=function(b){log("Triggering "+b);switch(b.replace("#","")){case"contact":this.init_contact();break}$("header li").removeClass("active");$("header a[href=#"+b.replace("#","")+"]").parent("li").addClass("active")};this.init_contact=function(){if(a.contact){return}a.contact=new Contact();a.contact.init()}}var ImageLoader=function(){var b=this;this.saved_groups={};var a={index:{"#main-menu":"/assets/images/b/index.jpg",".menu-spirits":"/assets/images/m/spirits-mask.png",".menu-cocktails":"/assets/images/m/cocktails-mask.png",".menu-food":"/assets/images/m/food-mask.png",".menu-beer":"/assets/images/m/beer-mask.png",".menu-wine":"/assets/images/m/wine-mask.png",".menu-music":"/assets/images/m/music-mask.png",".menu-awards":"/assets/images/m/awards-mask.png",".menu-people":"/assets/images/m/people-mask.png"},visuals_high_res:{".about-2 .visual":"/assets/images/b/about-1.jpg",".cocktail-1 .visual":"/assets/images/b/cocktails-2.jpg",".cocktail-2 .visual":"/assets/images/b/wine-1.jpg",".white-wine .visual":"/assets/images/b/white-wine.jpg",".red-wine .visual":"/assets/images/b/red-wine.jpg",".beer-1 .visual":"/assets/images/b/beer-1.jpg",".whiskey .visual":"/assets/images/b/whiskey.jpg",".gin .visual":"/assets/images/b/gin.jpg",".bitter .visual":"/assets/images/b/bitter.jpg",".tequila .visual":"/assets/images/b/tequila.jpg",".bourbon .visual":"/assets/images/b/bourbon.jpg",".cognac .visual":"/assets/images/b/cognac.jpg",".rum .visual":"/assets/images/b/rum.jpg"},visuals_low_res:{".about-2 .visual":"/assets/images/b/low/about-1.jpg",".cocktail-1 .visual":"/assets/images/b/low/cocktails-2.jpg",".cocktail-2 .visual":"/assets/images/b/low/wine-1.jpg",".white-wine .visual":"/assets/images/b/low/white-wine.jpg",".red-wine .visual":"/assets/images/b/low/red-wine.jpg",".beer-1 .visual":"/assets/images/b/low/beer-1.jpg",".whiskey .visual":"/assets/images/b/low/whiskey.jpg",".gin .visual":"/assets/images/b/low/gin.jpg",".bitter .visual":"/assets/images/b/low/bitter.jpg",".tequila .visual":"/assets/images/b/low/tequila.jpg",".bourbon .visual":"/assets/images/b/low/bourbon.jpg",".cognac .visual":"/assets/images/b/low/cognac.jpg",".rum .visual":"/assets/images/b/low/rum.jpg"}};this.loadGroup=function(g,f,d){log("Loading group "+g);var h={},e=0;b.saved_groups[g]=h;var c=function(){e--;log("Loaded image "+this.src+", "+e+" left");if(d){d(this)}if(e<=0){log("Group loaded");if(f){f(h)}}};$.each(a[g],function(l,j){img=new Image();img.rel=l;img.onload=c;img.src=j;h[l]=img;e++})}};var maps_callback;var Contact=function(){var h=this,g,d=[-36.844739,174.763244],c=$("#contact .visual .map").get(0),b,f,e;this.init=function(){maps_callback=h.load;$.getScript("//maps.googleapis.com/maps/api/js?sensor=false&callback=maps_callback");h.fix_cursor_bug()};this.fix_cursor_bug=function(){cursor=new Image();cursor.src="http://maps.gstatic.com/mapfiles/openhand_8_8.cur"};this.load=function(){e=a();var j={zoom:16,scrollwheel:false,center:new google.maps.LatLng(e[0],e[1]),disableDefaultUI:true,mapTypeId:google.maps.MapTypeId.ROADMAP,zoomControl:true,zoomControlOptions:{style:google.maps.ZoomControlStyle.LARGE,position:google.maps.ControlPosition.LEFT_CENTER},streetViewControl:true,streetViewControlOptions:{position:google.maps.ControlPosition.LEFT_CENTER}};g=new google.maps.Map(c,j);h.pin_suite();h.setup_streetview()};var a=function(){var j=489+110;return[d[0]+(0.0001*(80/5.82)),d[1]+(0.0001*Math.round(j/2)/4.666)]};this.pin_suite=function(){var n=new google.maps.MarkerImage("http://mal.co.nz/suite/skull-pin-shadow.png",new google.maps.Size(70,42),new google.maps.Point(0,0),new google.maps.Point(10,42));var l=new google.maps.MarkerImage("http://mal.co.nz/suite/skull-pin.png",new google.maps.Size(41,54),new google.maps.Point(0,0),new google.maps.Point(20,54));var j={coord:[1,1,1,20,18,20,18,1],type:"poly"};var k=new google.maps.LatLng(d[0],d[1]);b=new google.maps.Marker({position:k,map:g,icon:l,shadow:n,shape:j});f=new google.maps.InfoWindow({content:"<p>Suite Bar<p><p><small>123 Hobson St<br />Auckland</small></p>"});function m(p,r,q,o){this.options_=$.extend({width:200,height:90},o);this.loc_=r;this.map_=q;this.div_=null;this.content_=p;this.setMap(q)}m.prototype=new google.maps.OverlayView();m.prototype.onAdd=function(){var p=document.createElement("DIV");p.style.border="none";p.style.borderWidth="0px";p.style.position="absolute";p.className="black-overlay";p.innerHTML=this.content_;this.div_=p;var o=this.getPanes();o.overlayLayer.appendChild(p)};m.prototype.draw=function(){var q=this.getProjection();var p=q.fromLatLngToDivPixel(this.loc_);var r=this.options_.width;var o=this.options_.height;var s=this.div_;s.style.left=(p.x-(r/2))+"px";s.style.top=(p.y-80-o)+"px";s.style.width=r+"px";s.style.height=o+"px"};overlay=new m("<p>Suite Bar</p><p><small>123 Hobson St<br />Auckland</small></p>",new google.maps.LatLng(d[0],d[1]),g);google.maps.event.addListener(b,"click",function(){f.open(g,b)})};this.setup_streetview=function(){var k={addressControlOptions:{position:google.maps.ControlPosition.LEFT_CENTER},linksControlOptions:{position:google.maps.ControlPosition.LEFT_CENTER},panControlOptions:{position:google.maps.ControlPosition.LEFT_CENTER},zoomControlOptions:{position:google.maps.ControlPosition.LEFT_CENTER},enableCloseButton:true,scrollwheel:false,visible:false};var j=new google.maps.StreetViewPanorama(c,k);g.setStreetView(j)}};$.extend($.easing,{easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a}});