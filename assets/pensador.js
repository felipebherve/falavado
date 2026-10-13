/* Página de um pensador: retratos nos dois estilos, ficha completa, ficha D&D e referências.
   Dados: mesa/data/elenco.json, fichas.json, dnd.json e refs.json (gerado pelo site/build.py a partir de pensadores/<id>.md). */
(function(){
var id=new URLSearchParams(location.search).get('id')||'marco';
var main=document.getElementById('ficha'), D={};
function el(t,c,x){ var e=document.createElement(t); if(c) e.className=c; if(x!=null) e.textContent=x; return e; }
function sec(tk){ var s=el('section','painel'), h=el('h2'); h.textContent=SITE.t(tk); s.appendChild(h); return s; }
function lista(arr){ var u=el('ul'); (arr||[]).forEach(function(x){ u.appendChild(el('li',null,x)); }); return u; }
function md(s){ return String(s||'').replace(/\*([^*]+)\*/g,'$1'); }
function nomeDe(k){ var p=D.mapa[k]; return p?p.nome:k; }
function chip(a){ var c=el('a','chip'); c.href='pensador.html?id='+a.id; var i=el('img'); i.src='mesa/img/'+(D.mapa[a.id]?D.mapa[a.id].img:a.id)+'_pin.jpg'; i.alt=''; c.appendChild(i); c.appendChild(el('span',null,nomeDe(a.id))); c.appendChild(el('small',null,'· '+a.porque)); return c; }
function zoom(src){ var z=el('div','zoom'), i=el('img'); i.src=src; i.alt=''; z.appendChild(i); z.addEventListener('click',function(){ z.remove(); }); document.body.appendChild(z); }
function pintar(){
  if(!D.mapa) return;
  var p=D.mapa[id]; if(!p){ id='marco'; p=D.mapa[id]; }
  var f=D.fichas[id]||{}, g=D.dnd[id]||{}, r=D.refs[id]||{};
  document.title=p.nome+' · falavado';
  main.textContent='';
  /* cabeça: retratos + quem é */
  var s=el('section','painel'), c=el('div','cabeca'), rt=el('div','retratos');
  [['',SITE.t('st_light')],['lc/',SITE.t('st_dark')]].forEach(function(e){ var fg=el('figure'), i=el('img'); i.src='mesa/img/'+e[0]+p.img+'.jpg'; i.alt=p.nome; i.width=240; i.height=240; i.addEventListener('click',function(){ zoom(i.src); }); fg.appendChild(i); fg.appendChild(el('figcaption',null,e[1])); rt.appendChild(fg); });
  var tx=el('div'); tx.appendChild(el('h1',null,p.nome)); tx.lastChild.style.textAlign='left';
  if(g.classe) tx.appendChild(el('p','classe t',g.classe+' · '+g.origem+' · '+g.tendencia));
  tx.appendChild(el('p',null,md(f.resumo||p.sobre)));
  if(f.indicado_por){ tx.appendChild(el('p','nota',SITE.t('l_ind')+': '+f.indicado_por)); }
  c.appendChild(rt); c.appendChild(tx); s.appendChild(c); main.appendChild(s);
  /* ficha D&D */
  if(g.atributos){
    var d=sec('sec_dnd'); d.appendChild(el('p','nota',SITE.t('dnd_how')));
    var at=el('div','atribs');
    Object.keys(g.atributos).forEach(function(k){ var v=g.atributos[k], m=Math.floor((v-10)/2), b=el('div','atrib'); b.appendChild(el('b',null,SITE.t('at_'+k))); b.appendChild(el('div','v',String(v))); b.appendChild(el('div','m',(m>=0?'+':'')+m)); var br=el('div','barra'), i=el('i'); i.style.width=Math.round((v-8)/12*100)+'%'; br.appendChild(i); b.appendChild(br); at.appendChild(b); });
    d.appendChild(at);
    var dl=el('dl','lista');
    [['l_bg',g.antecedente],['l_skills',(g.pericias||[]).join(', ')],['l_equip',(g.equipamento||[]).join(' · ')]].forEach(function(x){ dl.appendChild(el('dt',null,SITE.t(x[0]))); dl.appendChild(el('dd',null,x[1])); });
    d.appendChild(dl);
    d.appendChild(el('h3',null,SITE.t('sec_skills'))); d.lastChild.style.marginTop='18px';
    (g.habilidades||[]).forEach(function(h){ var b=el('div','hab'); b.appendChild(el('b',null,h.nome)); b.appendChild(el('p',null,h.efeito)); b.lastChild.style.margin='4px 0 0'; d.appendChild(b); });
    if(g.golpe_especial){ var b=el('div','hab especial'); b.appendChild(el('b',null,'★ '+SITE.t('sec_special')+': '+g.golpe_especial.nome)); b.appendChild(el('p',null,g.golpe_especial.efeito)); b.lastChild.style.margin='4px 0 0'; d.appendChild(b); }
    d.appendChild(el('h3',null,SITE.t('sec_person'))); d.lastChild.style.marginTop='18px';
    var pl=el('dl','lista'); [['l_ideal',g.ideal],['l_vinc',g.vinculo],['l_def',g.defeito]].forEach(function(x){ pl.appendChild(el('dt',null,SITE.t(x[0]))); pl.appendChild(el('dd',null,x[1])); }); d.appendChild(pl);
    d.appendChild(el('h3',null,SITE.t('sec_table'))); d.lastChild.style.marginTop='18px';
    if((g.aliados||[]).length){ d.appendChild(el('p','nota',SITE.t('l_allies'))); var ca=el('div','chips'); g.aliados.forEach(function(a){ ca.appendChild(chip(a)); }); d.appendChild(ca); }
    if((g.rivais||[]).length){ d.appendChild(el('p','nota',SITE.t('l_rivals'))); d.lastChild.style.marginTop='10px'; var cr=el('div','chips'); g.rivais.forEach(function(a){ cr.appendChild(chip(a)); }); d.appendChild(cr); }
    var ml=el('dl','lista'); ml.style.marginTop='14px'; [['l_round',g.na_rodada],['l_weak',g.ponto_fraco]].forEach(function(x){ ml.appendChild(el('dt',null,SITE.t(x[0]))); ml.appendChild(el('dd',null,x[1])); }); d.appendChild(ml);
    main.appendChild(d);
  }
  /* ficha completa */
  if(f.historia){ var h=sec('sec_hist'); md(f.historia).split(/\n+/).forEach(function(par){ h.appendChild(el('p',null,par)); }); main.appendChild(h); }
  if((f.ideias||[]).length){ var i2=sec('sec_ideas'); i2.appendChild(lista(f.ideias.map(md))); main.appendChild(i2); }
  if((f.obras||[]).length){ var o=sec('sec_works'); o.appendChild(lista(f.obras.map(md))); main.appendChild(o); }
  if((f.repertorio||[]).length){ var rp=sec('sec_rep'); rp.appendChild(lista(f.repertorio.map(md))); main.appendChild(rp); }
  /* referências e créditos das imagens */
  if((r.links||[]).length||(r.creditos||[]).length){
    var rf=sec('sec_refs'), ul=el('ul','ref');
    (r.links||[]).forEach(function(l){ var li=el('li'), a=el('a',null,l.t); a.href=l.u; a.target='_blank'; a.rel='noopener'; li.appendChild(a); ul.appendChild(li); });
    rf.appendChild(ul);
    if((r.creditos||[]).length){ rf.appendChild(el('h3',null,SITE.t('sec_imgs'))); rf.appendChild(el('p','nota',SITE.t('imgs_text'))); var uc=el('ul','ref');
      r.creditos.forEach(function(l){ var li=el('li'), a=el('a',null,l.t); a.href=l.u; a.target='_blank'; a.rel='noopener'; li.appendChild(a); if(l.x) li.appendChild(document.createTextNode(': '+l.x)); uc.appendChild(li); }); rf.appendChild(uc); }
    main.appendChild(rf);
  }
  /* anterior e próximo */
  var ids=D.ordem, k=ids.indexOf(id), nv=el('nav','painel navp');
  var a1=el('a','voltar',SITE.t('prev')); a1.href='pensador.html?id='+ids[(k-1+ids.length)%ids.length];
  var a2=el('a','voltar',SITE.t('all')); a2.href='pensadores.html';
  var a3=el('a','voltar',SITE.t('next')); a3.href='pensador.html?id='+ids[(k+1)%ids.length];
  nv.appendChild(a1); nv.appendChild(a2); nv.appendChild(a3); main.appendChild(nv);
  var v=el('a','voltar largo',SITE.t('back')); v.href='index.html'; main.appendChild(v);
}
function j(u){ return fetch(u).then(function(r){ return r.json(); }); }
Promise.all([j('mesa/data/elenco.json'),j('mesa/data/fichas.json'),j('mesa/data/dnd.json'),j('mesa/data/refs.json').catch(function(){ return {}; })]).then(function(v){
  var el2=v[0].elenco.concat([{id:'triboulet',nome:'Triboulet',img:'triboulet',sobre:''}]);
  D.mapa={}; el2.forEach(function(p){ D.mapa[p.id]=p; }); D.ordem=el2.map(function(p){ return p.id; });
  D.fichas=v[1].fichas||{}; D.dnd=v[2].fichas||{}; D.refs=v[3]||{}; pintar();
});
document.addEventListener('idioma',pintar);
})();
