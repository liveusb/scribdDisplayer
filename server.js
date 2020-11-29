const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile('index');
})

app.post('/unlock', (req, res) => {
    const { url, title } = req.body;
    const articleTitle = title;
    const scribdUrl = new URL(url)
    const numID = scribdUrl.pathname.split('/')[2];
    const template = `<iframe class="scribd_iframe_embed" title="${title}" src="https://www.scribd.com/embeds/${numID}/content?start_page=1&view_mode=scroll" data-auto-height="true" data-aspect-ratio="0.7080062794348508" scrolling="no" width="100%" height="600" frameborder="0"></iframe>`
    res.json({
        template,
        articleTitle
    })
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})