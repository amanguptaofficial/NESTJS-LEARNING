import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getAllUsers() {
    return {
      status: 'success',
      code: 200,
      users: [
        { name: 'Aman' },
        { name: 'Akash' },
        { name: 'Abhishek' },
        { name: 'Ankit' },
      ],
    };
  }
  getUser(id: string): object {
    console.log(typeof id);
    return {
      user: {
        id: id,
        name: 'Aman',
        age: 23,
      },
    };
  }
}
