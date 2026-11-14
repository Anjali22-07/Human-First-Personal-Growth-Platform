package com.buildhabits.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.buildhabits.backend.dtos.UserRegisterDto;
import com.buildhabits.backend.service.UserService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController 
@RequestMapping("/api/V1/Users")
@CrossOrigin(origins = "http://localhost:5174")
@RequiredArgsConstructor 
public class UserController {
    
    private final UserService userService;
    @PostMapping("/createUsers")
    public ResponseEntity<UserRegisterDto> registerUser(@Valid @RequestBody  UserRegisterDto user){

        return ResponseEntity.status(201).body(userService.createUser(user));

    }

    @GetMapping("/getUsers")
    public ResponseEntity<Iterable<UserRegisterDto>> getUsers(){
         
        return ResponseEntity.ok(userService.getUser());
    }

    @GetMapping("/getUser/{userName}")
    public ResponseEntity<UserRegisterDto> getUserByUserName(@PathVariable  String userName){
      
        return ResponseEntity.ok(userService.getUserByUserName(userName));

    }
}
