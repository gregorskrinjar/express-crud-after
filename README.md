# Express.js CRUD po uvedbi nacrtovalskih vzorcev

Projekt je izboljsana verzija osnovnega Express.js CRUD API-ja. Poslovna logika ostane enostavna in primerna za primerjavo v magistrski nalogi: podatki so shranjeni v lokalnih array strukturah, brez baze podatkov, ORM-ja ali dodatnih kompleksnih knjiznic.

## Zagon

```bash
npm install
npm start
```

Razvojni zagon:

```bash
npm run dev
```

Testi:

```bash
npm test
```

Privzeti naslov API-ja je:

```text
http://localhost:3000
```

## Struktura

```text
src/
  app.js
  server.js
  config/
    appConfig.js
    container.js
  data/
    customers.js
    vehicles.js
  controllers/
    customerController.js
    vehicleController.js
  services/
    customerService.js
    searchService.js
    vehicleService.js
  repositories/
    customerRepository.js
    vehicleRepository.js
  dto/
    customerDto.js
    vehicleDto.js
  mappers/
    customerMapper.js
    vehicleMapper.js
  factories/
    responseFactory.js
    errorFactory.js
  middleware/
    errorHandler.js
    requestLogger.js
    validateRequest.js
  routes/
    customerRoutes.js
    vehicleRoutes.js
  validators/
    customerValidator.js
    vehicleValidator.js
  utils/
    idGenerator.js
    httpStatus.js
```

## Uporabljeni vzorci

### Primarni vzorci

### Repository Pattern

- `repositories/` dostopajo do lokalnih array podatkov v `data/`.
- Controllerji ne dostopajo neposredno do `customers` ali `vehicles` arrayev.

### Service Layer Pattern

- `services/customerService.js` vsebuje CRUD poslovno logiko za customerje.
- `services/vehicleService.js` vsebuje CRUD poslovno logiko za vozila in preverjanje povezave `vehicle -> customerId`.
- `services/searchService.js` vsebuje iskalno logiko za `GET /customers/search?query=ime1`.
- Controllerji so zato tanki in ne vsebujejo poslovne logike.

### DTO Pattern

- `dto/customerDto.js` in `dto/vehicleDto.js` dolocata obliko podatkov, ki se vrnejo odjemalcu.
- Interni podatki, kot je `createdAt`, ostanejo v notranjem modelu in se ne vracajo v API odgovoru.

### Mapper Pattern

- `mappers/customerMapper.js` in `mappers/vehicleMapper.js` pretvarjata notranje objekte v DTO objekte.
- S tem je locena notranja podatkovna oblika od zunanje API oblike.

### Factory Pattern

- `factories/responseFactory.js` skrbi za enotno strukturo uspesnih JSON odgovorov.
- `factories/errorFactory.js` skrbi za enotno ustvarjanje napak s HTTP statusi.

### Sekundarni vzorci

### Singleton / Config Pattern

- `config/appConfig.js` centralno hrani nastavitve aplikacije: port, okolje in nastavitev logiranja.
- Ker Node.js module cache-a, se konfiguracijski objekt uporablja kot enotna instanca v aplikaciji.

### Dependency Injection

- `config/container.js` je kompozicijsko mesto, kjer se ustvarijo repositoryji in servisi.
- `CustomerService`, `VehicleService` in `SearchService` prejmejo odvisnosti prek konstruktorja.
- Zaradi tega so servisi bolj testabilni, ker jim je mogoce v testih podati nadomestne repositoryje ali mapperje.

## Endpointi

### Customers

```http
GET /customers
GET /customers/:id
POST /customers
PUT /customers/:id
DELETE /customers/:id
GET /customers/search?query=ime1
```

Primer `POST /customers`:

```json
{
  "firstName": "Petra",
  "lastName": "Zajc",
  "email": "petra.zajc@example.com"
}
```

### Vehicles

```http
GET /vehicles
GET /vehicles/:id
POST /vehicles
PUT /vehicles/:id
DELETE /vehicles/:id
```

Primer `POST /vehicles`:

```json
{
  "brand": "Mazda",
  "model": "3",
  "vin": "VIN00000000000101",
  "registrationNumber": "LJ-ABC12",
  "vehicleType": "Hatchback",
  "customerId": 1,
  "year": 2024
}
```

## HTTP statusi

- `200 OK` za uspesno branje, urejanje in brisanje.
- `201 Created` za uspesno ustvarjanje.
- `400 Bad Request` za validacijske napake ali neveljavne povezave.
- `404 Not Found` za neobstojece vire ali poti.
- `500 Internal Server Error` za nepricakovane napake.

## Testni podatki

Projekt vsebuje 100 customerjev in 100 vozil:

- `src/data/customers.js`
- `src/data/vehicles.js`

Vozilo ima polje `customerId`, ki predstavlja povezavo na customerja.
