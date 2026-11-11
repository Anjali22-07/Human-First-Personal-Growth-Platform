package com.buildhabits.backend.entity;

import java.time.Instant;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity 
@Getter 
@Setter 
@AllArgsConstructor 
@NoArgsConstructor 
public class UserRegistration {

    @Id()
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    @Column(nullable = false, length=30, unique = true )
    private String userName;
     @Column(nullable = false, length=255, unique = true )
    private String email;
    @Column(nullable = false)
    private String password;    
    @Column(name = "email_verified", nullable = false)
    private boolean emailVerified = false;
    @Column(nullable = false, length = 50)
    private String timezone = "UTC";
    @Column(name = "created_at", nullable = false, updatable = false)
    private Instant createdAt = Instant.now();
    

}
