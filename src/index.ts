import DataTypes from './references/basic/data_types';
import { log } from './utils/helper';

console.log('\n\n<------ index.ts ----->');

const tag = 'Index';

{
  log(tag);

  const hello = 'Hello';
  const world = 'World';

  console.log(hello + ' ' + world);
  console.log(DataTypes);
}

export default tag;
