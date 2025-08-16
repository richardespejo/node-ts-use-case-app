import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOption {
    base: number;
    limit: number;
    showTable: boolean;
    fileName: string;
    fileDestination : string;
}


export class ServerApp {

    constructor() {
        
    }

    static run( {base, limit, showTable, fileDestination, fileName }: RunOption ){
        console.log('Servidor corriendo...');

        const table = new CreateTable().execute({base, limit});
        const tableCreated = new SaveFile().execute({ fileContent: table , fileDestination: fileDestination , fileName: fileName });

        if( showTable ){
            console.log(`table`,table);
        }

        (tableCreated)
            ? console.log(`Archivo creado`)
            : console.log(`Archivo no creado`);


    }
}