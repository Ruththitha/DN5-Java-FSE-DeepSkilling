package com.country.controller;

import com.country.model.Country;
import com.country.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class CountryController {

    @Autowired
    CountryService service;

    @GetMapping("/country")
    public Country getCountry() {

        return service.getCountry();

    }

    @GetMapping("/country/{code}")
    public Country getCountry(@PathVariable String code) {

        return service.getCountry(code);

    }

}