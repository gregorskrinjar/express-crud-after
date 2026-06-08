const brands = [
  'Volkswagen',
  'BMW',
  'Audi',
  'Mercedes-Benz',
  'Renault',
  'Peugeot',
  'Ford',
  'Toyota',
  'Hyundai',
  'Škoda'
];

const models = [
  'Golf',
  '320d',
  'A4',
  'C220',
  'Megane',
  '308',
  'Focus',
  'Corolla',
  'i30',
  'Octavia'
];

const vehicleTypes = [
  'Hatchback',
  'Sedan',
  'Combi',
  'SUV'
];

module.exports = Array.from({ length: 100 }, (_, i) => {
  const id = i + 1;
  const index = i % brands.length;

  return {
    id,
    customerId: id,
    brand: brands[index],
    model: `${models[index]} ${id}`,
    vin: `VIN${String(id).padStart(14, '0')}`,
    registrationNumber: `MB-${String(id).padStart(3, '0')}`,
    vehicleType: vehicleTypes[i % vehicleTypes.length],
    year: 2010 + (i % 15),
    createdAt: `2026-04-${String((id % 28) + 1).padStart(2, '0')}T10:15:00.000Z`
  };
});
