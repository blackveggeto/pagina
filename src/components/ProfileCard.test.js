import { titleCase } from "./ProfileCard";


describe('funciones dentro del componente', ()=>{
    describe('titleCase',()=>{

        test('debe retornar un string', ()=>{
            const result = titleCase('valor');
            expect(typeof result).toBe('string');
        });

        test('debe retornar un string transformado',()=>{
            expect(titleCase('nada que decir xd')).toBe('Nada Que Decir Xd');
        })
        
    });
});