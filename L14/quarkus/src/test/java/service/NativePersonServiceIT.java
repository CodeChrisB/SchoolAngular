package service;

import io.quarkus.test.junit.NativeImageTest;
import service.PersonServiceTest;

@NativeImageTest
public class NativePersonServiceIT extends PersonServiceTest {

    // Execute the same tests but in native mode.
}