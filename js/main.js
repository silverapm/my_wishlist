let searchResults = null;
const pageSize = 8;
let pageNumber = 0;

function removeHandler() {
    const elements = document.querySelectorAll('.removeButton');
    for (let i = 0; i < elements.length; i++) {
        elements[i].onclick = function () {
            let phoneBlock = this.closest('.bigphoneblock');
            phoneBlock.classList.add("deleted");
            paginate();
            generatePagination();
        }
    }
}

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
        const elements = document.querySelectorAll('.bigphoneblock:not(.deleted)');

        for (let i = 0; i < elements.length; i++) {
            const title = elements[i].getElementsByTagName('h4')[0];
            if (title.innerText.toUpperCase().indexOf(filter) > -1) {
                searchResults.push(elements[i]);
            } else {
                elements[i].style.display = 'none';
            }
        }
    }
    pageNumber = 0;
    paginate();
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
        pageNumber = 0;
        removeHandler();
        paginate();
        generatePagination();
    }, false);
})();

function paginate() {
    let style;
    const elements = searchResults || document.querySelectorAll('.bigphoneblock:not(.deleted)');

    for (let i = 0; i < elements.length; i++) {
        if (pageNumber * pageSize <= i && i < pageNumber * pageSize + pageSize) {
            style = 'display: block';
        } else {
            style = 'display: none';
        }
        elements[i].style = style;
    }
}


function generatePagination() {
    const elements = searchResults || document.querySelectorAll('.bigphoneblock:not(.deleted)');
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    for (let i = 0; i < Math.ceil(elements.length / pageSize); i++) {
        pagination.innerHTML += '<button type="button" class="btn btn-secondary btn-lg pagebtn" id="pagebtn' + i + '">' + (i + 1) + '</button>';
    }

    for (let i = 0; i < Math.ceil(elements.length / pageSize); i++) {
        document.getElementById('pagebtn' + i).onclick = function () {
            pageNumber = i;
            paginate();
        }
    }
}

document.getElementById('clearlistbtn').onclick = function () {
    setStyleByClassName('bigphoneblock', 'display: none');
    searchResults = [];
    pageNumber = 0;
    paginate();
    generatePagination();
    document.getElementById("clearlistbtn").disabled = true;
    document.getElementById("inputSearch").disabled = true;
}


