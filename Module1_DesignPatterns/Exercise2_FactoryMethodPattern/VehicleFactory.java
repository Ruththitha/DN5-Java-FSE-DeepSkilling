package Module1_DesignPatterns.Exercise2_FactoryMethodPattern;

public class VehicleFactory {

    public static Vehicle getVehicle(String type) {

        if (type.equalsIgnoreCase("Car")) {
            return new Car();
        }

        else if (type.equalsIgnoreCase("Bike")) {
            return new Bike();
        }

        return null;
    }
}