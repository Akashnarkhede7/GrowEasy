package com.fertilizermanagement.service;

import org.springframework.web.multipart.MultipartFile;

import com.fertilizermanagement.model.Product;

public interface ProductService {
	
	void addProduct(Product product, MultipartFile productImmage);

}
