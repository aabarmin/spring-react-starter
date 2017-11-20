package ru.mydesignstudio.react.service.user;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import ru.mydesignstudio.react.domain.User;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Component
public class UserDaoDummyImpl implements UserDao {
    private final Map<Integer, User> users = new HashMap<>();

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

	@Override
	public Page<User> findPage(Pageable pageInfo, boolean withDrafts) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User findOne(String login) {
		// TODO Auto-generated method stub
		return null;
	}
}
