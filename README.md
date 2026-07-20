# DN5 Java FSE Deep Skilling

This repository contains all the hands-on exercises completed as part of the **Cognizant Digital Nurture 5.0 - Java Full Stack Engineer (FSE) Deep Skilling Program**.

---

# Module 1 - Design Patterns and Principles

## Exercise 1 - Singleton Pattern

### Objective
Implement the Singleton Design Pattern to ensure only one instance of a class is created.

### Files
- Singleton.java
- Main.java

### Output

```
Singleton Object Created
Singleton Method Called
Are both objects same? true
```

---

## Exercise 2 - Factory Method Pattern

### Objective
Create objects without exposing object creation logic.

### Files
- Vehicle.java
- Car.java
- Bike.java
- VehicleFactory.java
- Main.java

### Output

```
Driving Car
Driving Bike
```

---

# Module 2 - Data Structures and Algorithms

## Exercise 2 - E-commerce Platform Search

### Objective
Implement Linear Search and Binary Search.

### Files
- Product.java
- SearchAlgorithms.java
- Main.java

### Concepts Covered
- Linear Search
- Binary Search
- Sorting
- Time Complexity

### Output

```
Linear Search Found:
103 Phone Electronics

Binary Search Found:
103 Phone Electronics
```

---

## Exercise 7 - Financial Forecasting

### Objective
Forecast future financial values using Recursion.

### Files
- FinancialForecast.java

### Output

```
Future Value after 5 years: 1276.28
```

---

# Module 3 - PL/SQL Programming

## Exercises Completed

- Variables
- IF-ELSE Control Structures
- Loops
- Exception Handling
- Stored Procedures
- Functions
- Cursors
- Triggers

### Database Objects

- Customers
- Accounts
- Employees
- Loans
- Transactions

### Files

- Schema.sql
- SampleData.sql
- ControlStructures.sql
- StoredProcedures.sql
- Functions.sql
- Cursor.sql
- Trigger.sql

---

# Module 4 - Test Driven Development (TDD) & Logging Framework

## Hands-on Completed

### JUnit

- Calculator Testing
- Assertions
- AAA Pattern
- Setup & Teardown

### Mockito

- Mocking
- Stubbing
- Verify Interactions

### Logging Framework

- SLF4J
- Logback

### Files

- Calculator.java
- CalculatorTest.java
- AssertionsTest.java
- AAASetupTeardownTest.java
- MockingStubbingTest.java
- VerifyInteractionTest.java
- LoggingExample.java

### Technologies

- Java
- JUnit 5
- Mockito
- SLF4J
- Logback
- Maven

---

# Module 5 - Spring Core and Maven

## Exercise 1 - Spring IoC Container

### Objective

Configure Spring Beans using XML Configuration.

### Files

- LibraryManagementApplication.java
- BookService.java
- BookRepository.java
- applicationContext.xml

### Concepts Covered

- Spring IoC Container
- Dependency Injection
- Bean Configuration
- Maven Build

### Output

```
Book Service Called
Displaying Book Repository
```

---

# Module 6 - Spring Data JPA with Spring Boot & Hibernate

## Hands-on Completed

### Features

- Spring Boot Project
- Spring Data JPA
- Hibernate ORM
- CRUD Operations
- Entity Relationships
- Repository Layer
- Service Layer
- REST Controllers
- H2 Database
- Pagination & Sorting
- Auditing

### Technologies

- Java 17
- Spring Boot 3
- Spring Data JPA
- Hibernate
- H2 Database
- Maven

---

# Module 7 - Spring REST using Spring Boot

## Exercises Completed

### Exercise 1
Hello World REST API

### Exercise 2
Country REST API

### Exercise 3
Get Country by Country Code

### Exercise 4
Spring XML Configuration

### Exercise 5
REST CRUD Operations

### Exercise 6
JWT Authentication API

### REST Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /hello | Hello World API |
| GET | /country | Get Country Details |
| GET | /country/{code} | Get Country by Code |
| POST | /authenticate | Generate JWT Token |

### Technologies

- Spring Boot 3
- Spring Web
- REST API
- JWT Authentication
- Maven
- Java 17

---

# Module 8 - Microservices with Spring Boot 3 and Spring Cloud

## Exercise 1 - User Order Management

### Objective

Build two independent microservices (User Service and Order Service) using Spring Boot.

### Services

- User Service
- Order Service

### Features

- REST APIs
- Spring Boot
- Maven Project Structure
- Layered Architecture

### Sample Endpoints

| Service | Endpoint |
|---------|----------|
| User Service | GET /users |
| Order Service | GET /orders |

---

## Exercise 2 - Service Discovery using Eureka & Config Server

### Objective

Implement Service Discovery using Netflix Eureka and centralized configuration using Spring Cloud Config Server.

### Components

- Config Server
- Eureka Server
- Inventory Service
- Product Service

### Features

- Spring Cloud Config
- Eureka Service Registration
- Centralized Configuration
- Service Discovery

### Sample Endpoints

| Service | Endpoint |
|---------|----------|
| Inventory Service | /inventory |
| Product Service | /products |
| Eureka Dashboard | http://localhost:8761 |

---

## Exercise 3 - API Gateway

### Objective

Route requests through Spring Cloud API Gateway.

### Components

- API Gateway
- Customer Service
- Billing Service

### Features

- Spring Cloud Gateway
- Route Configuration
- Request Routing
- Centralized Access

### Sample Endpoints

| Endpoint | Description |
|----------|-------------|
| /customer | Customer Service |
| /billing | Billing Service |

---

## Exercise 4 - Circuit Breaker using Resilience4j

### Objective

Implement fault tolerance using Resilience4j Circuit Breaker.

### Components

- Payment Service
- Third Party API

### Features

- Resilience4j
- Circuit Breaker Pattern
- RestTemplate
- Fallback Method

### Sample Endpoints

| Endpoint | Description |
|----------|-------------|
| /pay | Process Payment |

### Output (Service Running)

```
Payment Successful from Third Party API
```

### Output (Fallback)

```
Third Party API is down.
Payment Failed.
Fallback Executed.
```

---

# Technologies Used

- Java 17
- Spring Framework
- Spring Boot 3
- Spring Core
- Spring Data JPA
- Hibernate
- Spring REST
- Spring Cloud
- Spring Cloud Config
- Eureka Server
- Spring Cloud Gateway
- Resilience4j
- Maven
- Oracle SQL
- PL/SQL
- JUnit 5
- Mockito
- SLF4J
- Logback
- JWT Authentication
- Git
- GitHub
- Visual Studio Code

---

# Repository Structure

```
DN5-Java-FSE-DeepSkilling
│
├── Module1_DesignPatterns
├── Module2_DataStructureAlgorithms
├── Module3_PLSQLProgramming
├── Module4_TDD_LoggingFramework
├── Module5_SpringCore_Maven
├── Module6_SpringDataJPA
├── Module7_SpringREST
├── Module8_Microservices
│   ├── Exercise1_UserOrderManagement
│   ├── Exercise2_InventoryDiscovery
│   ├── Exercise3_APIGateway
│   └── Exercise4_CircuitBreaker
│
└── README.md
```

---

# Learning Outcomes

After completing this repository, I gained practical experience in:

- Design Patterns
- Data Structures & Algorithms
- PL/SQL Programming
- Test Driven Development (TDD)
- Logging Frameworks
- Spring Core & Dependency Injection
- Spring Data JPA & Hibernate
- RESTful Web Services
- JWT Authentication
- Microservices Architecture
- Service Discovery (Eureka)
- Spring Cloud Config
- API Gateway
- Circuit Breaker (Resilience4j)
- Maven Project Management
- Git & GitHub

---

# Author

## Ruththitha M

**Cognizant Digital Nurture 5.0**

**Java Full Stack Engineer (FSE)**

**Deep Skilling Program**