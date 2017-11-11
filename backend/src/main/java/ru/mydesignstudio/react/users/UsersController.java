package ru.mydesignstudio.react.users;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.Collection;

@RequestMapping("/users")
@RestController
public class UsersController {
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public Collection<User> list() {
        return Arrays.asList(
                new User(1, "First"),
                new User(2, "Second")
        );
    }

    public static class User {
        private final int id;
        private final String name;

        public User(int id, String name) {
            this.id = id;
            this.name = name;
        }

        public int getId() {
            return id;
        }

        public String getName() {
            return name;
        }
    }
}
