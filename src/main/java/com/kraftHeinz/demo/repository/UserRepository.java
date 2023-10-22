package com.kraftHeinz.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kraftHeinz.demo.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
