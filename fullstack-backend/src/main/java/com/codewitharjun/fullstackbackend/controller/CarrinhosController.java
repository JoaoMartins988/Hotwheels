package com.codewitharjun.fullstackbackend.controller;

import com.codewitharjun.fullstackbackend.exception.UserNotFoundException;
import com.codewitharjun.fullstackbackend.model.Carrinhos;
import com.codewitharjun.fullstackbackend.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000")
public class CarrinhosController {

    @Autowired
    private CarRepository CarRepository;

    @PostMapping("/carrinho")
    Carrinhos newCarrinhos(@RequestBody Carrinhos newCarrinhos) {
        if (CarRepository.existsByMarcaAndModeloAndCorAndAno(
                newCarrinhos.getMarca(),
                newCarrinhos.getModelo(),
                newCarrinhos.getCor(),
                newCarrinhos.getAno())) {
            return null;
        }
        return CarRepository.save(newCarrinhos);
    }

    @GetMapping("/carrinhos")
    List<Carrinhos> getAllCarrinhos() {
        return CarRepository.findAll();
    }

    @GetMapping("/carrinho/{id}")
    Carrinhos getCarrinhosById(@PathVariable Long id) {
        return CarRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }
    /*@GetMapping("/carrinhos/search")
    List<Carrinhos> searchCarrinhos(@RequestParam("marca") String marca) {

        return CarRepository.findByMarca(marca);
    }*/
    @PutMapping("/carrinho/{id}")
    Carrinhos updateCarrinhosById(@RequestBody Carrinhos newCarro, @PathVariable Long id) {
        return CarRepository.findById(id)//carro
                .map(carro -> {
                    carro.setMarca(newCarro.getMarca());
                    carro.setModelo(newCarro.getModelo());
                    carro.setCor(newCarro.getCor());
                    carro.setAno(newCarro.getAno());
                    carro.setPreco(newCarro.getPreco());

                    return CarRepository.save(carro);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/carrinho/{id}")
    String deleteCarrinhosById(@PathVariable Long id){
        if(!CarRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        CarRepository.deleteById(id);
        return  "Carrinhos with id " +id+ " has been deleted success.";
    }
}
