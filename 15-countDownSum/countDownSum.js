class MySolution {
  countDownSum(num) {

    if(num === 1) {
      return 1;
    }

    if(num === 0) {
      return 0;
    }
    return (num + (countDownSum(num - 1)));
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;