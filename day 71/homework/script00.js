let p = document.createElement('p');
    p.textContent = 'This is a new paragraph.';
    document.body.appendChild(p);

    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.textContent = 'This is a heading inside a div';
    div.appendChild(h1);
    document.body.appendChild(div);

    let img = document.createElement('img');
    img.src = 'https://via.placeholder.com/150';
    img.alt = 'Placeholder Image';
    document.body.appendChild(img);

    let button = document.createElement('button');
    button.textContent = 'Click me';
    document.body.appendChild(button);

    let ul = document.createElement('ul');
    let items = ['First item', 'Second item', 'Third item'];
    items.forEach(text => {
        let li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
});
document.body.appendChild(ul);