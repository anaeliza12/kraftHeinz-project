package com.kraftHeinz.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kraftHeinz.demo.entities.Login;

public interface LoginRepository extends JpaRepository<Login, Long> {

}
