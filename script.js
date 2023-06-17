// Good Luck 💪🏾

function plusHashCount(str) {
    let hashCount = 0;
    let plusCount = 0;
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '#') {
        hashCount++;
      } else if (str[i] === '+') {
        plusCount++;
      }
    }
    
    return [hashCount, plusCount];
  }
  console.log(plusHashCount("+++++####"));