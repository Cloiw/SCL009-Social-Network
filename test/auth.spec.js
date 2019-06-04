import {areAllValidated,validateEachInput,validateEmail} from "./../src/assets/js/validation.js"


/*Validaciones de las funciones que chequean crear cuenta()*/

const result = 
{name:true,
 age:true,
 location:false,
 email:true,
 password:true,
}
describe("areAllValidated",()=>{
    it("deberia retornar false, cuando alguno de los campos sea false",()=>{
        expect(areAllValidated(result)).toBe(false);
    })
});
 const resulValidateEachInput =
    {name:true,
    age:true,
    location:true,
    email:true,
    password:false,
  }
test("validateEachInput, Deberia retornar un objeto con todos los parametros en true menos la contraseña", () => {
    expect(validateEachInput("Betsi","35","Santiago","nsakh@gmail.com","1234")).toEqual(resulValidateEachInput)
});

describe ("validateEmail",()=>{
    it("Deberia retornar true si el correo es valido", () =>{
     expect(validateEmail("hola@gmail.com")).toBe(true);
    })
});


   