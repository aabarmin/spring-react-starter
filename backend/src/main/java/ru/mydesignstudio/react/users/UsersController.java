package ru.mydesignstudio.react.users;

import org.springframework.web.bind.annotation.RequestBody;
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

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public User save(@RequestBody User user) {
        return user;
    }

    public static class User {
        private int id;
        private String login;

        public User(int id, String login) {
            this.id = id;
            this.login = login;
        }

        public User() {
        }

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getLogin() {
            return login;
        }

        public void setLogin(String login) {
            this.login = login;
        }
    }
}
