import { titleCase } from "../components/ProfileCard";


describe('funciones dentro del componente', ()=>{
    describe('titleCase',()=>{

        test('debe retornar un string', ()=>{
            const result = titleCase('valor');
            expect(typeof result).toBe('string');
        });

        test('debe retornar un string transformado',()=>{
            expect(titleCase('nada que decir')).toBe('Nada Que Decir');
        })
        
    });
});