SET SERVEROUTPUT ON;

DECLARE
    v_balance NUMBER;
BEGIN
    SELECT Balance
    INTO v_balance
    FROM Customers
    WHERE CustomerID = 1;

    IF v_balance >= 1500 THEN
        DBMS_OUTPUT.PUT_LINE('Customer has High Balance');
    ELSIF v_balance >= 1000 THEN
        DBMS_OUTPUT.PUT_LINE('Customer has Medium Balance');
    ELSE
        DBMS_OUTPUT.PUT_LINE('Customer has Low Balance');
    END IF;
END;
/