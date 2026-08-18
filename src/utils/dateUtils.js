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

const parseLocalDate = (dateInput) => {
  if (!dateInput) return null;
  if (dateInput instanceof Date) return dateInput;
  if (typeof dateInput === 'string' && dateInput.includes('-')) {
    const parts = dateInput.split('-');
    if (parts.length === 3) {
      return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    }
    if (parts.length === 2) {
      return new Date(Number(parts[0]), Number(parts[1]) - 1, 1);
    }
  }
  return new Date(dateInput);
};

export const getAvailabilityStatus = (experiences = [], currentDate = new Date()) => {
  if (!experiences || experiences.length === 0) {
    return {
      status: 'available',
      label: 'Disponible',
      color: 'green'
    };
  }

  // Trier par date de début décroissante pour obtenir la plus récente
  const sorted = [...experiences].sort((a, b) => {
    const dateA = parseLocalDate(a.startDate);
    const dateB = parseLocalDate(b.startDate);
    return (dateB ? dateB.getTime() : 0) - (dateA ? dateA.getTime() : 0);
  });

  const latestExp = sorted[0];

  // Si la dernière expérience n'a pas de date de fin précisée (ex: null / Présent)
  if (!latestExp.endDate) {
    return {
      status: 'unavailable',
      label: 'Indisponible',
      color: 'red'
    };
  }

  const endDateObj = parseLocalDate(latestExp.endDate);
  const nowObj = parseLocalDate(currentDate) || new Date();

  // Si la date de fin est dans le futur
  if (endDateObj && endDateObj > nowObj) {
    const formattedDate = endDateObj.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    return {
      status: 'available_from',
      label: `Disponible à partir du ${formattedDate}`,
      formattedDate,
      color: 'orange'
    };
  }

  // Sinon si la date de fin est antérieure ou égale à la date actuelle
  return {
    status: 'available',
    label: 'Disponible',
    color: 'green'
  };
};


