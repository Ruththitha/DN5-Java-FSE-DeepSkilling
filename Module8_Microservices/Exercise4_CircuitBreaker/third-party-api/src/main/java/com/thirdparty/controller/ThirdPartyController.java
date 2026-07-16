package com.thirdparty.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ThirdPartyController {

    @GetMapping("/external")
    public String getExternal() {
        return "Third party API is running";
    }
}
