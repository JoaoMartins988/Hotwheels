package com.code.fullstackbackend.repository;

import com.code.fullstackbackend.model.Carrinhos;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface CarRepository extends JpaRepository<Carrinhos, Long> {
    List<Carrinhos> findByMarca(String marca);

    boolean existsByMarcaAndModeloAndCorAndAno(String marca, String modelo, String cor, String ano);
}
