package deepskill.module4.junit;

import org.junit.Test;

import static org.junit.Assert.*;

public class CalculatorTest {

    Calculator calculator = new Calculator();

    @Test
    public void testAddition() {

        assertEquals(30, calculator.add(10,20));

    }

}