import fs from 'fs';
import { yarg } from './config/plugins/args.plugins';

const { b:base, l:limit, s:showTable } = yarg;
let message = '';
const header = `
======================================
            Tabla del ${base}
======================================
`;

for( let i = 1 ; i <= limit ; i++ ){
    message += `${ base } x ${i} = ${ base * i}\n`;
}

message = header + message;

if(showTable){
console.log(message);
}


const outPath = `outputs`;

fs.mkdirSync( outPath , { recursive:true});
fs.writeFileSync(`${outPath}/tabla-${base}.txt`, message);

console.log('Archivo creado');