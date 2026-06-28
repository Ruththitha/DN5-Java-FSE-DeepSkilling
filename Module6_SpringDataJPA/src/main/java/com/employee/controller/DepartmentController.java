package com.employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.employee.entity.Department;
import com.employee.service.DepartmentService;

@RestController
@RequestMapping("/departments")
public class DepartmentController {

    @Autowired
    private DepartmentService service;

    @GetMapping
    public List<Department> getDepartments() {
        return service.getDepartments();
    }

    @PostMapping
    public Department save(@RequestBody Department department) {
        return service.saveDepartment(department);
    }

}