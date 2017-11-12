package ru.mydesignstudio.react.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.mydesignstudio.react.service.User;
import ru.mydesignstudio.react.service.UserService;

import java.util.Arrays;
import java.util.Collection;

@RequestMapping("/users")
@RestController
public class UsersController {
    @Autowired
    private UserService userService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public Collection<User> list() {
        return userService.findAll();
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public User save(@RequestBody User user) {
        return userService.save(user);
    }

    @RequestMapping(value = "/new/", method = RequestMethod.GET)
    public User createNew() {
        return userService.create();
    }
}
