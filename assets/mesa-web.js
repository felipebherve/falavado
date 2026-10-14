/* Adaptador da mesa para o site (fora do Claude).
   - window.claude de mentira: sem banco nem conta; o Claude responde pela chave da API da própria pessoa.
   - As rodadas ficam no navegador (o modelo usa o banco local quando não há banco).
   - Idioma escolhido no site: PT, EN ou ES (as falas saem na língua escolhida).
   - Fichas D&D entram no prompt pelo próprio modelo (data/fichas.json), botão para voltar ao site e #r-<id> abre uma rodada. */
window.SITE_WEB=true;
(function(){
  function ler(k){ try{ return localStorage.getItem(k)||''; }catch(e){ return ''; } }
  function gravar(k,v){ try{ if(v) localStorage.setItem(k,v); else localStorage.removeItem(k); }catch(e){} }
  var MODELO='claude-sonnet-5-5';
  function claudeApi(prompt,o){
    o=o||{}; var k=ler('ia_key_claude_web');
    if(!k) return Promise.reject({code:'chave',message:'Para usar o Claude no site, cole a sua chave da API da Anthropic em Suas IAs. Para começar de graça, use o Gemini.'});
    return fetch('https://api.anthropic.com/v1/messages',{method:'POST',signal:o.signal,headers:{'content-type':'application/json','x-api-key':k,'anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},
      body:JSON.stringify({model:MODELO,max_tokens:8000,messages:[{role:'user',content:prompt}]})}).then(function(r){
      if(r.status===401||r.status===403) throw {code:'chave',message:'A chave do Claude foi recusada. Confira em Suas IAs.'};
      if(r.status===429) throw {code:'rate_limited'};
      if(!r.ok) throw {code:'falhou'};
      return r.json();
    },function(e){ if(e&&e.name==='AbortError') throw {code:'cancelled'}; throw {code:'barrada'}; }).then(function(d){
      var t=(d.content||[]).map(function(c){ return c.text||''; }).join(''); if(!t) throw {code:'falhou'}; return {text:t};
    });
  }
  var shim={use:function(n){ return Promise.resolve(n==='sample'?claudeApi:null); }};
  /* dentro de outra página que já tenha window.claude (a prévia), o site continua usando o adaptador */
  try{ Object.defineProperty(window,'claude',{configurable:false,get:function(){ return shim; },set:function(){}}); }catch(e){ try{ window.claude=shim; }catch(_){} }


  var SL=ler('site_idioma')||'pt';
  document.addEventListener('DOMContentLoaded',function(){
    /* espanhol: a interface fica em português (a mais próxima) e as falas saem em espanhol */
    /* espanhol: o botão ES da mesa traduz a interface (data/es.js) e as falas saem em espanhol */
    if(window.I18N){
      var inst0=I18N.instrucao, fala0=I18N.instrucaoFala;
      I18N.instrucao=function(){ return I18N.lang()==='es'?'\n\nIMPORTANTE: escribe todo lo que se mostrará (titulo, papel y texto de cada fala) en español, manteniendo las ideas reales y la voz de cada pensador. En el campo papel, nombra los papeles especiales en español: "desacuerdo fuerte", "pregunta que duele", "indagación filosófica", "punto de vista de fuera", "respuesta extra". Mantén las claves del JSON exactamente como se piden.':inst0(); };
      I18N.instrucaoFala=function(){ return I18N.lang()==='es'?' Responde en español.':fala0(); };
    }
    /* Claude no site: chave da API da Anthropic, guardada só neste navegador */
    var box=document.querySelector('[data-ia="claude"]');
    if(box){
      var sm=box.querySelector('small'); if(sm) sm.textContent='No site, usa a sua chave da API da Anthropic (cobrada por uso, na sua conta). Quem tem conta do Claude também pode usar a mesa direto lá: veja "Usar pelo Claude" no site.';
      var ch=document.createElement('div'); ch.className='chave-web';
      ch.innerHTML='<label for="key-claude-web">Sua chave da Anthropic</label><input type="password" id="key-claude-web" autocomplete="off" spellcheck="false" placeholder="sk-ant-…"><div class="lin"><a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noopener">Criar a chave na Anthropic</a><button type="button" id="apagar-claude-web">Apagar chave</button><span class="ok"></span></div>';
      box.appendChild(ch);
      var inp=ch.querySelector('input'), ok=ch.querySelector('.ok'), cb=document.getElementById('ia-claude');
      function est(){ ch.hidden=!(cb&&cb.checked); ok.textContent=inp.value?'Chave guardada neste navegador.':'Falta colar a chave.'; }
      inp.value=ler('ia_key_claude_web'); est();
      inp.addEventListener('input',function(){ gravar('ia_key_claude_web',inp.value.trim()); est(); });
      ch.querySelector('#apagar-claude-web').addEventListener('click',function(){ inp.value=''; gravar('ia_key_claude_web',''); est(); });
      if(cb) cb.addEventListener('change',est);
    }
    var av=document.getElementById('ia-aviso'); if(av) av.textContent='Aqui no site, cada IA usa a chave que você colou, e a conta é sua. Sem chave nenhuma, use Sem vincular chave: você copia o pedido e cola na IA que já usa. Se a escolhida não responder, eu chamo a próxima marcada.';
    /* Sem vincular chave é a primeira sugerida (vem marcada na primeira visita) e, no topo, o aviso de que direto no Claude basta a conta do Claude */
    var cor=document.querySelector('#contas .corpo'), man=document.querySelector('[data-ia="manual"]'), cl=document.querySelector('[data-ia="claude"]');
    if(man&&cl) cl.parentNode.insertBefore(man,cl);
    if(cor){ var dc=document.createElement('p'); dc.className='dica-claude'; dc.appendChild(document.createTextNode('Usando direto no Claude, você só precisa de uma conta Claude: sem chave e sem copiar e colar.'));
      var la=document.createElement('a'); la.href='../claude.html'; la.textContent='Veja como usar pelo Claude'; dc.appendChild(document.createTextNode(' ')); dc.appendChild(la); cor.insertBefore(dc,cor.firstChild); }
    /* voltar ao site, no topo e no fim */
    var VOLTA={pt:'← Voltar à página principal',en:'← Back to the main page',es:'← Volver a la página principal'};
    function rotulo(){ var l=(document.documentElement.lang||'pt').slice(0,2); return VOLTA[l]||VOLTA.pt; }
    function voltar(cls){ var a=document.createElement('a'); a.href='../index.html'; a.className=cls; a.setAttribute('translate','no'); a.textContent=rotulo(); return a; }
    var v1=voltar('site-voltar'), v2=voltar('site-voltar largo');
    /* o de cima vai para a barra do topo da mesa (igual à do site), curto; o de baixo fica no fim da página */
    var te=document.getElementById('topo-esq'); if(te){ v1.classList.add('curto'); te.appendChild(v1); } else document.body.insertBefore(v1,document.body.firstChild); document.body.appendChild(v2);
    var CURTO={pt:'← Voltar',en:'← Back',es:'← Volver'};
    function curto(){ var l=(document.documentElement.lang||'pt').slice(0,2); return CURTO[l]||CURTO.pt; }
    if(te) v1.textContent=curto();
    new MutationObserver(function(){ v2.textContent=rotulo(); v1.textContent=te?curto():rotulo(); }).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
    /* #r-<id>: abre aquela rodada (as rodadas de exemplo, por exemplo) */
    var h=(location.hash.match(/^#r-([A-Za-z0-9._-]+)$/)||[])[1];
    if(h){ var n=0, t=setInterval(function(){ var b=document.querySelector('[aria-controls="p-'+h+'"]'); if(b){ clearInterval(t); if(b.getAttribute('aria-expanded')!=='true') b.click(); b.scrollIntoView({block:'start'}); } else if(++n>40) clearInterval(t); },150); }
  });

  /* Seu progresso (balão próprio, logo depois do Enviar à mesa): a pessoa salva tudo num MD, guarda no chat da IA dela e carrega de volta.
     O site não escreve no chat de ninguém: ele baixa e copia o arquivo, e lê o arquivo que a pessoa traz.
     Formato "falavado-registro 1", o mesmo da mesa dentro do Claude: parte legível + bloco falavado-dados com tudo exato.
     O áudio não vai no arquivo: a narração é refeita do texto, na voz escolhida. Chaves das IAs nunca entram no arquivo. */
  var PG={
    pt:{tit:'Seu progresso',nota:'Tudo o que você faz e configura aqui fica só neste navegador. Salve o seu MD e guarde no chat da sua IA para não perder nada.',
      salvar:'Salvar meu MD',cp:'Copiar',cpok:'Copiado!',carregar:'Carregar meu MD',info:'Info',abrir:'Abrir o chat da minha IA',
      colar:'Ou cole aqui o texto do seu MD:',colarbt:'Carregar o texto colado',
      infotxt:'<p><b>Como salvar</b></p><ol><li>Toque em <b>Salvar meu MD</b>. O arquivo é baixado e o texto é copiado.</li><li>Abra o chat da IA que você usa na mesa (o botão <b>Abrir o chat da minha IA</b> leva até lá).</li><li>Anexe o arquivo baixado, ou cole o texto, e escreva: <i class="frase">Guarde este registro da minha Mesa dos Pensadores.</i></li></ol><p><b>Como carregar</b></p><ol><li>No chat da sua IA, baixe o arquivo que você anexou. Se você colou o texto, peça: <i class="frase">Me devolva o meu registro da Mesa dos Pensadores exatamente como está, sem mudar nada.</i> e copie a resposta.</li><li>Aqui, toque em <b>Carregar meu MD</b> e escolha o arquivo, ou cole o texto na caixa abaixo.</li><li>As rodadas, as respostas e o seu nome voltam para a mesa, e os pensadores lembram de tudo.</li></ol><p class="nota">O arquivo guarda como chamar você, as suas configurações, os pensamentos, as falas e as respostas. O áudio não vai no arquivo: a narração é refeita a partir do texto. As chaves das suas IAs nunca entram no arquivo; depois de carregar, cole a chave de novo em Suas IAs, se for preciso.</p>',
      salvo:function(n){ return 'Pronto: '+n+(n===1?' rodada salva':' rodadas salvas')+'. Baixei o arquivo e copiei o texto. Agora guarde no chat da sua IA.'; },
      nada:'Ainda não há rodadas para salvar.',
      ok:function(n,m,nm){ return 'Carregado: '+n+(n===1?' rodada':' rodadas')+' e '+m+(m===1?' resposta':' respostas')+(nm?'. Bem-vindo de volta, '+nm+'!':'.'); },
      ruim:'Não achei um registro da Mesa dos Pensadores nesse texto.',est:function(n){ return n===1?'1 rodada sem salvar':n+' rodadas sem salvar'; },novas:function(n){ return n===1?'Você tem 1 rodada nova ainda sem salvar.':'Você tem '+n+' rodadas novas ainda sem salvar.'; },
      chave:' Cole a chave da sua IA de novo em Suas IAs.'},
    en:{tit:'Your progress',nota:'Everything you did here stays only in this browser. Save your MD and keep it in your AI\'s chat so you lose nothing.',
      salvar:'Save my MD',cp:'Copy',cpok:'Copied!',carregar:'Load my MD',info:'Info',abrir:'Open my AI\'s chat',
      colar:'Or paste the text of your MD here:',colarbt:'Load the pasted text',
      infotxt:'<p><b>How to save</b></p><ol><li>Tap <b>Save my MD</b>. The file is downloaded and the text is copied.</li><li>Open the chat of the AI you use at the table (<b>Open my AI\'s chat</b> takes you there).</li><li>Attach the downloaded file, or paste the text, and write: <i class="frase">Keep this record of my Thinkers\' Table.</i></li></ol><p><b>How to load</b></p><ol><li>In your AI\'s chat, download the file you attached. If you pasted the text, ask: <i class="frase">Give me back my Thinkers\' Table record exactly as it is, without changing anything.</i> and copy the answer.</li><li>Here, tap <b>Load my MD</b> and pick the file, or paste the text in the box below.</li><li>Your rounds, answers and name come back to the table, and the thinkers remember everything.</li></ol><p class="nota">The file keeps what to call you, your settings, your thoughts, the speeches and the answers. Audio is not in the file: narration is made again from the text. Your AI keys never go in the file; after loading, paste your key again in Your AIs if needed.</p>',
      salvo:function(n){ return 'Done: '+n+(n===1?' round saved':' rounds saved')+'. The file was downloaded and the text copied. Now keep it in your AI\'s chat.'; },
      nada:'There are no rounds to save yet.',
      ok:function(n,m,nm){ return 'Loaded: '+n+(n===1?' round':' rounds')+' and '+m+(m===1?' answer':' answers')+(nm?'. Welcome back, '+nm+'!':'.'); },
      ruim:'I could not find a Thinkers\' Table record in this text.',est:function(n){ return n===1?'1 round not saved':n+' rounds not saved'; },novas:function(n){ return n===1?'You have 1 new round not saved yet.':'You have '+n+' new rounds not saved yet.'; },
      chave:' Paste your AI key again in Your AIs.'},
    es:{tit:'Tu progreso',nota:'Todo lo que hiciste aquí queda solo en este navegador. Guarda tu MD en el chat de tu IA para no perder nada.',
      salvar:'Guardar mi MD',cp:'Copiar',cpok:'¡Copiado!',carregar:'Cargar mi MD',info:'Info',abrir:'Abrir el chat de mi IA',
      colar:'O pega aquí el texto de tu MD:',colarbt:'Cargar el texto pegado',
      infotxt:'<p><b>Cómo guardar</b></p><ol><li>Toca <b>Guardar mi MD</b>. El archivo se descarga y el texto se copia.</li><li>Abre el chat de la IA que usas en la mesa (<b>Abrir el chat de mi IA</b> te lleva allí).</li><li>Adjunta el archivo descargado, o pega el texto, y escribe: <i class="frase">Guarda este registro de mi Mesa de los Pensadores.</i></li></ol><p><b>Cómo cargar</b></p><ol><li>En el chat de tu IA, descarga el archivo que adjuntaste. Si pegaste el texto, pide: <i class="frase">Devuélveme mi registro de la Mesa de los Pensadores exactamente como está, sin cambiar nada.</i> y copia la respuesta.</li><li>Aquí, toca <b>Cargar mi MD</b> y elige el archivo, o pega el texto en la caja de abajo.</li><li>Tus rondas, respuestas y tu nombre vuelven a la mesa, y los pensadores lo recuerdan todo.</li></ol><p class="nota">El archivo guarda cómo llamarte, tu configuración, tus pensamientos, las falas y las respuestas. El audio no va en el archivo: la narración se rehace a partir del texto. Las claves de tus IAs nunca entran en el archivo; después de cargar, pega tu clave otra vez en Tus IAs si hace falta.</p>',
      salvo:function(n){ return 'Listo: '+n+(n===1?' ronda guardada':' rondas guardadas')+'. Descargué el archivo y copié el texto. Ahora guárdalo en el chat de tu IA.'; },
      nada:'Todavía no hay rondas para guardar.',
      ok:function(n,m,nm){ return 'Cargado: '+n+(n===1?' ronda':' rondas')+' y '+m+(m===1?' respuesta':' respuestas')+(nm?'. ¡Bienvenido de nuevo, '+nm+'!':'.'); },
      ruim:'No encontré un registro de la Mesa de los Pensadores en este texto.',est:function(n){ return n===1?'1 ronda sin guardar':n+' rondas sin guardar'; },novas:function(n){ return n===1?'Tienes 1 ronda nueva sin guardar.':'Tienes '+n+' rondas nuevas sin guardar.'; },
      chave:' Pega la clave de tu IA otra vez en Tus IAs.'}
  };
  var CHATS={claude:'https://claude.ai/new',openai:'https://chatgpt.com/',gemini:'https://gemini.google.com/app',xai:'https://grok.com/',deepseek:'https://chat.deepseek.com/'};
  function pg(){ var l=(ler('idioma')||document.documentElement.lang||'pt').slice(0,2); return PG[l]||PG.pt; }
  function base(){ var u=(window.USO&&USO.uid)||ler('mesa_uid')||'eu'; return 'uso/'+u+'/'; }
  function dados(){ var o=(window.LOCALDB?LOCALDB.dump():{}), b=base(), rs=o[b+'rodadas_vivas']||{}, rp=o[b+'respostas']||{};
    var rods=Object.keys(rs).map(function(k){ var r=rs[k]||{}; if(!r.id) r.id=k; return r; }).filter(function(r){ return !r.exemplo; }).sort(function(a,b){ return String(a.criado||'').localeCompare(String(b.criado||'')); });
    var resp=Object.keys(rp).map(function(k){ var x=rp[k]||{}; if(!x.id) x.id=k; return x; }).sort(function(a,b){ return String(a.criado||'').localeCompare(String(b.criado||'')); });
    return {rods:rods,resp:resp}; }
  function nome(){ return ler('anfitriao').trim(); }
  /* configurações da pessoa (nunca as chaves das IAs): vão no MD e voltam com ele. O site em si nunca muda. */
  var CFGK=/^(cfg_|a11y_)|^(idioma|site_idioma|ia_on|ia_principal|tela)$/;
  function configs(){ var o={}; try{ for(var i=0;i<localStorage.length;i++){ var k=localStorage.key(i); if(CFGK.test(k)&&!/key/i.test(k)) o[k]=localStorage.getItem(k); } }catch(e){} return o; }
  function montarMD(){
    var D=dados(), nm=nome(), lim=function(t){ return String(t==null?'':t).replace(/\s+/g,' ').trim(); };
    var voz=(window.CFG&&CFG.voz)||'aparelho', C=configs();
    var L=['# Registro de '+(nm||'anfitrião')+' na Mesa dos Pensadores','','- Formato: falavado-registro 1','- Como chamar: '+nm,'- Gerado em: '+new Date().toISOString(),'- IA: '+ler('ia_on'),'- Narração: '+voz,'- Rodadas: '+D.rods.length,'- Configurações: '+Object.keys(C).map(function(k){ return k+'='+C[k]; }).join('; '),''];
    D.rods.forEach(function(r){
      L.push('## '+lim(r.titulo||r.pergunta||'Rodada'),'','- Rodada: '+r.id,'- Data: '+lim(r.criado),'- Idioma: '+lim(r.idioma||'pt'),'- Participantes: '+lim(r.participantes),'','**Pensamento:** '+lim(r.pergunta),'','### Falas','');
      (r.falas||[]).forEach(function(f,k){ L.push('- **'+lim(f.quem)+'**'+(f.papel?' ('+lim(f.papel)+')':'')+': '+lim(f.texto));
        D.resp.filter(function(x){ return x.rodada===r.id&&String(x.k)===String(k); }).forEach(function(x){ L.push('  - **'+(nm||'anfitrião')+' respondeu:** '+lim(x.pergunta),'  - **'+lim(f.quem)+':** '+lim(x.texto)); }); });
      L.push('');
    });
    var js=JSON.stringify({formato:'falavado-registro',versao:1,anfitriao:nm,ia:ler('ia_on'),narracao:voz,config:C,rodadas:D.rods,respostas:D.resp}).replace(/-->/g,'--\\u003e');
    L.push('<!-- falavado-dados','(não apague este bloco: é ele que devolve tudo exato para a mesa)',js,'-->','');
    return {md:L.join('\n'),n:D.rods.length};
  }
  /* leitura: o bloco falavado-dados vale; sem ele (um MD escrito à mão no chat), lê a parte legível */
  function lerMD(t){
    t=String(t||'').replace(/\r/g,'');
    var m=t.match(/<!--\s*falavado-dados[^\n]*\n(?:\([^\n]*\)\n)?([\s\S]*?)-->/);
    if(m){ try{ var j=JSON.parse(m[1].trim()); if(j&&j.formato==='falavado-registro') return {nome:j.anfitriao||'',ia:j.ia||'',config:j.config||{},rods:j.rodadas||[],resp:j.respostas||[]}; }catch(e){} }
    /* também lê o registro que a mesa do Claude guarda ('# falavado: registro de …') */
    if(!/Mesa dos Pensadores|falavado-registro|falavado: registro/i.test(t)) return null;
    var nm=((t.match(/^- Como chamar:[ \t]*(.*)$/m)||[])[1]||(t.match(/^# Registro de (.+?) na Mesa dos Pensadores/m)||[])[1]||(t.match(/^# falavado: registro de (.+)$/m)||[])[1]||'').trim();
    var cfg={}, cl=(t.match(/^- Configurações:[ \t]*(.*)$/m)||[])[1]||''; cl.split(';').forEach(function(par){ var q=par.split('='); if(q.length>1) cfg[q[0].trim()]=q.slice(1).join('=').trim(); });
    var rods=[], resp=[], r=null, fk=-1, pend=null, i=0;
    t.split('\n').forEach(function(l){
      var h=l.match(/^## (.+)$/); if(h){ var dh=h[1].match(/^(\d{2})\/(\d{2})\/(\d{4})(?:,? (\d{2}):(\d{2}))?\s*·\s*(.+)$/), cr=new Date().toISOString();
        if(dh){ var dd=new Date(+dh[3],+dh[2]-1,+dh[1],+(dh[4]||12),+(dh[5]||0)); if(!isNaN(dd)) cr=dd.toISOString(); }
        r={id:'md-'+Date.now().toString(36)+'-'+(i++),vivo:true,titulo:(dh?dh[6]:h[1]).trim(),pergunta:'',idioma:'pt',participantes:'',falas:[],criado:cr}; rods.push(r); fk=-1; pend=null; return; }
      if(!r) return; var x;
      if((x=l.match(/^- Rodada:\s*(\S+)/))){ r.id=x[1]; return; }
      if((x=l.match(/^- Data:\s*(.+)$/))){ var d=new Date(x[1].trim()); if(!isNaN(d)) r.criado=d.toISOString(); return; }
      if((x=l.match(/^- Idioma:\s*(\w+)/))){ r.idioma=x[1]; return; }
      if((x=l.match(/^- Participantes:\s*(.*)$/))){ r.participantes=x[1].trim(); return; }
      if((x=l.match(/^\*\*Pensamento(?: de [^*]+)?:\*\*\s*(.*)$/))){ r.pergunta=x[1].trim(); return; }
      if((x=l.match(/^\*\*À mesa:\*\*\s*(.*)$/))){ r.participantes=x[1].trim(); return; }
      /* respostas: as sublinhas vêm em pares, primeiro a pergunta da pessoa, depois o pensador */
      if((x=l.match(/^\s+- \*\*(.+?)(?: respondeu)?:\*\*\s*(.*)$/))&&fk>=0){ if(pend==null){ pend=x[2].trim(); return; } resp.push({id:'r'+Date.now()+resp.length,rodada:r.id,k:fk,quem:x[1],pergunta:pend,texto:x[2].trim(),criado:new Date().toISOString()}); pend=null; return; }
      if((x=l.match(/^- \*\*(.+?)\*\*(?:\s*\(([^)]*)\))?:\s*(.*)$/))){ r.falas.push({quem:x[1].trim(),papel:(x[2]||'').trim(),texto:x[3].trim()}); fk=r.falas.length-1; pend=null; return; }
    });
    rods=rods.filter(function(r){ return r.falas.length; });
    /* sem id no arquivo: um id fixo pelo conteúdo, para carregar o mesmo MD duas vezes não duplicar a rodada */
    function hs(x){ var h=5381; for(var q=0;q<x.length;q++) h=((h<<5)+h+x.charCodeAt(q))|0; return (h>>>0).toString(36); }
    rods.forEach(function(r){ if(r.id.indexOf('md-')!==0) return; var novo='md-'+hs(r.criado+'|'+(r.pergunta||r.titulo)); resp.forEach(function(x){ if(x.rodada===r.id) x.rodada=novo; }); r.id=novo; });
    resp.forEach(function(x){ x.id='r'+hs(x.rodada+'|'+x.k+'|'+x.pergunta+'|'+x.texto); });
    rods.forEach(function(r){ if(!r.pergunta) r.pergunta=r.titulo; try{ r.data=new Date(r.criado).toLocaleDateString(document.documentElement.lang||'pt-BR',{day:'numeric',month:'long',year:'numeric'}); }catch(e){} });
    return rods.length||Object.keys(cfg).length?{nome:nm,ia:'',config:cfg,rods:rods,resp:resp}:null;
  }
  var IMG={}; fetch('data/elenco.json').then(function(r){ return r.json(); }).then(function(d){ (d.elenco||[]).forEach(function(p){ IMG[p.nome]=p.img; }); }).catch(function(){});
  function carregar(texto,out){
    var R=lerMD(texto), P=pg(); if(!R||!window.LOCALDB){ out.textContent=P.ruim; return; }
    var b=base();
    R.rods.forEach(function(r){ if(!r.id) return; r.vivo=true; (r.falas||[]).forEach(function(f){ if(!f.img&&IMG[f.quem]) f.img=IMG[f.quem]; }); LOCALDB.doc(b+'rodadas_vivas/'+r.id).set(r); });
    R.resp.forEach(function(x){ if(x&&x.id) LOCALDB.doc(b+'respostas/'+x.id).set(x); });
    var an=document.getElementById('anf-nome');
    if(R.nome){ if(an){ an.value=R.nome; an.dispatchEvent(new Event('input',{bubbles:true})); } else gravar('anfitriao',R.nome); }
    var semIa=!ler('ia_on')&&!!(R.ia||(R.config||{}).ia_on), mudou=false;
    if(R.ia&&!ler('ia_on')) gravar('ia_on',R.ia);
    Object.keys(R.config||{}).forEach(function(k){ if(CFGK.test(k)&&!/key/i.test(k)&&ler(k)!==String(R.config[k])){ gravar(k,String(R.config[k])); mudou=true; } });
    gravar('progresso_salvo',String(R.rods.length));
    var msg=P.ok(R.rods.length,R.resp.length,R.nome)+(semIa?P.chave:'');
    /* as configurações valem ao abrir a página: recarrega uma vez e mostra o aviso de novo */
    if(mudou){ try{ sessionStorage.setItem('pg_msg',JSON.stringify([R.rods.length,R.resp.length,R.nome,semIa])); }catch(e){} location.reload(); return; }
    out.textContent=msg;
  }
  function baixar(md){ var nm=(nome()||'mesa').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^A-Za-z0-9]+/g,'-').replace(/^-|-$/g,'').toLowerCase()||'mesa';
    var a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([md],{type:'text/markdown;charset=utf-8'})); a.download='falavado-'+nm+'-'+new Date().toISOString().slice(0,10)+'.md';
    document.body.appendChild(a); a.click(); setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); },1000); }
  document.addEventListener('DOMContentLoaded',function(){
    var env=document.getElementById('enviar'), ias=env&&env.closest('.acoes'); if(!ias) return;
    var bal=document.createElement('details'); bal.className='contas progresso-bal'; bal.id='progresso'; bal.setAttribute('translate','no');
    bal.innerHTML='<summary><span class="pg-ico" aria-hidden="true">💾</span><span class="pg-sum"></span><span class="estado pg-est"></span></summary><div class="corpo"></div>';
    ias.insertAdjacentElement('afterend',bal); var cb=bal.querySelector('.corpo'), est=bal.querySelector('.pg-est');
    var fs=document.createElement('fieldset'); fs.className='progresso'; fs.setAttribute('translate','no');
    fs.innerHTML='<legend></legend><p class="nota pg-nota"></p><div class="pg-bts"><button type="button" class="pg-b forte" data-pg="salvar"></button><span class="pg-par"><button type="button" class="pg-b" data-pg="carregar"></button><button type="button" class="pg-b info" data-pg="info" aria-expanded="false" aria-controls="pg-info"></button></span></div>'+
      '<a class="pg-chat" target="_blank" rel="noopener" hidden></a><p class="pg-st" role="status" aria-live="polite"></p><input type="file" accept=".md,.txt,text/markdown,text/plain" hidden>'+
      '<div class="pg-info" id="pg-info" hidden><div class="pg-txt"></div><label class="pg-cl"></label><textarea rows="4" spellcheck="false"></textarea><button type="button" class="pg-b" data-pg="colar"></button></div>';
    cb.appendChild(fs);
    var st=fs.querySelector('.pg-st'), inf=fs.querySelector('.pg-info'), file=fs.querySelector('input[type=file]'), ta=fs.querySelector('textarea'), chat=fs.querySelector('.pg-chat'), ib=fs.querySelector('[data-pg=info]');
    function textos(){ var P=pg(); fs.querySelector('legend').textContent=P.tit; bal.querySelector('.pg-sum').textContent=P.tit; fs.querySelector('.pg-nota').textContent=P.nota;
      ['salvar','carregar','info'].forEach(function(k){ fs.querySelector('[data-pg='+k+']').textContent=P[k]; }); fs.querySelector('[data-pg=colar]').textContent=P.colarbt;
      fs.querySelector('.pg-cl').textContent=P.colar; fs.querySelector('.pg-txt').innerHTML=P.infotxt; frases(P); chat.textContent=P.abrir+' ↗'; pendentes(); }
    /* cada frase que a pessoa digita no chat da IA ganha um botão de copiar */
    function frases(P){ [].forEach.call(fs.querySelectorAll('.pg-txt i.frase'),function(i){ var b=document.createElement('button'); b.type='button'; b.className='pg-cp'; b.textContent=P.cp;
      b.addEventListener('click',function(){ var ok=function(){ b.textContent=P.cpok; setTimeout(function(){ b.textContent=P.cp; },1600); }; try{ navigator.clipboard.writeText(i.textContent.trim()).then(ok,function(){}); }catch(e){} });
      i.insertAdjacentElement('afterend',b); }); }
    function linkChat(){ var on=(ler('ia_principal')||ler('ia_on').split(',')[0]||'').trim(); var u=CHATS[on]; chat.hidden=!u; if(u) chat.href=u; }
    function pendentes(){ var n=dados().rods.length-(parseInt(ler('progresso_salvo'),10)||0); est.textContent=n>0?pg().est(n):''; if(n>0&&!/^(Pronto|Done|Listo|Carregado|Loaded|Cargado)/.test(st.textContent)) st.textContent=pg().novas(n); else if(n<=0&&/rodada|round|ronda/.test(st.textContent)&&/sem salvar|not saved|sin guardar/.test(st.textContent)) st.textContent=''; }
    fs.querySelector('[data-pg=salvar]').addEventListener('click',function(){ var R=montarMD(), P=pg(); if(!R.n&&!Object.keys(configs()).length){ st.textContent=P.nada; return; }
      baixar(R.md); try{ navigator.clipboard.writeText(R.md).catch(function(){}); }catch(e){} gravar('progresso_salvo',String(R.n)); linkChat(); st.textContent=P.salvo(R.n); });
    fs.querySelector('[data-pg=carregar]').addEventListener('click',function(){ file.value=''; file.click(); });
    file.addEventListener('change',function(){ var f=file.files&&file.files[0]; if(!f) return; var rd=new FileReader(); rd.onload=function(){ carregar(rd.result,st); }; rd.readAsText(f,'utf-8'); });
    ib.addEventListener('click',function(){ inf.hidden=!inf.hidden; ib.setAttribute('aria-expanded',String(!inf.hidden)); linkChat(); });
    fs.querySelector('[data-pg=colar]').addEventListener('click',function(){ if(ta.value.trim()){ carregar(ta.value,st); ta.value=''; } });
    textos(); linkChat(); setInterval(pendentes,4000);
    var pm=''; try{ pm=sessionStorage.getItem('pg_msg')||''; sessionStorage.removeItem('pg_msg'); }catch(e){} if(pm){ try{ var q=JSON.parse(pm); st.textContent=pg().ok(q[0],q[1],q[2])+(q[3]?pg().chave:''); }catch(e){} var dt=fs.closest('details'); if(dt) dt.open=true; setTimeout(function(){ fs.scrollIntoView({block:'center'}); },400); }
    new MutationObserver(textos).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  });


  /* ao lado do narrador Daniel e Maria: "(não gasta tokens)", clicável, abre uma caixa flutuante com o porquê */
  var TK={
    pt:{b:'(não gasta tokens)',t:'Por que o narrador não gasta tokens',x:'<p>Daniel e Maria são vozes da Microsoft que já vêm no Windows e no navegador Edge. Quem fala é o seu próprio aparelho, lendo o texto da rodada; nenhuma IA é chamada para isso.</p><p>Os tokens só são gastos quando a sua IA escreve as falas e as respostas. Ouvir, pausar ou repetir a narração não custa nada.</p><p>Se o aparelho não tiver Daniel e Maria (celular, Mac ou Linux), toca a voz do aparelho, também de graça.</p>',f:'Fechar'},
    en:{b:'(uses no tokens)',t:'Why the narrator uses no tokens',x:'<p>Daniel and Maria are Microsoft voices that come with Windows and the Edge browser. Your own device does the speaking, reading the round text; no AI is called for it.</p><p>Tokens are only spent when your AI writes the speeches and answers. Listening, pausing or replaying the narration costs nothing.</p><p>If the device does not have Daniel and Maria (phone, Mac or Linux), the device voice plays, also for free.</p>',f:'Close'},
    es:{b:'(no gasta tokens)',t:'Por qué el narrador no gasta tokens',x:'<p>Daniel y Maria son voces de Microsoft que ya vienen en Windows y en el navegador Edge. Quien habla es tu propio aparato, leyendo el texto de la ronda; no se llama a ninguna IA para eso.</p><p>Los tokens solo se gastan cuando tu IA escribe las falas y las respuestas. Escuchar, pausar o repetir la narración no cuesta nada.</p><p>Si el aparato no tiene Daniel y Maria (celular, Mac o Linux), suena la voz del aparato, también gratis.</p>',f:'Cerrar'}
  };
  document.addEventListener('DOMContentLoaded',function(){
    var rd=document.querySelector('input[name=cfg-voz][value=danielmaria]'); if(!rd) return; var lab=rd.closest('label');
    var b=document.createElement('button'); b.type='button'; b.className='tk-info'; b.setAttribute('translate','no'); b.setAttribute('aria-haspopup','dialog');
    lab.insertAdjacentElement('afterend',b);
    var cx=document.createElement('div'); cx.className='tk-caixa'; cx.hidden=true; cx.setAttribute('role','dialog'); cx.setAttribute('aria-modal','false'); cx.setAttribute('translate','no');
    cx.innerHTML='<div class="tk-in"><h3></h3><div class="tk-x"></div><button type="button" class="tk-f"></button></div>'; document.body.appendChild(cx);
    function txt(){ var l=(document.documentElement.lang||'pt').slice(0,2), T=TK[l]||TK.pt; b.textContent=T.b; cx.querySelector('h3').textContent=T.t; cx.querySelector('.tk-x').innerHTML=T.x; cx.querySelector('.tk-f').textContent=T.f; cx.setAttribute('aria-label',T.t); }
    function abrir(v){ cx.hidden=!v; b.setAttribute('aria-expanded',String(v)); if(v) cx.querySelector('.tk-f').focus(); else b.focus(); }
    b.addEventListener('click',function(e){ e.preventDefault(); abrir(cx.hidden); });
    cx.querySelector('.tk-f').addEventListener('click',function(){ abrir(false); });
    cx.addEventListener('click',function(e){ if(e.target===cx) abrir(false); });
    document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&!cx.hidden) abrir(false); });
    txt(); new MutationObserver(txt).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  });
  var st=document.createElement('style');
  st.textContent='.so-convidado{display:none!important}#regmd{display:none!important}#cfg-enxuto-box{display:none!important}.chave-web{margin:8px 0 0 30px}.chave-web label{display:block;font-size:.85rem;margin-bottom:4px}.chave-web input{width:100%;max-width:420px;font:inherit;padding:8px 10px;border-radius:10px;border:1px solid #888}.chave-web .lin{display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-top:6px;font-size:.85rem}'+
    '.dica-claude{margin:0 0 12px;padding:10px 12px;border:1px solid var(--accent);border-radius:12px;font-size:.92rem;line-height:1.45}.dica-claude a{color:var(--accent);font-weight:600}'+
    '.progresso{margin:0!important;padding:0!important;border:0!important}.progresso>legend{display:none}.progresso-bal>summary .pg-ico{width:44px;height:44px;flex:none;display:inline-flex;align-items:center;justify-content:center;font-size:1.6rem;border-radius:50%;background:var(--bg)}.progresso-bal{margin:16px 0 0!important}.progresso-bal .corpo{padding-top:0}.progresso-bal .pg-nota{margin:0 0 10px;color:var(--muted);font-size:.88rem}.progresso .pg-bts{display:flex;flex-wrap:wrap;gap:8px}.progresso .pg-b{font:inherit;font-weight:700;font-size:.92rem;min-height:44px;padding:8px 16px;border-radius:10px;border:1px solid var(--accent);background:transparent;color:var(--ink);cursor:pointer}.progresso .pg-b.forte{background:var(--accent);color:var(--accent-ink)}.progresso .pg-b.info{min-width:64px}.progresso .pg-par{display:flex;gap:8px;flex-wrap:nowrap}.progresso .pg-chat{align-self:flex-start;font-weight:600;color:var(--accent)}.progresso .pg-st{margin:0;font-size:.88rem;color:var(--ink)}.progresso .pg-st:empty{display:none}.progresso .pg-info{border-left:3px solid var(--accent);background:var(--bg);border-radius:0 10px 10px 0;padding:10px 12px;display:flex;flex-direction:column;gap:8px;font-size:.9rem}.progresso .pg-info[hidden]{display:none}.progresso .pg-info ol{margin:0 0 4px;padding-left:20px}.progresso .pg-info p{margin:0}.progresso textarea{width:100%;box-sizing:border-box;font:12px ui-monospace,monospace;border-radius:8px;border:1px solid var(--line);background:var(--surface);color:var(--ink);padding:8px}.progresso .pg-b[data-pg=colar]{align-self:flex-start}.progresso .pg-cp{display:inline-flex;align-items:center;vertical-align:middle;margin:2px 0 2px 8px;min-height:32px;padding:3px 12px;font:inherit;font-size:.8rem;font-weight:700;font-style:normal;border-radius:999px;border:1px solid var(--accent);background:transparent;color:var(--ink);cursor:pointer}'+
    '.tk-info{align-self:flex-start;margin:-2px 0 4px 28px;font:inherit;font-size:.85rem;font-weight:700;color:var(--accent);background:none;border:0;padding:6px 0;min-height:32px;text-decoration:underline;cursor:pointer}.tk-caixa{position:fixed;inset:0;z-index:60;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(0,0,0,.45)}.tk-caixa[hidden]{display:none}.tk-in{max-width:440px;width:100%;max-height:85vh;overflow:auto;background:var(--surface);color:var(--ink);border:2px solid var(--accent);border-radius:14px;padding:16px 18px;box-shadow:0 10px 40px rgba(0,0,0,.4)}.tk-in h3{margin:0 0 8px;font-size:1.05rem}.tk-in p{margin:0 0 8px;font-size:.92rem;line-height:1.5}.tk-f{font:inherit;font-weight:700;min-height:44px;padding:8px 18px;border-radius:10px;border:1px solid var(--accent);background:var(--accent);color:var(--accent-ink);cursor:pointer}'+
    '.site-voltar{display:inline-flex;align-items:center;min-height:44px;margin:max(12px,env(safe-area-inset-top)) 16px 0;font:600 .9rem Lexend,sans-serif;color:#2a1d00;background:linear-gradient(#ffe08a,#e0a92b);border-radius:999px;padding:8px 14px;text-decoration:none}.site-voltar.largo{display:flex;justify-content:center;margin:24px auto 32px;max-width:720px;width:calc(100% - 32px);border-radius:14px;padding:14px}';
  document.head.appendChild(st);
})();
