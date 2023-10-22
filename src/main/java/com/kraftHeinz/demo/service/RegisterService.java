package com.kraftHeinz.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kraftHeinz.demo.entities.Register;
import com.kraftHeinz.demo.repository.RegisterRepository;

@Service
public class RegisterService {

	@Autowired
	private RegisterRepository repository;

	public void register(Register register) {
		repository.save(register);

	}
	

}
