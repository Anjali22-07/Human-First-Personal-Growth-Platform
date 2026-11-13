package com.buildhabits.backend.service.implementation;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.buildhabits.backend.dtos.UserRegisterDto;
import com.buildhabits.backend.entity.UserRegistration;
import com.buildhabits.backend.repository.UserRepository;
import com.buildhabits.backend.service.UserService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service 
@RequiredArgsConstructor 
public class UserServiceImplementation implements UserService {

    private final UserRepository userRepo;
    private final ModelMapper modelMapper;

    @Override
    @Transactional 
    public UserRegisterDto createUser(UserRegisterDto user) {

         if(user.getUserName()==null || user.getUserName().isBlank()){
            throw new IllegalArgumentException("UserName cannot be null");
         }

         if(userRepo.existsByUserNameIgnoreCase(user.getUserName())){
            throw new IllegalArgumentException("UserName already exists");
         }
       

         if(user.getEmail()==null || user.getEmail().isBlank()){
            throw new IllegalArgumentException("Email cannot be null");
         }

         if(userRepo.existsByEmail(user.getEmail())){
            throw new IllegalArgumentException("Email already exists");
         }

          UserRegistration userRegister= new UserRegistration();
         userRegister.setEmail(user.getEmail());
         userRegister.setUserName(user.getUserName());
         userRegister.setPassword(user.getPassword());
         
        UserRegistration saveduser= userRepo.save(userRegister);
         return  modelMapper.map(saveduser, UserRegisterDto.class);
    }

    @Override
    public Iterable<UserRegisterDto> getUser() {

     return userRepo.findAll()
      .stream()
      .map(user->modelMapper.map(user,UserRegisterDto.class))
      .toList();
   }

    

    @Override
    public UserRegisterDto getUserByUserName(String userName) {
      UserRegistration user= userRepo.findByUserName(userName).orElseThrow(()->new IllegalArgumentException("UserName does not exists!"));
      return modelMapper.map(user, UserRegisterDto.class);
   }
    

    
}
