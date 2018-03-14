package com.example.msql.hibernate;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CustomerController {

	

	 @Autowired
	    CustomerRepository customerRepository;
	 
	

	 @PostMapping("/customer/add")
	 public Customer createNote(@Valid @RequestBody Customer customer) {
	
	     return customerRepository.save(customer);
	 }
	 
	 @GetMapping("/customers")
	 public List<Customer> getAllCustomers() {
		 
	     try {
			return customerRepository.findAll();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	     return null;
	 }
	 
	 
	 
}
