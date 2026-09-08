import {careProfiles} from './care-profiles.js';
const enLabels={'美国':'United States','英国':'United Kingdom','中国':'China','澳大利亚':'Australia','儿童':'Children','成人':'Adults','成人与儿童':'Adults and children','招募中':'Recruiting'};
const trialTitles={NCT00001244:'Immune regulation and natural history in CVID and related immune conditions',NCT04925375:'Abatacept for CVID-associated interstitial lung disease (ABCVILD)',NCT06954441:'V-IMMUNE: intravenous immunoglobulin in primary immune deficiency',NCT07284641:'Stem cell transplantation in CVID and primary immune regulatory disorders'};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function discover(form,centres,trials,zh){
 const d=new FormData(form),raw=d.get('age'),age=raw===''?null:Number(raw),country=d.get('country'),disease=d.get('disease-type'),diagnosis=d.get('diagnosis'),wanted=d.getAll('wanted'),features=d.getAll('feature');
 const countries={'United States':'美国','China':'中国','United Kingdom':'英国','Australia':'澳大利亚','Brazil':'巴西'};
 const region=countries[country]||country,anywhere=d.get('travel')==='yes';
 const t=(a,b)=>zh?a:b, label=x=>esc(zh?x:enLabels[x]||x);
 const selected=centres.map((c,index)=>({c,index,p:careProfiles[index]})).filter(({c,p})=>{
   if(p?.kind||c.scope==='科研')return false;
   if(!anywhere&&region&&region!=='不限'&&region!=='Any'&&c.country!==region)return false;
   if(age!==null&&((age<18&&!c.service.includes('儿童'))||(age>=18&&!c.service.includes('成人'))))return false;
   if(disease&&disease!=='unclear'&&p?.tags&&!p.tags.includes(disease==='cvid-like'?'monogenic':disease))return false;
   return true;
 });
 const centerHtml=selected.map(({c,index,p})=>`<article class="match-card"><h3><a href="#centre-${index}">${esc(c.name)}</a></h3><p>${label(c.country)} · ${esc(c.city)} · ${label(c.service)}</p><p>${t('相关依据：','Relevance: ')}${esc(p?.conditions?.[zh?0:1]||t('地区和服务年龄相关，具体疾病服务待确认。','Listed for this region; disease-specific care and age coverage need confirmation.'))}</p><p>${diagnosis==='suspected'?t('仍在排查：需确认中心是否接受未确诊患者。','Under investigation: confirm whether the service accepts undiagnosed patients.'):t('请确认转诊要求及目前接诊安排。','Confirm referral requirements and appointment availability.')}</p><a href="#centre-${index}">${t('查看就医与科研档案 →','View care and research profile →')}</a></article>`).join('');
 const studies=trials.filter(x=>(anywhere||!region||region==='不限'||region==='Any'||x.countries.includes(region))&&(age===null||(age>=x.min&&age<=x.max))&&(disease==='cvid'||disease==='unclear'||!disease)&&(diagnosis!=='suspected'||x.tags.includes('suspected')));
 const required={NCT04925375:'lung',NCT06954441:'ivig',NCT07284641:'severe'};
 const studyHtml=studies.map(x=>{const missing=required[x.id]&&!features.includes(required[x.id]);return `<article class="match-card"><p>${x.id} · ${label(x.status)} · ${t('登记快照','Record snapshot')} ${x.updated}</p><h3>${esc(zh?x.title:trialTitles[x.id]||x.id)}</h3><p>${esc(!zh&&x.id==='NCT00001244'?'National Institute of Allergy and Infectious Diseases (NIAID)':x.sponsor)}</p><p>${missing?t('关键临床情况未确认，请先阅读完整入组条件。','A required clinical feature is unconfirmed. Read the full eligibility criteria first.'):t('疾病方向及已填年龄/地区信息相关，其他条件仍待研究团队确认。','Disease scope and supplied age/location filters align; other criteria require study-team assessment.')}</p><p>${esc(zh?x.unknown:'The full protocol includes additional clinical, treatment and safety criteria that only the study team can assess.')}</p><a href="${x.source}" target="_blank" rel="noopener">${t('查看官方研究详情 ↗','View official study details ↗')}</a></article>`;}).join('');
 const empty=t('没有找到符合当前筛选的记录。可以修改地区或选择跨地区查看；这不代表不存在相关服务或研究。','No records match these filters. Try another region or allow travel; this does not mean no relevant services or studies exist.');
 return `<div class="results-heading"><h2>${t('与你有关的医疗中心与试验研究','Centres and studies relevant to your search')}</h2><p>${t('根据公开信息整理；不判断诊断、治疗或入组资格。','Public-information discovery; not a diagnosis, treatment recommendation or eligibility decision.')}</p></div>${wanted.includes('centres')||!wanted.length?`<h3>${t('医疗中心','Medical centres')} (${selected.length})</h3>${centerHtml||`<p>${empty}</p>`}`:''}${wanted.includes('trials')||!wanted.length?`<h3>${t('临床研究','Clinical studies')} (${studies.length})</h3>${studyHtml||`<p>${empty}</p>`}`:''}`;
}
