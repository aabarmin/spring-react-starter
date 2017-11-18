package ru.mydesignstudio.react.service.dao;

import ru.mydesignstudio.react.service.User;

import java.util.Collection;

public interface UserDao {
    Collection<User> findAll();

    User save(User user);

    User create();

    User findOne(int id);

    void delete(User user);
}
