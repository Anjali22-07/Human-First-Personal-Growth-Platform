package com.buildhabits.backend.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.buildhabits.backend.entity.UserRegistration;

@Repository 
public interface UserRepository extends JpaRepository<UserRegistration, Long>{

    boolean existsByUserNameIgnoreCase(String userName);
    boolean existsByEmail(String email);          // store emails lowercase
    Optional<UserRegistration> findByEmail(String email);

    Optional<UserRegistration> findByUserName(String UserName);
}
