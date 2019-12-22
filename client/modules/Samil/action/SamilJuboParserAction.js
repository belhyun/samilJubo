export const PARSE = 'PARSE';
const htmlparser2 = require('htmlparser2');
const request = require('request');
const { JSDOM } = require('jsdom');
import _ from 'lodash';


export function parse() {
  return new Promise(() => {
    return request({ uri: 'https://www.samilchurch.com/weeklyreport' }, (error, response, body) => {
      if (error && response.statusCode !== 200) {
        console.log('Error when contacting myawesomepage.com');
      }
      console.log(_.map(new JSDOM(response.body).window.document.getElementsByClassName('hx'), (tag) => {
        return tag.getAttribute('href');
      }));
    });
  });
  // const parser = new htmlparser2.Parser(
  //   {
  //     onopentag(name, attribs) {
  //       if (name === 'script' && attribs.type === 'text/javascript') {
  //         console.log('JS! Hooray!');
  //       }
  //     },
  //     ontext(text) {
  //       console.log('-->', text);
  //     },
  //     onclosetag(tagname) {
  //       if (tagname === 'script') {
  //         console.log("That's it?!");
  //       }
  //     }
  //   },
  //   { decodeEntities: true }
  // );
  // parser.write(
  //   "Xyz <script type='text/javascript'>var foo = '<<bar>>';</ script>"
  // );
  // parser.end();
}
