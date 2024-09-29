const btnCol = document.querySelectorAll('.info__links .link-primary');
const itemCol = document.querySelectorAll('.item-info');

const hideIt = (itemCol, btnCol) => {
    itemCol.forEach((it) => {
        it.classList.remove('show');
        it.classList.add('hide');
    });
    btnCol.forEach((it) => it.classList.remove('active'));
}

const showTab = (index) => {
    itemCol[index].classList.remove('hide');
    setTimeout(() => {
        itemCol[index].classList.add('show');
    }, 50); 
    btnCol[index].classList.add('active');
}

hideIt(itemCol, btnCol);
showTab(0);

btnCol.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        hideIt(itemCol, btnCol);
        showTab(index);
    });
});

const anchors = document.querySelectorAll('.header__nav a, .footer__links a.link_top, .welcome__links a, .contracts__links a');

anchors.forEach(anc => {
    anc.addEventListener('click', (e) => {
        e.preventDefault();

        const id = anc.getAttribute('href');
        const elem = document.querySelector(id);
        
        window.scroll({
            top: elem.offsetTop,
            behavior: 'smooth',
        })
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.info-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});




