const express = require('express');
const path = require('path');
const youtubedl = require('youtube-dl-exec');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir les fichiers statiques depuis le dossier 'public'
app.use(express.static(path.join(__dirname, '../public')));

const qualityMap = {
    low: '480',
    medium: '720',
    high: '1080',
    '4k': '2160'
};

app.post('/download', (req, res) => {
    const { url, format, quality } = req.body;
    console.log(`URL: ${url}, Format: ${format}, Quality: ${quality}`); // Log pour vérifier les données reçues

    let formatOption = format === 'mp3' ? 'bestaudio' : `bestvideo[height<=${qualityMap[quality]}]+bestaudio/best`;
    let output = format === 'mp3' ? 'audio.mp3' : 'video.mp4';

    const downloadPath = path.join(__dirname, '../downloads', output);

    youtubedl(url, {
        format: formatOption,
        output: downloadPath
    }).then(output => {
        res.json({ message: `Téléchargement terminé : ${output}` });
    }).catch(err => {
        console.error(err); // Log pour vérifier les erreurs
        res.status(500).json({ error: err.message });
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
