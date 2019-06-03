import {validateSignIn,validateEmailSignIn} from "./../src/assets/js/validation.js"

/*Validaciones de las funciones que testean la función de iniciar sesión() */

describe("validateSignIn",()=>{
    it('deberia retornar true, si el usuario ingresa todos los campos',()=>{
        expect(validateSignIn("betsi.salas12@gmail.com","mypassword"))
        .toBe(true);
    })
})

describe("validateSignIn",()=>{
    it('deberia retornar false, si el usuario no ingresa ningún cambio',()=>{
        expect(validateSignIn("",""))
        .toBe(false);
    })
})

describe("validateEmailSignIn",()=>{
    it('deberia retornar false, si el correo es invalido',()=>{
        expect(validateEmailSignIn("correoinvalido")).toBe(false);
    })
})

describe("validateEmailSignIn",()=>{
    it('deberia retornar true, si el correo es valido',()=>{
        expect(validateEmailSignIn("correovalido@gmail.com")).toBe(true);
    })
})