const btn = document.querySelector('button');
const url = document.querySelector('input');
const title = document.querySelectorAll('input')[1];
const doc = document.querySelector('.doc');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    fetch('/unlock', {
        method: 'POST',
        body: JSON.stringify({
            url: url.value,
            title: title.value,
        }),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then((resp) => resp.json())
        .then((result) => {
            url.value = "";
            title.value = "";
            const { template, articleTitle } = result;
            doc.innerHTML = template;
            document.title = articleTitle;
        })
        .catch((err) => {
            console.log(err);
        })
})