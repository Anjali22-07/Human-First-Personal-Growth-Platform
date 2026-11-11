package com.buildhabits.backend.dtos;

import java.time.Instant;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter 
@Setter 
@AllArgsConstructor 
@NoArgsConstructor 
public class UserRegisterDto {

    private long id;
    private String userName;
    private String email;
    private String password;    
    private boolean emailVerified = false;
    private String timezone = "UTC";
    private Instant createdAt = Instant.now();
    

}
