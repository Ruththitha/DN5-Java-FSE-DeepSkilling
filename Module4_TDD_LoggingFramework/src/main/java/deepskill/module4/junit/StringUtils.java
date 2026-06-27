package deepskill.module4.junit;
public class StringUtils {

    public String reverse(String text) {

        StringBuilder builder = new StringBuilder(text);

        return builder.reverse().toString();
    }
}