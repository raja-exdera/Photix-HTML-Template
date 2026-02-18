
document.querySelectorAll('.dc-faq-q').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const item = btn.parentElement;
    const openItem = document.querySelector('.dc-faq-item.active');

    if(openItem && openItem !== item){
      openItem.classList.remove('active');
      openItem.querySelector('.dc-faq-a').style.maxHeight = null;
    }

    item.classList.toggle('active');
    const answer = item.querySelector('.dc-faq-a');

    if(item.classList.contains('active')){
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }else{
      answer.style.maxHeight = null;
    }
  });
});


// Feature items

const items = document.querySelectorAll('.dc-sync-item');
const activeDot = document.querySelector('.dc-sync-active');
const dots = document.querySelectorAll('.dc-sync-dot');

items.forEach((item, index) => {
  item.addEventListener('mouseenter', () => {
    items.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    const targetDot = dots[index];
    const dotOffset = targetDot.offsetTop;

    activeDot.style.top = dotOffset + 'px';
  });
});


