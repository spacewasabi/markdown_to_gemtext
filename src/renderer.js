const marked = require('marked');

// This is our custom renderer that will take what Marked and our tokeniser create and convert it to Gemtext

const renderer  = {
  //What to do when we find a paragraph
  paragraph(text) {
	return `${text}`; //We don't want the renderer adding <p> tags. Just the text please!
  },
  //What to do when we find an anchor (hyperlink)
  link(href, title, text) {
    return `\r\n=> ${href} ${text}\r\n`; //The \r\n is a generic line-break, because Gemini needs each link to be on its own line
  }
};

// The full list of implementable methods (heading, hr, etc) on the renderer prototype can be found at https://marked.js.org/using_pro#renderer
// We need to implement ALL of these to create a proper Markdown to Gemtext converter - this can only do paragraphs and links so far!

// We also need an extension to find and prevent the tokenizer from replacing certain special characters we find with HTML entities. We can selectively do that using this hack:
// (Mercilessly cribbed from https://github.com/markedjs/marked/issues/269)

const singleQuote = {
  name: "singleQuote",
  level: "inline", // This is an inline-level tokenizer
  start(src) {
    return src.indexOf("'");
  }, // Hint to Marked.js to stop and check for a match
  tokenizer(src, tokens) {
    const rule = /^'/; // Regex for the complete token, anchor to string start
    const match = rule.exec(src);
    if (match) {
      return {
        // Token to generate
        type: "singleQuote", // Should match "name" above
        raw: match[0], // Text to consume from the source
        text: match[0], // Additional custom properties
      };
    }
  },
  renderer(token) {
    return token.text;
  },
};

// We created our renderer and tokenizer extensions, let's use them!

// Set up marked to use our custom tokenizer and renderer
marked.use({ extensions: [singleQuote] });
marked.use({renderer});

// Run marked
console.log(marked.parse('I\'ma visit [the example site](https://example.com).'));
/*
This should generate:

I'ma visit
=> https://example.com the example site
*/