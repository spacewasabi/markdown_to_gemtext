const fs = require('fs');
const marked = require('marked');

// function to convert markdown to gemtext
const convertMarkdownToGemtext = (markdown) => {
    return marked.parse(markdown, { renderer: new marked.Renderer() });
};

// get file name from command-line argument
const fileName = process.argv[2];

// read markdown file
fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) throw err;

    // convert markdown to gemtext
    const gemtext = convertMarkdownToGemtext(data);

    console.log(gemtext);

    // get output file name by replacing the file extension
    const outputFileName = fileName.replace(/\.md$/, '.gmi');

    // write gemtext to a file
    fs.writeFile(outputFileName, gemtext, (writeErr) => {
        if (writeErr) throw writeErr;
        console.log(`${fileName} converted to GEMText and saved as ${outputFileName}!`);
    });
});
