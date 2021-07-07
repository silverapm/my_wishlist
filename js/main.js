

document.getElementById('button1').onclick = function () {
    setStyleByClassName('bigphoneblock', 'display: none');
}

document.getElementById('pagebtn1').onclick = function () {
    setStyleByClassName('bigphoneblock', 'display: block');
}

document.getElementById('pagebtn2').onclick = function () {
    setStyleByClassName('bigphoneblock', 'display: block');
}

document.getElementById('pagebtn3').onclick = function () {
    setStyleByClassName('bigphoneblock', 'display: block');
}

document.getElementById('pagebtn4').onclick = function () {
    setStyleByClassName('bigphoneblock', 'display: block');
}

document.getElementById('removebtn0').onclick = function () {
    setStyleByClassName('bigphoneblock', 'display: none', 0);
}

document.getElementById('removebtn1').onclick = function () {
    setStyleByClassName('bigphoneblock', 'display: none', 1);
}

document.getElementById('removebtn2').onclick = function () {
    setStyleByClassName('bigphoneblock', 'display: none', 2);
}

document.getElementById('removebtn3').onclick = function () {
    setStyleByClassName('bigphoneblock', 'display: none', 3);
}

document.getElementById('removebtn4').onclick = function () {
    setStyleByClassName('bigphoneblock', 'display: none', 4);
}

document.getElementById('removebtn5').onclick = function () {
    setStyleByClassName('bigphoneblock', 'display: none', 5);
}

document.getElementById('removebtn6').onclick = function () {
    setStyleByClassName('bigphoneblock', 'display: none', 6);
}

document.getElementById('removebtn7').onclick = function () {
    setStyleByClassName('bigphoneblock', 'display: none', 7);
}

document.getElementById('removeAbtn0').onclick = function () {
    setStyleByClassName('bigphoneblock', 'display: none', 0);
}

document.getElementById('removeAbtn1').onclick = function () {
    setStyleByClassName('bigphoneblock', 'display: none', 1);
}

document.getElementById('removeAbtn2').onclick = function () {
    setStyleByClassName('bigphoneblock', 'display: none', 2);
}

document.getElementById('removeAbtn3').onclick = function () {
    setStyleByClassName('bigphoneblock', 'display: none', 3);
}

document.getElementById('removeAbtn4').onclick = function () {
    setStyleByClassName('bigphoneblock', 'display: none', 4);
}

document.getElementById('removeAbtn5').onclick = function () {
    setStyleByClassName('bigphoneblock', 'display: none', 5);
}

document.getElementById('removeAbtn6').onclick = function () {
    setStyleByClassName('bigphoneblock', 'display: none', 6);
}

document.getElementById('removeAbtn7').onclick = function () {
    setStyleByClassName('bigphoneblock', 'display: none', 7);
}

function setStyleByClassName(className, style, index) {
    const elements = document.getElementsByClassName(className);

    if (index !== undefined && index !== null) {
        elements[index].style = style;

        return;
    }

    for (let i = 0; i <= elements.length; i++) {
        elements[i].style = style;
    }
}

function search() {
    const searchField = document.getElementById("inputSearch");
    const filter = searchField.value.toUpperCase();
    const elements = document.getElementsByClassName("bigphoneblock");

    for (let i = 0; i < elements.length; i++) {
        const title = elements[i].getElementsByTagName("h4")[0];
        if (title.innerHTML.toUpperCase().indexOf(filter) > -1) {
            elements[i].style.display = "";
        } else {
            elements[i].style.display = "none";
        }
    }
}

