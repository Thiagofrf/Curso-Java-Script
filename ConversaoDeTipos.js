console.log("Conversão de tipos");

console.log("Convertendo soma: ", parseInt("2") + parseInt("2"))
console.log("Convertendo outras operações: ", "10" / "2", "10" * "2", "10" - "2")
console.log("Convertendo texto com número: ", "Thiago" / 2) // Retorno = Not A Number - NaN

// Com exceção da soma, o interpretador do JavaScript faz um parse automático quando fazemos uma operação matemática (*, / ou -) com texto. Ex: "10" / "5" = 2, porém "2" + "2" = 22