const panels = document.querySelectorAll(".panel");
var buy = document.querySelectorAll("#buy");
var num = document.getElementById("num");

var count = 0;

buy.forEach(btn => {
    btn.addEventListener("click",() => {
        count++;
        num.innerHTML = "("+ count +")";
    })
})


panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeAllClasses();
        panel.classList.add('active');
    })
});

function removeAllClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}