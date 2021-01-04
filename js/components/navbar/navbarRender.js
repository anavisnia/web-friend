function navbarRender(data) {
    let DOM = null;
    let HTML = '';

    DOM = document.querySelector('nav');

    for (let i = 0; i < data.length; i++) {
        const navItem = data[i];
        HTML += `<a href="${navItem.link}">${navItem.name}</a>`; 
    }

    return DOM.innerHTML = HTML;
};

export { navbarRender }