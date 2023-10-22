package com.kraftHeinz.demo.resource;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.kraftHeinz.demo.entities.Register;
import com.kraftHeinz.demo.service.RegisterService;

@RestController
@RequestMapping(value = "/register")

public class RegisterResource {

	@Autowired
	private RegisterService service;

	public ResponseEntity<String> register(Register register) {
		service.register(register);
		URI uri = ServletUriComponentsBuilder.fromPath("/{id}").buildAndExpand(register.getId()).toUri();
		return ResponseEntity.created(uri).body("Account created successfully.");
	}

}
