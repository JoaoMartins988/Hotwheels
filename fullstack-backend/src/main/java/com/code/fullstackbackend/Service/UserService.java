package com.code.fullstackbackend.service;

import com.code.fullstackbackend.dto.LoginDto;
import com.code.fullstackbackend.dto.UserDto;
import com.code.fullstackbackend.response.LoginResponse;


public interface UserService {
    String addUser (UserDto userDto);
    LoginResponse loginUser(LoginDto loginDto);

}

