package Module1_DesignPatterns.Exercise2_FactoryMethodPattern;

public class Main {

    public static void main(String[] args) {

        Vehicle vehicle1 =
                VehicleFactory.getVehicle("Car");

        vehicle1.drive();

        Vehicle vehicle2 =
                VehicleFactory.getVehicle("Bike");

        vehicle2.drive();
    }
}