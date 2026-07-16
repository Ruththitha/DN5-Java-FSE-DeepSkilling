package com.user.service;

import com.user.entity.User;
import com.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    // Save User
    public User saveUser(User user) {
        return repository.save(user);
    }

    // Get All Users
    public List<User> getUsers() {
        return repository.findAll();
    }

    // Get User By ID
    public User getUser(Long id) {
        return repository.findById(id).orElse(null);
    }
}