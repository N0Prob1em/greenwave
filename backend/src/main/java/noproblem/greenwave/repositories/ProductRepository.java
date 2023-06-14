package noproblem.greenwave.repositories;

import noproblem.greenwave.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProductRepository {

    @Autowired
    private JpaProductRepository jpaProductRepository;

    public List<Product> getAll() {
        return (List<Product>) jpaProductRepository.findAll();
    }


}
