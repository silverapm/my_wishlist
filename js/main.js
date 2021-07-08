
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

let searchResults = null;
const pageSize = 8;

function setStyleByClassName(className, style, index) {
    const elements = document.getElementsByClassName(className);

    if (index !== undefined && index !== null) {
        elements[index].style = style;

        return;
    }

    for (let i = 0; i < elements.length; i++) {
        elements[i].style = style;
    }
}

function search() {
    const searchField = document.getElementById('inputSearch');
    const filter = searchField.value.toUpperCase();

    if (filter === '') {
        searchResults = null;
    } else {
        searchResults = [];
        const elements = document.getElementsByClassName('bigphoneblock');

        for (let i = 0; i < elements.length; i++) {
            const title = elements[i].getElementsByTagName('h4')[0];
            if (title.innerText.toUpperCase().indexOf(filter) > -1) {
                searchResults.push(elements[i]);
            } else {
                elements[i].style.display = 'none';
            }
        }
    }
    paginate(0);
    generatePagination();
}

(function () {
    window.addEventListener('load', function () {
        let forms = document.getElementsByClassName('needs-validation');
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                form.classList.add('was-validated');

                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            }, false);
        });
        paginate(0);
        generatePagination();
    }, false);
})();

function paginate(page) {
    let style;
    const elements = searchResults||document.getElementsByClassName('bigphoneblock');

    for (let i = 0; i < elements.length; i++) {
        if (page*pageSize <= i && i < page*pageSize+pageSize) {
            style = 'display: block';
        } else {
            style = 'display: none';
        }
        elements[i].style=style;
    }
}


function generatePagination () {
    const elements = searchResults||document.getElementsByClassName('bigphoneblock');
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    for (let i = 0; i < Math.ceil(elements.length/pageSize); i++) {
        pagination.innerHTML += '<button type="button" class="btn btn-secondary btn-lg pagebtn" id="pagebtn'+i+'">'+(i+1)+'</button>';
        let item = document.getElementById('pagebtn'+i);
        /*
        document.getElementById('pagebtn'+i).onclick = function () {
            paginate(i);
        }
         */
    }
    for (let i = 0; i < elements.length; i++) {
        document.getElementById('pagebtn'+i).onclick = function () {
            paginate(i);
        }
    }
}

document.getElementById('clearlistbtn').onclick = function () {
    setStyleByClassName('bigphoneblock', 'display: none');
    searchResults = [];
    paginate(0);
    generatePagination();
    document.getElementById("clearlistbtn").disabled = true;
    document.getElementById("inputSearch").disabled = true;
}


