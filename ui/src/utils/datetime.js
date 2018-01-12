export default function getFormatedDate(existingDate, newFormat) {
  let output = existingDate,
  dateTimeParts,
  dateParts,
  month =['January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septmber', 'October', 'November', 'December' ];
  output = output.substr(output.indexOf(" ") + 1).split(' ');
  output = (output[0]+' '+ output[2]+output[3]).replace(/\//g,'-');
  dateTimeParts = output.split(' ');
  dateParts = dateTimeParts[0].split('-');
  output = month[dateParts[0].replace('0','')] +' ' + dateParts[1]+ ', '+dateParts[2]+' - '+dateTimeParts[1]+ ' (EST)';
  return output;
}
