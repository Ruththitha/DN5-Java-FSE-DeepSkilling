package com.country.controller;

import com.country.model.JwtRequest;
import com.country.model.JwtResponse;
import com.country.service.JwtService;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthenticationController {

    private final JwtService jwtService;

    public AuthenticationController(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @PostMapping("/authenticate")
    public JwtResponse authenticate(@RequestBody JwtRequest request) {

        String token = jwtService.generateToken(request.getUsername());

        return new JwtResponse(token);
    }
}