package ru.mydesignstudio.react.service.user;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import ru.mydesignstudio.react.domain.User;

@Component
public class UserDaoImpl implements UserDao {
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public Page<User> findPage(Pageable pageInfo, boolean withDrafts) {
		return userRepository.findAllByDraft(pageInfo, withDrafts);
	}

	@Override
	public User save(User user) {
		return userRepository.save(user);
	}

	@Override
	public User create() {
		final User user = new User();
		return userRepository.save(user);
	}

	@Override
	public User findOne(int id) {
		return userRepository.findById(id)
				.orElseThrow();
	}

	@Override
	public void delete(User user) {
		userRepository.delete(user);
	}

	@Override
	public User findOne(String login) {
		return userRepository.findOneByLogin(login);
	}

	@Override
	public Collection<User> findAll(boolean withDrafts) {
		return userRepository.findAllByDraft(withDrafts);
	}

}
