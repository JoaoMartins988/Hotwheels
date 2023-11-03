package com.codewitharjun.fullstackbackend.repository;

import com.codewitharjun.fullstackbackend.model.Carrinhos;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Carrinhos,Long> {
}
