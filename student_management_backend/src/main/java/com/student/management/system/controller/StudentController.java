package com.student.management.system.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.student.management.system.entity.Student;
import com.student.management.system.repository.StudentRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/students")
public class StudentController {
    private final StudentRepository repository;

    public StudentController(StudentRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Student> getAllStudents() {
        return repository.findAll();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Object> findStudent(@PathVariable("id") String id) {
    	
    	 Optional<Student> student = repository.findById(id);
    	    if (student == null) {
    	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    	    }
    	    return ResponseEntity.ok(student);
    }

    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        return repository.save(student);
    }

    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable(("id")) String id, @RequestBody Student student) {
        student.setId(id);
        return repository.save(student);
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable("id") String id) {
        repository.deleteById(id);
    }
    
    @GetMapping("/search")
    public ResponseEntity<List<Student>> findStudentsByName(@RequestParam("name") String name) {
    	System.out.println(name);
        List<Student> students = repository.findByNameContainingIgnoreCase(name);
        return ResponseEntity.ok(students);
    }
    
}