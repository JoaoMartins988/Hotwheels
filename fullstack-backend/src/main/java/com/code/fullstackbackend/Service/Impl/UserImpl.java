package com.code.fullstackbackend.Service.Impl;


import com.code.fullstackbackend.DTO.LoginDto;
import com.code.fullstackbackend.DTO.UserDto;
import com.code.fullstackbackend.Response.LoginResponse;
import com.code.fullstackbackend.Service.UserService;
import com.code.fullstackbackend.model.User;
import com.code.fullstackbackend.repository.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service

public class UserImpl implements UserService {
    @Autowired
    private userRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public String addUser(UserDto userDto) {
       User user = new User(
                userDto.getUserId(),
                userDto.getUsername(),

               this.passwordEncoder.encode(userDto.getPassword())
        );
        userRepository.save(user);
        return user.getUsername();
    }

    UserDto userDto;

    @Override
    public LoginResponse loginUser(LoginDto loginDto) {
        String msg = "";
        User user1 = userRepository.findByUsername(loginDto.getUsername());
        if (user1 != null) {
            String password = loginDto.getPassword();
            String encodedPassword = user1.getPassword();
            boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<User> userOptional = userRepository.findOneByUsernameAndPassword(loginDto.getUsername(), encodedPassword);
                if (userOptional.isPresent()){
                    return new LoginResponse("Login Success", true);
                } else {
                    return new LoginResponse("Login Failed", false);
                }
            } else {
                return new LoginResponse("password Not Match", false);
            }
        }else {
            return new LoginResponse("User not exits", false);
        }
    }
}

