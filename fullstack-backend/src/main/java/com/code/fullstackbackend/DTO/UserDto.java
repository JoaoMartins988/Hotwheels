package com.code.fullstackbackend.dto;

public class UserDto {

    private int userId;
    private String username;

    private String password;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public UserDto(int userId, String username, String password) {
        this.userId = userId;
        this.username = username;
        this.password = password;


    }
}
