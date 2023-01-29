# markdown_to_gemtext

## Purpose

In this folder, you can find a script written to generate gemtext from markdown. It's just a test, since it's only going to convert the file extension after parsing the markdown file then writing the gemtext into a new file. This script will need to be updated so the markdown syntax also gets updated as gemini syntax, which I am not sure to be capable of doing right now.

/!\ Do not do all the code by yourself! /!\

Please see the renderer.js file to see an example on how you can help! The goal is to add comments and/or sources to help me figure things out! If you produce all the code by yourself, I won't be able to learn anything from this project!

## Usage

As of now, if you want to run the script, make sure you have a recent version of node installed then run the following command :

```shell
node path/to/md_to_gmi.js path/to/example.md
```

## Guidelines

There's multiple tasks to add to the script :

* parsing markdown file - ✅
* change markdown titles to gemtext titles - ❌
* change markdown links to gemtext links - ✅
* change markdown images to gemtext image link - ❌
* change markdown lists to gemtext lists - ❌
* change markdown quotes to gemtext quotes - ❌
* change markdown codeblocks to gemtext codeblocks - ❌
* save to gemtext file - ✅
