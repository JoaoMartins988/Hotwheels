package com.code.fullstackbackend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity

public class User{
    @Id
    @GeneratedValue
    private Long Id;
    private String username;
    private String password;
    public User() {
    }
    public User (long Id, String username, String password) {
        this.Id = Id;
        this.username = username;
        this.password = password;
    }


    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        this.Id = Id;
    }

    public  String getUsername() {
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
}
