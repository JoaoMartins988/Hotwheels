package com.code.fullstackbackend.controller;

import com.code.fullstackbackend.exception.CarNotFoundException;
import com.code.fullstackbackend.model.Carrinhos;
import com.code.fullstackbackend.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000")
public class CarrinhosController {

    @Autowired
    private CarRepository carRepository;

    @PostMapping("/carrinho")
    String newCarrinhos(@RequestBody Carrinhos newCarrinhos) {
        if (isEmpty(newCarrinhos.getMarca()) || isEmpty(newCarrinhos.getModelo()) || isEmpty(newCarrinhos.getCor())) {
            return "Marca, Modelo e cor são obrigatórios.";}
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
    private boolean isEmpty(String str) {
        return str == null || str.trim().isEmpty();
    }


    @GetMapping("/carrinhos")
    List<Carrinhos> getAllCarrinhos() {
        return carRepository.findAll();
    }
    @GetMapping("/carrinhos/p")
    ResponseEntity<List<Carrinhos>> getAllCarrinhosByPage(@RequestParam(name = "page", defaultValue = "1") int page,
                                   @RequestParam(name = "pageSize", defaultValue = "10") int pageSize) {
        Pageable pageable = PageRequest.of(page-1,pageSize);
        Page<Carrinhos> carrinhosPage = carRepository.findAll(pageable);
        List<Carrinhos> carrinhosList = carrinhosPage.getContent();
        return ResponseEntity.ok(carrinhosList);
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
    String updateCarrinhosById(@RequestBody Carrinhos newCarro, @PathVariable Long id) {
        return carRepository.findById(id)//carro
                .map(carro -> {
                    carro.setMarca(newCarro.getMarca());
                    carro.setModelo(newCarro.getModelo());
                    carro.setCor(newCarro.getCor());
                    carro.setAno(newCarro.getAno());
                    carro.setPreco(newCarro.getPreco());

                    if ((carRepository.existsByMarcaAndModeloAndCorAndAno(
                            newCarro.getMarca(),
                            newCarro.getModelo(),
                            newCarro.getCor(),
                            newCarro.getAno()))) {
                        return "Carro duplicado";
                    } else {
                        carRepository.save(carro);
                        return "carro editado com sucesso";
                    }
                })
                .orElseThrow(() -> new CarNotFoundException(id));
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


