package com.cbitproject.intern.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("The user is not found");
    }
}

