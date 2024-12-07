import { Controller, Get, Inject, Param } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }
  @Get('/:id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUser(id);
  }
}
