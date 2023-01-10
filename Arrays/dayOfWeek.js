function dayOfWeek(day) {
  if (day < 1 || day > 7) {
    console.log('Invalid day!');
  } else {
    let dayNameArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    console.log(dayNameArr[day - 1]);
  }

  // switch (day) {
  //   case 1:
  //       break;
  //    case 2:
  //        break;
  //    case 3:
  //        break;
  //    case 4:
  //        break;
  //    case 5:
  //        break;
  //    case 6:
  //         break;
  //     case 7:
  //         break;
  //     default:
  //  }

}
dayOfWeek(5)