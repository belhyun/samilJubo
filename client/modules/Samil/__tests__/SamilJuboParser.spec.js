import test from 'ava';
import {
  parse
} from '../action/SamilJuboParserAction';

test('parseSamilJubo', async t => {
  await parse().then(result => {
    t.not(result, null);
  });
})

