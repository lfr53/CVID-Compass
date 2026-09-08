import {chineseArticles} from './content-zh.js';
import {englishArticles} from './content-en.js';
const groups=[
 ['B 细胞识别与激活','B-cell recognition and activation',['cd19','cd81','cr2-cd21','ms4a1-cd20']],
 ['B 细胞存活与 T 细胞帮助','B-cell survival and T-cell help',['tnfrsf13b-taci','tnfrsf13c-baffr','icos','il21-il21r']],
 ['细胞内信号与免疫调节','Intracellular signalling and regulation',['nfkb1','stat3-gof','stat1-gof','pik3r1']]
];
export function moleculeDirectory(en=false){return '<main class="education-directory"><section class="directory-hero"><p class="eyebrow">'+(en?'IMMUNE MOLECULES':'分子科普')+'</p><h1>'+(en?'Twelve molecules, twelve stories':'12 个免疫分子的故事')+'</h1><p>'+(en?'Choose a molecule to read its full article. Explore its function, associated conditions and research context.':'从识别信号、细胞协作到内部调节，选择一个分子阅读全文。')+'</p><a href="#article-genetics">'+(en?'First, understand genetic clues →':'先了解：单基因免疫缺陷与遗传线索 →')+'</a></section>'+groups.map(g=>'<section class="education-six"><h2>'+g[en?1:0]+'</h2><div class="molecule-grid">'+g[2].map(slug=>{const a=(en?englishArticles:chineseArticles).find(x=>x.slug===slug);return '<a class="education-card" href="#article-'+slug+'"><h3>'+a.title.split(en?':':'：')[0]+'</h3><p>'+a.title.split(en?':':'：').slice(1).join(en?':':'：')+'</p><b>'+(en?'Read article →':'阅读全文 →')+'</b></a>';}).join('')+'</div></section>').join('')+'</main>';}
