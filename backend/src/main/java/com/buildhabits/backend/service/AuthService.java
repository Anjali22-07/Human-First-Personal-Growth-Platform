package com.buildhabits.backend.service;

import com.buildhabits.backend.dtos.UserRegisterDto;

public interface AuthService {

    public UserRegisterDto register(UserRegisterDto userDto);
    public UserRegisterDto login(UserRegisterDto userDto);

}
