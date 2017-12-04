package ru.mydesignstudio.react.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import ru.mydesignstudio.react.domain.User;
import ru.mydesignstudio.react.domain.UserPrincipal;
import ru.mydesignstudio.react.service.user.UserService;

@Service
public class ApplicationUserDetailsService implements UserDetailsService {
	@Autowired
	private UserService userService;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		final User foundUser = userService.findOne(username);
		if (foundUser == null) {
			throw new UsernameNotFoundException(username);
		}
		return new UserPrincipal(foundUser);
	}

}
