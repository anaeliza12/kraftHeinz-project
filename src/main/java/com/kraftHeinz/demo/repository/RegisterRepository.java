package com.kraftHeinz.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kraftHeinz.demo.entities.Register;

public interface RegisterRepository  extends JpaRepository<Register, Long>{

}
