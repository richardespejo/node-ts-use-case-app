
const runCommand = async( args: string[] ) => {

    process.argv = [ ...process.argv, ...args ];
    const { yarg } = await import('./args.plugins');
    return yarg;
}


describe(`Test args.plugins.ts` , () => {
    test('', ()=> {

    });
/*
    const originalArgv = process.argv;

    beforeEach( () => {
        process.argv = originalArgv;
        jest.resetModules();
    });

    test('should return defaut values' , async() => {

        const argv =  await runCommand(['-b','5'])

        console.log(argv);

        expect(argv).toEqual( expect.objectContaining({
            b:5,
            l:20,
            s:false,
            n:'multiplication-table',
            d:'outputs'

        }));

    });

    test('should return configuration with custom values', async() => {

        const argv =  await runCommand(['-b','8', '-l', '20', '-s', '-n', 'custom-name','-d','custom-dir']);

        console.log(argv);

        expect(argv).toEqual( expect.objectContaining({
            b:5,
            l:20,
            s:false,
            n:'multiplication-table',
            d:'outputs'

        }));



    });
*/

});