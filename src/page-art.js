export function addPageArt(route){
 if(route==='home'||route==='patients')return;
 const page=document.querySelector('#app .learning-hub')||document.querySelector('#app .page-shell');if(!page)return;
 let file='';
 if(route==='cvid'||route==='community'||route==='article-family'||route==='contribute')file='learning-leaves.png';
 else if(route==='cvid/topic/genetics'||route==='article-genetics')file='soft-genetics.svg';
 else if(route==='research'||route==='researchers'||route==='researchers/explore'||route==='cvid/topic/research'||route==='article-research-progress')file='research-scientist.png';
 if(route==='article-family')file='soft-community.svg';
 if(route==='community'||route==='contribute')file='community-connections.svg';
 if(route==='cvid/topic/tests-treatment'||route==='article-lab-results')file='immune-tests-scene.svg';
 if(!file)return;
 const intro=page.querySelector('.reading-main')||page.querySelector(':scope > header')||page;
 const art=document.createElement('img');art.src='assets/'+file;art.alt='';art.className='page-topic-art';art.setAttribute('aria-hidden','true');intro.prepend(art);intro.classList.add('illustrated-intro');
}
