/* falavado: textos do site em português (principal), inglês e espanhol, barra do topo, voltar, Pix e brilho.
   Cada elemento com data-t recebe o texto; com data-th, recebe HTML. A língua escolhida vale para o site e para a mesa. */
(function(){
var PIX_CHAVE='53204602-c3ba-4e18-af50-f3c676375320';
var EMAIL='felipebherve@gmail.com';
var T={
pt:{
 lang_aria:'Idioma', marca:'falavado', back:'← Voltar à página principal',
 a_claro:'Claro',a_escuro:'Escuro',a_tema_t:'Modo claro ou escuro',a_dis:'Dislexia', a_dis_t:'Letra para dislexia (OpenDyslexic)', a_dal:'Daltonismo', a_dal_t:'Cores para daltonismo', a_dal_h:'Escolha o seu tipo de daltonismo', d_nenhum:'Cores Básicas', d_nenhum_s:'Sem ajuste', d_protan:'Protanopia', d_protan_s:'Dificuldade com o vermelho', d_deutan:'Deuteranopia', d_deutan_s:'Dificuldade com o verde', d_tritan:'Tritanopia', d_tritan_s:'Dificuldade com o azul e o amarelo', d_acromat:'Acromatopsia', d_acromat_s:'Não vê cores: mais contraste', a_fechar:'Fechar',
 l_prev:'Voltar uma frase', l_next:'Avançar uma frase',
 l_play:'Ouvir o texto', l_pause:'Pausar', l_cont:'Continuar', l_stop:'Parar', l_vel:'Velocidade', l_close:'Fechar', l_no:'Este navegador não tem leitura em voz alta.', l_reading:'Lendo o texto', l_aria:'Leitura em voz alta',
 foot:'Criado por Felipe Bruno Hervé · USO GRATUITO E VENDA PROIBIDA', fale:'Fale comigo por e-mail', fale_corpo:'Olá, Herbs!\n\nEncontrei o falavado e gostei da Mesa dos Pensadores. Gostaria de conversar mais com você sobre ele.\n\nUm abraço,\n',
 lic_title:'Uso livre, venda proibida',
 lic_text:'O falavado é gratuito e foi feito inteiramente em prol do bem-estar das pessoas. Por isso, <b>é proibido vender</b> o falavado ou qualquer parte dele. Quem usar, compartilhar ou adaptar deve sempre manter este QR code do Pix e a explicação de que o falavado é gratuito e aceita doações de quem sentir que ele ajudou.',
 welcome:'Bem-vindo ao falavado',
 photo_soon:'foto em breve',
 author:'Felipe Bruno Hervé, o Herbs',
 why_title:'Prazer em conhecê-lo, me chamo Herbs', why_sub:'O que é o falavado?',
 why_tag:'Prévia: texto em construção',
 why_name:'<span><b>Falar</b></span><span>+</span><span><b>Lavado</b></span>',
 why_p1:'O falavado surgiu num período de trevas. O caos tomava conta da minha cabeça, e o pensamento linear me prendia num ciclo de tristeza. Eu precisava de vozes fortes, que entendessem o que eu estava passando e com quem eu pudesse falar abertamente.',
 why_p2:'Eu já estudei muita filosofia e gosto principalmente dos estoicos. Por isso o falavado começou com três figuras: o <b>Triboulet</b>, o meu indagador favorito; <b>Marco Aurélio</b>, pelo conhecimento estoico que tanto admiro; e <b>Carl Jung</b>, psiquiatra e pesquisador da sombra.',
 why_p3:'Daí nasceu a fórmula: você coloca o seu pensamento na mesa e abre para os convidados, como se estivessem todos juntos num bar ou numa reunião. Eles falam abertamente sobre o que você trouxe, e você ganha pontos de vista de fora, que te tiram do pensamento linear.',
 why_p4:'Com a mesa, aprendi a entender o que a falta do meu pai fazia comigo, como o meu humor afetava o dia a dia, o trabalho e os estudos, e o que seria saudável fazer para melhorar. Também entendi o meu medo de entrevistas e por que eu travava sem conseguir agir para conquistar o que eu queria.',
 why_p5:'E antes que você pergunte: sim, tenha sempre um psicólogo acompanhando você no dia a dia. O falavado não substitui um psicólogo de verdade.',
 why_p6:'O falavado também não é só para questões pessoais. Ele ajuda em brainstorms, a entender um projeto, a aprender a estudar e a tirar dos livros o conhecimento de um jeito mais fácil e prático.',
 why_p7:'Fiz questão de colocar os botões para dislexia porque eu, Felipe Bruno Hervé, sou disléxico, além de ter TDAH. Ler sempre foi difícil para mim, por isso o falavado sempre oferece a leitura das respostas em voz alta, com as vozes do Google. Uma narração melhor vem nas próximas fases do projeto.',
 why_p8:'“Aqui a gente <b>fala</b>, e os pensadores <b>lavam</b> a nossa mente como um balde de água fria.”',
 why_by8:'By Felipe B. Hervé',
 why_q2:'“Falavado é como quando erguemos uma parede em volta do caos: não estamos tentando vencer a tempestade. Estamos escolhendo onde ficar de pé.”',
 why_by2:'By Marco Aurélio, numa rodada da mesa durante os testes do falavado',
 why_p9:'Se você chegou até o fim desta apresentação, o meu muitíssimo obrigado. Que você conquiste a clareza dos seus pensamentos e se torne um ser humano melhor.',
 tri_say:'Vamos iniciar nossa mesa dos pensadores!', mesa_title:'Mesa dos Pensadores', trip_alt:'Três fotos de Felipe Bruno Hervé, o Herbs, lado a lado, no tema do bufão',
 tri_alt:'Triboulet, o bufão que serve a mesa, segurando uma bandeja com uma xícara',
 btn_pens:'Os pensadores', btn_pens_s:'Quem senta à mesa, fichas e retratos',
 btn_usar:'Usar o falavado', btn_usar_s:'Na web ou pelo Claude, onde ele nasceu',
 btn_nav:'Como usar no navegador', btn_nav_s:'Passo a passo e rodadas de exemplo',
 btn_serv:'Uma mesa só sua', btn_serv_s:'Encomende um chat personalizado',
 pix_title:'Apoie o falavado',
 pix_text:'O falavado é um trabalho braçal, criado por mim, Felipe Bruno Hervé, e disponibilizado de graça. Quem quiser ajudar e sentir que ele fez bem pode contribuir com qualquer valor pelo Pix.',
 pix_key:'Chave Pix (aleatória)', pix_copy:'Copiar o código Pix', pix_copied:'Código copiado. Cole no app do seu banco, em Pix copia e cola.',
 pix_alt:'QR code do Pix para doar ao falavado',
 care:'O falavado é uma simulação com inteligência artificial: não são os pensadores de verdade e não substitui terapia. Se você estiver em sofrimento intenso, procure ajuda. No Brasil, o CVV atende de graça, 24 horas, pelo telefone 188 ou em cvv.org.br.',
 pens_title:'Os pensadores', pens_intro:'Estes são os convidados da mesa. Cada um tem uma ficha completa, com vida, ideias e obras, e uma ficha de personagem no estilo D&D que mostra como ele joga a rodada: com quem concorda, com quem briga e qual é o golpe especial. Clique em alguém para ver tudo.',
 st_light:'☀ Fotos claras', st_dark:'🌙 Fotos escuras',
 sec_hist:'História', sec_ideas:'Ideias que leva à mesa', sec_works:'Obras e trabalhos', sec_rep:'Repertório: estudos, cargos, projetos e pontos fortes', sec_dnd:'Ficha de personagem (D&D)',
 sec_skills:'Habilidades', sec_special:'Golpe especial', sec_person:'Personalidade', sec_table:'À mesa', sec_refs:'Para saber mais', sec_imgs:'Sobre os retratos',
 l_ideal:'Ideal', l_vinc:'Vínculo', l_def:'Defeito', l_round:'Na rodada', l_weak:'Ponto fraco', l_allies:'Aliados', l_rivals:'Rivais', l_equip:'Equipamento', l_skills:'Perícias', l_bg:'Antecedente', l_origin:'Origem', l_align:'Tendência', l_ind:'Indicado por',
 at_FOR:'Força', at_DES:'Destreza', at_CON:'Constituição', at_INT:'Inteligência', at_SAB:'Sabedoria', at_CAR:'Carisma',
 dnd_how:'Os atributos vão de 8 a 20 e traduzem o jeito de debater: Força é firmeza no embate, Destreza é agilidade retórica, Constituição é resistência à dor, Inteligência é rigor, Sabedoria é percepção e Carisma é presença.',
 imgs_text:'Ilustrações feitas no Gemini a partir de fotos e obras livres da Wikimedia Commons, sempre num retrato bonito e respeitoso. Referências usadas:',
 content_pt:'As fichas dos pensadores estão em português por enquanto.',
 prev:'← Anterior', next:'Próximo →', all:'Todos os pensadores',
 usar_title:'Usar o falavado', usar_intro:'Escolha por onde quer sentar à mesa. Nos dois caminhos, a conta da IA é sua: o falavado não cobra nada.',
 web_title:'Na web', web_text:'Abra a mesa aqui mesmo no navegador. Você escolhe a IA que vai escrever as falas e cola a sua chave, que fica só no seu navegador. O Gemini, do Google, tem plano grátis. As suas rodadas ficam guardadas no seu navegador, e de mais ninguém.', web_btn:'Abrir a mesa na web', web_btn_s:'Rodadas guardadas no seu navegador',
 claude_title:'Pelo Claude', claude_text:'O falavado nasceu dentro do Claude, a IA da Anthropic. Instale a skill na sua conta e chame a mesa numa conversa: o Claude monta até uma página só sua, com a narração em tela cheia.', claude_btn:'Como instalar no Claude', claude_btn_s:'Passo a passo da instalação',
 nav_also:'Primeira vez? Veja o passo a passo e as rodadas de exemplo.',
 nav_title:'Como usar no navegador', nav_intro:'Em poucos minutos você leva o seu primeiro pensamento à mesa. Veja os passos e, logo abaixo, três rodadas de exemplo para sentir como funciona.',
 n1:'Abra <a href="mesa/index.html">a mesa na web</a> e diga ao Triboulet quem é o anfitrião: o seu nome, ou como quer ser chamado.',
 n2:'Em <b>Suas IAs</b>, marque a IA que vai escrever as falas e cole a sua chave. Para começar de graça, use o <b>Gemini</b>: crie a chave no <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">Google AI Studio</a>. A chave fica só no seu navegador. Sem chave nenhuma, marque <b>Usando sem vincular IA</b>: você copia e cola na IA que já usa, no plano gratuito dela.',
 n3:'Escreva o seu pensamento no balão, com todos os detalhes: o que aconteceu, onde, com quem e o que você quer saber. Quanto mais concreto, melhor a conversa.',
 n4:'Escolha quem senta à mesa, ou deixe o Triboulet recomendar os mais aptos para o assunto.',
 n5:'Toque em <b>Enviar à mesa</b>. Em cerca de um minuto, a rodada aparece. Abra e leia, ou toque em <b>Ouvir com a voz do aparelho</b>: a mesa abre em tela cheia e acende quem está falando.',
 n6:'Quer continuar? Responda a um pensador ou leve um pensamento novo. A mesa lembra das rodadas anteriores, e tudo fica guardado só no seu navegador.',
 ex_title:'Rodadas de exemplo', ex_intro:'Três pensamentos inventados para mostrar a mesa em ação. Leia aqui ou abra na mesa para ouvir com a narração em tela cheia.',
 ex_read:'Ler a rodada', ex_open:'Abrir na mesa e ouvir', ex_who:'À mesa:',
 go_mesa:'Abrir a mesa na web',
 cl_title:'Usar pelo Claude', cl_intro:'O falavado nasceu como uma skill do Claude: um pacote de instruções que ensina o Claude a montar a mesa dos pensadores. Na sua conta, o uso sai do seu plano.',
 c1:'Baixe o pacote da skill: <a href="assets/falavado.zip" download>falavado.zip</a>.',
 c2:'Entre em <a href="https://claude.ai" target="_blank" rel="noopener">claude.ai</a> com a sua conta.',
 c3:'Abra <b>Configurações</b>, depois <b>Capacidades</b> (Capabilities) e procure <b>Skills</b>. Se essa opção não aparecer, o seu plano ainda não tem o recurso.',
 c4:'Toque em <b>Enviar skill</b> (Upload skill) e escolha o arquivo <code>falavado.zip</code>. Deixe a skill ligada.',
 c5:'Abra uma conversa nova e chame a mesa com uma destas frases:',
 cl_call1:'Para a mesa: o seu pensamento aqui', cl_call2:'FALAVADO', cl_call3:'Triboulet, monte uma mesa redonda sobre…',
 cp:'Copiar',cp_ok:'Copiado!',cp_t:'Copiar esta frase',
 cl_after:'O Triboulet pergunta quem é o anfitrião, mostra o menu de pensadores e serve a rodada. Peça <code data-copiar>monte a página da mesa</code> para ganhar uma página só sua, com a narração em tela cheia.',
 cl_dl:'Baixar falavado.zip',
 sv_title:'Uma mesa só sua', sv_intro:'Gostou do falavado e quer um chat assim para você, para a sua escola, o seu consultório, a sua marca ou o seu grupo? Eu monto uma versão personalizada, com o elenco, o tema e a cara que você quiser.',
 sv_inc:'O que pode entrar', sv_i1:'Elenco escolhido por você: pensadores, cientistas, personagens históricos ou da sua área.', sv_i2:'Tema e tom sob medida: estudos, carreira, autoconhecimento, equipe, sala de aula.', sv_i3:'Página própria com o seu visual, as suas imagens e a narração em tela cheia.', sv_i4:'Fichas completas e fichas de personagem para cada convidado, para as falas terem base real.', sv_i5:'Instalação no Claude ou numa página web, com orientação para você usar sozinho.',
 sv_how:'Como funciona', sv_h1:'Você me conta a ideia no formulário abaixo.', sv_h2:'Eu respondo por e-mail com perguntas, prazo e orçamento.', sv_h3:'Combinado o contrato, eu monto, você testa e eu ajusto.',
 sv_form:'Conte a sua ideia', f_nome:'Seu nome', f_email:'Seu e-mail', f_tipo:'Para que é a mesa?', f_t1:'Uso pessoal', f_t2:'Escola ou curso', f_t3:'Empresa ou equipe', f_t4:'Consultório ou atendimento', f_t5:'Outro', f_msg:'Descreva o que você imagina', f_msg_ph:'Quem senta à mesa, para quem é, que assunto, onde vai usar…', f_send:'Enviar para o Herbs',
 f_note:'Ao enviar, o seu aplicativo de e-mail abre com a mensagem pronta para '+EMAIL+'. É só conferir e mandar.', f_need:'Preencha o seu nome, o e-mail e a descrição.',
 f_direct:'Se o e-mail não abrir, escreva direto para:',
 f_subject:'Pedido de mesa personalizada (falavado)'
},
en:{
 lang_aria:'Language', marca:'falavado', back:'← Back to the main page',
 a_claro:'Light',a_escuro:'Dark',a_tema_t:'Light or dark mode',a_dis:'Dyslexia', a_dis_t:'Dyslexia-friendly font (OpenDyslexic)', a_dal:'Color blindness', a_dal_t:'Colors for color blindness', a_dal_h:'Choose your type of color blindness', d_nenhum:'Basic colors', d_nenhum_s:'No adjustment', d_protan:'Protanopia', d_protan_s:'Trouble with red', d_deutan:'Deuteranopia', d_deutan_s:'Trouble with green', d_tritan:'Tritanopia', d_tritan_s:'Trouble with blue and yellow', d_acromat:'Achromatopsia', d_acromat_s:'No color vision: more contrast', a_fechar:'Close',
 l_prev:'Back one sentence', l_next:'Forward one sentence',
 l_play:'Listen to the text', l_pause:'Pause', l_cont:'Resume', l_stop:'Stop', l_vel:'Speed', l_close:'Close', l_no:'This browser cannot read aloud.', l_reading:'Reading the text', l_aria:'Read aloud',
 foot:'Created by Felipe Bruno Hervé · FREE TO USE, NOT FOR SALE', fale:'Contact me by email', fale_corpo:'Hi, Herbs!\n\nI found falavado and liked the Thinkers\' Table. I would like to talk more with you about it.\n\nBest,\n',
 lic_title:'Free to use, not for sale',
 lic_text:'falavado is free and was made entirely for people\'s well-being. That is why <b>selling falavado</b>, or any part of it, <b>is forbidden</b>. Anyone who uses, shares or adapts it must always keep this Pix QR code and the note that falavado is free and accepts donations from those who felt it helped.',
 welcome:'Welcome to falavado', photo_soon:'photo coming soon', author:'Felipe Bruno Hervé, Herbs',
 why_title:'Nice to meet you, I\'m Herbs', why_sub:'What is falavado?', why_tag:'',
 why_name:'<span><b>Falar</b> (to speak)</span><span>+</span><span><b>Lavado</b> (washed)</span>',
 why_p1:'falavado came out of a dark period. Chaos had taken over my head, and linear thinking kept me stuck in a cycle of sadness. I needed strong voices that understood what I was going through and that I could talk to openly.',
 why_p2:'I have studied a lot of philosophy, and I am especially fond of the Stoics. That is why falavado started with three figures: <b>Triboulet</b>, my favorite questioner; <b>Marcus Aurelius</b>, for the Stoic wisdom I admire so much; and <b>Carl Jung</b>, the psychiatrist who studied the shadow.',
 why_p3:'That is where the formula came from: you put your thought on the table and open it up to the guests, as if you were all together at a bar or in a meeting. They talk openly about what you brought, and you get outside points of view that pull you out of linear thinking.',
 why_p4:'With the table, I learned to understand what my father\'s absence was doing to me, how my mood affected my daily life, my work and my studies, and what would be healthy to do to get better. I also came to understand my fear of job interviews and why I froze instead of acting to get what I wanted.',
 why_p5:'And before you ask: yes, always have a psychologist by your side in your daily life. falavado does not replace a real psychologist.',
 why_p6:'falavado is not only for personal matters, either. It helps with brainstorming, understanding a project, learning how to study and getting the knowledge in books in an easier, more practical way.',
 why_p7:'I made a point of adding the dyslexia buttons because I, Felipe Bruno Hervé, am dyslexic, and I also have ADHD. Reading has always been hard for me, so falavado always offers to read the answers aloud with Google\'s voices. Better narration is coming in later phases of the project.',
 why_p8:'“Here we <b>speak</b>, and the thinkers <b>wash</b> our minds like a bucket of cold water.”',
 why_by8:'By Felipe B. Hervé',
 why_q2:'“Falavado is like raising a wall around the chaos: we are not trying to defeat the storm. We are choosing where to stand.”',
 why_by2:'By Marcus Aurelius, in a round at the table during falavado’s tests',
 why_p9:'If you made it to the end of this introduction, thank you so very much. May you gain clarity in your thoughts and become a better human being.',
 tri_say:'Let\'s begin our table of thinkers!', mesa_title:'The Thinkers\' Table', trip_alt:'Three photos of Felipe Bruno Hervé, Herbs, side by side, in the jester theme', tri_alt:'Triboulet, the jester who serves the table, holding a tray with a cup',
 btn_pens:'The thinkers', btn_pens_s:'Who sits at the table, profiles and portraits',
 btn_usar:'Use falavado', btn_usar_s:'On the web or in Claude, where it was born',
 btn_nav:'How to use it in the browser', btn_nav_s:'Step by step and sample rounds',
 btn_serv:'A table of your own', btn_serv_s:'Order a custom chat',
 pix_title:'Support falavado',
 pix_text:'falavado is hand-built work, created by me, Felipe Bruno Hervé, and offered for free. If you would like to help and felt it did you good, you can give any amount by Pix (Brazil\'s instant payment).',
 pix_key:'Pix key (random)', pix_copy:'Copy the Pix code', pix_copied:'Code copied. Paste it in your bank app under Pix copy and paste.', pix_alt:'Pix QR code to donate to falavado',
 care:'falavado is an AI simulation: these are not the real thinkers and it does not replace therapy. If you are in deep distress, please seek help from a local crisis line. In Brazil, CVV answers for free, 24 hours a day, at 188 or cvv.org.br.',
 pens_title:'The thinkers', pens_intro:'These are the guests at the table. Each one has a full profile, with life, ideas and works, and a D&D-style character sheet that shows how they play a round: who they agree with, who they fight with, and their special move. Click someone to see it all.',
 st_light:'☀ Light photos', st_dark:'🌙 Dark photos',
 sec_hist:'History', sec_ideas:'Ideas they bring to the table', sec_works:'Works', sec_rep:'Repertoire: studies, positions, projects and strengths', sec_dnd:'Character sheet (D&D)',
 sec_skills:'Abilities', sec_special:'Special move', sec_person:'Personality', sec_table:'At the table', sec_refs:'Learn more', sec_imgs:'About the portraits',
 l_ideal:'Ideal', l_vinc:'Bond', l_def:'Flaw', l_round:'In a round', l_weak:'Weak spot', l_allies:'Allies', l_rivals:'Rivals', l_equip:'Equipment', l_skills:'Skills', l_bg:'Background', l_origin:'Origin', l_align:'Alignment', l_ind:'Suggested by',
 at_FOR:'Strength', at_DES:'Dexterity', at_CON:'Constitution', at_INT:'Intelligence', at_SAB:'Wisdom', at_CAR:'Charisma',
 dnd_how:'Scores range from 8 to 20 and describe each one\'s way of debating: Strength is firmness in a clash, Dexterity is rhetorical agility, Constitution is endurance of pain, Intelligence is rigor, Wisdom is perception and Charisma is presence.',
 imgs_text:'Illustrations made in Gemini from free photos and works on Wikimedia Commons, always as a beautiful, respectful portrait. References used:',
 content_pt:'The thinkers\' profiles are in Portuguese for now.',
 prev:'← Previous', next:'Next →', all:'All thinkers',
 usar_title:'Use falavado', usar_intro:'Choose where you want to sit at the table. Either way, the AI account is yours: falavado charges nothing.',
 web_title:'On the web', web_text:'Open the table right here in the browser. You choose the AI that writes the speeches and paste your key, which stays only in your browser. Google\'s Gemini has a free plan. Your rounds are saved in your browser and nobody else\'s.', web_btn:'Open the table on the web', web_btn_s:'Rounds saved in your browser',
 claude_title:'In Claude', claude_text:'falavado was born inside Claude, Anthropic\'s AI. Install the skill on your account and call the table in a chat: Claude even builds a page of your own, with full-screen narration.', claude_btn:'How to install it in Claude', claude_btn_s:'Step-by-step installation',
 nav_also:'First time? See the steps and the sample rounds.',
 nav_title:'How to use it in the browser', nav_intro:'In a few minutes you bring your first thought to the table. See the steps and, just below, three sample rounds to get a feel for it.',
 n1:'Open <a href="mesa/index.html">the table on the web</a> and tell Triboulet who the host is: your name, or what you want to be called.',
 n2:'In <b>Your AIs</b>, tick the AI that will write the speeches and paste your key. To start for free, use <b>Gemini</b>: create the key in <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">Google AI Studio</a>. The key stays only in your browser. With no key at all, tick <b>Using without linking an AI</b>: you copy and paste into the AI you already use, on its free plan.',
 n3:'Write your thought in the bubble, with every detail: what happened, where, with whom and what you want to know. The more concrete, the better the conversation.',
 n4:'Choose who sits at the table, or let Triboulet recommend the best fit for the subject.',
 n5:'Tap <b>Send to the table</b>. In about a minute the round appears. Open and read it, or tap <b>Listen with the device voice</b>: the table goes full screen and lights up whoever is speaking.',
 n6:'Want to go on? Reply to a thinker or bring a new thought. The table remembers earlier rounds, and everything stays only in your browser.',
 ex_title:'Sample rounds', ex_intro:'Three made-up thoughts to show the table in action (in Portuguese). Read them here or open them at the table to hear the full-screen narration.',
 ex_read:'Read the round', ex_open:'Open at the table and listen', ex_who:'At the table:',
 go_mesa:'Open the table on the web',
 cl_title:'Use it in Claude', cl_intro:'falavado was born as a Claude skill: a package of instructions that teaches Claude to set up the table of thinkers. On your account, usage comes out of your own plan.',
 c1:'Download the skill package: <a href="assets/falavado.zip" download>falavado.zip</a>.',
 c2:'Sign in at <a href="https://claude.ai" target="_blank" rel="noopener">claude.ai</a> with your account.',
 c3:'Open <b>Settings</b>, then <b>Capabilities</b>, and look for <b>Skills</b>. If it does not show up, your plan does not have the feature yet.',
 c4:'Tap <b>Upload skill</b> and choose <code>falavado.zip</code>. Keep the skill turned on.',
 c5:'Start a new chat and call the table with one of these phrases:',
 cl_call1:'Para a mesa: your thought here', cl_call2:'FALAVADO', cl_call3:'Triboulet, set up a round table about…',
 cp:'Copy',cp_ok:'Copied!',cp_t:'Copy this phrase',
 cl_after:'Triboulet asks who the host is, shows the menu of thinkers and serves the round. Ask <code data-copiar>build the table page</code> to get a page of your own, with full-screen narration.',
 cl_dl:'Download falavado.zip',
 sv_title:'A table of your own', sv_intro:'Enjoyed falavado and want a chat like it for yourself, your school, your practice, your brand or your group? I build a custom version, with the cast, the theme and the look you want.',
 sv_inc:'What it can include', sv_i1:'A cast you choose: thinkers, scientists, historical figures or people from your field.', sv_i2:'A tailored theme and tone: studies, career, self-knowledge, teams, classrooms.', sv_i3:'A page of its own with your look, your images and full-screen narration.', sv_i4:'Full profiles and character sheets for every guest, so the speeches rest on real ideas.', sv_i5:'Setup in Claude or on a web page, with guidance so you can run it yourself.',
 sv_how:'How it works', sv_h1:'Tell me your idea in the form below.', sv_h2:'I reply by email with questions, timeline and a quote.', sv_h3:'Once we agree, I build it, you test it and I adjust it.',
 sv_form:'Tell me your idea', f_nome:'Your name', f_email:'Your email', f_tipo:'What is the table for?', f_t1:'Personal use', f_t2:'School or course', f_t3:'Company or team', f_t4:'Practice or counseling', f_t5:'Other', f_msg:'Describe what you have in mind', f_msg_ph:'Who sits at the table, who it is for, what subject, where you will use it…', f_send:'Send to Herbs',
 f_note:'When you send it, your email app opens with the message ready for '+EMAIL+'. Just check it and send.', f_need:'Fill in your name, email and description.',
 f_direct:'If your email app does not open, write directly to:',
 f_subject:'Custom table request (falavado)'
},
es:{
 lang_aria:'Idioma', marca:'falavado', back:'← Volver a la página principal',
 a_claro:'Claro',a_escuro:'Oscuro',a_tema_t:'Modo claro u oscuro',a_dis:'Dislexia', a_dis_t:'Letra para dislexia (OpenDyslexic)', a_dal:'Daltonismo', a_dal_t:'Colores para daltonismo', a_dal_h:'Elige tu tipo de daltonismo', d_nenhum:'Colores básicos', d_nenhum_s:'Sin ajuste', d_protan:'Protanopía', d_protan_s:'Dificultad con el rojo', d_deutan:'Deuteranopía', d_deutan_s:'Dificultad con el verde', d_tritan:'Tritanopía', d_tritan_s:'Dificultad con el azul y el amarillo', d_acromat:'Acromatopsia', d_acromat_s:'No ve colores: más contraste', a_fechar:'Cerrar',
 l_prev:'Volver una frase', l_next:'Avanzar una frase',
 l_play:'Escuchar el texto', l_pause:'Pausar', l_cont:'Continuar', l_stop:'Detener', l_vel:'Velocidad', l_close:'Cerrar', l_no:'Este navegador no puede leer en voz alta.', l_reading:'Leyendo el texto', l_aria:'Lectura en voz alta',
 foot:'Creado por Felipe Bruno Hervé · USO GRATUITO, VENTA PROHIBIDA', fale:'Escríbeme por correo', fale_corpo:'¡Hola, Herbs!\n\nEncontré falavado y me gustó la Mesa de los Pensadores. Me gustaría hablar más contigo sobre él.\n\nUn abrazo,\n',
 lic_title:'Uso libre, venta prohibida',
 lic_text:'falavado es gratuito y fue hecho enteramente para el bienestar de las personas. Por eso <b>está prohibido vender</b> falavado o cualquier parte de él. Quien lo use, comparta o adapte debe mantener siempre este código QR de Pix y la explicación de que falavado es gratuito y acepta donaciones de quien sienta que le ayudó.',
 welcome:'Bienvenido a falavado', photo_soon:'foto pronto', author:'Felipe Bruno Hervé, Herbs',
 why_title:'Encantado de conocerte, me llamo Herbs', why_sub:'¿Qué es falavado?', why_tag:'',
 why_name:'<span><b>Falar</b> (hablar)</span><span>+</span><span><b>Lavado</b> (lavado)</span>',
 why_p1:'falavado nació en un período de tinieblas. El caos se había apoderado de mi cabeza, y el pensamiento lineal me encerraba en un ciclo de tristeza. Necesitaba voces fuertes, que entendieran lo que estaba viviendo y con quienes pudiera hablar abiertamente.',
 why_p2:'He estudiado mucha filosofía y me gustan sobre todo los estoicos. Por eso falavado empezó con tres figuras: <b>Triboulet</b>, mi indagador favorito; <b>Marco Aurelio</b>, por el conocimiento estoico que tanto admiro; y <b>Carl Jung</b>, psiquiatra e investigador de la sombra.',
 why_p3:'De ahí nació la fórmula: pones tu pensamiento sobre la mesa y lo abres a los invitados, como si estuvieran todos juntos en un bar o en una reunión. Ellos hablan abiertamente sobre lo que trajiste, y tú ganas puntos de vista de fuera, que te sacan del pensamiento lineal.',
 why_p4:'Con la mesa aprendí a entender lo que la ausencia de mi padre me hacía, cómo mi humor afectaba mi día a día, mi trabajo y mis estudios, y qué sería sano hacer para mejorar. También entendí mi miedo a las entrevistas y por qué me quedaba paralizado sin actuar para conseguir lo que quería.',
 why_p5:'Y antes de que lo preguntes: sí, ten siempre un psicólogo acompañándote en tu día a día. falavado no sustituye a un psicólogo de verdad.',
 why_p6:'falavado tampoco es solo para cuestiones personales. Ayuda en lluvias de ideas, a entender un proyecto, a aprender a estudiar y a sacar de los libros el conocimiento de una forma más fácil y práctica.',
 why_p7:'Quise poner los botones para dislexia porque yo, Felipe Bruno Hervé, soy disléxico, además de tener TDAH. Leer siempre me ha costado, por eso falavado siempre ofrece leer las respuestas en voz alta con las voces de Google. Una narración mejor llegará en las próximas fases del proyecto.',
 why_p8:'“Aquí <b>hablamos</b>, y los pensadores <b>lavan</b> nuestra mente como un balde de agua fría.”',
 why_by8:'By Felipe B. Hervé',
 why_q2:'“Falavado es como cuando levantamos un muro alrededor del caos: no intentamos vencer la tormenta. Elegimos dónde quedarnos de pie.”',
 why_by2:'By Marco Aurelio, en una ronda de la mesa durante las pruebas de falavado',
 why_p9:'Si llegaste hasta el final de esta presentación, muchísimas gracias. Que conquistes la claridad de tus pensamientos y te conviertas en un ser humano mejor.',
 tri_say:'¡Comencemos nuestra mesa de pensadores!', mesa_title:'La Mesa de los Pensadores', trip_alt:'Tres fotos de Felipe Bruno Hervé, Herbs, lado a lado, con el tema del bufón', tri_alt:'Triboulet, el bufón que sirve la mesa, con una bandeja y una taza',
 btn_pens:'Los pensadores', btn_pens_s:'Quién se sienta a la mesa, fichas y retratos',
 btn_usar:'Usar falavado', btn_usar_s:'En la web o en Claude, donde nació',
 btn_nav:'Cómo usarlo en el navegador', btn_nav_s:'Paso a paso y rondas de ejemplo',
 btn_serv:'Una mesa solo tuya', btn_serv_s:'Encarga un chat personalizado',
 pix_title:'Apoya falavado',
 pix_text:'falavado es un trabajo artesanal, creado por mí, Felipe Bruno Hervé, y ofrecido gratis. Si quieres ayudar y sentiste que te hizo bien, puedes aportar cualquier monto por Pix (el pago instantáneo de Brasil).',
 pix_key:'Clave Pix (aleatoria)', pix_copy:'Copiar el código Pix', pix_copied:'Código copiado. Pégalo en la app de tu banco, en Pix copia y pega.', pix_alt:'Código QR de Pix para donar a falavado',
 care:'falavado es una simulación con inteligencia artificial: no son los pensadores reales y no sustituye la terapia. Si estás pasando por un sufrimiento intenso, busca ayuda en una línea de crisis de tu país. En Brasil, el CVV atiende gratis, 24 horas, en el 188 o en cvv.org.br.',
 pens_title:'Los pensadores', pens_intro:'Estos son los invitados de la mesa. Cada uno tiene una ficha completa, con vida, ideas y obras, y una ficha de personaje al estilo D&D que muestra cómo juega la ronda: con quién está de acuerdo, con quién discute y cuál es su golpe especial. Haz clic en alguien para verlo todo.',
 st_light:'☀ Fotos claras', st_dark:'🌙 Fotos oscuras',
 sec_hist:'Historia', sec_ideas:'Ideas que lleva a la mesa', sec_works:'Obras', sec_rep:'Repertorio: estudios, cargos, proyectos y puntos fuertes', sec_dnd:'Ficha de personaje (D&D)',
 sec_skills:'Habilidades', sec_special:'Golpe especial', sec_person:'Personalidad', sec_table:'En la mesa', sec_refs:'Para saber más', sec_imgs:'Sobre los retratos',
 l_ideal:'Ideal', l_vinc:'Vínculo', l_def:'Defecto', l_round:'En la ronda', l_weak:'Punto débil', l_allies:'Aliados', l_rivals:'Rivales', l_equip:'Equipo', l_skills:'Pericias', l_bg:'Trasfondo', l_origin:'Origen', l_align:'Alineamiento', l_ind:'Sugerido por',
 at_FOR:'Fuerza', at_DES:'Destreza', at_CON:'Constitución', at_INT:'Inteligencia', at_SAB:'Sabiduría', at_CAR:'Carisma',
 dnd_how:'Los atributos van de 8 a 20 y traducen la forma de debatir: Fuerza es firmeza en el choque, Destreza es agilidad retórica, Constitución es resistencia al dolor, Inteligencia es rigor, Sabiduría es percepción y Carisma es presencia.',
 imgs_text:'Ilustraciones hechas en Gemini a partir de fotos y obras libres de Wikimedia Commons, siempre en un retrato bello y respetuoso. Referencias usadas:',
 content_pt:'Las fichas de los pensadores están en portugués por ahora.',
 prev:'← Anterior', next:'Siguiente →', all:'Todos los pensadores',
 usar_title:'Usar falavado', usar_intro:'Elige dónde quieres sentarte a la mesa. En los dos caminos, la cuenta de la IA es tuya: falavado no cobra nada.',
 web_title:'En la web', web_text:'Abre la mesa aquí mismo en el navegador. Eliges la IA que escribe las intervenciones y pegas tu clave, que queda solo en tu navegador. Gemini, de Google, tiene plan gratuito. Tus rondas quedan guardadas en tu navegador y en el de nadie más.', web_btn:'Abrir la mesa en la web', web_btn_s:'Rondas guardadas en tu navegador',
 claude_title:'En Claude', claude_text:'falavado nació dentro de Claude, la IA de Anthropic. Instala la skill en tu cuenta y llama a la mesa en una conversación: Claude incluso arma una página solo tuya, con la narración a pantalla completa.', claude_btn:'Cómo instalarlo en Claude', claude_btn_s:'Instalación paso a paso',
 nav_also:'¿Primera vez? Mira el paso a paso y las rondas de ejemplo.',
 nav_title:'Cómo usarlo en el navegador', nav_intro:'En pocos minutos llevas tu primer pensamiento a la mesa. Mira los pasos y, justo abajo, tres rondas de ejemplo para ver cómo funciona.',
 n1:'Abre <a href="mesa/index.html">la mesa en la web</a> y dile a Triboulet quién es el anfitrión: tu nombre, o cómo quieres que te llamen.',
 n2:'En <b>Tus IAs</b>, marca la IA que escribirá las intervenciones y pega tu clave. Para empezar gratis, usa <b>Gemini</b>: crea la clave en <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">Google AI Studio</a>. La clave queda solo en tu navegador. Sin ninguna clave, marca <b>Usando sin vincular IA</b>: copias y pegas en la IA que ya usas, con su plan gratuito.',
 n3:'Escribe tu pensamiento en el globo, con todos los detalles: qué pasó, dónde, con quién y qué quieres saber. Cuanto más concreto, mejor la conversación.',
 n4:'Elige quién se sienta a la mesa, o deja que Triboulet recomiende a los más aptos para el tema.',
 n5:'Toca <b>Enviar à mesa</b> (Enviar a la mesa). En cerca de un minuto aparece la ronda. Ábrela y léela, o toca <b>Escuchar con la voz del dispositivo</b>: la mesa se abre a pantalla completa e ilumina a quien habla.',
 n6:'¿Quieres seguir? Responde a un pensador o lleva un pensamiento nuevo. La mesa recuerda las rondas anteriores, y todo queda solo en tu navegador.',
 ex_title:'Rondas de ejemplo', ex_intro:'Tres pensamientos inventados para mostrar la mesa en acción (en portugués). Léelos aquí o ábrelos en la mesa para escuchar la narración a pantalla completa.',
 ex_read:'Leer la ronda', ex_open:'Abrir en la mesa y escuchar', ex_who:'En la mesa:',
 go_mesa:'Abrir la mesa en la web',
 cl_title:'Usarlo en Claude', cl_intro:'falavado nació como una skill de Claude: un paquete de instrucciones que enseña a Claude a montar la mesa de pensadores. En tu cuenta, el uso sale de tu propio plan.',
 c1:'Descarga el paquete de la skill: <a href="assets/falavado.zip" download>falavado.zip</a>.',
 c2:'Entra en <a href="https://claude.ai" target="_blank" rel="noopener">claude.ai</a> con tu cuenta.',
 c3:'Abre <b>Configuración</b>, luego <b>Capacidades</b> (Capabilities) y busca <b>Skills</b>. Si no aparece, tu plan todavía no tiene la función.',
 c4:'Toca <b>Subir skill</b> (Upload skill) y elige <code>falavado.zip</code>. Deja la skill activada.',
 c5:'Abre una conversación nueva y llama a la mesa con una de estas frases:',
 cl_call1:'Para a mesa: tu pensamiento aquí', cl_call2:'FALAVADO', cl_call3:'Triboulet, arma una mesa redonda sobre…',
 cp:'Copiar',cp_ok:'¡Copiado!',cp_t:'Copiar esta frase',
 cl_after:'Triboulet pregunta quién es el anfitrión, muestra el menú de pensadores y sirve la ronda. Pide <code data-copiar>arma la página de la mesa</code> para tener una página solo tuya, con narración a pantalla completa.',
 cl_dl:'Descargar falavado.zip',
 sv_title:'Una mesa solo tuya', sv_intro:'¿Te gustó falavado y quieres un chat así para ti, tu escuela, tu consultorio, tu marca o tu grupo? Armo una versión personalizada, con el elenco, el tema y la apariencia que quieras.',
 sv_inc:'Qué puede incluir', sv_i1:'Un elenco elegido por ti: pensadores, científicos, personajes históricos o de tu área.', sv_i2:'Tema y tono a medida: estudios, carrera, autoconocimiento, equipos, aulas.', sv_i3:'Página propia con tu estilo, tus imágenes y narración a pantalla completa.', sv_i4:'Fichas completas y fichas de personaje para cada invitado, para que las intervenciones tengan base real.', sv_i5:'Instalación en Claude o en una página web, con orientación para que lo uses solo.',
 sv_how:'Cómo funciona', sv_h1:'Me cuentas tu idea en el formulario de abajo.', sv_h2:'Te respondo por correo con preguntas, plazo y presupuesto.', sv_h3:'Acordado el contrato, lo armo, lo pruebas y lo ajusto.',
 sv_form:'Cuéntame tu idea', f_nome:'Tu nombre', f_email:'Tu correo', f_tipo:'¿Para qué es la mesa?', f_t1:'Uso personal', f_t2:'Escuela o curso', f_t3:'Empresa o equipo', f_t4:'Consultorio o atención', f_t5:'Otro', f_msg:'Describe lo que imaginas', f_msg_ph:'Quién se sienta a la mesa, para quién es, qué tema, dónde lo vas a usar…', f_send:'Enviar a Herbs',
 f_note:'Al enviar, tu aplicación de correo se abre con el mensaje listo para '+EMAIL+'. Solo revísalo y envíalo.', f_need:'Completa tu nombre, el correo y la descripción.',
 f_direct:'Si el correo no se abre, escribe directo a:',
 f_subject:'Pedido de mesa personalizada (falavado)'
}};
function ler(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } }
function gravar(k,v){ try{ localStorage.setItem(k,v); }catch(e){} }
var q=new URLSearchParams(location.search).get('lang');
var L=(q&&T[q])?q:(T[ler('site_idioma')]?ler('site_idioma'):'pt');
function t(k){ return (T[L]&&T[L][k]!=null)?T[L][k]:(T.pt[k]!=null?T.pt[k]:k); }
function aplicar(){
  document.documentElement.lang=L==='pt'?'pt-BR':L;
  document.querySelectorAll('[data-t]').forEach(function(e){ e.textContent=t(e.dataset.t); });
  document.querySelectorAll('[data-th]').forEach(function(e){ e.innerHTML=t(e.dataset.th); });
  document.querySelectorAll('[data-ta]').forEach(function(e){ e.dataset.ta.split(';').forEach(function(p){ var a=p.split(':'); e.setAttribute(a[0],t(a[1])); }); });
  document.querySelectorAll('.idiomas button').forEach(function(b){ b.setAttribute('aria-pressed',String(b.dataset.l===L)); });
  copiaveis();
  document.dispatchEvent(new CustomEvent('idioma',{detail:L}));
}
/* frases que a pessoa precisa digitar: cada uma ganha um botão que copia sozinho */
function copiaveis(){
  document.querySelectorAll('[data-t^="cl_call"]').forEach(function(e){ e.setAttribute('data-copiar',''); });
  document.querySelectorAll('[data-copiar]').forEach(function(e){
    var b=e.nextElementSibling; if(!(b&&b.classList.contains('copiar-frase'))){ b=document.createElement('button'); b.type='button'; b.className='copiar-frase'; e.insertAdjacentElement('afterend',b);
      b.addEventListener('click',function(){ var x=e.textContent.trim().replace(/…$/,'').trim(); if(/^Para a mesa:/.test(x)) x='Para a mesa: '; else if(/…$/.test(e.textContent.trim())) x+=' ';
        var ok=function(){ b.textContent=t('cp_ok'); b.classList.add('ok'); setTimeout(function(){ b.textContent=t('cp'); b.classList.remove('ok'); },1600); };
        try{ navigator.clipboard.writeText(x).then(ok,function(){ selecionar(e); }); }catch(z){ selecionar(e); } }); }
    b.textContent=t('cp'); b.title=t('cp_t'); b.setAttribute('aria-label',t('cp_t')+': '+e.textContent.trim()); });
}
function selecionar(e){ var r=document.createRange(); r.selectNodeContents(e); var s=getSelection(); s.removeAllRanges(); s.addRange(r); }
function escolher(l){ L=l; gravar('site_idioma',l); gravar('idioma',l); aplicar(); }
window.SITE={t:t,lang:function(){ return L; },PIX_CHAVE:PIX_CHAVE,EMAIL:EMAIL};

/* barra do topo com voltar (fora da página principal) e idiomas */
function topo(){
  var principal=!!document.querySelector('[data-pagina="inicio"]');
  var b=document.createElement('header'); b.className='topo';
  b.innerHTML=(principal?'<span class="marca-vazia" aria-hidden="true"></span>':'<a class="voltar" href="index.html" data-t="back"></a>')+
    '<div class="topo-dir"><div class="acess">'+
      '<button type="button" class="a-btn" id="a-dis" data-ta="title:a_dis_t;aria-label:a_dis_t"><span class="a-ic" aria-hidden="true">Aa</span><span class="a-txt" data-t="a_dis"></span></button>'+
      '<button type="button" class="a-btn" id="a-dal" aria-haspopup="true" aria-expanded="false" aria-controls="dalt-caixa" data-ta="title:a_dal_t;aria-label:a_dal_t"><span class="a-ic" aria-hidden="true">👁</span><span class="a-txt" data-t="a_dal"></span></button>'+
      '<div class="dalt-caixa" id="dalt-caixa" role="radiogroup" data-ta="aria-label:a_dal_h" hidden><p class="dalt-tit" data-t="a_dal_h"></p>'+
      (window.ACESS?ACESS.tipos:[]).map(function(k){ return '<button type="button" role="radio" class="dalt-op" data-d="'+k+'"><i class="amostra '+k+'" aria-hidden="true"></i><span><b data-t="d_'+k+'"></b><small data-t="d_'+k+'_s"></small></span></button>'; }).join('')+
      '<button type="button" class="dalt-fechar" data-t="a_fechar"></button></div>'+
    '<div class="idiomas" role="group" data-ta="aria-label:lang_aria"><button type="button" data-l="pt" title="Português">PT</button><button type="button" data-l="en" title="English">EN</button><button type="button" data-l="es" title="Español">ES</button></div></div>';
  document.body.insertBefore(b,document.body.firstChild);
  b.querySelectorAll('.idiomas button').forEach(function(x){ x.addEventListener('click',function(){ escolher(x.dataset.l); }); });
  acessibilidade(b);
  if(!principal){ var w=document.querySelector('.wrap'); if(w){ var v=document.createElement('a'); v.className='voltar largo'; v.href='index.html'; v.dataset.t='back'; w.appendChild(v); } }
  var r=document.createElement('footer'); r.className='rodape'; r.innerHTML='<a class="btn-fale" id="fale"><span aria-hidden="true">✉</span> <span data-t="fale"></span></a><p data-t="foot"></p>'; document.body.appendChild(r);
  /* contato: abre o e-mail com o assunto FALAVADO e uma mensagem pronta, na língua escolhida */
  var fale=r.querySelector('#fale'); function mail(){ fale.href='mailto:'+EMAIL+'?subject=FALAVADO&body='+encodeURIComponent(t('fale_corpo')); } mail(); document.addEventListener('idioma',mail);
}
/* botões de acessibilidade: letra para dislexia e caixa de daltonismo (a lógica fica em acess.js) */
function acessibilidade(b){
  if(!window.ACESS){ var a=b.querySelector('.acess'); if(a) a.remove(); return; }
  var dis=b.querySelector('#a-dis'), dal=b.querySelector('#a-dal'), cx=b.querySelector('#dalt-caixa');
  function marcar(){
    dis.setAttribute('aria-pressed',String(ACESS.fonte()));
    dal.classList.toggle('ativo',ACESS.dalt()!=='nenhum');
    cx.querySelectorAll('.dalt-op').forEach(function(o){ o.setAttribute('aria-checked',String(o.dataset.d===ACESS.dalt())); });
  }
  function abrir(v){ cx.hidden=!v; dal.setAttribute('aria-expanded',String(v)); if(v){ var o=cx.querySelector('[aria-checked="true"]')||cx.querySelector('.dalt-op'); o.focus(); } }
  dis.addEventListener('click',function(){ ACESS.setFonte(!ACESS.fonte()); marcar(); });
  dal.addEventListener('click',function(e){ e.stopPropagation(); abrir(cx.hidden); });
  cx.addEventListener('click',function(e){ e.stopPropagation(); });
  cx.querySelectorAll('.dalt-op').forEach(function(o){ o.addEventListener('click',function(){ ACESS.setDalt(o.dataset.d); marcar(); }); });
  cx.querySelector('.dalt-fechar').addEventListener('click',function(){ abrir(false); dal.focus(); });
  document.addEventListener('click',function(){ if(!cx.hidden) abrir(false); });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&!cx.hidden){ abrir(false); dal.focus(); } });
  marcar();
}
/* leitura em voz alta: um botão [data-ler="seletor"] lê o bloco parágrafo por parágrafo com a voz do aparelho
   (no Android e no Chrome, as vozes do Google) e abre embaixo um painel para pausar, mudar a velocidade e fechar */
function leitura(){
  document.querySelectorAll('[data-ler]').forEach(function(btn){
    var alvo=document.querySelector(btn.dataset.ler); if(!alvo) return;
    var pn=document.createElement('div'); pn.className='leitor'; pn.hidden=true; pn.setAttribute('role','group'); pn.dataset.ta='aria-label:l_aria';
    pn.innerHTML='<span class="leitor-onda" aria-hidden="true"><i></i><i></i><i></i></span><span class="leitor-txt" data-t="l_reading" aria-live="polite"></span>'+
      '<span class="leitor-ctl"><button type="button" class="leitor-volta" data-ta="aria-label:l_prev;title:l_prev">⏮</button><button type="button" class="leitor-pausa"></button><button type="button" class="leitor-avanca" data-ta="aria-label:l_next;title:l_next">⏭</button></span><button type="button" class="leitor-parar" data-t="l_stop"></button>'+
      '<label class="leitor-vel"><span data-t="l_vel"></span><select><option value="0.8">0.8×</option><option value="1" selected>1×</option><option value="1.25">1.25×</option><option value="1.5">1.5×</option><option value="1.75">1.75×</option><option value="2">2×</option></select></label>'+
      '<button type="button" class="leitor-fechar" data-ta="aria-label:l_close;title:l_close">✕</button>';
    btn.insertAdjacentElement('afterend',pn);
    var ss=window.speechSynthesis, partes=[], i=0, lendo=false, pausado=false, taxa=1;
    var bPausa=pn.querySelector('.leitor-pausa'), sel=pn.querySelector('select');
    function rot(){ bPausa.textContent=!lendo?'▶ '+t('l_play'):pausado?'▶ '+t('l_cont'):'⏸ '+t('l_pause'); pn.classList.toggle('pausado',pausado); }
    function marca(n){ var el=n>=0&&partes[n]?partes[n].el:null; alvo.querySelectorAll('.lendo-agora').forEach(function(e){ if(e!==el) e.classList.remove('lendo-agora'); }); if(el) el.classList.add('lendo-agora'); }
    /* cada parágrafo vira frases: é por elas que se volta, avança e retoma a pausa */
    function frases(el){ var tx=el.textContent.replace(/\s+/g,' ').trim(); return (tx.match(/[^.!?…]+[.!?…]+["”»)]*\s*|[^.!?…]+$/g)||[tx]).map(function(f){ return {el:el,txt:f.trim()}; }).filter(function(f){ return f.txt; }); }
    function voz(){ var lg={pt:'pt-BR',en:'en-US',es:'es-ES'}[L]||'pt-BR', vs=ss.getVoices().filter(function(v){ return v.lang.replace('_','-').toLowerCase().indexOf(lg.slice(0,2))===0; });
      var g=vs.filter(function(v){ return /google/i.test(v.name)&&v.lang.replace('_','-')===lg; })[0]||vs.filter(function(v){ return v.lang.replace('_','-')===lg; })[0]||vs[0]; return [g,lg]; }
    function falar(){
      if(i>=partes.length){ parar(); return; }
      var e=partes[i].el, u=new SpeechSynthesisUtterance(partes[i].txt), vz=voz(); if(vz[0]) u.voice=vz[0]; u.lang=vz[1]; u.rate=taxa;
      u.onend=function(){ if(!lendo||u._cancelado) return; i++; falar(); };
      marca(i); if(i>0) e.scrollIntoView({block:'nearest',behavior:'smooth'}); ss.speak(u); falar.u=u;
    }
    function cortar(){ if(falar.u) falar.u._cancelado=true; ss.cancel(); }
    function iniciar(){ cortar(); partes=[]; [].slice.call(alvo.querySelectorAll('h2,h3,p,cite')).forEach(function(e){ partes=partes.concat(frases(e)); }); i=0; lendo=true; pausado=false; rot(); falar(); }
    function parar(){ lendo=false; pausado=false; cortar(); marca(-1); rot(); pn.classList.add('parado'); btn.setAttribute('aria-pressed','false'); }
    function fechar(){ parar(); pn.hidden=true; btn.focus(); }
    btn.addEventListener('click',function(){
      if(!ss){ pn.hidden=false; pn.querySelector('.leitor-txt').textContent=t('l_no'); return; }
      pn.hidden=false; pn.classList.remove('parado'); btn.setAttribute('aria-pressed','true'); iniciar();
    });
    bPausa.addEventListener('click',function(){
      if(!lendo){ pn.classList.remove('parado'); iniciar(); return; }
      pausado=!pausado; rot();
      /* pausa de verdade: corta e retoma do mesmo parágrafo (o pause() do navegador falha no Android) */
      if(pausado) cortar(); else falar();
    });
    function pular(d){ if(!lendo){ pn.classList.remove('parado'); iniciar(); } cortar(); i=Math.max(0,Math.min(partes.length-1,i+d)); pausado=false; rot(); falar(); }
    pn.querySelector('.leitor-volta').addEventListener('click',function(){ pular(-1); });
    pn.querySelector('.leitor-avanca').addEventListener('click',function(){ pular(1); });
    pn.querySelector('.leitor-parar').addEventListener('click',parar);
    pn.querySelector('.leitor-fechar').addEventListener('click',fechar);
    sel.addEventListener('change',function(){ taxa=parseFloat(sel.value)||1; if(lendo&&!pausado){ cortar(); falar(); } });
    document.addEventListener('idioma',function(){ rot(); if(lendo){ cortar(); if(!pausado) falar(); } });
    window.addEventListener('pagehide',function(){ if(ss) ss.cancel(); });
    if(ss&&ss.getVoices().length===0&&'onvoiceschanged' in ss) ss.addEventListener('voiceschanged',function(){});
    rot();
  });
}
/* bloco do Pix: QR, chave, copia e cola */
function pix(){
  var box=document.getElementById('pix'); if(!box) return;
  box.innerHTML='<img src="assets/pix.svg" width="220" height="220" data-ta="alt:pix_alt"><div><h2 data-t="pix_title"></h2><p data-t="pix_text"></p><p class="nota" data-t="pix_key"></p><p class="chave-pix">'+PIX_CHAVE+'</p><button type="button" class="copiar" data-t="pix_copy"></button><p class="nota" id="pix-ok" role="status" aria-live="polite"></p></div>';
  box.querySelector('.copiar').addEventListener('click',function(){
    fetch('assets/pix.txt').then(function(r){ return r.text(); }).then(function(c){ return navigator.clipboard.writeText(c.trim()); }).then(function(){ document.getElementById('pix-ok').textContent=t('pix_copied'); }).catch(function(){ document.getElementById('pix-ok').textContent=PIX_CHAVE; });
  });
}
function iniciar(){ topo(); pix(); leitura(); aplicar(); }
/* toda página abre no topo: o navegador não volta para onde a pessoa parou da última vez (só um #endereço muda isso) */
if('scrollRestoration' in history) history.scrollRestoration='manual';
function noTopo(){ if(!location.hash) window.scrollTo(0,0); }
window.addEventListener('pageshow',noTopo); window.addEventListener('load',noTopo);
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',iniciar); else iniciar();
})();
