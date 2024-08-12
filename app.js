const getUsers = async () => {
    const resp = await fetch('https://randomuser.me/api?results=5');
    const respJson = await resp.json();
    return respJson.results;
}

const renderUsers = (usersArr) => {
    const listEl = document.getElementById('user-list');
    const itemTemplateEl = document.getElementById('userItemTemplate');
    const listItemTemplate = itemTemplateEl.content.querySelector('.user-item');

    usersArr.forEach((userItem) => {
        const itemClone = listItemTemplate.cloneNode(true);
        itemClone.querySelector('.user-image').src = userItem.picture.thumbnail;
        itemClone.querySelector('#userName').textContent = userItem.name.first;
        itemClone.querySelector('#userEmail').textContent = userItem.email;
        itemClone.querySelector('#userContact').textContent = userItem.phone;
        listEl.append(itemClone);
    })
}

const clearList = () => {
    const listEl = document.getElementById('user-list');
    listEl.querySelectorAll('.user-item').forEach((el) => {
        el.remove();
    })
}

const handleReload = () => {
    const reloadbutton = document.getElementById('reloadButton');
    reloadbutton.addEventListener('click', async () => {
        clearList();
        const users = await getUsers();
        renderUsers(users)
    })
}

const main = async () => {
    const users = await getUsers();
    renderUsers(users);
    handleReload();
}


main();