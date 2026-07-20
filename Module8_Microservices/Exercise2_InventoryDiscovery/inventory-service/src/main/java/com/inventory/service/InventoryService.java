package com.inventory.service;

import com.inventory.entity.Inventory;
import com.inventory.repository.InventoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InventoryService {

    private final InventoryRepository repository;

    public InventoryService(InventoryRepository repository) {
        this.repository = repository;
    }

    public Inventory saveInventory(Inventory inventory) {
        return repository.save(inventory);
    }

    public List<Inventory> getInventory() {
        return repository.findAll();
    }
}