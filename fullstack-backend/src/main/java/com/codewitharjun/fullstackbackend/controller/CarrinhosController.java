package com.codewitharjun.fullstackbackend.controller;

import com.codewitharjun.fullstackbackend.exception.UserNotFoundException;
import com.codewitharjun.fullstackbackend.model.Carrinhos;
import com.codewitharjun.fullstackbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000")
public class CarrinhosController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/carrinho")
    Carrinhos newCarrinhos(@RequestBody Carrinhos newCarrinhos) {
        return userRepository.save(newCarrinhos);
    }

    @GetMapping("/carrinhos")
    List<Carrinhos> getAllCarrinhos() {
        return userRepository.findAll();
    }

    @GetMapping("/carrinho/{id}")
    Carrinhos getCarrinhosById(@PathVariable Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }
    /*@GetMapping("/carrinhos/search")
    List<Carrinhos> searchCarrinhos(@RequestParam("marca") String marca) {

        return userRepository.findByMarca(marca);
    }*/


    @PutMapping("/carrinho/{id}")
    Carrinhos updateCarrinhosById(@RequestBody Carrinhos newCarro, @PathVariable Long id) {
        return userRepository.findById(id)//carro
                .map(carro -> {
                    carro.setMarca(newCarro.getMarca());
                    carro.setModelo(newCarro.getModelo());
                    carro.setCor(newCarro.getCor());
                    carro.setAno(newCarro.getAno());
                    carro.setPreco(newCarro.getPreco());

                    return userRepository.save(carro);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/carrinho/{id}")
    String deleteCarrinhosById(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return  "Carrinhos with id " +id+ " has been deleted success.";
    }
}
