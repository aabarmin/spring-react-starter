package ru.mydesignstudio.react.service.user;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.mydesignstudio.react.domain.User;

import java.util.Collection;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
	/**
	 * Find page of users by pageable object and with draft status.
	 * @param pageInfo pageable info
	 * @param draft draft status
	 * @return page of users
	 */
	Page<User> findAllByDraft(Pageable pageInfo, boolean draft);
	
	/**
	 * Find all users by draft status.
	 * @param draft draft status
	 * @return collection of users
	 */
	Collection<User> findAllByDraft(boolean draft);
	
	/**
	 * Find user by login.
	 * @param login user's login
	 * @return user
	 */
	User findOneByLogin(String login);
}
