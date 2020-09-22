
let userInput = process.argv.slice(2); 


for (const element of userInput){
  if (element > 0 && element !== NaN) {
    let timer = element * 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timer);  
  }

}