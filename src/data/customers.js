module.exports = Array.from({ length: 100 }, (_, i) => {
  const id = i + 1;

  return {
    id,
    firstName: `Ime${id}`,
    lastName: `Priimek${id}`,
    email: `uporabnik${id}@example.com`,
    createdAt: `2026-04-${String((id % 28) + 1).padStart(2, '0')}T10:00:00.000Z`
  };
});
