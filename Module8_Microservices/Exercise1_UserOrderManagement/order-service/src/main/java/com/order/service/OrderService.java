package com.order.service;

import com.order.client.UserClient;
import com.order.dto.UserDTO;
import com.order.entity.Order;
import com.order.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    private final OrderRepository repository;
    private final UserClient userClient;

    public OrderService(OrderRepository repository,
                        UserClient userClient) {
        this.repository = repository;
        this.userClient = userClient;
    }

    public List<Order> getOrders() {
        return repository.findAll();
    }

    public Order saveOrder(Order order) {

        UserDTO user = userClient.getUserById(order.getUserId());

        if (user == null) {
            throw new RuntimeException("User not found");
        }

        return repository.save(order);
    }
}