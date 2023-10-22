export function formateDateToDDMMYYYY(data: Date): string {
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();

  return `${dia}/${mes}/${ano}`;
}

export function formateHourMinute(data: Date): string {
  const hora = String(data.getHours()).padStart(2, '0');
  const minuto = String(data.getMinutes()).padStart(2, '0');

  return `${hora}:${minuto}`;
}

/**
 * Converte 2 strings em um objeto Date com o datetime
 * @param {string} date - Data string no formato dd/mm/yyyy.
 * @param {string} time - String de tempo no formato hh:mm:ss.
 * @returns {Date} Datetime criado a partir dos parametros
 */
export function convertDatetimeStringToDate(date: string, time: string): Date {
  const dateParts = date.split('/');
  const timeParts = time.split(':');

  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10) - 1;
  const year = parseInt(dateParts[2], 10);
  const hour = parseInt(timeParts[0], 10);
  const minute = parseInt(timeParts[1], 10);
  const second = parseInt(timeParts[2], 10);

  const dateTime = new Date(year, month, day, hour, minute, second);
  return dateTime;
}
