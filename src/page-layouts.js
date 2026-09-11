import { symbol } from './reference-visuals.js';
export function stylePage(route,lang){
 const page=document.querySelector('#app .page-shell');if(!page)return;
 const t=(en,zh)=>lang==='zh'?zh:en;
 const kind=route==='find'?'questionnaire':route==='find/results'?'results':route==='research'?'research':route.startsWith('research/')?'detail':route==='community'?'community':route==='researchers'?'directory':route==='patients'?'patient':route.startsWith('article-')||route.startsWith('cvid/paper/')?'article':'browse';
 page.classList.add('reference-page','page-'+kind);
 if(kind==='article'){
 const toc=page.querySelector('.article-navigation');
 const sidebar=document.createElement('aside');sidebar.className='reading-sidebar';
 if(toc){const title=document.createElement('h2');title.textContent=t('In this article','本篇目录');sidebar.append(title,toc);}
 const topics=document.createElement('nav');topics.className='reading-topic-nav';topics.setAttribute('aria-label',t('Learn about CVID','了解 CVID'));
 topics.innerHTML='<h2>'+t('Learn about CVID','了解 CVID')+'</h2>'+[['What is CVID?','什么是 CVID？','article-infection','book'],['Symptoms and complications','症状与并发症','article-multi-organ','clinician'],['Immune tests & treatment','免疫检测和治疗','cvid/topic/tests-treatment','document'],['Genetics','遗传学','cvid/topic/genetics','flask'],['Family','家庭','article-family','people'],['Research and clinical studies','研究与临床研究','cvid/topic/research','chart']].map(([en,cn,url,icon])=>`<a href="#${url}" ${route===url?'aria-current="page"':''}>${symbol(icon)}<span>${t(en,cn)}</span></a>`).join('');sidebar.append(topics);
 const content=document.createElement('div');content.className='reading-main';while(page.firstChild)content.append(page.firstChild);page.append(sidebar,content);page.classList.add('with-reading-sidebar');
 }
 if(kind==='questionnaire'){page.querySelector('h1').textContent=t('Find information that may be relevant to you','寻找与你相关的信息');}
 if(kind==='results'){
 page.querySelector('h1').textContent=t('Your personalised results','你的个性化探索结果');
 const sections=[...page.querySelectorAll(':scope > section')];
 const tabs=document.createElement('nav');tabs.className='page-tabs';tabs.setAttribute('aria-label',t('Result sections','结果分类'));
 sections.forEach((section,i)=>{section.id='result-section-'+i;const a=document.createElement('a');a.href='#'+section.id;a.textContent=section.querySelector('h2')?.textContent||'';a.onclick=e=>{e.preventDefault();section.scrollIntoView({behavior:'smooth'});};tabs.append(a)});
 page.querySelector('.section-intro')?.after(tabs);
 const featured=document.createElement('div');featured.className='featured-paths';featured.innerHTML=[['document','Cases','病例','#clinicians'],['chart','Research','研究','#research'],['people','Specialists','专业团队','#researchers']].map(([icon,en,zh,url])=>`<a href="${url}">${symbol(icon)}<h2>${t(en,zh)}</h2><span>${t('Explore related resources','探索相关资源')} →</span></a>`).join('');tabs.after(featured);
 }
 if(kind==='research'){
 page.querySelector('h1').textContent=t('CVID research','CVID 研究');
 const groups=[...page.querySelectorAll('.research-group')];
 const layout=document.createElement('div');layout.className='research-layout';
 const filters=document.createElement('aside');filters.className='research-filter panel';filters.innerHTML=`<h2>${t('Filter results','筛选结果')}</h2><label>${t('Search','搜索')}<input type="search" id="research-text" placeholder="${t('Topic, institution, country','主题、机构、国家')}"></label><label>${t('Research pathway','研究分类')}<select id="research-pathway"><option value="">${t('All pathways','全部分类')}</option>${groups.map((g,i)=>`<option value="${i}">${g.querySelector('h2').textContent}</option>`).join('')}</select></label><button type="button" class="secondary" id="research-clear">${t('Clear all','清除筛选')}</button><p role="status" id="research-visible"></p>`;
 const list=document.createElement('div');list.className='research-list';groups.forEach(g=>list.append(g));layout.append(filters,list);page.append(layout);
 const query=filters.querySelector('input'),select=filters.querySelector('select');
 const update=()=>{let count=0;groups.forEach((g,i)=>{let visible=0;g.querySelectorAll('.research-card').forEach(card=>{card.hidden=!card.textContent.toLowerCase().includes(query.value.trim().toLowerCase())||(select.value!==''&&select.value!==String(i));if(!card.hidden){visible++;count++;}});g.hidden=!visible});filters.querySelector('[role=status]').textContent=t(`${count} records shown`, `显示 ${count} 条记录`)};
 query.oninput=update;select.onchange=update;filters.querySelector('button').onclick=()=>{query.value='';select.value='';update()};update();
 }
 if(kind==='community'){page.querySelector('h1').textContent=t('CVID community','CVID 社群');const band=document.createElement('aside');band.className='community-band';band.innerHTML=`${symbol('heart')}<div><h2>${t('Find connection and support','寻找连接与支持')}</h2><p>${t('Explore patient organisations and their ways to get involved.','了解患者组织及其交流和参与渠道。')}</p></div>`;page.append(band);}
}
