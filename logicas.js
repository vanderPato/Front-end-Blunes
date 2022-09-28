function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')

}


const item = document.querySelectorAll('.quicksandFont');

item.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        item.forEach(f => f != e.target ? f.classList.remove('rotation') : '');
        e.target.classList.toggle("rotation");

        item.forEach(f => f != e.target ? f.classList.remove('mostraBlock1') : '');
        e.target.classList.toggle("mostraBlock1");

    });
});







