package com.code.fullstackbackend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Carrinhos {

    @Id
    @GeneratedValue
    private Long id;
    private String marca;
    private String modelo;
    private String cor;
    private String ano;
    private String preco;
    private String tipo;

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }



    public Long getId() {

        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {

        this.marca = marca;
    }

    public String getModelo() {

        return modelo;
    }

    public void setModelo(String modelo) {

        this.modelo = modelo;
    }

    public String getCor() {

        return cor;
    }

    public void setCor(String cor) {

        this.cor = cor;
    }

    public String getAno() {

        return ano;
    }

    public void setAno(String ano) {

        this.ano = ano;
    }

    public String getPreco() {

        return preco;
    }

    public void setPreco(String preco) {

        this.preco = preco;
    }
}
