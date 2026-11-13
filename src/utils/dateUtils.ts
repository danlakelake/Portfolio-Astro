export function formatDate(date: string): string {
  const [year, month] = date.split('-');
  const monthName = new Intl.DateTimeFormat('es-MX', {
    month: 'short',
  }).format(new Date(Number(year), Number(month) - 1, 1));
  return `${monthName.charAt(0).toUpperCase() + monthName.slice(1)} ${year}`;
}

export function getExperienceDuration(
  startDate: string,
  endDate: string | null,
  currentlyWorking: boolean,
): string {
  const start = new Date(`${startDate}T00:00:00`);

  if (!currentlyWorking && !endDate) {
    return '';
  }

  const end = currentlyWorking ? new Date() : new Date(`${endDate}T00:00:00`);

  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${remainingMonths} ${remainingMonths === 1 ? 'mes' : 'meses'}`;
  }

  if (remainingMonths === 0) {
    return `${years} ${years === 1 ? 'año' : 'años'}`;
  }

  return `${years} ${years === 1 ? 'año' : 'años'} ${remainingMonths} ${remainingMonths === 1 ? 'mes' : 'meses'}`;
}
