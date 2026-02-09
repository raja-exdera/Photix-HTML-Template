jQuery(document).ready(function() {
        $(function () {
// jquery typed plugin
    $(".typed").typed({
        stringsElement: $('.typed-strings'),
        typeSpeed: 200,
        backDelay: 500,
        loop: true,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false,
        callback: function () { null; },
        resetCallback: function () { newTyped(); }
    });
});
});

// course section-home
const items = document.querySelectorAll('.course-item');
const images = document.querySelectorAll('.course-img');

items.forEach(item => {
  item.addEventListener('mouseenter', () => {

    items.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    const target = item.dataset.image;

    images.forEach(img => {
      img.classList.toggle('active', img.dataset.img === target);
    });

  });
});

//Testimonial
const track = document.querySelector('.bw-testimonial-track');
const cards = document.querySelectorAll('.bw-testimonial-card');
const dotsWrap = document.querySelector('.bw-dots');

let index = 0;

cards.forEach((_, i) => {
  const dot = document.createElement('span');
  if (i === 0) dot.classList.add('active');
  dotsWrap.appendChild(dot);
});

const dots = dotsWrap.querySelectorAll('span');

setInterval(() => {
  index = (index + 1) % cards.length;
  track.style.transform = `translateX(-${index * 370}px)`;

  dots.forEach(d => d.classList.remove('active'));
  dots[index].classList.add('active');
}, 4000);


 


//gallery
const track = document.querySelector('.px-track');
const items = document.querySelectorAll('.px-item');
const prev = document.querySelector('.px-prev');
const next = document.querySelector('.px-next');
const dotsWrap = document.querySelector('.px-dots');

let index = 0;
let startX = 0;
let isDragging = false;
let currentX = 0;

const gap = 40;
const itemWidth = items[0].offsetWidth + gap;

/* DOTS */
items.forEach((_,i)=>{
  const d=document.createElement('span');
  if(i===0)d.classList.add('active');
  dotsWrap.appendChild(d);
});
const dots = dotsWrap.querySelectorAll('span');

function update(){
  track.style.transform=`translateX(-${index*itemWidth}px)`;
  dots.forEach(d=>d.classList.remove('active'));
  dots[index].classList.add('active');
}

/* BUTTONS */
next.onclick=()=>{ index=(index+1)%items.length; update(); };
prev.onclick=()=>{ index=(index-1+items.length)%items.length; update(); };

/* DOT CLICK */
dots.forEach((d,i)=>d.onclick=()=>{ index=i; update(); });

/* DRAG / SWIPE */
track.addEventListener('pointerdown',e=>{
  isDragging=true;
  startX=e.clientX;
  track.style.transition='none';
});

track.addEventListener('pointermove',e=>{
  if(!isDragging)return;
  currentX=e.clientX-startX;
  track.style.transform=`translateX(${-(index*itemWidth)+currentX}px)`;
});

track.addEventListener('pointerup',endDrag);
track.addEventListener('pointerleave',endDrag);

function endDrag(){
  if(!isDragging)return;
  isDragging=false;
  track.style.transition='transform .45s ease';

  if(currentX<-itemWidth/4) index=(index+1)%items.length;
  if(currentX>itemWidth/4) index=(index-1+items.length)%items.length;

  update();
  currentX=0;
}



/* ================================
   INTERSECTION OBSERVER
================================ */

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
    }
  });
},{ threshold:0.2 });

document.querySelectorAll('.dc-team-card, .dc-counter-box')
  .forEach(el=>observer.observe(el));


/* ================================
   COUNTER ANIMATION
================================ */
