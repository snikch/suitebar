window.should_log=true;window.log=function(){log.history=log.history||[];log.history.push(arguments);if(window.should_log&&this.console){arguments.callee=arguments.callee.caller;var a=[].slice.call(arguments);(typeof console.log==="object"?log.apply.call(console.log,console,a):console.log.apply(console,a))}};(function(e){function h(){}for(var g="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),f;f=g.pop();){e[f]=e[f]||h}})((function(){try{console.log();return window.console}catch(a){return window.console={}}})());$.cookie=function(d,e,b){if(arguments.length>1&&String(e)!=="[object Object]"){b=$.extend({},b);if(e===null||e===undefined){b.expires=-1}if(typeof b.expires==="number"){var g=b.expires,c=b.expires=new Date();c.setDate(c.getDate()+g)}e=String(e);return(document.cookie=[encodeURIComponent(d),"=",b.raw?e:encodeURIComponent(e),b.expires?"; expires="+b.expires.toUTCString():"",b.path?"; path="+b.path:"",b.domain?"; domain="+b.domain:"",b.secure?"; secure":""].join(""))}b=e||{};var a,f=b.raw?function(h){return h}:decodeURIComponent;return(a=new RegExp("(?:^|; )"+encodeURIComponent(d)+"=([^;]*)").exec(document.cookie))?f(a[1]):null};(function(I,H,G){function C(b,h){var g=H.createElement(b||"div"),f;for(f in h){g[f]=h[f]}return g}function B(e){for(var d=1,f=arguments.length;d<f;d++){e.appendChild(arguments[d])}return e}function z(K,J,q,p){var o=["opacity",J,~~(K*100),q,p].join("-"),n=0.01+q/p*100,m=Math.max(1-(1-K)/J*(100-n),K),f=D.substring(0,D.indexOf("Animation")).toLowerCase(),e=f&&"-"+f+"-"||"";return E[o]||(A.insertRule("@"+e+"keyframes "+o+"{0%{opacity:"+m+"}"+n+"%{opacity:"+K+"}"+(n+0.01)+"%{opacity:1}"+(n+J)%100+"%{opacity:"+K+"}100%{opacity:"+m+"}}",0),E[o]=1),o}function x(d,c){var k=d.style,j,h;if(k[c]!==G){return c}c=c.charAt(0).toUpperCase()+c.slice(1);for(h=0;h<F.length;h++){j=F[h]+c;if(k[j]!==G){return j}}}function w(e,d){for(var f in d){e.style[x(e,f)||f]=d[f]}return e}function v(f){for(var c=1;c<arguments.length;c++){var h=arguments[c];for(var g in h){f[g]===G&&(f[g]=h[g])}}return f}function u(d){var c={x:d.offsetLeft,y:d.offsetTop};while(d=d.offsetParent){c.x+=d.offsetLeft,c.y+=d.offsetTop}return c}var F=["webkit","Moz","ms","O"],E={},D,A=function(){var b=C("style");return B(H.getElementsByTagName("head")[0],b),b.sheet||b.styleSheet}(),t={lines:12,length:7,width:5,radius:10,color:"#000",speed:1,trail:100,opacity:0.25,fps:20,zIndex:2000000000,className:"spinner",top:"auto",left:"auto"},s=function r(b){if(!this.spin){return new r(b)}this.opts=v(b||{},r.defaults,t)};s.defaults={},s.prototype={spin:function(R){this.stop();var Q=this,P=Q.opts,O=Q.el=w(C(0,{className:P.className}),{position:"relative",zIndex:P.zIndex}),N=P.radius+P.length+P.width,M,L;R&&(R.insertBefore(O,R.firstChild||null),L=u(R),M=u(O),w(O,{left:(P.left=="auto"?L.x-M.x+(R.offsetWidth>>1):P.left+N)+"px",top:(P.top=="auto"?L.y-M.y+(R.offsetHeight>>1):P.top+N)+"px"})),O.setAttribute("aria-role","progressbar"),Q.lines(O,Q.opts);if(!D){var K=0,J=P.fps,n=J/P.speed,l=(1-P.opacity)/(n*P.trail/100),g=n/P.lines;!function f(){K++;for(var b=P.lines;b;b--){var c=Math.max(1-(K+b*g)%n*l,P.opacity);Q.opacity(O,P.lines-b,c,P)}Q.timeout=Q.el&&setTimeout(f,~~(1000/J))}()}return Q},stop:function(){var b=this.el;return b&&(clearTimeout(this.timeout),b.parentNode&&b.parentNode.removeChild(b),this.el=G),this},lines:function(g,f){function h(b,c){return w(C(),{position:"absolute",width:f.length+f.width+"px",height:f.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/f.lines*k)+"deg) translate("+f.radius+"px,0)",borderRadius:(f.width>>1)+"px"})}var k=0,j;for(;k<f.lines;k++){j=w(C(),{position:"absolute",top:1+~(f.width/2)+"px",transform:f.hwaccel?"translate3d(0,0,0)":"",opacity:f.opacity,animation:D&&z(f.opacity,f.trail,k,f.lines)+" "+1/f.speed+"s linear infinite"}),f.shadow&&B(j,w(h("#000","0 0 4px #000"),{top:"2px"})),B(g,B(j,h(f.color,"0 0 1px rgba(0,0,0,.1)")))}return g},opacity:function(e,d,f){d<e.childNodes.length&&(e.childNodes[d].style.opacity=f)}},!function(){var d=w(C("group"),{behavior:"url(#default#VML)"}),c;if(!x(d,"transform")&&d.adj){for(c=4;c--;){A.addRule(["group","roundrect","fill","stroke"][c],"behavior:url(#default#VML)")}s.prototype.lines=function(J,q){function n(){return w(C("group",{coordsize:o+" "+o,coordorigin:-p+" "+-p}),{width:o,height:o})}function g(b,j,e){B(l,B(w(n(),{rotation:360/q.lines*b+"deg",left:~~j}),B(w(C("roundrect",{arcsize:1}),{width:p,height:q.width,left:q.radius,top:-q.width>>1,filter:e}),C("fill",{color:q.color,opacity:q.opacity}),C("stroke",{opacity:0}))))}var p=q.length+q.width,o=2*p,m=-(q.width+q.length)*2+"px",l=w(n(),{position:"absolute",top:m,left:m}),h;if(q.shadow){for(h=1;h<=q.lines;h++){g(h,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)")}}for(h=1;h<=q.lines;h++){g(h)}return B(J,l)},s.prototype.opacity=function(g,f,k,j){var h=g.firstChild;j=j.shadow&&j.lines||0,h&&f+j<h.childNodes.length&&(h=h.childNodes[f+j],h=h&&h.firstChild,h=h&&h.firstChild,h&&(h.opacity=k))}}else{D=x(d,"animation")}}(),I.Spinner=s})(window,document);function Doorman(){var b=function(){return !!$.cookie("age_verified")};var a=function(){var c=["google","googlebot","livebot","msnbot","facebookscraper","facebookexternalhit","ask jeeves"];return navigator.userAgent.match(new RegExp("("+c.join(")|(")+")","i"))!==null};this.verify_age=function(c){if(b()||a()){$("#bouncer-overlay").remove();if(c){c()}return}return this.ask_for_id(c)};this.ask_for_id=function(e){var c=$("#bouncer-overlay"),d=this;c.removeClass("disappear");$("#bouncer .y").click(function(f){f.preventDefault();d.remember_for_later();if(e){e()}c.addClass("disappear");setTimeout(function(){c.remove()},300)});$("#bouncer .n").click(this.i_dont_think_so)};this.remember_for_later=function(){$.cookie("age_verified",true)};this.i_dont_think_so=function(c){c.preventDefault();window.location.href="http://www.google.co.nz/search?q=virgin+cocktails"}}function Suite(){var g=this,b=new Scroll(),c=new Doorman(),a=new ImageLoader(),d=0,e=$("#loading .message");var f={lines:16,length:0,width:5,radius:24,color:"#000",speed:1.2,trail:60,shadow:false,hwaccel:true,className:"spinner",zIndex:2000000000,top:"auto",left:"auto"};this.load=function(){var h=$("#loading .spin");var j=new Spinner(f).spin(h.get(0));a.loadGroup("index",g.menu_preloaded,g.bump_loading);$(function(){b.prepare();setTimeout(function(){c.verify_age(function(){b.init()})},700)})};this.bump_loading=function(){d++;e.html(Math.round(d/9*100)+"%")};this.menu_preloaded=function(h){$.each(h,function(l,j){g.apply_image(l,j.src);log("loaded "+l+" with "+j.src)});a.loadGroup("visuals_low_res",function(){a.loadGroup("visuals_high_res",b.set_positions,g.high_visual_preloaded)},g.low_visual_preloaded);$("#loading-overlay").remove()};this.low_visual_preloaded=function(h){log("Loaded "+h.rel);g.apply_image(h.rel,h.src,{backgroundSize:"cover"})};this.high_visual_preloaded=function(h){log("Loaded "+h.rel);g.apply_image(h.rel,h.src,{backgroundSize:"cover"})};this.apply_image=function(j,k,h){var h=h||{};log("Applying "+j);$(j).css($.extend(h,{backgroundImage:"url("+k+")"}))}}function Scroll(){var a=this;this.s={last_story_index:false,follow:false,num_stories:0,window_height:false,stories:["about-1","about-2","cocktail-1","cocktail-2","white-wine","red-wine","beer-1","whiskey","gin","vodka","bitter","tequila","bourbon","cognac","rum"]};this.classes={prev:"prev",current:"current",bottom:"bottom",fixed:"fixed",next:"next"};this.prepare=function(){a.init_stories();a.scroll_to_hash();a.handle_hash_links();a.menu_preparations()};this.init=function(){a.stories=[];a.set_positions();a.s.num_stories=a.stories.length;$(window).scroll(a.scrollHandler);$(window).resize(a.resizeHandler)};this.menu_preparations=function(){$(".menu-cocktails").hover(function(){$(this).css("z-index",76)},function(){$(this).css("z-index",74)})};this.scroll_to_hash=function(){if(location.hash){hash=location.hash;a.trigger_ui(hash)}};this.handle_hash_links=function(){$(function(){$("nav a, .menu-item, header a").click(function(c){var b=$(this).attr("href");a.push_hash(b);if(window.location.href.indexOf("scroll=true")==-1){return}c.preventDefault();$("html, body").animate({scrollTop:$(b).offset().top},{duration:300,easing:"easeInOutSine",complete:function(){location.hash=b}})})})};this.resizeHandler=function(){a.set_positions();a.scrollHandler()};this.set_positions=function(){a.s.window_height=a.windowY();$(".story .visual").css({height:a.s.window_height});a.story_positions=[];$(".story").each(function(){a.story_positions.push(a.offsetTop(this));if(method==="style"){a.stories.push($(this).find(".visual"))}else{a.stories.push($(this))}})};this.init_stories=function(){$(".story").each(function(){story=$(this);$.each(a.s.stories,function(c,b){if(!story.hasClass(b)){return true}story.prepend($('<div class="visual" />'));return true})})};this.offsetTop=function(c){var b=0;if(c.offsetParent){do{b+=c.offsetTop}while((c=c.offsetParent))}return b};this.scrollY=function(){if(window.pageYOffset){return window.pageYOffset}return Math.max(document.documentElement.scrollTop,document.body.scrollTop)};this.windowY=function(){var b=0;if(document.body&&document.body.offsetWidth){b=document.body.offsetHeight}if(document.compatMode=="CSS1Compat"&&document.documentElement&&document.documentElement.offsetWidth){b=document.documentElement.offsetHeight}if(window.innerWidth&&window.innerHeight){b=window.innerHeight}return b};method="class";this.scrollHandler=function(){y=a.scrollY();follow=true;for(var d=0,b=a.s.num_stories;d<b;d++){pos=a.story_positions[d];if(y>=pos){continue}d--;follow=y<=pos-a.s.window_height;break}match=d===a.s.last_story_index&&follow===a.s.follow;if(!match){method==="style"?a.removeStyles():a.removeClasses();method==="style"?a.setStylesAt(d,follow):a.setClassesAt(d,follow);if(d!==a.s.last_story_index&&d!==-1){el=(method==="style"?a.stories[d].parent():a.stories[d]).eq(0);var c=0;while(c<100&&el&&!(id=el.attr("id"))){el=el.prev();c++}if(id){a.push_hash("#"+id)}}}a.s.last_story_index=d;a.s.follow=follow};this.push_hash=function(b){clearTimeout(a.hash_debounce);a.hash_debounce=setTimeout(function(){b=b.replace(/^#/,"");var d,c=$("#"+b);if(c.length){d=$("<div></div>").css({position:"absolute",visibility:"hidden",top:a.scrollY()+"px"}).attr("id",b).appendTo(document.body);c.attr("id","")}document.location.hash=b;if(c.length){d.remove();c.attr("id",b)}_gaq.push(["_trackPageview",b]);a.trigger_ui(b)},300)};this.removeStyles=function(){i=a.s.last_story_index;if(i===false||i===-1){return}a.stories[i].css({position:"absolute",top:"0",bottom:"auto"})};this.removeClasses=function(){i=a.s.last_story_index;if(i===false||i===-1){return}a.stories[i].removeClass(a.classes.fixed);a.stories[i].removeClass(a.classes.bottom)};this.setStylesAt=function(c,b){if(c===-1){return}if(b){a.stories[c].css({position:"fixed",top:0,bottom:"auto"})}else{a.stories[c].css({position:"absolute",top:"auto",bottom:0})}};this.setClassesAt=function(c,b){if(c===-1){return}a.stories[c].addClass(b?a.classes.fixed:a.classes.bottom)};this.trigger_ui=function(b){log("Triggering "+b);switch(b.replace("#","")){case"contact":this.init_contact();break}};this.init_contact=function(){if(a.contact){return}a.contact=new Contact();a.contact.init()}}var ImageLoader=function(){var b=this;this.saved_groups={};var a={index:{"#main-menu":"/assets/images/b/index.jpg",".menu-spirits":"/assets/images/m/spirits-mask.png",".menu-cocktails":"/assets/images/m/cocktails-mask.png",".menu-food":"/assets/images/m/food-mask.png",".menu-beer":"/assets/images/m/beer-mask.png",".menu-wine":"/assets/images/m/wine-mask.png",".menu-music":"/assets/images/m/music-mask.png",".menu-awards":"/assets/images/m/awards-mask.png",".menu-people":"/assets/images/m/people-mask.png"},visuals_high_res:{".about-2 .visual":"/assets/images/b/about-1.jpg",".cocktail-1 .visual":"/assets/images/b/cocktails-2.jpg",".cocktail-2 .visual":"/assets/images/b/wine-1.jpg",".white-wine .visual":"/assets/images/b/white-wine.jpg",".red-wine .visual":"/assets/images/b/red-wine.jpg",".beer-1 .visual":"/assets/images/b/beer-1.jpg",".whiskey .visual":"/assets/images/b/whiskey.jpg",".gin .visual":"/assets/images/b/gin.jpg",".bitter .visual":"/assets/images/b/bitter.jpg",".tequila .visual":"/assets/images/b/tequila.jpg",".bourbon .visual":"/assets/images/b/bourbon.jpg",".cognac .visual":"/assets/images/b/cognac.jpg",".rum .visual":"/assets/images/b/rum.jpg"},visuals_low_res:{".about-2 .visual":"/assets/images/b/low/about-1.jpg",".cocktail-1 .visual":"/assets/images/b/low/cocktails-2.jpg",".cocktail-2 .visual":"/assets/images/b/low/wine-1.jpg",".white-wine .visual":"/assets/images/b/low/white-wine.jpg",".red-wine .visual":"/assets/images/b/low/red-wine.jpg",".beer-1 .visual":"/assets/images/b/low/beer-1.jpg",".whiskey .visual":"/assets/images/b/low/whiskey.jpg",".gin .visual":"/assets/images/b/low/gin.jpg",".bitter .visual":"/assets/images/b/low/bitter.jpg",".tequila .visual":"/assets/images/b/low/tequila.jpg",".bourbon .visual":"/assets/images/b/low/bourbon.jpg",".cognac .visual":"/assets/images/b/low/cognac.jpg",".rum .visual":"/assets/images/b/low/rum.jpg"}};this.loadGroup=function(g,f,d){log("Loading group "+g);var h={},e=0;b.saved_groups[g]=h;var c=function(){e--;log("Loaded image "+this.src+", "+e+" left");if(d){d(this)}if(e<=0){log("Group loaded");if(f){f(h)}}};$.each(a[g],function(l,j){img=new Image();img.rel=l;img.onload=c;img.src=j;h[l]=img;e++})}};var maps_callback;var Contact=function(){var d=this,c,b=[-36.844739,174.763244],a=$("#contact .visual .map").get(0);this.init=function(){maps_callback=d.load;$.getScript("//maps.googleapis.com/maps/api/js?sensor=false&callback=maps_callback");d.fix_cursor_bug()};this.fix_cursor_bug=function(){cursor=new Image();cursor.src="http://maps.gstatic.com/mapfiles/openhand_8_8.cur"};this.load=function(){var e={zoom:16,scrollwheel:false,center:new google.maps.LatLng(-36.84588,174.768276),disableDefaultUI:true,mapTypeId:google.maps.MapTypeId.ROADMAP,zoomControl:true,zoomControlOptions:{style:google.maps.ZoomControlStyle.LARGE,position:google.maps.ControlPosition.LEFT_CENTER},streetViewControl:true,streetViewControlOptions:{position:google.maps.ControlPosition.LEFT_CENTER}};c=new google.maps.Map(a,e);d.pin_suite();d.setup_streetview()};this.pin_suite=function(){var j=new google.maps.MarkerImage("http://mal.co.nz/suite/skull-pin-shadow.png",new google.maps.Size(70,42),new google.maps.Point(0,0),new google.maps.Point(10,42));var h=new google.maps.MarkerImage("http://mal.co.nz/suite/skull-pin.png",new google.maps.Size(41,54),new google.maps.Point(0,0),new google.maps.Point(20,54));var f={coord:[1,1,1,20,18,20,18,1],type:"poly"};var g=new google.maps.LatLng(b[0],b[1]);var e=new google.maps.Marker({position:g,map:c,icon:h,shadow:j,shape:f})};this.setup_streetview=function(){var f={addressControlOptions:{position:google.maps.ControlPosition.LEFT_CENTER},linksControlOptions:{position:google.maps.ControlPosition.LEFT_CENTER},panControlOptions:{position:google.maps.ControlPosition.LEFT_CENTER},zoomControlOptions:{position:google.maps.ControlPosition.LEFT_CENTER},enableCloseButton:true,scrollwheel:false,visible:false};var e=new google.maps.StreetViewPanorama(a,f);c.setStreetView(e)}};$.extend($.easing,{easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a}});