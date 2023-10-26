package com.kraftHeinz.demo.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kraftHeinz.demo.entities.Register;
import com.kraftHeinz.demo.service.ResetPasswordService;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5501")
@RequestMapping(value = "/reset-password")
public class ResetPasswordResource {

	@Autowired
	private ResetPasswordService service;
	private Register register;

	@PostMapping
	public ResponseEntity<Void> emailConfirmation(@RequestBody String email) {
		register = service.accountConfirmation(email);
		if (register != null)
			return ResponseEntity.ok().build();
		else
			return ResponseEntity.notFound().build();
	}

	@PutMapping
	public void resetPassword(@RequestBody String password){
		service.resetPassword(password, register);
	}

}
