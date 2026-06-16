package Module1_DesignPatterns.Exercise1_SingletonPattern;

public class Singleton {

    private static Singleton instance;

    private Singleton() {
        System.out.println("Singleton Object Created");
    }

    public static Singleton getInstance() {

        if (instance == null) {
            instance = new Singleton();
        }

        return instance;
    }

    public void display() {
        System.out.println("Singleton Method Called");
    }
}