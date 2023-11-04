package com.codewitharjun.fullstackbackend.repository;

import com.codewitharjun.fullstackbackend.model.Carrinhos;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;


public interface UserRepository extends JpaRepository<Carrinhos,Long> {
    List<Carrinhos> findByMarca(String marca);
}
