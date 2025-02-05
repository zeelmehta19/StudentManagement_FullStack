package com.student.management.system.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.student.management.system.entity.Student;

public interface StudentRepository extends MongoRepository<Student, String> {
	
	List<Student> findByNameContainingIgnoreCase(String name);
}

