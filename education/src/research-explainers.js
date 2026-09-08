// Editorial explanations, with primary-source links and explicit study boundaries.
import { addResearchDepth } from './research-depth.js';
import { completeEnglishExplainers } from './research-parity.js';
export const explainers = [
{
 date:'2026-01-13',type:['人体样本机制研究','Human-sample mechanistic study'],sample:['114 名 CVID 患者；21 名健康对照；各分析样本数不同','114 participants with CVID; 21 controls; assay subsets vary'],
 title:['抗体不足，为什么还会发炎？从 IgA 和肠道屏障寻找答案','Why can antibody deficiency coexist with inflammation? Clues from IgA and the gut'],
 paper:'IgA defects in CVID lead to bacterial translocation, increased serum γ-interferon, and BAFF',
 source:'https://pmc.ncbi.nlm.nih.gov/articles/PMC12829748/',
 intro:['一项 2026 年研究把 IgA、肠道微生物成分和免疫激活联系起来，为 CVID 的炎症表现提供了一条值得继续验证的机制线索。','A 2026 study connects low IgA, microbial material and immune activation, offering a mechanism to investigate further.'],
 sections:[
 ['从患者关心的问题出发','The patient question','免疫球蛋白替代治疗帮助许多人减少感染，但部分患者仍有肠道、肺部或自身免疫问题。研究人员因此追问：炎症是否可能与抗体防御缺口有关，而不是完全独立的另一件事？这篇论文关注的正是抗体不足与免疫过度活跃之间的联系。','Why can inflammation persist when infection prevention improves? This study investigates a possible connection between the antibody deficit and excessive immune activation.'],
 ['IgA 在哪里发挥作用？','Where does IgA fit?','IgA 是黏膜防御的重要成员。可以把肠道想成一个既要吸收营养、又要管理微生物接触的界面。研究中的假设是：IgA 缺失与黏膜屏障缺陷一起，可能让更多微生物成分进入身体，持续刺激免疫系统。血液中检测到细菌 DNA，并不等于发生了活菌引起的血流感染。','IgA helps contain microbes at mucosal surfaces. Reduced containment could increase exposure to microbial material. Detecting bacterial DNA is not the same as diagnosing a bloodstream infection.'],
 ['研究怎样寻找线索？','How the researchers investigated','团队分析 CVID 患者与健康对照的血液样本，比较 IgA、类别转换记忆 B 细胞、细菌 16S DNA，以及 IFN-γ、CXCL9 和 BAFF 等指标。它们分别提供抗体记忆、微生物暴露和免疫激活的信息；并非所有指标都在全部参与者中完成。','Blood analyses examined IgA, switched-memory B cells, bacterial DNA and inflammatory mediators, including IFN-γ and BAFF. Different assays used different subsets.'],
 ['发现如何连成一条线？','Connecting the findings','较低的 IgA 和较少的类别转换记忆 B 细胞，与较高的细菌 DNA 或炎症信号相关。作者提出一条解释：黏膜防御不足增加微生物暴露，继而促进 IFN-γ 和 BAFF 等信号。BAFF 有助于 B 细胞存活，但信号失去平衡时可能参与免疫失调。这里呈现的是研究支持的机制框架，不是每位患者都相同的固定过程。','The associations support a proposed sequence: impaired containment, microbial exposure and inflammatory signalling. They do not establish that this sequence explains every patient.'],
 ['这项发现离治疗还有多远？','What remains to be tested','论文提出了围绕黏膜防御开展治疗研究的可能性，但没有检验补充 IgA 能否安全有效地改善 CVID。观察到相关性，也不能完整证明先后顺序或因果关系。它的价值是把下一项实验和临床研究的问题变得更具体，而不是提供一项现在就可以自行尝试的治疗。','No IgA treatment benefit was tested. Timing, causality and therapeutic safety need further study. The contribution is a more specific research hypothesis.']
 ]},
{
 date:'2022-04-01',type:['单细胞多组学机制研究','Single-cell multi-omics'],sample:['一对同卵双胞胎起始研究，并以独立患者与对照队列验证','Discovery in one discordant twin pair, with patient/control validation'],
 title:['同样的遗传起点，B 细胞为什么走向不同？','Why can B cells behave differently despite a shared genetic starting point?'],
 paper:'Single-cell Atlas of common variable immunodeficiency shows germinal center-associated epigenetic dysregulation in B-cell responses',
 source:'https://www.nature.com/articles/s41467-022-29450-x',
 intro:['这项代表性机制研究逐个观察细胞，追踪 B 细胞形成免疫记忆时，基因的使用方式发生了什么变化。','A foundational mechanistic study examines how gene regulation changes as B cells develop immune memory.'],
 sections:[
 ['为什么从双胞胎开始？','Why study twins?','研究从一对同卵双胞胎出发，其中一人患有 CVID，另一人没有。相近的遗传背景使研究者能更集中地观察：除了 DNA 序列，细胞怎样使用基因，是否也是疾病差异的一部分？这是一种寻找机制的研究设计，不能用一对双胞胎代表所有患者。','A twin pair discordant for CVID offered a way to examine differences beyond inherited sequence. One pair cannot represent all patients.'],
 ['基因的使用方式是什么意思？','What is gene regulation?','DNA 可以比作一本说明书，但不同细胞不会同时阅读所有章节。DNA 甲基化、染色质开放程度和基因转录，影响哪些信息在某个阶段被使用。它们共同构成调控层面的线索。研究这些变化，不等于已经发现了一个致病突变，也不意味着疾病由个人生活方式造成。','Cells regulate which genetic instructions are accessible and used. Epigenetic changes are not equivalent to a new mutation, and do not imply personal blame.'],
 ['为什么要逐个观察细胞？','Why examine individual cells?','一管血液里混合了多种免疫细胞。把它们全部平均，可能掩盖某一小群细胞的问题。团队结合单细胞 DNA 甲基化、染色质和 RNA 信息，把初始 B 细胞与不同记忆 B 细胞分开比较，并进一步观察细胞受到激活后的反应。','Single-cell measurements separate cell populations that bulk blood averages can conceal. The team compared naïve and memory B cells and their responses to activation.'],
 ['研究看到了什么？','What did it reveal?','异常尤其集中于记忆 B 细胞：一些本应在成熟过程中调整的调控状态没有按预期改变，并伴随基因表达及细胞间通信异常。后续患者与对照分析支持部分发现。它提示，CVID 的问题可能不只是细胞数量少，也涉及细胞能否完成成熟和协作。','Memory B cells showed regulatory and transcriptional abnormalities associated with altered communication. Patient/control analyses supported selected findings.'],
 ['对理解 CVID 有什么价值？','Why it matters','这项研究解释了为何“找不到单个致病基因”不等于“没有生物学原因”。不过，细胞状态也可能受到既往疾病和治疗影响，因果顺序仍需研究。现阶段它属于机制探索，尚不能凭这套图谱为个人制定治疗或预测未来。','It expands the biological questions beyond single-gene explanations. Causality and clinical prediction remain unresolved; this is not a treatment-selection test.']
 ]},
{
 date:'2024-01-11',type:['单中心临床与遗传队列','Single-centre clinical/genetic cohort'],sample:['405 名 CVID 患者','405 people with CVID'],
 title:['能从症状猜出基因吗？405 名患者带来的提醒','Can symptoms identify a genetic cause? Lessons from 405 people'],
 paper:'Genetics and clinical phenotypes in common variable immunodeficiency',
 source:'https://www.frontiersin.org/journals/genetics/articles/10.3389/fgene.2023.1272912/full',
 intro:['把临床表现和遗传发现放在一起，既能寻找规律，也能看清“有某种症状就对应某个基因”的局限。','Clinical and genetic findings can reveal patterns, but symptoms do not map neatly onto individual genes.'],
 sections:[
 ['为什么这个问题很实际？','Why this question matters','同样被诊断为 CVID，有人主要反复感染，有人还有自身免疫、肺病或肠病。患者自然会问：这些差异能不能告诉我，是哪一个分子出了问题？研究人员把一个中心 405 名患者的临床和遗传信息放在一起，专门分析这种联系。','People with the same diagnosis can have very different complications. This cohort examined whether clinical patterns help identify a genetic explanation.'],
 ['研究比较的是什么？','What was compared?','团队比较有遗传发现与没有已知遗传原因患者的疾病表现，包括自身免疫和多种器官并发症。这类研究观察已有患者之间的差异，没有随机分配治疗，因此它回答的是“哪些特征一起出现”，而不是“哪种治疗更好”。','The investigators compared complications across genetic groups. This was observational analysis, not a randomized treatment comparison.'],
 ['遗传线索有价值，但不是症状密码','Useful clues, not a symptom code','队列中可以识别一部分遗传缺陷，但不同遗传背景的患者仍有重叠表现。研究强调临床表现与具体基因的联系并不紧密。某种器官表现可能让团队更关注遗传评估，却不能单独锁定一个基因；相反，没有典型表现也不能简单排除遗传原因。','Clinical patterns overlapped. A feature can motivate investigation without uniquely identifying a gene or excluding a genetic explanation when absent.'],
 ['为什么变异需要再解释？','Why interpretation still matters','报告上的变异，需要与遗传方式、家族信息、免疫检查和功能证据放在一起。某些风险相关变异和明确致病缺陷也不能混为一谈。特别是 TACI 相关结果，需要谨慎区分易感因素与足以解释疾病的证据。','Variant interpretation requires inheritance, clinical context and functional evidence. Susceptibility variants, including some TACI findings, need particular care.'],
 ['患者可以带走的认识','What this adds to understanding','更具体的遗传诊断可以帮助理解免疫通路，但不能替代随访中对真实表现的观察。单中心人群还会受到转诊和检测选择影响，不能把该队列的比例当作每个人找到基因的概率。这篇研究最有用的提醒是：临床与遗传信息应相互补充。','Genetics complements clinical follow-up. Referral and testing patterns limit generalisation; cohort percentages are not an individual probability of finding a cause.']
 ]},
{
 date:'2025-07-17',type:['国际患者登记研究','International registry report'],sample:['30,628 名 IEI 患者；194 个中心','30,628 people with IEI; 194 centres'],
 title:['每个人的长期经历，怎样汇成罕见病的证据？','How do individual experiences become evidence for rare diseases?'],
 paper:'Inborn errors of immunity: Manifestation, treatment, and outcome—an ESID registry 1994–2024 report on 30,628 patients',
 source:'https://pubmed.ncbi.nlm.nih.gov/41347188/',
 intro:['ESID 登记报告展示了患者与中心长期参与的意义：让分散在不同地方的诊疗经历，有机会共同回答更大的问题。','The ESID report illustrates how sustained participation helps centres learn from experiences spread across many countries.'],
 sections:[
 ['一个中心看不到的全貌','Beyond one centre','罕见病患者分散在不同医院。即使一个团队经验丰富，也可能只有少数某种表现的患者，很难观察到足够多的长期变化。登记系统把不同中心的数据按相对一致的方式汇集，让少见的疾病和结局更容易被研究。','Individual centres may see too few cases to understand uncommon patterns. Registries allow experiences to be considered together.'],
 ['这篇报告汇集了什么？','What this report assembled','这份 ESID 报告覆盖 1994—2024 年登记资料，涉及 194 个中心的 30,628 名先天性免疫错误患者，整理疾病表现、治疗与结局。这里包括多类免疫疾病，不能把全部人数称为 CVID 患者，也不能把整体数据直接套在 CVID 个体身上。','The 1994–2024 report covers manifestations, treatment and outcomes across many IEI diagnoses. Its full population is not a CVID cohort.'],
 ['长期记录为什么有价值？','Why follow-up matters','一次检查告诉我们一个时间点的情况。持续记录则有机会显示：诊断用了多久，哪些并发症后来出现，不同人接受了哪些治疗，以及长期结局有什么差异。它可以帮助形成更具体的研究问题，也为以后设计研究提供现实背景。','Repeated records can describe diagnostic delays and evolving outcomes. Such observations help formulate research questions and future studies.'],
 ['登记资料也有盲区','Where uncertainty remains','参与中心并不等于所有医院，登记患者也不等于所有患者。资料可能缺失，各地检查、转诊和记录方式也有差异。登记中两件事同时出现，并不证明其中一件造成另一件；治疗比较还可能受到病情轻重的影响。','Missing data and differences in referral, recording and illness severity limit comparisons. Associations do not by themselves establish treatment effects.'],
 ['参与可以从了解开始','Participation can begin with learning','研究参与不只有尝试新药。患者登记、自然病程观察、样本研究都可能帮助疾病认识向前推进。可以先阅读研究说明，了解要提供什么、花多少时间、资料怎样使用，再决定是否参与。你写下的经历有价值，而是否分享、分享多少，仍由你作出知情选择。','Registries and natural-history studies are also forms of participation. Read the study information, expected commitments and data-use arrangements before deciding.']
 ]}
];
addResearchDepth(explainers);
completeEnglishExplainers(explainers);
export function explainerCardData(en=false){return explainers.map(x=>({date:x.date,type:x.type[en?1:0],sample:x.sample[en?1:0],title:x.title[en?1:0],finding:x.intro[en?1:0],source:x.source}));}
export function explainerBody(index,en=false){const x=explainers[index];if(!x)return '';return x.sections.map(s=>'<section><h2>'+s[en?1:0]+'</h2><p>'+s[en?3:2]+'</p></section>').join('')+'<section><h2>'+(en?'Original paper':'原始论文')+'</h2><p>'+x.paper+'</p><a href="'+x.source+'" target="_blank" rel="noopener">'+(en?'Read the source ↗':'查看原文 ↗')+'</a></section>';}
