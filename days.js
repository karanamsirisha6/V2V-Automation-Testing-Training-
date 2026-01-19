let day="sunday";
switch(day){
    case 'monday':
    case 'tuesday':
    case 'wednesday':
        console.log("8AM");
    break;
    case 'thursday':
    case 'friday':
        console.log("9AM");
    break;
    case 'saturday':
        console.log("10AM")
    break;

    default:
        console.log("12AM");
}