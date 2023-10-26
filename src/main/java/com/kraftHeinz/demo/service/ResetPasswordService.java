package com.kraftHeinz.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kraftHeinz.demo.entities.Login;
import com.kraftHeinz.demo.entities.Register;
import com.kraftHeinz.demo.repository.RegisterRepository;

@Service
public class ResetPasswordService {

	@Autowired
	private RegisterRepository repository;

	public Register accountConfirmation(String email) {
		List<Register> registers = repository.findAll();
		Register register = null;
		for (Register r : registers) {
			if (email.equalsIgnoreCase(r.getEmail())) {
				register = r;
				break;

			}
		}

		return register;
	}

	public void resetPassword(String password, Register r) {
		r.setPassword(password);
		repository.save(r);

	}

}
