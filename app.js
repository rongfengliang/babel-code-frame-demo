import { codeFrameColumns } from '@babel/code-frame';

const rawLines = `class Foo {
  constructor()
}`;
const location = { start: { line: 2, column: 11 } };

const result = codeFrameColumns(rawLines, location, { /* options */ });

console.log(result);