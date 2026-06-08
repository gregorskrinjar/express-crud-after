const assert = require('node:assert/strict');
const { describe, it, before, after } = require('node:test');
const app = require('../src/app');

let server;
let baseUrl;

function request(path, options = {}) {
  return fetch(`${baseUrl}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    },
    ...options
  });
}

describe('Express CRUD API', () => {
  before(() => {
    server = app.listen(0);
    const { port } = server.address();
    baseUrl = `http://127.0.0.1:${port}`;
  });

  after(() => {
    server.close();
  });

  it('returns customers as DTOs', async () => {
    const response = await request('/customers');
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(body.success, true);
    assert.equal(body.data.length >= 100, true);
    assert.equal(Object.hasOwn(body.data[0], 'createdAt'), false);
  });

  it('searches customers by first or last name', async () => {
    const response = await request('/customers/search?query=ime1');
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(body.data.length >= 1, true);
    assert.equal(body.data[0].firstName, 'Ime1');
  });

  it('validates required customer fields', async () => {
    const response = await request('/customers', {
      method: 'POST',
      body: JSON.stringify({ firstName: 'Test' })
    });
    const body = await response.json();

    assert.equal(response.status, 400);
    assert.equal(body.success, false);
    assert.equal(Array.isArray(body.details), true);
  });

  it('creates and updates a vehicle assigned to an existing customer', async () => {
    const createResponse = await request('/vehicles', {
      method: 'POST',
      body: JSON.stringify({
        brand: 'Mazda',
        model: '3',
        vin: 'VIN00000000000101',
        registrationNumber: 'LJ-TST11',
        vehicleType: 'Hatchback',
        year: 2024,
        customerId: 1
      })
    });
    const createdBody = await createResponse.json();

    assert.equal(createResponse.status, 201);
    assert.equal(createdBody.data.brand, 'Mazda');
    assert.equal(Object.hasOwn(createdBody.data, 'createdAt'), false);

    const updateResponse = await request(`/vehicles/${createdBody.data.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        brand: 'Mazda',
        model: '6',
        vin: 'VIN00000000000101',
        registrationNumber: 'LJ-TST12',
        vehicleType: 'Sedan',
        year: 2025,
        customerId: 1
      })
    });
    const updatedBody = await updateResponse.json();

    assert.equal(updateResponse.status, 200);
    assert.equal(updatedBody.data.model, '6');
  });

  it('returns 404 for missing resources', async () => {
    const response = await request('/customers/99999');
    const body = await response.json();

    assert.equal(response.status, 404);
    assert.equal(body.success, false);
  });
});
