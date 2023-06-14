package noproblem.greenwave.controllers;


import noproblem.greenwave.models.Product;
import noproblem.greenwave.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductService productService;


    @GetMapping("/gallery")
    public ResponseEntity<List<Product>> getAll() {
        System.out.println(productService.getAll().get(0));
        return ResponseEntity.ok(productService.getAll());
    }
}
