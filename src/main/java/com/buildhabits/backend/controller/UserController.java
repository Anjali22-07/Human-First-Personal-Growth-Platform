package com.buildhabits.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.buildhabits.backend.dtos.UserRegisterDto;
import com.buildhabits.backend.service.UserService;
import lombok.RequiredArgsConstructor;

@RestController 
@RequestMapping("/api/V1/Users")
@RequiredArgsConstructor 
public class UserController {
    
    private final UserService userService;
    @PostMapping("/register")
    public ResponseEntity<UserRegisterDto> registerUser(@PathVariable UserRegisterDto user){

        return ResponseEntity.status(201).body(userService.createUser(user));

    }

    @GetMapping("/getUsers")
    public ResponseEntity<Iterable<UserRegisterDto>> getUsers(){
         
        return ResponseEntity.status(201).body(userService.getUser());
    }
}
