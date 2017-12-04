package ru.mydesignstudio.react.rest.user;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import ru.mydesignstudio.react.core.Transformer;
import ru.mydesignstudio.react.domain.User;
import ru.mydesignstudio.react.service.user.UserService;

@Component
public class UserTransformer implements Transformer<UserForm, User> {
	@Autowired
	private UserService userService;
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public UserForm bindForm(User model) {
		final UserForm userForm = new UserForm();
		userForm.setDraft(model.isDraft());
		userForm.setId(model.getId());
		userForm.setLogin(model.getLogin());
		// we don't send login to client
		return userForm;
	}

	@Override
	public User unbindForm(UserForm form) {
		final User user = userService.findOne(form.getId());
		user.setLogin(form.getLogin());
		if (StringUtils.isNotBlank(form.getPassword())) {
			user.setPassword(passwordEncoder.encode(form.getPassword()));
		}
		return user;
	}

}
