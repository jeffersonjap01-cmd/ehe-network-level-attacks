/* EHE Network Level Attacks — shared script: icons, painted scenes, theme, page router, helpers, quiz and step player. */
(function(){
"use strict";
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>Array.from(r.querySelectorAll(s));
const NS='http://www.w3.org/2000/svg';
const root=document.documentElement;
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const fmt=(n,d)=>Number(n).toLocaleString('id-ID',{maximumFractionDigits:d==null?0:d});
const icon=(id,cls)=>'<svg class="ic '+(cls==null?'sm':cls)+'" aria-hidden="true"><use href="#'+id+'"/></svg>';

/* ---------- icon sprite ---------- */
const ICONS={
 home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
 grid:'<rect x="3.5" y="3.5" width="7" height="7" rx="2"/><rect x="13.5" y="3.5" width="7" height="7" rx="2"/><rect x="3.5" y="13.5" width="7" height="7" rx="2"/><rect x="13.5" y="13.5" width="7" height="7" rx="2"/>',
 intro:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.8v.2"/>',
 concept:'<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2V16h5.2v-.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/>',
 steps:'<path d="M4 20h4v-4h4v-4h4V8h4"/><path d="M4 20V16"/>',
 sim:'<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3"/><path d="M7.5 14h9"/>',
 shield:'<path d="M12 3 4.5 6v6c0 4.8 3.2 8.3 7.5 9.4 4.3-1.1 7.5-4.6 7.5-9.4V6z"/><path d="m9 12 2.2 2.2L15.5 10"/>',
 refs:'<path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3zM9 9h6M9 13h4"/>',
 contrast:'<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/>',
 arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
 up:'<path d="M12 19V5M6 11l6-6 6 6"/>',
 chev:'<path d="m9 6 6 6-6 6"/>',
 chevl:'<path d="m15 6-6 6 6 6"/>',
 down:'<path d="m6 9 6 6 6-6"/>',
 play:'<path d="M8 5v14l11-7z" fill="currentColor"/>',
 pause:'<path d="M8 5v14M16 5v14" stroke-width="3.2"/>',
 reset:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5"/>',
 alert:'<path d="M12 3.5 2.5 20h19zM12 10v4.5M12 17.2v.2"/>',
 check:'<path d="m5 12.5 4.5 4.5L19 7"/>',
 x:'<path d="M6 6l12 12M18 6 6 18"/>',
 minus:'<path d="M6 12h12"/>',
 lock:'<rect x="4" y="10" width="16" height="11" rx="2.5"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
 unlock:'<rect x="4" y="10" width="16" height="11" rx="2.5"/><path d="M8 10V7a4 4 0 0 1 7.6-1.8"/>',
 wave:'<path d="M2 7c2.5-2.5 5-2.5 7.5 0s5 2.5 7.5 0 4-2 5 0M2 12.5c2.5-2.5 5-2.5 7.5 0s5 2.5 7.5 0 4-2 5 0M2 18c2.5-2.5 5-2.5 7.5 0s5 2.5 7.5 0 4-2 5 0"/>',
 layers:'<path d="M12 2 2 7l10 5 10-5zM2 12l10 5 10-5M2 17l10 5 10-5"/>',
 scale:'<path d="M12 3v18M5 7h14M5 7l-3 7a3 3 0 0 0 6 0zM19 7l-3 7a3 3 0 0 0 6 0zM8 21h8"/>',
 server:'<rect x="4" y="3.5" width="16" height="7" rx="1.5"/><rect x="4" y="13.5" width="16" height="7" rx="1.5"/><path d="M8 7h.01M8 17h.01M12 7h4M12 17h4"/>',
 users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/>',
 case:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>',
 eye:'<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
 code:'<path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 4l-4 16"/>',
 wifi:'<path d="M2 8.5a15 15 0 0 1 20 0M5 12a10 10 0 0 1 14 0M8.5 15.5a5 5 0 0 1 7 0M12 19.5v.2"/>',
 target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>'
};
(function(){const s=document.createElementNS(NS,'svg');s.setAttribute('width','0');s.setAttribute('height','0');s.setAttribute('aria-hidden','true');s.style.position='absolute';s.id='sprite';
  let h='<defs id="spriteDefs"></defs>';for(const k in ICONS)h+='<symbol id="i-'+k+'" viewBox="0 0 24 24">'+ICONS[k]+'</symbol>';s.innerHTML=h;document.body.prepend(s);})();

/* ---------- painted scenes (brush-stroke SVG, blue palette) ---------- */
(function scenes(){
  const P={n9:'#0b2545',n8:'#13315c',n7:'#1d4e89',n6:'#2563a6',n5:'#3a7bc8',n4:'#5f9ad8',n3:'#8fbbe6',n2:'#bfd7f1',n1:'#dde9f7',n0:'#f2f7fd'};
  function R(seed){let s=seed>>>0;return()=>{s=(s*1664525+1013904223)>>>0;return s/4294967296;};}
  function dabs(r,n,box,cols,o){let s='';const [x0,y0,x1,y1]=box;
    for(let i=0;i<n;i++){const x=x0+r()*(x1-x0),y=y0+r()*(y1-y0);let ang=o.ang||0;
      if(o.swirl){ang=Math.atan2(y-o.swirl[1],x-o.swirl[0])+Math.PI/2;}
      ang+=(r()-.5)*(o.jit==null?.5:o.jit);
      const len=o.len[0]+r()*(o.len[1]-o.len[0]),w=o.w[0]+r()*(o.w[1]-o.w[0]),dx=Math.cos(ang)*len,dy=Math.sin(ang)*len,bend=(r()-.5)*.6;
      const c=cols[Math.floor(r()*cols.length)],op=(o.op||.7)*(.6+r()*.4);
      s+='<path d="M'+x.toFixed(1)+' '+y.toFixed(1)+'q'+(dx/2-dy*bend).toFixed(1)+' '+(dy/2+dx*bend).toFixed(1)+' '+dx.toFixed(1)+' '+dy.toFixed(1)+'" stroke="'+c+'" stroke-width="'+w.toFixed(1)+'" opacity="'+op.toFixed(2)+'"/>';}
    return '<g fill="none" stroke-linecap="round">'+s+'</g>';}
  const defs=$('#spriteDefs'),sprite=$('#sprite');
  defs.innerHTML=
    '<linearGradient id="gF" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+P.n8+'"/><stop offset=".5" stop-color="'+P.n5+'"/><stop offset=".63" stop-color="'+P.n3+'"/><stop offset=".66" stop-color="'+P.n7+'"/><stop offset="1" stop-color="'+P.n9+'"/></linearGradient>'+
    '<linearGradient id="gL" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+P.n5+'"/><stop offset=".55" stop-color="'+P.n2+'"/><stop offset="1" stop-color="'+P.n1+'"/></linearGradient>'+
    '<linearGradient id="gS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+P.n7+'"/><stop offset=".45" stop-color="'+P.n4+'"/><stop offset=".62" stop-color="'+P.n2+'"/><stop offset="1" stop-color="'+P.n6+'"/></linearGradient>'+
    '<linearGradient id="gG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="'+P.n9+'"/><stop offset="1" stop-color="'+P.n6+'"/></linearGradient>'+
    '<linearGradient id="gN" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+P.n9+'"/><stop offset=".7" stop-color="'+P.n7+'"/><stop offset="1" stop-color="'+P.n8+'"/></linearGradient>'+
    '<linearGradient id="gM" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="'+P.n0+'"/><stop offset="1" stop-color="'+P.n1+'"/></linearGradient>'+
    '<radialGradient id="gGlow"><stop offset="0" stop-color="#ffffff" stop-opacity=".9"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></radialGradient>'+
    '<clipPath id="cGlobe"><circle cx="390" cy="215" r="150"/></clipPath>';
  const add=(id,body)=>{const s=document.createElementNS(NS,'symbol');s.setAttribute('id',id);s.setAttribute('viewBox','0 0 600 400');s.setAttribute('preserveAspectRatio','xMidYMid slice');s.innerHTML=body;sprite.appendChild(s);};
  (function(){const r=R(11);let b='<rect width="600" height="400" fill="url(#gF)"/>';
    b+=dabs(r,150,[0,0,600,235],[P.n6,P.n5,P.n4,P.n7,P.n3],{swirl:[230,110],len:[14,30],w:[3,6],op:.6});
    b+='<circle cx="455" cy="92" r="70" fill="url(#gGlow)" opacity=".5"/><circle cx="455" cy="92" r="40" fill="'+P.n1+'"/>';
    b+=dabs(r,40,[395,32,515,152],[P.n2,P.n1,P.n3],{swirl:[455,92],len:[10,20],w:[3,5],jit:.2,op:.8});
    b+='<path d="M0 238C70 212 130 220 190 230S310 205 370 224 500 212 600 230V262H0z" fill="'+P.n6+'"/><path d="M0 252C90 236 160 244 240 250S420 236 600 248V266H0z" fill="'+P.n7+'"/>';
    b+='<rect y="262" width="600" height="138" fill="'+P.n8+'"/>'+dabs(r,170,[0,262,600,400],[P.n7,P.n6,P.n5,P.n4,P.n3],{ang:0,jit:.12,len:[12,34],w:[2,4],op:.65});
    b+=dabs(r,26,[425,262,485,360],[P.n2,P.n1],{ang:0,jit:.1,len:[8,20],w:[2,3],op:.9});
    b+='<path d="M370 400 384 316C400 296 450 286 600 278V400Z" fill="'+P.n9+'"/>';
    [[402,30,84],[440,38,118],[484,28,76],[518,40,104],[562,30,88]].forEach(([x,w,h])=>{const y=300-h;b+='<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="3" fill="'+P.n8+'" stroke="'+P.n6+'" stroke-width="1.5"/>';
      for(let yy=y+8;yy<296;yy+=11)for(let xx=x+5;xx<x+w-6;xx+=9){if(r()<.62)b+='<rect x="'+xx+'" y="'+yy+'" width="5" height="4" fill="'+(r()<.5?P.n3:P.n1)+'" opacity="'+(.5+r()*.5).toFixed(2)+'"/>';}});
    for(let i=0;i<16;i++){const t=i/16,x=30+t*340+(r()-.5)*40,y=340-t*110+(r()-.5)*46;
      b+='<line x1="'+(x-30)+'" y1="'+(y+10)+'" x2="'+(x-4)+'" y2="'+(y+1.5)+'" stroke="'+P.n2+'" stroke-width="2" opacity=".5" stroke-linecap="round"/><g transform="translate('+x.toFixed(1)+' '+y.toFixed(1)+') rotate(-17)"><rect x="-8" y="-6" width="16" height="11" rx="2" fill="'+P.n1+'" stroke="'+P.n6+'"/><path d="M-8 -6 0 1 8 -6" fill="none" stroke="'+P.n6+'"/></g>';}
    add('sc-flood',b);})();
  (function(){const r=R(23);let b='<rect width="600" height="400" fill="url(#gL)"/>';
    b+=dabs(r,140,[0,0,600,210],[P.n4,P.n3,P.n2,P.n5],{swirl:[480,80],len:[14,28],w:[3,6],op:.55});
    b+='<circle cx="480" cy="80" r="70" fill="url(#gGlow)" opacity=".7"/><circle cx="480" cy="80" r="34" fill="'+P.n0+'"/>';
    [[205,P.n3,[P.n2,P.n4]],[245,P.n5,[P.n4,P.n6]],[292,P.n7,[P.n6,P.n5]],[345,P.n9,[P.n8,P.n7]]].forEach(([y,c,dc],i)=>{const a=18+i*6;b+='<path d="M0 '+(y+a)+'C120 '+(y-a)+' 220 '+(y+a*.6)+' 330 '+(y-a*.3)+'S520 '+(y-a)+' 600 '+(y+a*.4)+'V400H0z" fill="'+c+'"/>';
      b+=dabs(r,45,[0,y+6,600,y+60],dc,{ang:0,jit:.3,len:[12,26],w:[2,4],op:.55});});
    b+='<g fill="'+P.n8+'" stroke="'+P.n9+'" stroke-width="1.5"><rect x="440" y="226" width="110" height="64"/><rect x="430" y="196" width="30" height="94"/><rect x="530" y="196" width="30" height="94"/><rect x="478" y="182" width="34" height="108"/></g>';
    b+='<g fill="'+P.n2+'">';for(let x=430;x<560;x+=8)b+='<rect x="'+x+'" y="'+(x>=478&&x<512?176:x<460||x>=530?190:220)+'" width="5" height="6"/>';b+='</g>';
    b+='<path d="M495 206 482 211v8c0 6 5.5 10 13 12 7.5-2 13-6 13-12v-8z" fill="'+P.n1+'"/><path d="m489 219 4 4 8-8" stroke="'+P.n8+'" stroke-width="2.4" fill="none"/>';
    for(let i=0;i<34;i++){const y=150+r()*230;const x=r()<.7?r()*90:90+r()*140;b+='<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="'+(2+r()*3).toFixed(1)+'" fill="'+P.n0+'" opacity="'+(.5+r()*.5).toFixed(2)+'"/>';}
    add('sc-layers',b);})();
  (function(){const r=R(37);let b='<rect width="600" height="400" fill="url(#gS)"/>';
    b+=dabs(r,140,[0,0,600,230],[P.n5,P.n4,P.n3,P.n6],{swirl:[330,150],len:[14,30],w:[3,6],op:.55});
    b+='<circle cx="330" cy="168" r="80" fill="url(#gGlow)" opacity=".7"/><circle cx="330" cy="168" r="34" fill="'+P.n0+'"/>';
    b+='<path d="M0 230C100 200 200 214 300 222S470 196 600 210V400H0z" fill="'+P.n4+'"/><path d="M0 270C120 250 260 262 380 256S520 240 600 248V400H0z" fill="'+P.n6+'"/>';
    b+=dabs(r,120,[0,262,600,400],[P.n7,P.n5,P.n6,P.n8],{ang:-.2,jit:.4,len:[10,24],w:[3,5],op:.6});
    b+='<path d="M230 400C290 340 380 300 500 262" stroke="'+P.n1+'" stroke-width="36" fill="none" stroke-linecap="round"/><path d="M230 400C290 340 380 300 500 262" stroke="'+P.n4+'" stroke-width="3" stroke-dasharray="14 12" fill="none"/>';
    b+='<g transform="translate(445 150)"><path d="M0 52 55 22 110 52z" fill="'+P.n0+'" stroke="'+P.n7+'" stroke-width="2"/><rect x="6" y="52" width="98" height="8" fill="'+P.n1+'"/>';
    for(let i=0;i<4;i++)b+='<rect x="'+(14+i*24)+'" y="60" width="11" height="44" fill="'+P.n0+'" stroke="'+P.n3+'"/>';
    b+='<rect x="0" y="104" width="110" height="10" fill="'+P.n1+'" stroke="'+P.n3+'"/></g>';
    b+='<g transform="translate(300 262)"><path d="M14 0V-36a26 26 0 0 1 52 -2V-56" stroke="'+P.n1+'" stroke-width="11" fill="none" stroke-linecap="round" transform="rotate(-14 66 0)"/><rect x="0" y="0" width="80" height="66" rx="14" fill="'+P.n8+'" stroke="'+P.n9+'" stroke-width="2"/><circle cx="40" cy="28" r="8" fill="'+P.n3+'"/><rect x="36" y="30" width="8" height="18" rx="3" fill="'+P.n3+'"/></g>';
    add('sc-ssl',b);})();
  (function(){const r=R(51);let b='<rect width="600" height="400" fill="url(#gG)"/>';
    b+=dabs(r,90,[0,0,600,400],[P.n7,P.n6,P.n8],{swirl:[390,215],len:[16,30],w:[3,6],op:.5});
    for(let i=0;i<40;i++)b+='<circle cx="'+(r()*600).toFixed(1)+'" cy="'+(r()*400).toFixed(1)+'" r="'+(0.8+r()*1.8).toFixed(1)+'" fill="'+P.n1+'" opacity="'+(.4+r()*.5).toFixed(2)+'"/>';
    b+='<circle cx="390" cy="215" r="150" fill="'+P.n5+'"/><g clip-path="url(#cGlobe)">'+dabs(r,220,[240,65,540,365],[P.n4,P.n6,P.n3,P.n5,P.n2],{ang:.1,jit:.5,len:[10,22],w:[3,6],op:.7})+'</g>';
    b+='<g fill="none" stroke="'+P.n1+'" stroke-width="1.4" opacity=".55"><ellipse cx="390" cy="215" rx="150" ry="52"/><ellipse cx="390" cy="215" rx="58" ry="150"/><ellipse cx="390" cy="215" rx="112" ry="150"/><path d="M240 215h300"/></g>';
    const N=[[300,150],[360,110],[455,140],[505,215],[440,290],[350,300],[290,250],[395,205]];
    b+='<g stroke="'+P.n0+'" stroke-width="1.8" opacity=".85">';[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0],[7,0],[7,2],[7,4],[7,6]].forEach(([a,c])=>{b+='<line x1="'+N[a][0]+'" y1="'+N[a][1]+'" x2="'+N[c][0]+'" y2="'+N[c][1]+'"/>';});b+='</g>';
    N.forEach(([x,y],i)=>{b+='<circle cx="'+x+'" cy="'+y+'" r="'+(i===7?9:6)+'" fill="'+P.n0+'"/><circle cx="'+x+'" cy="'+y+'" r="'+(i===7?4:2.5)+'" fill="'+P.n7+'"/>';});
    add('sc-globe',b);})();
  (function(){const r=R(67);let b='<rect width="600" height="400" fill="url(#gN)"/>';
    b+=dabs(r,200,[0,0,600,320],[P.n7,P.n6,P.n5,P.n4],{swirl:[200,130],len:[14,30],w:[3,6],op:.55});
    b+=dabs(r,90,[330,20,600,260],[P.n6,P.n5,P.n3],{swirl:[470,120],len:[12,24],w:[3,5],op:.55});
    for(let i=0;i<14;i++){const x=r()*600,y=r()*260,s=2+r()*4;b+='<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="'+(s*3).toFixed(1)+'" fill="url(#gGlow)" opacity=".5"/><circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="'+s.toFixed(1)+'" fill="'+P.n1+'"/>';}
    b+='<circle cx="520" cy="70" r="30" fill="'+P.n1+'"/><circle cx="534" cy="62" r="27" fill="'+P.n8+'"/>';
    b+='<path d="M0 330C90 300 170 320 260 312S440 290 600 306V400H0z" fill="'+P.n9+'"/>'+dabs(r,50,[0,320,600,400],[P.n8,P.n7],{ang:0,jit:.3,len:[12,24],w:[2,4],op:.6});
    add('sc-night',b);})();
  (function(){const r=R(79);let b='<rect width="600" height="400" fill="url(#gM)"/>';
    ['M280 80C330 50 420 60 450 100S430 180 380 190 290 150 280 80z','M420 210C470 190 560 200 580 250S540 340 480 330 400 260 420 210z','M260 250C300 230 350 250 350 290S300 350 270 330 230 270 260 250z'].forEach(d=>{b+='<path d="'+d+'" fill="'+P.n2+'"/>';});
    b+=dabs(r,120,[250,60,590,350],[P.n3,P.n2,P.n4],{ang:0,jit:.8,len:[8,16],w:[2,4],op:.5});
    b+='<path d="M310 300C330 220 360 160 370 120S470 160 500 260" stroke="'+P.n7+'" stroke-width="3" stroke-dasharray="2 9" stroke-linecap="round" fill="none"/>';
    [[310,300],[370,120],[440,150],[500,260]].forEach(([x,y],i)=>{b+='<path d="M'+x+' '+(y-2)+'c-9 0-14-6-14-13a14 14 0 0 1 28 0c0 7-5 13-14 13z" fill="'+(i===0?P.n8:P.n6)+'"/><circle cx="'+x+'" cy="'+(y-16)+'" r="5" fill="'+P.n0+'"/>';});
    add('sc-map',b);})();
})();

/* ---------- theme + canvas colors ---------- */
const mq=matchMedia('(prefers-color-scheme: dark)');
const C={};const themeHooks=[];
function readColors(){const cs=getComputedStyle(root);['--c-strong','--c-mid','--c-light','--c-faint','--c-bg','--c-surface','--muted','--ink','--text'].forEach(k=>C[k.replace(/^--(c-)?/,'')]=cs.getPropertyValue(k).trim());}
readColors();
function themeChanged(){readColors();themeHooks.forEach(f=>f());}
const tb=$('#themeBtn');if(tb)tb.addEventListener('click',()=>{const cur=root.dataset.theme||(mq.matches?'dark':'light');root.dataset.theme=cur==='dark'?'light':'dark';themeChanged();});
mq.addEventListener&&mq.addEventListener('change',themeChanged);

/* ---------- progress + back to top ---------- */
const prog=$('#progress'),toTop=$('#toTop');
function onScroll(){const max=root.scrollHeight-root.clientHeight;if(prog)prog.style.width=(max>0?root.scrollTop/max*100:0)+'%';if(toTop)toTop.classList.toggle('show',root.scrollTop>700);}
addEventListener('scroll',onScroll,{passive:true});
if(toTop)toTop.addEventListener('click',()=>{window.scrollTo({top:0,behavior:reduce?'auto':'smooth'});});
document.addEventListener('click',e=>{const m=$('details.menu[open]');if(m&&!m.contains(e.target))m.removeAttribute('open');});

/* ---------- page router (one page per required component) ---------- */
const pages=$$('.page');let current='';
const routeHooks=[];
function route(){
  if(!pages.length)return;
  const ids=pages.map(p=>p.dataset.page);
  let h=decodeURIComponent(location.hash.slice(1))||ids[0],page=h,target=null;
  if(!ids.includes(h)){const el=document.getElementById(h);const pg=el&&el.closest('.page');if(pg){page=pg.dataset.page;target=el;}else page=ids[0];}
  const changed=page!==current;current=page;
  pages.forEach(p=>p.classList.toggle('on',p.dataset.page===page));
  $$('[data-nav]').forEach(a=>{if(a.dataset.nav===page)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  const pg=pages.find(p=>p.dataset.page===page);
  const here=$('#crumbHere');if(here)here.textContent=pg.dataset.title;
  document.title=pg.dataset.title+' · '+document.body.dataset.site;
  if(target){requestAnimationFrame(()=>{target.scrollIntoView({block:'start'});if(target.matches('ol.refs li')){target.classList.add('flash');setTimeout(()=>target.classList.remove('flash'),1800);}});}
  else if(changed)window.scrollTo(0,0);
  if(changed){const m=$('#main');m&&m.focus({preventScroll:true});routeHooks.forEach(f=>f(page));}
  onScroll();
}
addEventListener('hashchange',route);

/* ---------- canvas helpers ---------- */
function makeCanvas(cv,onLayout){
  const ctx=cv.getContext('2d');const s={ctx,W:0,H:0};
  function resize(first){const r=cv.getBoundingClientRect();if(!r.width)return;const d=Math.min(2,devicePixelRatio||1);s.W=r.width;s.H=r.height;cv.width=Math.round(r.width*d);cv.height=Math.round(r.height*d);ctx.setTransform(d,0,0,d,0,0);if(first!==true){onLayout&&onLayout();s.after&&s.after();}}
  resize(true);new ResizeObserver(()=>resize()).observe(cv);return s;
}
function rrect(ctx,x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();}
function diamond(ctx,x,y,s){ctx.beginPath();ctx.moveTo(x,y-s);ctx.lineTo(x+s,y);ctx.lineTo(x,y+s);ctx.lineTo(x-s,y);ctx.closePath();}
function tri(ctx,x,y,s){ctx.beginPath();ctx.moveTo(x,y-s);ctx.lineTo(x+s,y+s*.8);ctx.lineTo(x-s,y+s*.8);ctx.closePath();}
/* animation loop that only runs while visible and while sim.running */
function loop(sim,el){
  let raf=0,last=0,visible=false;
  function frame(t){const dt=Math.min(.05,(t-last)/1000||0);last=t;sim.step(dt);sim.draw();raf=(sim.running&&visible)?requestAnimationFrame(frame):0;}
  const kick=()=>{if(!raf&&sim.running&&visible){last=performance.now();raf=requestAnimationFrame(frame);}};
  new IntersectionObserver(es=>{visible=es[0].isIntersecting;if(visible)kick();},{threshold:.05}).observe(el);
  return {kick};
}

/* ---------- step player: Next / Previous / Play / Pause ---------- */
function stepper(o){
  // o: {count:()=>n, onStep:(i)=>{}, prev, next, play, label, stages(ul), interval}
  let i=0,timer=0;
  const total=()=>o.count();
  function render(){i=clamp(i,0,total()-1);o.onStep(i);if(o.label)o.label.textContent='Tahap '+(i+1)+' / '+total();
    if(o.prev)o.prev.disabled=i===0;if(o.next)o.next.disabled=i===total()-1;
    if(o.stages)$$('li',o.stages).forEach((li,k)=>{li.classList.toggle('done',k<i);li.classList.toggle('cur',k===i);});}
  function setPlay(on){if(on&&i>=total()-1){i=0;render();}clearInterval(timer);timer=0;
    if(on){timer=setInterval(()=>{if(i>=total()-1){setPlay(false);return;}i++;render();},o.interval||(reduce?3500:2600));}
    if(o.play){o.play.innerHTML=icon(on?'i-pause':'i-play','');o.play.setAttribute('aria-pressed',on);o.play.setAttribute('aria-label',on?'Jeda':'Putar otomatis');}}
  if(o.prev)o.prev.addEventListener('click',()=>{setPlay(false);i--;render();});
  if(o.next)o.next.addEventListener('click',()=>{setPlay(false);i++;render();});
  if(o.play)o.play.addEventListener('click',()=>setPlay(!timer));
  return {go(k){i=k;render();},get i(){return i;},render,stop(){setPlay(false);},playing:()=>!!timer,start(){setPlay(true);}};
}

/* ---------- quiz ---------- */
function quiz(box,Q,scoreEl){
  let score=0,done=0;const L='ABCD';
  function upd(){if(!scoreEl)return;$('[data-score]',scoreEl).textContent=score;$('[data-total]',scoreEl).textContent=Q.length;$('[data-done]',scoreEl).textContent=done;}
  function build(){box.innerHTML='';score=0;done=0;
    Q.forEach(([q,opts,ans,ex],qi)=>{const c=document.createElement('div');c.className='qitem';
      c.innerHTML='<fieldset><legend><span>'+String(qi+1).padStart(2,'0')+'</span>'+q+'</legend><div class="opts"></div></fieldset><p class="fb" role="status"></p>';
      const os=$('.opts',c),fb=$('.fb',c);
      opts.forEach((o,oi)=>{const b=document.createElement('button');b.type='button';b.className='opt';b.innerHTML='<span class="k">'+L[oi]+'</span><span></span>';b.lastChild.textContent=o;
        b.addEventListener('click',()=>{const bs=$$('.opt',os);bs.forEach(x=>x.disabled=true);bs[ans].classList.add('correct');$('.k',bs[ans]).innerHTML=icon('i-check');
          if(oi===ans){score++;fb.innerHTML='<b>Benar.</b> '+ex;}else{b.classList.add('wrong');$('.k',b).innerHTML=icon('i-x');fb.innerHTML='<b>Kurang tepat.</b> Jawaban yang benar adalah '+L[ans]+'. '+ex;}
          fb.classList.add('show');done++;upd();});os.appendChild(b);});
      box.appendChild(c);});upd();}
  if(scoreEl){const r=$('[data-act=quiz-reset]',scoreEl);r&&r.addEventListener('click',()=>{build();box.scrollIntoView({block:'start'});});}
  build();
}

window.EHE={$,$$,clamp,fmt,icon,reduce,C,themeHooks,routeHooks,makeCanvas,rrect,diamond,tri,loop,stepper,quiz,route};
document.addEventListener('DOMContentLoaded',()=>{route();onScroll();});
if(document.readyState!=='loading')setTimeout(()=>{route();onScroll();},0);
})();
