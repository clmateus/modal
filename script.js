const opnModal = document.querySelector('#openModal');
const modal = document.querySelector('#modal');

opnModal.addEventListener('click', openModal);

function openModal(){
    modal.classList.remove('invisible');
}

document.addEventListener('keydown', function(event){
    if(event.code == 'Escape'){
        modal.classList.add('invisible');
    }
});