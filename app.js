const products=[
{id:"mofc",name:"MOFC Connectors",family:"HIGH-DENSITY INTERFACES",category:"connectors",featured:true,images:["mofc_large.webp","mofc_single.webp"],class:"pair",description:"Compact, high-density push-pull connectors for multi-fiber optical connections.",detail:"A compact push-pull interface for multi-fiber optical connections. Explore MOFC configurations for dense optical interconnects and discuss the right arrangement for your application.",tags:["Push-pull interface","Multi-fiber","Compact design"]},
{id:"elsfp",name:"ELSFP",family:"HOST & MODULE CONNECTIVITY",category:"connectors",featured:true,images:["elsfp_plug.webp","elsfp_receiver.webp"],class:"pair",description:"Precision blind-mate optical connectivity for host and module interfaces in CPO.",detail:"Host and module connectors with precision blind-mate connectivity for CPO, with up to two MT ferrules per connection.",tags:["Host & module","Blind-mate","CPO"]},
{id:"mt",name:"MT Ferrules",family:"PRECISION AT THE CORE",category:"precision",featured:true,images:["mt12.webp"],class:"ferrules",description:"Precision multi-fiber alignment, with configurations for different optical applications.",detail:"Precision components at the center of a multi-fiber connection. The pictured range includes 12F, 16F, 24F and 36F variants. Additional ferrule configurations and custom designs are available for discussion.",tags:["12F / 16F / 24F / 36F","Precision molding","Custom configurations"]},
{id:"mpo",name:"MPO Patch Cords",family:"MULTI-FIBER ASSEMBLIES",category:"cables",featured:true,images:["mpo_assembly.webp"],description:"Multi-fiber cable assemblies for data center interconnects and structured cabling.",detail:"Multi-fiber cable assemblies for data center interconnects and structured cabling. Talk to our team about connector configuration, fiber type, cable length and polarity requirements.",tags:["Data centers","Structured cabling","Multi-fiber"]},
{id:"micro",name:"Micro MPO",family:"COMPACT CONNECTORS",category:"connectors",images:["micro_native.webp"],description:"Compact multi-fiber connectors for space-constrained applications.",detail:"Compact multi-fiber connectors for space-constrained applications. Contact our team to discuss fit, configuration and integration requirements.",tags:["Compact design","Multi-fiber"]},
{id:"pushpull",name:"MPO Push-Pull Connectors",family:"ACCESSIBLE CONNECTIONS",category:"connectors",images:["pushpull_native.webp"],description:"Push-pull handling for connecting and disconnecting multi-fiber links.",detail:"Push-pull handling helps connect and disconnect multi-fiber links in dense installation environments. Discuss boot styles and connector options with our team.",tags:["Push-pull handling","Dense installations"]},
{id:"adapter",name:"MPO Adapters",family:"OPTICAL INTERFACES",category:"connectors",images:["adapter.webp"],description:"Interfaces for aligning and mating MPO connectors.",detail:"Interfaces for aligning and mating MPO connectors. The wider catalog includes flanged, flangeless and MT-to-MPO adapter options. Ask us to match the interface to your system.",tags:["MPO interfaces","Configuration options"]},
{id:"pins",name:"Guide Pins",family:"PRECISION ALIGNMENT",category:"precision",images:["pins_native.webp"],description:"Precision alignment components for multi-fiber ferrule mating.",detail:"Precision alignment components for multi-fiber ferrule mating. Guide-pin and mating requirements can be discussed alongside the ferrule and connector design.",tags:["Ferrule alignment","Precision components"]},
{id:"breakout",name:"MPO–LC Breakout Cables",family:"FLEXIBLE DISTRIBUTION",category:"cables",images:["breakout.webp"],description:"Multi-fiber connections distributed into LC links for panels and cassettes.",detail:"MPO-to-LC breakout assemblies distribute multi-fiber connections into individual LC links for fiber panels, cassette-based systems and structured cabling.",tags:["MPO to LC","Panels & cassettes","Structured cabling"]},
{id:"trunk",name:"Data Center Trunk Cables",family:"HIGH-DENSITY CABLING",category:"cables",images:["trunk.webp"],description:"Multi-core MPO assemblies for organized, high-density network connections.",detail:"Multi-core MPO cable assemblies for high-density connections between network locations. Contact us to discuss fiber count, length, installation requirements and connector arrangements.",tags:["Multi-core","MPO assemblies","Data centers"]}
];
const solutions={
data:{title:"More connections. Less space.",label:"DATA CENTERS",text:"Build optical links around the density and routing requirements of the data center. Explore compact interfaces, precision ferrules and multi-fiber cable assemblies as a coordinated product range.",ids:["mofc","mt","mpo","trunk"]},
cpo:{title:"Precision at the interface.",label:"AI / CPO",text:"Explore host and module optical connections, together with the precision alignment components behind them. Our team can discuss integration needs for your optical interconnect design.",ids:["elsfp","mofc","mt"]},
cabling:{title:"From the rack to the network.",label:"STRUCTURED CABLING",text:"Organize multi-fiber links with patch cords, trunk assemblies, adapters and MPO-to-LC breakout connections. Discuss the combination that fits your panels, cassettes and network layout.",ids:["mpo","trunk","breakout","adapter"]}
};
const byId=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const technicalText=s=>esc(s).replace(/\b(?:12F|16F|24F|36F)\b/g,value=>'<code class="part-number" data-spec>'+value+'</code>');
const assetSrc=file=>window.EMBEDDED_ASSETS?.[file]||'assets/'+file;
function assetSvg(file){const a=window.ASSET_BOUNDS[file];if(!a)return '<img src="'+assetSrc(file)+'" alt="" loading="lazy">';let [x,y,r,b]=a.box;return '<svg class="product-svg" viewBox="'+[x,y,r-x,b-y].join(' ')+'" aria-hidden="true"><image href="'+assetSrc(file)+'" width="'+a.width+'" height="'+a.height+'"/></svg>'}
function art(p){return '<div class="product-art '+(p.class||"")+'">'+p.images.map(assetSvg).join("")+'</div>'}
function card(p){return '<article class="product-card" data-category="'+p.category+'">'+art(p)+'<div class="product-info"><p class="product-family">'+esc(p.family)+'</p><h3>'+esc(p.name)+'</h3><p>'+esc(p.description)+'</p><button class="card-link" data-product="'+p.id+'" aria-label="View '+esc(p.name)+' details">Explore product</button></div></article>'}
function rangeCard(p){return '<button class="range-card" data-product="'+p.id+'" data-category="'+p.category+'" aria-label="View '+esc(p.name)+' details">'+art(p)+'<span><h3>'+esc(p.name)+'</h3><p>'+esc(p.description)+'</p><span class="range-arrow" aria-hidden="true">↗</span></span></button>'}
function renderProducts(category="all"){const visible=products.filter(p=>category==="all"||p.category===category);const featured=visible.filter(p=>p.featured);const others=visible.filter(p=>!p.featured);byId("featured-products").innerHTML=featured.map(card).join("");byId("range-products").innerHTML=others.map(rangeCard).join("");document.querySelector(".range-heading").hidden=others.length===0;document.querySelector(".catalog-count").textContent=visible.length+" product families";byId("featured-products").hidden=!featured.length;document.querySelectorAll("[data-filter]").forEach(b=>{const selected=b.dataset.filter===category;b.classList.toggle("active",selected);b.setAttribute("aria-pressed",selected)})}
let previousFocus=null;
function showDialog(d){if(!document.activeElement?.closest("dialog"))previousFocus=document.activeElement;document.querySelectorAll("dialog[open]").forEach(el=>el.close());d.showModal();document.body.classList.add("modal-open")}
function closeDialog(d){d.close();document.body.classList.remove("modal-open");previousFocus?.focus()}
function openProduct(id){const p=products.find(p=>p.id===id);if(!p)return;byId("product-dialog").querySelector(".dialog-content").innerHTML='<div class="dialog-art'+(id==="mofc"?' dialog-art-mofc':'')+'">'+art(p)+'</div><div class="dialog-copy"><p class="eyebrow">'+esc(p.family)+'</p><h2 id="product-dialog-title">'+esc(p.name)+'</h2><p>'+technicalText(p.detail)+'</p>'+(id==="mt"?'<div class="detail-variants" role="group" aria-label="MT ferrule variant"><button class="active" data-variant="mt12.webp" aria-pressed="true"><code class="part-number" data-spec>12F</code></button><button data-variant="mt16.webp" aria-pressed="false"><code class="part-number" data-spec>16F</code></button><button data-variant="mt24.webp" aria-pressed="false"><code class="part-number" data-spec>24F</code></button><button data-variant="mt36_native.webp" aria-pressed="false"><code class="part-number" data-spec>36F</code></button></div>':'')+'<div class="product-tags">'+p.tags.map(t=>'<span>'+technicalText(t)+'</span>').join("")+'</div><p class="detail-note">Our team can help confirm the configuration for your application.</p><a class="button button-navy" href="mailto:dmitriy@u-flex.com.hk?subject='+encodeURIComponent(p.name+" enquiry")+'">Enquire about this product <span>↗</span></a></div>';showDialog(byId("product-dialog"))}
function openSolution(id){const s=solutions[id];byId("product-dialog").querySelector(".dialog-content").innerHTML='<div class="solution-detail"><p class="eyebrow">'+s.label+'</p><h2 id="product-dialog-title">'+s.title+'</h2><p>'+s.text+'</p><div class="solution-products">'+s.ids.map(id=>'<button data-product="'+id+'">'+products.find(p=>p.id===id).name+' ↗</button>').join("")+'</div></div>';byId("product-dialog").querySelector(".dialog-content").style.display="block";showDialog(byId("product-dialog"))}
function renderSearch(){const q=byId("product-search").value.trim().toLowerCase();const matches=products.filter(p=>(p.name+" "+p.description+" "+p.tags.join(" ")).toLowerCase().includes(q));byId("search-results").innerHTML=matches.length?matches.map(p=>'<button class="search-result" data-product="'+p.id+'">'+esc(p.name)+'<span>'+({connectors:"Connectors",precision:"Precision",cables:"Cable assemblies"}[p.category])+' ↗</span></button>').join(""):'<p class="search-empty">No products found. Try “MPO”, “ferrules” or “cable”.</p>'}
document.addEventListener("click",e=>{const p=e.target.closest("[data-product]");if(p){byId("product-dialog").querySelector(".dialog-content").style.display="";openProduct(p.dataset.product);return}const f=e.target.closest("[data-filter]");if(f){renderProducts(f.dataset.filter);return}const s=e.target.closest("[data-solution]");if(s){openSolution(s.dataset.solution);return}const v=e.target.closest("[data-variant]");if(v){byId("product-dialog").querySelector(".dialog-art .product-art").innerHTML=assetSvg(v.dataset.variant);byId("product-dialog").querySelectorAll("[data-variant]").forEach(b=>{b.classList.toggle("active",b===v);b.setAttribute("aria-pressed",b===v)});return}const close=e.target.closest(".dialog-close");if(close)closeDialog(close.closest("dialog"))});
document.querySelectorAll("dialog").forEach(d=>{d.addEventListener("cancel",e=>{e.preventDefault();closeDialog(d)});d.addEventListener("click",e=>{const r=d.getBoundingClientRect();if(e.target===d&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom))closeDialog(d)})});
document.querySelector(".search-toggle").addEventListener("click",()=>{byId("product-search").value="";renderSearch();showDialog(byId("search-dialog"));byId("product-search").focus()});byId("product-search").addEventListener("input",renderSearch);
const menu=document.querySelector(".menu-toggle"),mobileNav=document.querySelector(".mobile-nav");menu.addEventListener("click",()=>{const open=menu.getAttribute("aria-expanded")!=="true";menu.setAttribute("aria-expanded",open);menu.setAttribute("aria-label",open?"Close navigation":"Open navigation");mobileNav.hidden=!open});mobileNav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{menu.setAttribute("aria-expanded","false");menu.setAttribute("aria-label","Open navigation");mobileNav.hidden=true}));
renderProducts();

// Manual carousel: the outgoing panel fades, but cannot receive focus or clicks.
const heroCarousel=document.querySelector('.hero-carousel');
if(heroCarousel){
  const heroSlides=[...heroCarousel.querySelectorAll('[data-hero-slide]')];
  const heroSwitches=[...heroCarousel.querySelectorAll('[data-hero-target]')];
  const heroControls=heroCarousel.querySelector('.hero-switches');
  const heroStatus=heroCarousel.querySelector('.hero-slide-status');
  function selectHero(id){
    if(heroCarousel.dataset.activeSlide===id)return;
    const next=heroSlides.find(slide=>slide.dataset.heroSlide===id);
    if(!next)return;
    heroCarousel.dataset.activeSlide=id;
    heroSlides.forEach(slide=>{
      const selected=slide===next;
      slide.classList.toggle('is-active',selected);
      slide.setAttribute('aria-hidden',String(!selected));
      slide.inert=!selected;
    });
    heroSwitches.forEach(button=>{
      const selected=button.dataset.heroTarget===id;
      button.classList.toggle('is-active',selected);
      button.setAttribute('aria-pressed',String(selected));
    });
    heroStatus.textContent=next.getAttribute('aria-label');
  }
  heroSwitches.forEach(button=>button.addEventListener('click',()=>selectHero(button.dataset.heroTarget)));
  heroControls.addEventListener('keydown',event=>{
    const current=heroSwitches.indexOf(document.activeElement);
    if(current<0)return;
    let nextIndex;
    if(event.key==='ArrowRight')nextIndex=(current+1)%heroSwitches.length;
    else if(event.key==='ArrowLeft')nextIndex=(current-1+heroSwitches.length)%heroSwitches.length;
    else if(event.key==='Home')nextIndex=0;
    else if(event.key==='End')nextIndex=heroSwitches.length-1;
    else return;
    event.preventDefault();
    heroSwitches[nextIndex].focus();
    selectHero(heroSwitches[nextIndex].dataset.heroTarget);
  });
  heroControls.hidden=false;
}

