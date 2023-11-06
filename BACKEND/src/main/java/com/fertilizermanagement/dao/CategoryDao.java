package com.fertilizermanagement.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fertilizermanagement.model.Category;

public interface CategoryDao extends JpaRepository<Category, Integer> {
	

}
