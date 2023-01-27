# markdown_to_gemtext

## Purpose

In this folder, you can find a script written to generate gemtext from markdown. It's just a test, since it's only going to convert the file extension after parsing the markdown file then writing the gemtext into a new file. This script will need to be updated so the markdown syntax also gets updated as gemini syntax, which I am not sure to be capable of doing right now.

If you want to give it a shot, please fork this repository and try to do it, then you can create a pull request so I can update the script and this documentation accordingly.

## Usage

As of now, if you want to run the script, make sure you have a recent version of node installed then run the following command :

```shell
node path/to/md_to_gmi.js example.md
```

## Guidelines

There's multiple tasks to add to the script :

* parsing markdown file - ✅
* change markdown links to gemtext links - ❌
* change markdown images to gemtext image link - ❌
* change markdown lists to gemtext lists - ❌
* change markdown quotes to gemtext quotes - ❌
* change markdown codeblocks to gemtext codeblocks - ❌
* save to gemtext file - ✅
