package deepskill.Module2_DataStructureAlgorithms.Exercise2_EcommerceSearch;

import java.util.Arrays;
import java.util.Comparator;

public class Main {

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Mouse", "Electronics"),
                new Product(103, "Phone", "Electronics"),
                new Product(104, "Keyboard", "Electronics"),
                new Product(105, "Monitor", "Electronics")
        };

        // Linear Search

        Product linearResult = SearchAlgorithms.linearSearch(products, "Phone");

        if (linearResult != null) {
            System.out.println("Linear Search Found:");
            System.out.println(linearResult.productId + " "
                    + linearResult.productName + " "
                    + linearResult.category);
        } else {
            System.out.println("Product not found.");
        }

        // Sort array for Binary Search

        Arrays.sort(products, Comparator.comparing(p -> p.productName));

        Product binaryResult = SearchAlgorithms.binarySearch(products, "Phone");

        if (binaryResult != null) {
            System.out.println("\nBinary Search Found:");
            System.out.println(binaryResult.productId + " "
                    + binaryResult.productName + " "
                    + binaryResult.category);
        } else {
            System.out.println("Product not found.");
        }
    }
}