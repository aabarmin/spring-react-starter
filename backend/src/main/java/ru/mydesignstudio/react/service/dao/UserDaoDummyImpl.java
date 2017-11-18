package ru.mydesignstudio.react.service.dao;

import org.springframework.stereotype.Component;
import ru.mydesignstudio.react.service.User;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Component
public class UserDaoDummyImpl implements UserDao {
    private final Map<Integer, User> users = new HashMap<>();

    @Override
    public Collection<User> findAll() {
        return users.values();
    }

    @Override
    public User save(User user) {
        if (user.getId() == 0) {
            user.setId(users.size() + 1);
        }
        users.put(user.getId(), user);
        return user;
    }

    @Override
    public User findOne(int id) {
        return users.get(id);
    }

    @Override
    public void delete(User user) {
        users.remove(user.getId());
    }

    @Override
    public User create() {
        final User user = new User();
        return save(user);
    }
}
