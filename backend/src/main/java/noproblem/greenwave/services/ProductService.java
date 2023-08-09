package noproblem.greenwave.services;

import noproblem.greenwave.models.Product;
import noproblem.greenwave.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.getAllProducts();
    }

    public Product addProduct(Product product) {
        return productRepository.addProduct(product);
    }

    public Product getProductById(String id) {
        return productRepository.getProductById(id);
    }

    public void deleteProductById(String id) {
        productRepository.deleteProductById(id);
    }
}
