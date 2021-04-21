import { Injectable } from '@angular/core';
export interface UserData {
  id: string;
  name: string;
  progress: string;
  amount: number;
}

@Injectable()
export class DataService {
  private  amount = [20, 20, 178, 199.5, 155.5, 35
  ];
  private  names = [
    'Vehicle Type - LUXURY SEDAN',
    'Support plan - ENTERPRISE [ 29 * 7 access to dedicated Technical Account Manager ]',
    'Simulation Time - DAY',
    'Simulation Time - NIGHT',
    'Road Service Records Type - TRAFFIC HEAVY [ Total Simulation time * $ 0.5per min',
    'Maintenance Charges Per Month'
  ];

  constructor() {}

  createNewUser(id: number): UserData {
    const name =
      this.names[this.getRandomArrayIndex(this.names.length)] +
      ' ' +
      this.names[this.getRandomArrayIndex(this.names.length)].charAt(0) +
      '.';

    return {
      id: id.toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      amount: this.amount[this.getRandomArrayIndex(this.amount.length)]
    };
  }

  create100Users(): UserData[] {
    const users: UserData[] = [];
    for (let i = 1; i <= this.amount.length; i++) {
      users.push(this.createNewUser(i));
    }
    return users;
  }

  private getRandomArrayIndex(length: number): number {
    return Math.round(Math.random() * (length - 1));
  }
}
