package ru.mydesignstudio.react.service.user;

import java.util.UUID;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import ru.mydesignstudio.react.config.ApplicationConfiguration;
import ru.mydesignstudio.react.domain.User;

@Component
public class UserManager {
	private static final Logger LOGGER = LoggerFactory.getLogger(UserManager.class);
	
	@Autowired
	private UserService userService;
	@Autowired
	private ApplicationConfiguration applicationConfiguration;
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@PostConstruct
	public void init() {
		final User defaultAdmin = userService.getDefaultAdmin();
		if (defaultAdmin == null) {
			final String password = UUID.randomUUID().toString();
			LOGGER.error("There is no default admin in Application, new user will be created");
			LOGGER.warn("Login {}, password {}", 
					applicationConfiguration.getUserServiceConfig().getDefaultAdminLogin(), 
					password);
			//
			final User newAdmin = userService.create();
			newAdmin.setLogin(applicationConfiguration.getUserServiceConfig().getDefaultAdminLogin());
			newAdmin.setPassword(passwordEncoder.encode(password));
			userService.save(newAdmin);
		}
	}
}
