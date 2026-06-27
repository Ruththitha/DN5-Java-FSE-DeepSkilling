package deepskill.module4.mockito;

import org.junit.Test;

import static org.mockito.Mockito.*;

public class VerifyInteractionTest {

    @Test
    public void testVerifyInteraction() {

        ExternalApi mockApi = mock(ExternalApi.class);

        UserService service = new UserService(mockApi);

        service.fetchData();

        verify(mockApi).getData();

    }

}
