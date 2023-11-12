package com.code.fullstackbackend.exception;


public class CarNotFoundException extends RuntimeException {
    public CarNotFoundException(Long id) {
        super("Could not found the car with id " + id);
    }
}
