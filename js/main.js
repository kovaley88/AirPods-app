const chooseColor = Array.from(document.querySelectorAll('.choose-color__btn'));
const contentItem = document.querySelectorAll('.content-item');

console.log(chooseColor);
console.log(contentItem);

chooseColor.forEach(function (el) {
    el.addEventListener('click', open);
});

function open(ev) {
    const target = ev.currentTarget;
    const button = target.dataset.color;
    const contentActive = document.querySelectorAll(`.${button}`);
    const activeColor = chooseColor.find(function (item) {
        return item.classList.contains('choose-color-active');
    });
    activeColor.classList.remove("choose-color-active")




    target.classList.add('choose-color-active');

    contentItem.forEach(function (item) {
        item.classList.remove('content-active');
    });

    contentActive.forEach(function (item) {
        item.classList.add('content-active');
    });
}