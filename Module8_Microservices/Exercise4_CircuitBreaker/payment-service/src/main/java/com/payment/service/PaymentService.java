package com.payment.service;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class PaymentService {

    private final RestTemplate restTemplate;

    public PaymentService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @CircuitBreaker(name = "paymentService", fallbackMethod = "fallbackPayment")
    public String processPayment() {

        return restTemplate.getForObject(
                "http://localhost:8086/payment",
                String.class);

    }

    public String fallbackPayment(Exception ex) {

        return "Third Party API is down.\nPayment Failed.\nFallback Executed.";

    }

}