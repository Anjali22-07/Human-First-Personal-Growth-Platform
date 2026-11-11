package com.buildhabits.backend.service;

import java.util.Optional;

import com.buildhabits.backend.dtos.UserRegisterDto;

public interface UserService {

    public UserRegisterDto createUser(UserRegisterDto user);
    public Iterable<UserRegisterDto> getUser();

}
