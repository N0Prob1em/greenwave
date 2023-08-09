package noproblem.greenwave.controllers;


import noproblem.greenwave.models.Product;
import noproblem.greenwave.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductService productService;


    @GetMapping("/gallery")
    public ResponseEntity<List<Product>> getAllProducts() {
        return ResponseEntity.ok(productService.getAllProducts());
    }

    @GetMapping("/product/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable String id) {
        Product product = productService.getProductById(id);
        if (product == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(product);
    }

    @PostMapping("/newproduct")
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {

        Product addedProduct;
        try {
            addedProduct = productService.addProduct(product);
        } catch (DataAccessException e) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.created(URI.create("/product/" + addedProduct.getId())).body(addedProduct);
    }

    @DeleteMapping("/product/{id}")
    ResponseEntity<Void> deleteProductById(@PathVariable String id) {
        productService.deleteProductById(id);
        return ResponseEntity.noContent().build();
    }
}
