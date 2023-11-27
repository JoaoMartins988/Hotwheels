package com.code.fullstackbackend.Service;

import com.code.fullstackbackend.DTO.LoginDto;
import com.code.fullstackbackend.DTO.UserDto;
import com.code.fullstackbackend.Response.LoginResponse;


public interface UserService {
    String addUser (UserDto userDto);
    LoginResponse loginUser(LoginDto loginDto);

}

