import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }
  @Post()
  // create(
  //   @Body("email") email: string,
  //   @Body("password") password: string,
  //   @Body("name") name: string,

  // ) {
  create(@Body() hdit: CreateUserDto) {
    return this.usersService.create(hdit);
  
    // const myEmail: string = req.body.email // string

    // return this.usersService.create(email, password, name);
  }


  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }
  findOne(
    @Param('id')
    id: string
  ) {
    return this.usersService.findOne(id);
  }


  @Patch()
  update(@Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto);

  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
