

function capitalizeFirstLetter(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function convertToMMMYY(dateStr: string): string {

  var dateStrLower = dateStr.toLowerCase().trim();
  if (dateStrLower === 'present' || dateStrLower === 'now' || dateStrLower === 'current') {
    return capitalizeFirstLetter(dateStr);
  }
  else {
    const [year, month] = dateStr.split('-').map(Number);
    if (!year || !month || month < 1 || month > 12) {
      throw new Error(`Invalid date format. Expected YYYY-MM.${dateStr}`);
    }

    const date = new Date(year, month - 1);
    const shortMonth = date.toLocaleString('en-US', { month: 'short' });
    const shortYear = String(year).slice(-2);

    return `${shortMonth}, ${shortYear}`;
  }
}

