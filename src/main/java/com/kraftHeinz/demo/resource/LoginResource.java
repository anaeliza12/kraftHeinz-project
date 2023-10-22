package com.kraftHeinz.demo.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kraftHeinz.demo.entities.Login;
import com.kraftHeinz.demo.service.LoginService;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5501")
@RequestMapping(value = "/login")
public class LoginResource {

	@Autowired
	private LoginService service;

	@PostMapping("/auth")
	public ResponseEntity<String> login(@RequestBody Login login) {
		if (service.authentication(login) == true)
			return ResponseEntity.ok().body("Login successful");
		else
			return ResponseEntity.badRequest().build();

	}
	
	@PostMapping(value = "/recoverPassword")
	public ResponseEntity<String> recoverPassword(@RequestBody String email, @RequestBody String password) {
		if (service.recoverPassword(email, password) == false) {
			return ResponseEntity.notFound().build();

		} else
			return ResponseEntity.ok().body("Password recovered succesfully");

	}


}
