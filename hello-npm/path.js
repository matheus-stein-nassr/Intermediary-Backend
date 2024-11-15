import { basename, dirname } from "path";

let nomeArquivo = basename('./teste.txt');
let filename = basename('/test/something');

let dir = dirname('/test/something');
let diretorio = dirname('/test/something/file.txt');

console.log('Nome do arquivo -> ' + nomeArquivo);
console.log('Filename -> ' + filename);
console.log('Dir -> ' + dir);
console.log('Diretorio -> ' + diretorio);