import {areAllValidated,validateEachInput,validateEmail,validateSignInInput,validateTextPost} from "./../src/assets/js/validation.js"


//Test de las funciones para validar campos de registro

const result = 
{name:true,
 age:true,
 location:false,
 email:true,
 password:true,
}
describe("areAllValidated",()=>{
    it("Deberia retornar false, cuando alguno de los campos sea false",()=>{
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
    password:false
}

test("validateSignInInput, Deberia retornar un objeto con ambos parametros false", () =>{
    expect(validateSignInInput("soyuncorreo@novalido","pass")).toEqual(resultValidateSignInInput)
});


//validación función validateTextPost

const resultValidateTextPost =
{stageDirection:false,
 post:true,
}
test("validateTextPost, Deberia retornar un objeto con el parametro de stage true y el de post false", () =>{
    expect(validateTextPost("acotacion valida","as")).toEqual(resultValidateTextPost)
});


