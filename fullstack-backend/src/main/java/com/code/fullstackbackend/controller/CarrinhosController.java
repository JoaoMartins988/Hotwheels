package com.code.fullstackbackend.controller;

import com.code.fullstackbackend.exception.CarNotFoundException;
import com.code.fullstackbackend.model.Carrinhos;
import com.code.fullstackbackend.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000")
public class CarrinhosController {

    @Autowired
    private CarRepository carRepository;

    @PostMapping("/carrinho")
    String newCarrinhos(@RequestBody Carrinhos newCarrinhos) {
        if (carRepository.existsByMarcaAndModeloAndCorAndAno(
                newCarrinhos.getMarca(),
                newCarrinhos.getModelo(),
                newCarrinhos.getCor(),
                newCarrinhos.getAno())) {
            return "Carro duplicado";
        }
        carRepository.save(newCarrinhos);
        return "carro introduzido com sucesso";
    }

    @GetMapping("/carrinhos")
    List<Carrinhos> getAllCarrinhos() {
        return carRepository.findAll();
    }

    @GetMapping("/carrinho/{id}")
    Carrinhos getCarrinhosById(@PathVariable Long id) {
        return carRepository.findById(id)
                .orElseThrow(() -> new CarNotFoundException(id));
    }

    /*@GetMapping("/carrinhos/search")
    List<Carrinhos> searchCarrinhos(@RequestParam("marca") String marca) {

        return CarRepository.findByMarca(marca);
    }*/
    @PutMapping("/carrinho/{id}")
    Carrinhos updateCarrinhosById(@RequestBody Carrinhos newCarro, @PathVariable Long id) {
        return carRepository.findById(id)//carro
                .map(carro -> {
                    carro.setMarca(newCarro.getMarca());
                    carro.setModelo(newCarro.getModelo());
                    carro.setCor(newCarro.getCor());
                    carro.setAno(newCarro.getAno());
                    carro.setPreco(newCarro.getPreco());

                    return carRepository.save(carro);
                }).orElseThrow(() -> new CarNotFoundException(id));
    }

    @DeleteMapping("/carrinho/{id}")
    String deleteCarrinhosById(@PathVariable Long id) {
        if (!carRepository.existsById(id)) {
            throw new CarNotFoundException(id);
        }
        carRepository.deleteById(id);
        return "Carrinho with id " + id + " has been deleted success.";
    }
}
