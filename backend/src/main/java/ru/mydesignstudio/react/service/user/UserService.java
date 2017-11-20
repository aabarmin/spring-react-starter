package ru.mydesignstudio.react.service.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import ru.mydesignstudio.react.domain.User;

import java.util.Collection;

@Service
public class UserService {
    @Autowired
    private UserDao userDao;
    
    public Page<User> findPage(Pageable pageInfo, boolean withDrafts) {
    	return userDao.findPage(pageInfo, withDrafts);
    }

    public User save(User user) {
    	if (user.isDraft()) {
    		user.setDraft(false);
    	}
        return userDao.save(user);
    }

    public User create() {
        final User user = userDao.create();
        user.setDraft(true);
        return user;
    }

    public User findOne(int id) {
        return userDao.findOne(id);
    }
    
    public User findOne(String login) {
    	return userDao.findOne(login);
    }

    public void delete(User user) {
        userDao.delete(user);
    }
}
