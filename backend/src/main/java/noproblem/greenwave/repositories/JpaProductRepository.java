package noproblem.greenwave.repositories;

import noproblem.greenwave.models.Product;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface JpaProductRepository extends CrudRepository<Product, UUID> {

}
