import { format, formatDistance } from 'date-fns';
import svLocale from 'date-fns/locale/sv';
/* L7 Steg 3.3.2 Visa funktioner. toRelativeDateString och truncate */
export function toRelativeDateString(dateString) {
  const date = new Date(dateString);
  return formatDistance(date, new Date(), {
    addSuffix: true,
    locale: svLocale
  });
}
/* L7 Steg 5.6 Funktion för att formatera. Gör helt som ni vill. Demonstrerar mest date-fns. -> PIL  */
export function toDateTimeString(dateString) {
  const date = new Date(dateString);
  let string = '';
  string += format(date, 'eeee d MMMM yyyy', {
    locale: svLocale
  });
  string += ', klockan ';
  string += format(date, 'hh:mm:ss');
  return string;
}

export function truncate(str, maxLength) {
  return str.length > maxLength ? `${str.substring(0, maxLength)} ...` : str;
}
