// Source-level care audit. Unknown referral/access policies are never inferred.
export const careProfiles = {
  0:{conditions:['原发性及继发性免疫缺陷、疑难免疫疾病、预防接种不良反应','Primary and secondary immune deficiencies, complex immune disorders, adverse vaccine reactions'],referral:['官网提供专科、专病及免疫缺陷 MDT 门诊和预约入口；是否需要转诊请向门诊确认。','The hospital lists specialist and immune-deficiency MDT clinics and booking links; confirm referral requirements.'],source:'https://ch.shmu.edu.cn/main/department/intro/id/371/pid/44.html',tags:['cvid','antibody-deficiency','monogenic'],review:'2026-09-07'},
  1:{conditions:['儿童原发性免疫缺陷与风湿免疫疾病','Childhood primary immune deficiency and rheumatic immune conditions'],source:'https://www.chcmu.com/info/1030/399000.htm',tags:['cvid','antibody-deficiency','monogenic'],review:'2026-09-07'},
  9:{conditions:['原发性及继发性免疫缺陷、相关肺部及胃肠/肝脏并发症','Primary and secondary immune deficiency, associated lung and gastrointestinal/liver complications'],referral:['接受 GP 通过 NHS e-Referral 转诊，也接受医院或其他医务人员书面转诊。','Accepts GP referrals through NHS e-Referral and written referrals from hospitals or medical professionals.'],source:'https://www.royalfree.nhs.uk/services/immunology',tags:['cvid','antibody-deficiency','monogenic'],review:'2026-09-07'},
  11:{conditions:['CVID、原发性免疫缺陷；成人及联合儿童免疫服务','CVID and primary immune deficiency; adult and joint paediatric immunology services'],referral:['GP 通过 NHS e-Referral 发起预约转诊并附临床资料。','GPs use NHS e-Referral with supporting clinical information.'],source:'https://www.ouh.nhs.uk/services/referrals/immunology/',tags:['cvid','antibody-deficiency','monogenic'],review:'2026-09-07'},
  13:{kind:'research',conditions:['基于 UK Biobank 数据研究免疫缺陷与遗传机制','A UK Biobank data project on immune deficiency and genetic mechanisms'],source:'https://www.ukbiobank.ac.uk/projects/integrative-translational-research-in-primary-immunodeficiency-intrepid/',review:'2026-09-07'},
  14:{kind:'network',conditions:['原发性免疫缺陷服务质量认证与机构检索','Quality accreditation and service discovery for primary immune deficiency'],source:'https://www.qpids.org.uk/',review:'2026-09-07'},
  16:{conditions:['儿童及年轻成人免疫缺陷','Immune deficiencies in children and young adults'],source:'https://www.chop.edu/centers-programs/immunology-service',tags:['cvid','antibody-deficiency','monogenic'],review:'2026-09-07'},
  17:{conditions:['儿童免疫系统疾病、炎症和风湿疾病','Childhood immune system, inflammatory and rheumatologic conditions'],referral:['专科页面提供预约及第二诊疗意见入口。','The specialty page provides appointment and second-opinion routes.'],travel:['官网称其为儿童免疫疾病国际转诊中心；具体接收、费用和安排需确认。','The hospital describes an international referral service; acceptance, costs and arrangements require confirmation.'],source:'https://www.childrenshospital.org/services/immunology',tags:['cvid','antibody-deficiency','monogenic'],review:'2026-09-07'},
  18:{conditions:['儿童及年轻成人免疫缺陷与免疫失调','Immune deficiency and immune dysregulation in children and young adults'],referral:['专科页面提供直接预约入口，协调员协助转诊后安排。','The specialty page provides direct scheduling; care managers coordinate care following referral.'],source:'https://www.cincinnatichildrens.org/service/i/immune-deficiency',tags:['cvid','antibody-deficiency','monogenic'],review:'2026-09-07'},
  21:{kind:'research',conditions:['免疫失调与个体化免疫遗传研究；当前接诊途径需另行确认','Immune dysregulation and personalised immunogenetics; current clinical access needs separate confirmation'],source:'https://www.nhmrc.gov.au/about-us/resources/personalised-immunology',review:'2026-09-07'}
};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function careIntro(index,centre,zh){
 const p=careProfiles[index]||{}, pick=a=>a?.[zh?0:1], research=p.kind==='research'||p.kind==='network';
 const unknown=zh?'尚未找到明确公开政策，请向机构确认。':'No explicit public policy has been confirmed; please check with the organisation.';
 const rows=[
 [zh?'服务对象':'Who is served',research?(zh?'研究项目或网络，不作为接诊医院列出':'Research programme or network; not listed as a treating hospital'):centre.service],
 [zh?'疾病与服务范围':'Conditions and services',pick(p.conditions)||(zh?'具体 PID / CVID 接诊范围仍待核实。':'Specific PID / CVID clinical coverage remains unconfirmed.')],
 [zh?'如何预约或转诊':'Appointments and referrals',research?(zh?'研究页面不构成临床转诊途径。':'A research listing does not establish a clinical referral pathway.'):(pick(p.referral)||unknown)],
 [zh?'外地或跨国患者':'Patients from outside the region',pick(p.travel)||unknown]];
 return `<section class="care-first" id="centre-care"><h2>${zh?'这个中心能帮我什么？':'How can this centre help?'}</h2><dl>${rows.map(([k,v])=>`<dt>${k}</dt><dd>${esc(v)}</dd>`).join('')}</dl><p>${zh?'本次来源检查：2026-09-07。核实范围以各字段说明为准。':'Sources checked: 7 September 2026. Verification scope is stated in each field.'}</p><a href="${esc(p.source||centre.source)}" target="_blank" rel="noopener">${zh?'查看官方服务信息':'Official service information'} ↗</a></section>`;
}

