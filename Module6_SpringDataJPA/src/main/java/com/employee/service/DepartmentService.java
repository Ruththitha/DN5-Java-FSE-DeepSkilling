package com.employee.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.entity.Department;
import com.employee.repository.DepartmentRepository;

@Service
public class DepartmentService {

    @Autowired
    private DepartmentRepository repository;

    public List<Department> getDepartments() {
        return repository.findAll();
    }

    public Department saveDepartment(Department department) {
        return repository.save(department);
    }

}