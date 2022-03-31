// 1
const todoList = document.querySelector('#todo-list');
const listTasks = [
    { name: 'Починить холодильник', isCompleted: false, date: '16.07.2019' },
    { name: 'Выгулять собаку', isCompleted: false, date: '14.03.2021' },
    { name: 'Сходить на пары', isCompleted: true, date: '27.04.2018' },
    { name: 'Купить молоко', isCompleted: false, date: ' 30.12.2020' }
];

let html = '<ol>';
listTasks.forEach(element => {
    html += `
        <li>
            ${element.name}
            <input type="checkbox" ${element.isCompleted ? 'checked' : ''} />
            ${element.date}
        </li>
    `;
});
html += '</ol>';

todoList.innerHTML = html;


// 2
const src = './img/flag.png';
const header = document.querySelector('header');
header.style.backgroundImage = `url(${src})`;


// 3 
const links = [
    { name: 'Главная', src: '/home' },
    { name: 'Статьи', src: '/articles' },
    { name: 'Контакты', src: '/contacts' },
    { name: 'Профиль', src: '/profile' }
];
const navigation = document.querySelector('#header-nav');

let navHtml = '';
links.forEach(element => {
    navHtml += `
        <a href="${element.src}">${element.name}</a>
    `;
});

navigation.innerHTML = navHtml;