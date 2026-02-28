document.addEventListener('click', (event) => {
    if (!event.target.closest('.header')) return;

    const card = event.target.closest('.card');
    
    const card_content = card.querySelector('.content');
    card_content.hidden = !card_content.hidden;

    const card_expand = card.querySelector('.expand');
    if (card_content.hidden) {
        card_expand.innerText = '>';
    } else {
        card_expand.innerText = '⌄';
    }
    
});