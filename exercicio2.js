function pertenceFibonacci(num) {
    let a = 0;
    let b = 1;
  
    while (b < num) {
      let aux = b;
      b = a + b;
      a = aux;
    }
  
    if (b === num) {
      return true;
    } else {
      return false;
    }
  }
  
  let num = 12; 
  let pertence = pertenceFibonacci(num);
  
  if (pertence) {
    console.log(`${num} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${num} não pertence à sequência de Fibonacci.`);
  }

  //Nesse caso irá retornar que não pertence a Fibonacci, porém se a variavel "num" for alterada para 13 por exemplo, irá retornar que pertence a Fibonacci.