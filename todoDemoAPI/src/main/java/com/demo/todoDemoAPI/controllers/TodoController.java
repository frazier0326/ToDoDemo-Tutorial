package com.demo.todoDemoAPI.controllers;

import com.demo.todoDemoAPI.models.TodoModel;
import com.demo.todoDemoAPI.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
public class TodoController {
    @Autowired
    private TodoRepository todoRepository;

    @GetMapping()
    public List<TodoModel> getAllTodos() {
        return todoRepository.findAll();
    }

    @PostMapping("/delete")
    public void deleteTodo(@RequestParam Long todoId) {
        todoRepository.deleteById(todoId);
    }


    @PostMapping("/new")
    public TodoModel saveNewTodo(@RequestParam String description, @RequestParam String assigned) {
        TodoModel newTodo = new TodoModel(description, assigned);
        return todoRepository.save(newTodo);
    }


}
