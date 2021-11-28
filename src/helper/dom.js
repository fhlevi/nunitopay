const addElementOnHead = (el, attr) => {
    let nameTag = document.createElement(el);

    if(typeof attr === 'object') {
        for(let key of Object.keys(attr)) {
            nameTag.setAttribute(key, attr[key]);
        }
    }

    document.head.appendChild(nameTag);
}

export {
    addElementOnHead
}