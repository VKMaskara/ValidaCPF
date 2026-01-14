// Validar CPF -> 705.484.450-52  070.987.720-03

function validarCpf(cpf){
    
    let cpfLimpo = (cpf.replace(/\D+/g, ''))
    if(cpfLimpo.length !==11) return false
    let somaPrimeiroDigito = 0
    let somaSegundoDigito = 0
    let primeiroDigito = 0
    let segundoDigito = 0
    cpfArray = Array.from(cpfLimpo)
    
    for(let i=0; i<9; i++){
        somaPrimeiroDigito += cpfLimpo[i]*(10 - i)
    }
    for(let j=0; j<10; j++){
        somaSegundoDigito += cpfLimpo[j]*(11 - j)
    }
    
    primeiroDigito = 11 - (somaPrimeiroDigito % 11)
    if(primeiroDigito > 9) primeiroDigito = 0

    segundoDigito = 11 - (somaSegundoDigito % 11)
    if(segundoDigito > 9){ segundoDigito = 0}

    const digito1Original = Number(cpfArray[9])
    const digito2Original = Number(cpfArray[10])

    if(primeiroDigito === digito1Original && segundoDigito === digito2Original){
        console.log(`CPF: ${cpf} é válido!`)
    }else{
        console.log(`CPF: ${cpf} é inválido!`)
    }
}
validarCpf(' 705.484.450-52')
