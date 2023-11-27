package com.code.fullstackbackend.repository;

import com.code.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@EnableJpaRepositories
@Repository
public interface userRepository extends JpaRepository<User,Integer> {
    Optional<User> findOneByUsernameAndPassword(String username, String password);

    User findByUsername(String username);
}
