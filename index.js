let indice = 0
window.onload = () => {
    document.querySelector('#btn-new').addEventListener("click", () => {
        document.querySelector('#number').innerHTML = cambiarNumber();
        const cardIconColor = ['red', 'black', 'red', 'black'];
        var listIcon = document.querySelectorAll('.icon');
        var icon = cambiarIcon();
        for (i = 0; i < listIcon.length; i++) {
            listIcon[i].innerHTML = icon;
            listIcon[i].style.color = cardIconColor[indice];
        }
        document.querySelector('#number').style.color = cardIconColor[indice];
    });
    let cambiarIcon = () => {
        const cardIcon = ['♠', '♣', '♥', '♦'];
        const random = Math.floor(Math.random() * cardIcon.length);
        indice = random;
        console.log(indice, cardIcon[random]);
        return cardIcon[random];
    }
};
let cambiarNumber = () => {
    const cardNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'K', 'j', 'Q'];
    const random = Math.floor(Math.random() * cardNumber.length);
    console.log(random, cardNumber[random]);
    return cardNumber[random];
}
