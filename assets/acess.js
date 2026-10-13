/* acessibilidade do falavado: letra para dislexia (OpenDyslexic, licença OFL) e filtros para daltonismo.
   Vale para o site e para a mesa (mesmo localStorage). Os filtros "daltonizam": puxam a cor que a pessoa
   não distingue para canais que ela vê, em vez de simular a visão dela. */
(function(){
  var base=(document.currentScript&&document.currentScript.src||'').replace(/[^\/]*$/,'');
  function ler(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } }
  function gravar(k,v){ try{ localStorage.setItem(k,v); }catch(e){} }
  var TIPOS=['nenhum','protan','deutan','tritan','acromat'];
  var M={
    protan:'1 0 0 0 0  0.4789 0.4769 0.0442 0 0  0.5973 -0.6887 1.0914 0 0  0 0 0 1 0',
    deutan:'1 0 0 0 0  0.1628 0.7250 0.1122 0 0  0.4547 -0.6454 1.1907 0 0  0 0 0 1 0',
    tritan:'0.7412 -0.4072 0.6660 0 0  0.0751 0.5852 0.3397 0 0  0 0 1 0 0  0 0 0 1 0'
  };
  var css='@font-face{font-family:"OpenDyslexic";font-weight:400;font-display:swap;src:url('+base+'fontes/opendyslexic-latin-400-normal.woff2) format("woff2")}'+
    '@font-face{font-family:"OpenDyslexic";font-weight:700;font-display:swap;src:url('+base+'fontes/opendyslexic-latin-700-normal.woff2) format("woff2")}'+
    'html.dislexia body,html.dislexia body *:not(svg):not(svg *){font-family:"OpenDyslexic",sans-serif!important;letter-spacing:0!important;word-spacing:.06em}'+
    'html.dislexia body p,html.dislexia body li{line-height:1.75}'+
    'html.dislexia .fita-texto{font-family:"OpenDyslexic",sans-serif!important}'+
    'html[data-dalt="protan"]{filter:url(#dalt-protan)}html[data-dalt="deutan"]{filter:url(#dalt-deutan)}html[data-dalt="tritan"]{filter:url(#dalt-tritan)}'+
    'html[data-dalt="acromat"]{filter:contrast(1.3) brightness(1.08)}html[data-dalt="acromat"] a{text-decoration:underline}';
  var st=document.createElement('style'); st.id='acess-css'; st.textContent=css; document.head.appendChild(st);
  var fonte=ler('a11y_fonte')==='1', dalt=TIPOS.indexOf(ler('a11y_dalt'))>0?ler('a11y_dalt'):'nenhum';
  var h=document.documentElement; h.classList.toggle('dislexia',fonte);
  function filtros(){
    if(document.getElementById('dalt-filtros')||!document.body) return;
    var d=document.createElement('div'); d.id='dalt-filtros'; d.setAttribute('aria-hidden','true');
    d.style.cssText='position:absolute;width:0;height:0;overflow:hidden';
    d.innerHTML='<svg width="0" height="0"><defs>'+Object.keys(M).map(function(k){
      return '<filter id="dalt-'+k+'" color-interpolation-filters="linearRGB"><feColorMatrix type="matrix" values="'+M[k]+'"/></filter>'; }).join('')+'</defs></svg>';
    document.body.appendChild(d);
  }
  /* o filtro só entra depois que as definições existem: um url() sem alvo esconderia a página */
  function aplicarDalt(){ filtros(); if(dalt==='nenhum') h.removeAttribute('data-dalt'); else h.setAttribute('data-dalt',dalt); }
  if(document.body) aplicarDalt(); else document.addEventListener('DOMContentLoaded',aplicarDalt);
  window.ACESS={
    tipos:TIPOS,
    fonte:function(){ return fonte; },
    dalt:function(){ return dalt; },
    setFonte:function(v){ fonte=!!v; gravar('a11y_fonte',fonte?'1':'0'); h.classList.toggle('dislexia',fonte); },
    setDalt:function(v){ dalt=TIPOS.indexOf(v)>=0?v:'nenhum'; gravar('a11y_dalt',dalt); aplicarDalt(); }
  };
})();
