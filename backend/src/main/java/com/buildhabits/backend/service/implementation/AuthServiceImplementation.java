package com.buildhabits.backend.service.implementation;

import org.springframework.stereotype.Service;

import com.buildhabits.backend.dtos.UserRegisterDto;
import com.buildhabits.backend.service.AuthService;

import lombok.RequiredArgsConstructor;

@Service 
@RequiredArgsConstructor 
public class AuthServiceImplementation implements AuthService {
    
    private final UserServiceImplementation userImp;
    
    @Override
    public UserRegisterDto register(UserRegisterDto userDto) {
    
        //verify email 
        //encode password
        return userImp.createUser(userDto);
    }

    @Override
    public UserRegisterDto login(UserRegisterDto userDto) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'login'");
    }



}
