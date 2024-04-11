function likes(names) {
  let nameAmount = names.length;
  switch(nameAmount) {
      case 0:
        return "no one likes this";
        break;
      case 1:
        return names + ' likes this';
        break;
      case 2:
        return names[0] + " and " + names[1] + " like this";
        break;
      case 3:
        return names[0] + ", " + names[1] + " and " + names[2] + " like this";
        break;
      default:
        return names[0] + ", " + names[1] + " and " + (nameAmount - 2) + " others like this";
        break;
  }
}


// old solution from when I came across this kata 2 weeks ago

// function likes(names) {
//     if (names.length == 0) {
//       return "no one likes this"
//     } else if (names.length == 1) {
//       return names[0] + " likes this"
//     } else if (names.length == 2) {
//       return names[0] + " and " + names[1] + " like this"
//     } else if (names.length == 3) {
//       return names[0] + ", " + names[1] + " and " + names[2] + " like this"
//     } else {
//       return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this"
//      }
//   }