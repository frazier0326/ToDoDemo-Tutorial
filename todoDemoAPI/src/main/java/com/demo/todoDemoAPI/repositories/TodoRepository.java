package com.demo.todoDemoAPI.repositories;

import com.demo.todoDemoAPI.models.TodoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository  extends JpaRepository<TodoModel, Long> {

}
