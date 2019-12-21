export const PARSE = 'PARSE';
const htmlparser2 = require('htmlparser2');

export function parse() {
  const parser = new htmlparser2.Parser(
    {
      onopentag(name, attribs) {
        if (name === 'script' && attribs.type === 'text/javascript') {
          console.log('JS! Hooray!');
        }
      },
      ontext(text) {
        console.log('-->', text);
      },
      onclosetag(tagname) {
        if (tagname === 'script') {
          console.log("That's it?!");
        }
      }
    },
    { decodeEntities: true }
  );
  parser.write(
    "Xyz <script type='text/javascript'>var foo = '<<bar>>';</ script>"
  );
  parser.end();
}
