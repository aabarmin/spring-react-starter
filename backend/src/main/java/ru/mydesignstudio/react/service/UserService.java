package ru.mydesignstudio.react.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.mydesignstudio.react.service.dao.UserDao;

import java.util.Collection;

@Service
public class UserService {
    @Autowired
    private UserDao userDao;

    public Collection<User> findAll() {
        return userDao.findAll();
    }

    public User save(User user) {
        return userDao.save(user);
    }

    public User create() {
        return userDao.create();
    }
}
