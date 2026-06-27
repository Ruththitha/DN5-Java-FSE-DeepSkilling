package deepskill.module4.junit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class AAASetupTeardownTest {

    Calculator calculator;

    @Before
    public void setup() {

        calculator = new Calculator();

        System.out.println("Setup Completed");

    }

    @After
    public void tearDown() {

        System.out.println("Test Completed");

    }

    @Test
    public void testAdd() {

        int result = calculator.add(15,25);

        assertEquals(40,result);

    }

}