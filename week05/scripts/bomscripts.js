const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

buttonElement.addEventListener('click', () => {
    if (inputElement.value !== '') {
        displayList(inputElement.value);
        chaptersArray.push(inputElement.value);
        setChapterList();
        inputElement.value = '';
        inputElement.focus();
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    li.append(deleteButton);
    listElement.append(li);

    deleteButton.addEventListener('click', function () {
        listElement.removeChild(li);
        deleteChapter(li.textContent);
        inputElement.focus();
    });
    
}

function setChapterList() {
    localStorage.setItem('MyFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    const storedList = localStorage.getItem('MyFavBOMList');
    return storedList ? JSON.parse(storedList) : [];
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}





