package com.code.fullstackbackend.response;

public class LoginResponse {
    String mesage;
    Boolean status;

    public LoginResponse(String mesage, Boolean status) {
        this.mesage = mesage;
        this.status = status;
    }

    public String getMessage() {
        return mesage;
    }

    public void setMessage(String mesage) {
        this.mesage = mesage;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }


    @Override
    public String toString() {
        return "LoginResponse{" +
                "mesage='" + mesage + '\'' +
                ", status=" + status +
                '}';
    }
}
