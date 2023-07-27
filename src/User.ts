import { faker } from "@faker-js/faker";
export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    // this.location = faker.address.latitude()
    // the code above will not work because location object is not yet initialized
    this.location = {
      lat: faker.address.latitude(),
      lng: faker.address.longitude(),
    };
  }
}
