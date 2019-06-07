import {areAllValidated,validateEachInput,validateEmail,validateSignInInput,validatePost} from "./../src/assets/js/validation.js"


//Test de las funciones para validar campos de registro

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
    expect(validateEachInput("micorreo","35","Santiago","nsakh@gmail.com","1234")).toEqual(resulValidateEachInput)
});

describe ("validateEmail",()=>{
    it("Deberia retornar true si el correo es valido", () =>{
     expect(validateEmail("hola@gmail.com")).toBe(true);
    })
});

//Test de la funcion para validar campos de logeo

const resultValidateSignInInput =
    {email:false,
    password:false,
  }
test("validateSignInInput, Deberia retornar un objeto con ambos parametros false", () =>{
    expect(validateSignInInput("soyuncorreo@novalido","pass")).toEqual(resultValidateSignInInput)
});


//validación función validatePost

describe("validatePost",()=>{
    it('deberia retornar false, si el input es vacío',()=>{
        expect(validatePost("")).toBe(false);
    })
})

describe("validatePost", () =>{
    it('deberia retornar true, si el input tiene texto',()=>{
        expect(validatePost("hola como estas?")).toBe(true);
    })
})

