!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";t.__esModule=!0,t.inherits=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=Object.create(e.prototype);for(var a in n)o[a]=n[a];return o.constructor=t,t.prototype=o,t}},function(e,t,n){"use strict";t.__esModule=!0,t.AMPERSAND=t.CLOSEPAREN=t.CLOSEANGLEBRACKET=t.CLOSEBRACKET=t.CLOSEBRACE=t.OPENPAREN=t.OPENANGLEBRACKET=t.OPENBRACKET=t.OPENBRACE=t.WS=t.TLD=t.SYM=t.UNDERSCORE=t.SLASH=t.MAILTO=t.PROTOCOL=t.QUERY=t.POUND=t.PLUS=t.NUM=t.NL=t.LOCALHOST=t.PUNCTUATION=t.DOT=t.COLON=t.AT=t.DOMAIN=t.Base=void 0;var o=n(3),a=n(0),r=(0,o.createTokenClass)();function i(e){var t=e?{v:e}:{};return(0,a.inherits)(r,(0,o.createTokenClass)(),t)}r.prototype={toString:function(){return this.v+""}};var s=i(),c=i("@"),l=i(":"),u=i("."),p=i(),f=i(),h=i("\n"),d=i(),m=i("+"),g=i("#"),b=i(),y=i("mailto:"),v=i("?"),x=i("/"),k=i("_"),O=i(),w=i(),A=i(),E=i("{"),S=i("["),L=i("<"),N=i("("),T=i("}"),j=i("]"),C=i(">"),R=i(")"),P=i("&");t.Base=r,t.DOMAIN=s,t.AT=c,t.COLON=l,t.DOT=u,t.PUNCTUATION=p,t.LOCALHOST=f,t.NL=h,t.NUM=d,t.PLUS=m,t.POUND=g,t.QUERY=v,t.PROTOCOL=b,t.MAILTO=y,t.SLASH=x,t.UNDERSCORE=k,t.SYM=O,t.TLD=w,t.WS=A,t.OPENBRACE=E,t.OPENBRACKET=S,t.OPENANGLEBRACKET=L,t.OPENPAREN=N,t.CLOSEBRACE=T,t.CLOSEBRACKET=j,t.CLOSEANGLEBRACKET=C,t.CLOSEPAREN=R,t.AMPERSAND=P},function(e,t,n){"use strict";t.__esModule=!0,t.stateify=t.TokenState=t.CharacterState=void 0;var o=n(0);var a=function(e){this.j=[],this.T=e||null};a.prototype={defaultTransition:!1,on:function(e,t){if(e instanceof Array){for(var n=0;n<e.length;n++)this.j.push([e[n],t]);return this}return this.j.push([e,t]),this},next:function(e){for(var t=0;t<this.j.length;t++){var n=this.j[t],o=n[0],a=n[1];if(this.test(e,o))return a}return this.defaultTransition},accepts:function(){return!!this.T},test:function(e,t){return e===t},emit:function(){return this.T}};var r=(0,o.inherits)(a,(function(e){this.j=[],this.T=e||null}),{test:function(e,t){return e===t||t instanceof RegExp&&t.test(e)}}),i=(0,o.inherits)(a,(function(e){this.j=[],this.T=e||null}),{jump:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=this.next(new e(""));return n===this.defaultTransition?(n=new this.constructor(t),this.on(e,n)):t&&(n.T=t),n},test:function(e,t){return e instanceof t}});t.CharacterState=r,t.TokenState=i,t.stateify=function(e,t,n,o){for(var a=0,i=e.length,s=t,c=[],l=void 0;a<i&&(l=s.next(e[a]));)s=l,a++;if(a>=i)return[];for(;a<i-1;)l=new r(o),c.push(l),s.on(e[a],l),s=l,a++;return l=new r(n),c.push(l),s.on(e[i-1],l),c}},function(e,t,n){"use strict";t.__esModule=!0,t.createTokenClass=function(){return function(e){e&&(this.v=e)}}},function(e,t,n){"use strict";n.r(t);n(5);const o=n(6),a=n(7);function r(e,t=document.querySelector("body")){Object.getOwnPropertyNames(e).forEach(n=>{Array.isArray(e[n])?function(e,t,n){const o=document.createElement("ul");o.setAttribute("class",t),n.appendChild(o),e.forEach(e=>{i(e,t,o,"li")})}(e[n],n,t):i(e[n],n,t)})}function i(e,t,n,o="div"){const a=document.createElement(o);a.setAttribute("class",t),"li"===o&&a.classList.add("hider"),n.appendChild(a),"object"==typeof e?r(e,a):a.innerHTML=e}r(o),function(e){e.forEach(e=>{let t=document.querySelector(e[1]),n=document.querySelector(e[0]);i(n.className,"section-header section-header-"+n.className,t,"h1"),t.appendChild(n)})}([[".name","name"],[".address","address"],[".position","name"],[".contact","contact"],[".experience","main"],[".projects","main"],[".portfolio","aside"],[".skills","aside"],[".footer","footer"]]),[".email",".portfolio",".project__link",".note",".footer"].forEach(e=>{document.querySelectorAll(e).forEach(e=>{let t=a(e.textContent);e.innerHTML=t})}),document.title=o.name+" - Resume"},function(e,t,n){},function(e){e.exports={name:"Chris Black",position:"Software Developer",address:{street:"520 Rose Ln","city-state-zip":"Raleigh, NC 27610"},contact:{phone:"520-269-5118",email:"black@chrisblack.net"},portfolio:"chrisblack.net",skills:["JavaScript","TypeScript","Aurelia","React","Gatsby","Next.js","Node.js","SQL","NoSQL","HTML","CSS"],footer:"This resume was generated from a JSON file using JavaScript. Code at www.github.com/thischrisblack/Resume-the-Hard-Way.","professional experience":[{project__name:"American Board of Radiology",project__date:"2019 - Present",project__link:"www.theabr.org",project__description:"The ABR is one of 24 medical boards in the United States. As a full-stack software developer, I support the ABR's certification processes. Our recent focus: moving normally on-site activities to fully-remote platforms due to Covid-19.",project__skills:["TypeScript","Node.js","Aurelia","SQL","HTML","CSS","Tailwind CSS Library"]},{project__name:"OpenForm",project__date:"2019",project__link:"www.openform.co",project__description:"As a contractor serving an award winning strategy and design studio, I performed custom WordPress theme development, specifically exploring the newer Gutenberg capabilities.",project__skills:["PHP","WordPress","Gutenberg","HTML","CSS"]},{project__name:"Chicago Music Store",project__date:"2008 - 2019",project__link:"www.chicagomusicstore.com",project__description:"I maintained the company website and developed custom web applications and tools, both public and in-house. These tools helped customers reserve rental instruments, and staff coordinate events and manage delinquent accounts.",project__skills:["PHP","Wordpress","HTML","CSS","JavaScript","MySQL"]}],"selected projects":[{project__name:"Shelly Black's Website",project__link:"github.com/thischrisblack/shelly-black-website",project__description:"A blog for archivist/photographer Shelly Black, built on React with Next.js and deployed with Netlify.",project__skills:["React","TypeScript","Next.js","Netlify"]},{project__name:"Transmitter",project__link:"github.com/thischrisblack/transmitter-gatsby",project__description:"A previous version of my personal site, featuring a custom CMS and music player allowing users to sort tracks by mood.",project__skills:["React","Gatsby","Firebase","NoSQL"]},{project__name:"Emoji Disco",project__link:"github.com/thischrisblack/emoji-disco",project__description:"My first of likely many experiments with the Web Audio API. Upload a music file to get the party started.",project__skills:["JavaScript","HTML","CSS","Web Audio API"]},{project__name:"Glengarry Bob Ross",project__link:"twitter.com/glengarrybob",project__description:"A bot that tweets out images of Bob Ross captioned with lines from the film Glengarry Glen Ross.",project__skills:["JavaScript","Node.js","Heroku","JIMP"]}]}},function(e,t,n){e.exports=n(8).default},function(e,t,n){"use strict";t.__esModule=!0;var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(9));var a=o.tokenize,r=o.options.Options;function i(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function s(e){return e.replace(/"/g,"&quot;")}function c(e){if(!e)return"";var t=[];for(var n in e){var o=e[n]+"";t.push(n+'="'+s(o)+'"')}return t.join(" ")}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=new r(t);for(var n=a(e),o=[],l=0;l<n.length;l++){var u=n[l];if("nl"===u.type&&t.nl2br)o.push("<br>\n");else if(u.isLink&&t.check(u)){var p=t.resolve(u),f=p.formatted,h=p.formattedHref,d=p.tagName,m=p.className,g=p.target,b=p.attributes,y="<"+d+' href="'+s(h)+'"';m&&(y+=' class="'+s(m)+'"'),g&&(y+=' target="'+s(g)+'"'),b&&(y+=" "+c(b)),y+=">"+i(f)+"</"+d+">",o.push(y)}else o.push(i(u.toString()))}return o.join("")}if(!String.prototype.linkify)try{Object.defineProperty(String.prototype,"linkify",{set:function(){},get:function(){return function(e){return l(this,e)}}})}catch(e){String.prototype.linkify||(String.prototype.linkify=function(e){return l(this,e)})}t.default=l},function(e,t,n){"use strict";t.__esModule=!0,t.tokenize=t.test=t.scanner=t.parser=t.options=t.inherits=t.find=void 0;var o=n(0),a=s(n(10)),r=s(n(11)),i=s(n(12));function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)});var c=function(e){return i.run(r.run(e))};t.find=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=c(e),o=[],a=0;a<n.length;a++){var r=n[a];!r.isLink||t&&r.type!==t||o.push(r.toObject())}return o},t.inherits=o.inherits,t.options=a,t.parser=i,t.scanner=r,t.test=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=c(e);return 1===n.length&&n[0].isLink&&(!t||n[0].type===t)},t.tokenize=c},function(e,t,n){"use strict";t.__esModule=!0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a={defaultProtocol:"http",events:null,format:i,formatHref:i,nl2br:!1,tagName:"a",target:function(e,t){return"url"===t?"_blank":null},validate:!0,ignoreTags:[],attributes:null,className:"linkified"};function r(e){e=e||{},this.defaultProtocol=e.hasOwnProperty("defaultProtocol")?e.defaultProtocol:a.defaultProtocol,this.events=e.hasOwnProperty("events")?e.events:a.events,this.format=e.hasOwnProperty("format")?e.format:a.format,this.formatHref=e.hasOwnProperty("formatHref")?e.formatHref:a.formatHref,this.nl2br=e.hasOwnProperty("nl2br")?e.nl2br:a.nl2br,this.tagName=e.hasOwnProperty("tagName")?e.tagName:a.tagName,this.target=e.hasOwnProperty("target")?e.target:a.target,this.validate=e.hasOwnProperty("validate")?e.validate:a.validate,this.ignoreTags=[],this.attributes=e.attributes||e.linkAttributes||a.attributes,this.className=e.hasOwnProperty("className")?e.className:e.linkClass||a.className;for(var t=e.hasOwnProperty("ignoreTags")?e.ignoreTags:a.ignoreTags,n=0;n<t.length;n++)this.ignoreTags.push(t[n].toUpperCase())}function i(e){return e}t.defaults=a,t.Options=r,t.contains=function(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return!0;return!1},r.prototype={resolve:function(e){var t=e.toHref(this.defaultProtocol);return{formatted:this.get("format",e.toString(),e),formattedHref:this.get("formatHref",t,e),tagName:this.get("tagName",t,e),className:this.get("className",t,e),target:this.get("target",t,e),events:this.getObject("events",t,e),attributes:this.getObject("attributes",t,e)}},check:function(e){return this.get("validate",e.toString(),e)},get:function(e,t,n){var r=void 0,i=this[e];if(!i)return i;switch(void 0===i?"undefined":o(i)){case"function":return i(t,n.type);case"object":return"function"==typeof(r=i.hasOwnProperty(n.type)?i[n.type]:a[e])?r(t,n.type):r}return i},getObject:function(e,t,n){var o=this[e];return"function"==typeof o?o(t,n.type):o}}},function(e,t,n){"use strict";t.__esModule=!0,t.start=t.run=t.TOKENS=t.State=void 0;var o=n(2),a=n(1),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(a);var i="aaa|aarp|abarth|abb|abbott|abbvie|abc|able|abogado|abudhabi|ac|academy|accenture|accountant|accountants|aco|active|actor|ad|adac|ads|adult|ae|aeg|aero|aetna|af|afamilycompany|afl|africa|ag|agakhan|agency|ai|aig|aigo|airbus|airforce|airtel|akdn|al|alfaromeo|alibaba|alipay|allfinanz|allstate|ally|alsace|alstom|am|americanexpress|americanfamily|amex|amfam|amica|amsterdam|analytics|android|anquan|anz|ao|aol|apartments|app|apple|aq|aquarelle|ar|arab|aramco|archi|army|arpa|art|arte|as|asda|asia|associates|at|athleta|attorney|au|auction|audi|audible|audio|auspost|author|auto|autos|avianca|aw|aws|ax|axa|az|azure|ba|baby|baidu|banamex|bananarepublic|band|bank|bar|barcelona|barclaycard|barclays|barefoot|bargains|baseball|basketball|bauhaus|bayern|bb|bbc|bbt|bbva|bcg|bcn|bd|be|beats|beauty|beer|bentley|berlin|best|bestbuy|bet|bf|bg|bh|bharti|bi|bible|bid|bike|bing|bingo|bio|biz|bj|black|blackfriday|blanco|blockbuster|blog|bloomberg|blue|bm|bms|bmw|bn|bnl|bnpparibas|bo|boats|boehringer|bofa|bom|bond|boo|book|booking|boots|bosch|bostik|boston|bot|boutique|box|br|bradesco|bridgestone|broadway|broker|brother|brussels|bs|bt|budapest|bugatti|build|builders|business|buy|buzz|bv|bw|by|bz|bzh|ca|cab|cafe|cal|call|calvinklein|cam|camera|camp|cancerresearch|canon|capetown|capital|capitalone|car|caravan|cards|care|career|careers|cars|cartier|casa|case|caseih|cash|casino|cat|catering|catholic|cba|cbn|cbre|cbs|cc|cd|ceb|center|ceo|cern|cf|cfa|cfd|cg|ch|chanel|channel|chase|chat|cheap|chintai|chloe|christmas|chrome|chrysler|church|ci|cipriani|circle|cisco|citadel|citi|citic|city|cityeats|ck|cl|claims|cleaning|click|clinic|clinique|clothing|cloud|club|clubmed|cm|cn|co|coach|codes|coffee|college|cologne|com|comcast|commbank|community|company|compare|computer|comsec|condos|construction|consulting|contact|contractors|cooking|cookingchannel|cool|coop|corsica|country|coupon|coupons|courses|cr|credit|creditcard|creditunion|cricket|crown|crs|cruise|cruises|csc|cu|cuisinella|cv|cw|cx|cy|cymru|cyou|cz|dabur|dad|dance|data|date|dating|datsun|day|dclk|dds|de|deal|dealer|deals|degree|delivery|dell|deloitte|delta|democrat|dental|dentist|desi|design|dev|dhl|diamonds|diet|digital|direct|directory|discount|discover|dish|diy|dj|dk|dm|dnp|do|docs|doctor|dodge|dog|doha|domains|dot|download|drive|dtv|dubai|duck|dunlop|duns|dupont|durban|dvag|dvr|dz|earth|eat|ec|eco|edeka|edu|education|ee|eg|email|emerck|energy|engineer|engineering|enterprises|epost|epson|equipment|er|ericsson|erni|es|esq|estate|esurance|et|etisalat|eu|eurovision|eus|events|everbank|exchange|expert|exposed|express|extraspace|fage|fail|fairwinds|faith|family|fan|fans|farm|farmers|fashion|fast|fedex|feedback|ferrari|ferrero|fi|fiat|fidelity|fido|film|final|finance|financial|fire|firestone|firmdale|fish|fishing|fit|fitness|fj|fk|flickr|flights|flir|florist|flowers|fly|fm|fo|foo|food|foodnetwork|football|ford|forex|forsale|forum|foundation|fox|fr|free|fresenius|frl|frogans|frontdoor|frontier|ftr|fujitsu|fujixerox|fun|fund|furniture|futbol|fyi|ga|gal|gallery|gallo|gallup|game|games|gap|garden|gb|gbiz|gd|gdn|ge|gea|gent|genting|george|gf|gg|ggee|gh|gi|gift|gifts|gives|giving|gl|glade|glass|gle|global|globo|gm|gmail|gmbh|gmo|gmx|gn|godaddy|gold|goldpoint|golf|goo|goodhands|goodyear|goog|google|gop|got|gov|gp|gq|gr|grainger|graphics|gratis|green|gripe|grocery|group|gs|gt|gu|guardian|gucci|guge|guide|guitars|guru|gw|gy|hair|hamburg|hangout|haus|hbo|hdfc|hdfcbank|health|healthcare|help|helsinki|here|hermes|hgtv|hiphop|hisamitsu|hitachi|hiv|hk|hkt|hm|hn|hockey|holdings|holiday|homedepot|homegoods|homes|homesense|honda|honeywell|horse|hospital|host|hosting|hot|hoteles|hotels|hotmail|house|how|hr|hsbc|ht|htc|hu|hughes|hyatt|hyundai|ibm|icbc|ice|icu|id|ie|ieee|ifm|ikano|il|im|imamat|imdb|immo|immobilien|in|industries|infiniti|info|ing|ink|institute|insurance|insure|int|intel|international|intuit|investments|io|ipiranga|iq|ir|irish|is|iselect|ismaili|ist|istanbul|it|itau|itv|iveco|iwc|jaguar|java|jcb|jcp|je|jeep|jetzt|jewelry|jio|jlc|jll|jm|jmp|jnj|jo|jobs|joburg|jot|joy|jp|jpmorgan|jprs|juegos|juniper|kaufen|kddi|ke|kerryhotels|kerrylogistics|kerryproperties|kfh|kg|kh|ki|kia|kim|kinder|kindle|kitchen|kiwi|km|kn|koeln|komatsu|kosher|kp|kpmg|kpn|kr|krd|kred|kuokgroup|kw|ky|kyoto|kz|la|lacaixa|ladbrokes|lamborghini|lamer|lancaster|lancia|lancome|land|landrover|lanxess|lasalle|lat|latino|latrobe|law|lawyer|lb|lc|lds|lease|leclerc|lefrak|legal|lego|lexus|lgbt|li|liaison|lidl|life|lifeinsurance|lifestyle|lighting|like|lilly|limited|limo|lincoln|linde|link|lipsy|live|living|lixil|lk|loan|loans|locker|locus|loft|lol|london|lotte|lotto|love|lpl|lplfinancial|lr|ls|lt|ltd|ltda|lu|lundbeck|lupin|luxe|luxury|lv|ly|ma|macys|madrid|maif|maison|makeup|man|management|mango|map|market|marketing|markets|marriott|marshalls|maserati|mattel|mba|mc|mckinsey|md|me|med|media|meet|melbourne|meme|memorial|men|menu|meo|merckmsd|metlife|mg|mh|miami|microsoft|mil|mini|mint|mit|mitsubishi|mk|ml|mlb|mls|mm|mma|mn|mo|mobi|mobile|mobily|moda|moe|moi|mom|monash|money|monster|mopar|mormon|mortgage|moscow|moto|motorcycles|mov|movie|movistar|mp|mq|mr|ms|msd|mt|mtn|mtr|mu|museum|mutual|mv|mw|mx|my|mz|na|nab|nadex|nagoya|name|nationwide|natura|navy|nba|nc|ne|nec|net|netbank|netflix|network|neustar|new|newholland|news|next|nextdirect|nexus|nf|nfl|ng|ngo|nhk|ni|nico|nike|nikon|ninja|nissan|nissay|nl|no|nokia|northwesternmutual|norton|now|nowruz|nowtv|np|nr|nra|nrw|ntt|nu|nyc|nz|obi|observer|off|office|okinawa|olayan|olayangroup|oldnavy|ollo|om|omega|one|ong|onl|online|onyourside|ooo|open|oracle|orange|org|organic|origins|osaka|otsuka|ott|ovh|pa|page|panasonic|panerai|paris|pars|partners|parts|party|passagens|pay|pccw|pe|pet|pf|pfizer|pg|ph|pharmacy|phd|philips|phone|photo|photography|photos|physio|piaget|pics|pictet|pictures|pid|pin|ping|pink|pioneer|pizza|pk|pl|place|play|playstation|plumbing|plus|pm|pn|pnc|pohl|poker|politie|porn|post|pr|pramerica|praxi|press|prime|pro|prod|productions|prof|progressive|promo|properties|property|protection|pru|prudential|ps|pt|pub|pw|pwc|py|qa|qpon|quebec|quest|qvc|racing|radio|raid|re|read|realestate|realtor|realty|recipes|red|redstone|redumbrella|rehab|reise|reisen|reit|reliance|ren|rent|rentals|repair|report|republican|rest|restaurant|review|reviews|rexroth|rich|richardli|ricoh|rightathome|ril|rio|rip|rmit|ro|rocher|rocks|rodeo|rogers|room|rs|rsvp|ru|rugby|ruhr|run|rw|rwe|ryukyu|sa|saarland|safe|safety|sakura|sale|salon|samsclub|samsung|sandvik|sandvikcoromant|sanofi|sap|sapo|sarl|sas|save|saxo|sb|sbi|sbs|sc|sca|scb|schaeffler|schmidt|scholarships|school|schule|schwarz|science|scjohnson|scor|scot|sd|se|search|seat|secure|security|seek|select|sener|services|ses|seven|sew|sex|sexy|sfr|sg|sh|shangrila|sharp|shaw|shell|shia|shiksha|shoes|shop|shopping|shouji|show|showtime|shriram|si|silk|sina|singles|site|sj|sk|ski|skin|sky|skype|sl|sling|sm|smart|smile|sn|sncf|so|soccer|social|softbank|software|sohu|solar|solutions|song|sony|soy|space|spiegel|spot|spreadbetting|sr|srl|srt|st|stada|staples|star|starhub|statebank|statefarm|statoil|stc|stcgroup|stockholm|storage|store|stream|studio|study|style|su|sucks|supplies|supply|support|surf|surgery|suzuki|sv|swatch|swiftcover|swiss|sx|sy|sydney|symantec|systems|sz|tab|taipei|talk|taobao|target|tatamotors|tatar|tattoo|tax|taxi|tc|tci|td|tdk|team|tech|technology|tel|telecity|telefonica|temasek|tennis|teva|tf|tg|th|thd|theater|theatre|tiaa|tickets|tienda|tiffany|tips|tires|tirol|tj|tjmaxx|tjx|tk|tkmaxx|tl|tm|tmall|tn|to|today|tokyo|tools|top|toray|toshiba|total|tours|town|toyota|toys|tr|trade|trading|training|travel|travelchannel|travelers|travelersinsurance|trust|trv|tt|tube|tui|tunes|tushu|tv|tvs|tw|tz|ua|ubank|ubs|uconnect|ug|uk|unicom|university|uno|uol|ups|us|uy|uz|va|vacations|vana|vanguard|vc|ve|vegas|ventures|verisign|versicherung|vet|vg|vi|viajes|video|vig|viking|villas|vin|vip|virgin|visa|vision|vista|vistaprint|viva|vivo|vlaanderen|vn|vodka|volkswagen|volvo|vote|voting|voto|voyage|vu|vuelos|wales|walmart|walter|wang|wanggou|warman|watch|watches|weather|weatherchannel|webcam|weber|website|wed|wedding|weibo|weir|wf|whoswho|wien|wiki|williamhill|win|windows|wine|winners|wme|wolterskluwer|woodside|work|works|world|wow|ws|wtc|wtf|xbox|xerox|xfinity|xihuan|xin|xn--11b4c3d|xn--1ck2e1b|xn--1qqw23a|xn--2scrj9c|xn--30rr7y|xn--3bst00m|xn--3ds443g|xn--3e0b707e|xn--3hcrj9c|xn--3oq18vl8pn36a|xn--3pxu8k|xn--42c2d9a|xn--45br5cyl|xn--45brj9c|xn--45q11c|xn--4gbrim|xn--54b7fta0cc|xn--55qw42g|xn--55qx5d|xn--5su34j936bgsg|xn--5tzm5g|xn--6frz82g|xn--6qq986b3xl|xn--80adxhks|xn--80ao21a|xn--80aqecdr1a|xn--80asehdb|xn--80aswg|xn--8y0a063a|xn--90a3ac|xn--90ae|xn--90ais|xn--9dbq2a|xn--9et52u|xn--9krt00a|xn--b4w605ferd|xn--bck1b9a5dre4c|xn--c1avg|xn--c2br7g|xn--cck2b3b|xn--cg4bki|xn--clchc0ea0b2g2a9gcd|xn--czr694b|xn--czrs0t|xn--czru2d|xn--d1acj3b|xn--d1alf|xn--e1a4c|xn--eckvdtc9d|xn--efvy88h|xn--estv75g|xn--fct429k|xn--fhbei|xn--fiq228c5hs|xn--fiq64b|xn--fiqs8s|xn--fiqz9s|xn--fjq720a|xn--flw351e|xn--fpcrj9c3d|xn--fzc2c9e2c|xn--fzys8d69uvgm|xn--g2xx48c|xn--gckr3f0f|xn--gecrj9c|xn--gk3at1e|xn--h2breg3eve|xn--h2brj9c|xn--h2brj9c8c|xn--hxt814e|xn--i1b6b1a6a2e|xn--imr513n|xn--io0a7i|xn--j1aef|xn--j1amh|xn--j6w193g|xn--jlq61u9w7b|xn--jvr189m|xn--kcrx77d1x4a|xn--kprw13d|xn--kpry57d|xn--kpu716f|xn--kput3i|xn--l1acc|xn--lgbbat1ad8j|xn--mgb9awbf|xn--mgba3a3ejt|xn--mgba3a4f16a|xn--mgba7c0bbn0a|xn--mgbaakc7dvf|xn--mgbaam7a8h|xn--mgbab2bd|xn--mgbai9azgqp6j|xn--mgbayh7gpa|xn--mgbb9fbpob|xn--mgbbh1a|xn--mgbbh1a71e|xn--mgbc0a9azcg|xn--mgbca7dzdo|xn--mgberp4a5d4ar|xn--mgbgu82a|xn--mgbi4ecexp|xn--mgbpl2fh|xn--mgbt3dhd|xn--mgbtx2b|xn--mgbx4cd0ab|xn--mix891f|xn--mk1bu44c|xn--mxtq1m|xn--ngbc5azd|xn--ngbe9e0a|xn--ngbrx|xn--node|xn--nqv7f|xn--nqv7fs00ema|xn--nyqy26a|xn--o3cw4h|xn--ogbpf8fl|xn--p1acf|xn--p1ai|xn--pbt977c|xn--pgbs0dh|xn--pssy2u|xn--q9jyb4c|xn--qcka1pmc|xn--qxam|xn--rhqv96g|xn--rovu88b|xn--rvc1e0am3e|xn--s9brj9c|xn--ses554g|xn--t60b56a|xn--tckwe|xn--tiq49xqyj|xn--unup4y|xn--vermgensberater-ctb|xn--vermgensberatung-pwb|xn--vhquv|xn--vuq861b|xn--w4r85el8fhu5dnra|xn--w4rs40l|xn--wgbh1c|xn--wgbl6a|xn--xhq521b|xn--xkc2al3hye2a|xn--xkc2dl3a5ee0h|xn--y9a3aq|xn--yfro4i67o|xn--ygbi2ammx|xn--zfr164b|xperia|xxx|xyz|yachts|yahoo|yamaxun|yandex|ye|yodobashi|yoga|yokohama|you|youtube|yt|yun|za|zappos|zara|zero|zip|zippo|zm|zone|zuerich|zw".split("|"),s="0123456789".split(""),c="0123456789abcdefghijklmnopqrstuvwxyz".split(""),l=[" ","\f","\r","\t","\v"," "," ","᠎"],u=[],p=function(e){return new o.CharacterState(e)},f=p(),h=p(a.NUM),d=p(a.DOMAIN),m=p(),g=p(a.WS);f.on("@",p(a.AT)).on(".",p(a.DOT)).on("+",p(a.PLUS)).on("#",p(a.POUND)).on("?",p(a.QUERY)).on("/",p(a.SLASH)).on("_",p(a.UNDERSCORE)).on(":",p(a.COLON)).on("{",p(a.OPENBRACE)).on("[",p(a.OPENBRACKET)).on("<",p(a.OPENANGLEBRACKET)).on("(",p(a.OPENPAREN)).on("}",p(a.CLOSEBRACE)).on("]",p(a.CLOSEBRACKET)).on(">",p(a.CLOSEANGLEBRACKET)).on(")",p(a.CLOSEPAREN)).on("&",p(a.AMPERSAND)).on([",",";","!",'"',"'"],p(a.PUNCTUATION)),f.on("\n",p(a.NL)).on(l,g),g.on(l,g);for(var b=0;b<i.length;b++){var y=(0,o.stateify)(i[b],f,a.TLD,a.DOMAIN);u.push.apply(u,y)}var v=(0,o.stateify)("file",f,a.DOMAIN,a.DOMAIN),x=(0,o.stateify)("ftp",f,a.DOMAIN,a.DOMAIN),k=(0,o.stateify)("http",f,a.DOMAIN,a.DOMAIN),O=(0,o.stateify)("mailto",f,a.DOMAIN,a.DOMAIN);u.push.apply(u,v),u.push.apply(u,x),u.push.apply(u,k),u.push.apply(u,O);var w=v.pop(),A=x.pop(),E=k.pop(),S=O.pop(),L=p(a.DOMAIN),N=p(a.PROTOCOL),T=p(a.MAILTO);A.on("s",L).on(":",N),E.on("s",L).on(":",N),u.push(L),w.on(":",N),L.on(":",N),S.on(":",T);var j=(0,o.stateify)("localhost",f,a.LOCALHOST,a.DOMAIN);u.push.apply(u,j),f.on(s,h),h.on("-",m).on(s,h).on(c,d),d.on("-",m).on(c,d);for(var C=0;C<u.length;C++)u[C].on("-",m).on(c,d);m.on("-",m).on(s,d).on(c,d),f.defaultTransition=p(a.SYM);var R=f;t.State=o.CharacterState,t.TOKENS=r,t.run=function(e){for(var t=e.replace(/[A-Z]/g,(function(e){return e.toLowerCase()})),n=e.length,o=[],a=0;a<n;){for(var r=f,i=null,s=0,c=null,l=-1;a<n&&(i=r.next(t[a]));)(r=i).accepts()?(l=0,c=r):l>=0&&l++,s++,a++;if(!(l<0)){a-=l,s-=l;var u=c.emit();o.push(new u(e.substr(a-s,s)))}}return o},t.start=R},function(e,t,n){"use strict";t.__esModule=!0,t.start=t.run=t.TOKENS=t.State=void 0;var o=n(2),a=n(13),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(a),i=n(1);var s=function(e){return new o.TokenState(e)},c=s(),l=s(),u=s(),p=s(),f=s(),h=s(),d=s(),m=s(a.URL),g=s(),b=s(a.URL),y=s(a.URL),v=s(),x=s(),k=s(),O=s(),w=s(),A=s(a.URL),E=s(a.URL),S=s(a.URL),L=s(a.URL),N=s(),T=s(),j=s(),C=s(),R=s(),P=s(),_=s(a.EMAIL),M=s(),D=s(a.EMAIL),z=s(a.MAILTOEMAIL),q=s(),U=s(),B=s(),I=s(),H=s(a.NL);c.on(i.NL,H).on(i.PROTOCOL,l).on(i.MAILTO,u).on(i.SLASH,p),l.on(i.SLASH,p),p.on(i.SLASH,f),c.on(i.TLD,h).on(i.DOMAIN,h).on(i.LOCALHOST,m).on(i.NUM,h),f.on(i.TLD,y).on(i.DOMAIN,y).on(i.NUM,y).on(i.LOCALHOST,y),h.on(i.DOT,d),R.on(i.DOT,P),d.on(i.TLD,m).on(i.DOMAIN,h).on(i.NUM,h).on(i.LOCALHOST,h),P.on(i.TLD,_).on(i.DOMAIN,R).on(i.NUM,R).on(i.LOCALHOST,R),m.on(i.DOT,d),_.on(i.DOT,P),m.on(i.COLON,g).on(i.SLASH,y),g.on(i.NUM,b),b.on(i.SLASH,y),_.on(i.COLON,M),M.on(i.NUM,D);var K=[i.DOMAIN,i.AT,i.LOCALHOST,i.NUM,i.PLUS,i.POUND,i.PROTOCOL,i.SLASH,i.TLD,i.UNDERSCORE,i.SYM,i.AMPERSAND],G=[i.COLON,i.DOT,i.QUERY,i.PUNCTUATION,i.CLOSEBRACE,i.CLOSEBRACKET,i.CLOSEANGLEBRACKET,i.CLOSEPAREN,i.OPENBRACE,i.OPENBRACKET,i.OPENANGLEBRACKET,i.OPENPAREN];y.on(i.OPENBRACE,x).on(i.OPENBRACKET,k).on(i.OPENANGLEBRACKET,O).on(i.OPENPAREN,w),v.on(i.OPENBRACE,x).on(i.OPENBRACKET,k).on(i.OPENANGLEBRACKET,O).on(i.OPENPAREN,w),x.on(i.CLOSEBRACE,y),k.on(i.CLOSEBRACKET,y),O.on(i.CLOSEANGLEBRACKET,y),w.on(i.CLOSEPAREN,y),A.on(i.CLOSEBRACE,y),E.on(i.CLOSEBRACKET,y),S.on(i.CLOSEANGLEBRACKET,y),L.on(i.CLOSEPAREN,y),N.on(i.CLOSEBRACE,y),T.on(i.CLOSEBRACKET,y),j.on(i.CLOSEANGLEBRACKET,y),C.on(i.CLOSEPAREN,y),x.on(K,A),k.on(K,E),O.on(K,S),w.on(K,L),x.on(G,N),k.on(G,T),O.on(G,j),w.on(G,C),A.on(K,A),E.on(K,E),S.on(K,S),L.on(K,L),A.on(G,A),E.on(G,E),S.on(G,S),L.on(G,L),N.on(K,A),T.on(K,E),j.on(K,S),C.on(K,L),N.on(G,N),T.on(G,T),j.on(G,j),C.on(G,C),y.on(K,y),v.on(K,y),y.on(G,v),v.on(G,v),u.on(i.TLD,z).on(i.DOMAIN,z).on(i.NUM,z).on(i.LOCALHOST,z),z.on(K,z).on(G,q),q.on(K,z).on(G,q);var Q=[i.DOMAIN,i.NUM,i.PLUS,i.POUND,i.QUERY,i.UNDERSCORE,i.SYM,i.AMPERSAND,i.TLD];h.on(Q,U).on(i.AT,B),m.on(Q,U).on(i.AT,B),d.on(Q,U),U.on(Q,U).on(i.AT,B).on(i.DOT,I),I.on(Q,U),B.on(i.TLD,R).on(i.DOMAIN,R).on(i.LOCALHOST,_);t.State=o.TokenState,t.TOKENS=r,t.run=function(e){for(var t=e.length,n=0,o=[],r=[];n<t;){for(var i=c,s=null,l=null,u=0,p=null,f=-1;n<t&&!(s=i.next(e[n]));)r.push(e[n++]);for(;n<t&&(l=s||i.next(e[n]));)s=null,(i=l).accepts()?(f=0,p=i):f>=0&&f++,n++,u++;if(f<0)for(var h=n-u;h<n;h++)r.push(e[h]);else{r.length>0&&(o.push(new a.TEXT(r)),r=[]),n-=f,u-=f;var d=p.emit();o.push(new d(e.slice(n-u,n)))}}return r.length>0&&o.push(new a.TEXT(r)),o},t.start=c},function(e,t,n){"use strict";t.__esModule=!0,t.URL=t.TEXT=t.NL=t.EMAIL=t.MAILTOEMAIL=t.Base=void 0;var o=n(3),a=n(0),r=n(1);function i(e){return e instanceof r.DOMAIN||e instanceof r.TLD}var s=(0,o.createTokenClass)();s.prototype={type:"token",isLink:!1,toString:function(){for(var e=[],t=0;t<this.v.length;t++)e.push(this.v[t].toString());return e.join("")},toHref:function(){return this.toString()},toObject:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"http";return{type:this.type,value:this.toString(),href:this.toHref(e)}}};var c=(0,a.inherits)(s,(0,o.createTokenClass)(),{type:"email",isLink:!0}),l=(0,a.inherits)(s,(0,o.createTokenClass)(),{type:"email",isLink:!0,toHref:function(){return"mailto:"+this.toString()}}),u=(0,a.inherits)(s,(0,o.createTokenClass)(),{type:"text"}),p=(0,a.inherits)(s,(0,o.createTokenClass)(),{type:"nl"}),f=(0,a.inherits)(s,(0,o.createTokenClass)(),{type:"url",isLink:!0,toHref:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"http",t=!1,n=!1,o=this.v,a=[],s=0;o[s]instanceof r.PROTOCOL;)t=!0,a.push(o[s].toString().toLowerCase()),s++;for(;o[s]instanceof r.SLASH;)n=!0,a.push(o[s].toString()),s++;for(;i(o[s]);)a.push(o[s].toString().toLowerCase()),s++;for(;s<o.length;s++)a.push(o[s].toString());return a=a.join(""),t||n||(a=e+"://"+a),a},hasProtocol:function(){return this.v[0]instanceof r.PROTOCOL}});t.Base=s,t.MAILTOEMAIL=c,t.EMAIL=l,t.NL=p,t.TEXT=u,t.URL=f}]);