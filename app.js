const tabContainer = document.querySelector('.tabContainer')
const buttonContainer = document.querySelector('.buttonContainer')
const btns = document.querySelectorAll('button');
const tabPanels = document.querySelectorAll('.tabPanel');


btns.forEach(btn => {
    btn.addEventListener('click', ()=>{
        buttonContainer.querySelector('.active').classList.remove('active');
        btn.classList.add('active');

        tabPanels.forEach(tab =>{
            const dataAttr = btn.getAttribute('data-target');

            if(tab.id === dataAttr ){
                tabContainer.querySelector('.tabPanel.active').classList.remove('active')
                tab.classList.add('active');
            }
        })
    });
});