package com.order.controller;

import com.order.entity.Order;
import com.order.service.OrderService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {

    private final OrderService service;

    public OrderController(OrderService service) {
        this.service = service;
    }

    @GetMapping
    public List<Order> getOrders() {
        return service.getOrders();
    }

    @PostMapping
    public Order addOrder(@RequestBody Order order) {
        return service.saveOrder(order);
    }
}