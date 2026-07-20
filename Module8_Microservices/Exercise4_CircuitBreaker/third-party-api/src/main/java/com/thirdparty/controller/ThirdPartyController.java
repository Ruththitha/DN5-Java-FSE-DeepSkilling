package com.thirdparty.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ThirdPartyController {

    @GetMapping("/payment")
    public String payment() {

        return "Payment Successful from Third Party API";

    }

}