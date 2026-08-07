export const calculateAge = (birthDate) => {
  if (!birthDate) return 0;
  const birth = new Date(birthDate);
  if (isNaN(birth.getTime())) return 0;

  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age >= 0 ? age : 0;
};

export const calculateDuration = (startDate, endDate = new Date()) => {
  if (!startDate) return '';
  const start = new Date(startDate);
  const end = new Date(endDate || new Date());
  if (isNaN(start.getTime()) || isNaN(end.getTime())) return '';

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years < 0) return '0 mois';

  if (years === 0) {
    return `${months} mois`;
  }

  if (months === 0) {
    return `${years} an${years !== 1 ? 's' : ''}`;
  }

  return `${years} an${years !== 1 ? 's' : ''}, ${months} mois`;
};

