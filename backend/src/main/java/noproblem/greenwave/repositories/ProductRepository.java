package noproblem.greenwave.repositories;

import noproblem.greenwave.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public class ProductRepository {

    @Autowired
    private JpaProductRepository jpaProductRepository;

    public List<Product> getAll() {
        return (List<Product>) jpaProductRepository.findAll();
    }


    public Product addProduct(Product product) {
        return jpaProductRepository.save(product);
    }

    public Product getProductById(String id) {
        return jpaProductRepository.findById(UUID.fromString(id)).orElse(null);
    }

    public void deleteProductById(String id) {
        jpaProductRepository.deleteById(UUID.fromString(id));
    }
}
