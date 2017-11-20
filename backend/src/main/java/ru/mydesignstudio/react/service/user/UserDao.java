package ru.mydesignstudio.react.service.user;

import java.util.Collection;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import ru.mydesignstudio.react.domain.User;

public interface UserDao {
	Page<User> findPage(Pageable pageInfo, boolean withDrafts);

    User save(User user);

    User create();

    User findOne(int id);

    void delete(User user);

	User findOne(String login);
}
