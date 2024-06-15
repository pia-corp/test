export const convertToJSTDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Tokyo',
    hour12: false,
  };
  const formattedDate = new Intl.DateTimeFormat('ja-JP', options).format(date);
  const [datePart, timePart] = formattedDate.split(' ');
  return `${datePart.replace(/\//g, '/')} ${timePart}`;

  // 年月日表記
  // return date.toLocaleDateString('ja-JP', options).replace(/\//g, '年').replace(/\//g, '月').replace(',', '日 ');
};

// // 日までの表記
// export const convertToJSTDate = (dateString: string): string => {
//   const date = new Date(dateString);
//   const options: Intl.DateTimeFormatOptions = {
//     year: 'numeric',
//     month: '2-digit',
//     day: '2-digit',
//     timeZone: 'Asia/Tokyo'
//   };
//   return date.toLocaleDateString('ja-JP', options);
// };
