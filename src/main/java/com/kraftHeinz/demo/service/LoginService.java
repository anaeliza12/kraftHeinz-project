package com.kraftHeinz.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kraftHeinz.demo.entities.Login;
import com.kraftHeinz.demo.repository.LoginRepository;

@Service
public class LoginService {

	@Autowired
	private LoginRepository repository;

	public boolean authentication(Login login) {
		List<Login> logins = repository.findAll();
		Boolean verify = false;
		for (Login l : logins) {
			if (login.getUsername().equals(l.getUsername()) && login.getPassword().equals(l.getPassword())) {
				verify = true;
				break;
			}
		}

		return verify;

	}
	


}
