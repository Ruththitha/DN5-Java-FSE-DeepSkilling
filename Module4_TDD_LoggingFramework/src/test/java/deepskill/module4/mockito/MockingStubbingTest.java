package deepskill.module4.mockito;

import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

public class MockingStubbingTest {

    @Test
    public void testExternalApi() {

        ExternalApi mockApi = mock(ExternalApi.class);

        when(mockApi.getData()).thenReturn("Mock Data");

        UserService service = new UserService(mockApi);

        String result = service.fetchData();

        assertEquals("Mock Data", result);

    }

}
