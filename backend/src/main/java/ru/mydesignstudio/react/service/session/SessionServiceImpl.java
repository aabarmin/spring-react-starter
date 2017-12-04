package ru.mydesignstudio.react.service.session;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import ru.mydesignstudio.react.domain.User;
import ru.mydesignstudio.react.exception.ApplicationRuntimeException;
import ru.mydesignstudio.react.service.user.UserService;

@Service
public class SessionServiceImpl implements SessionService {
    @Autowired
    private UserService userService;

    @Override
    public User getCurrentUser() {
        final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null) {
            throw new ApplicationRuntimeException("There is no authentication");
        }
        if (authentication instanceof AnonymousAuthenticationToken) {
            throw new ApplicationRuntimeException("Anonymous authentication not supported");
        }
        final UsernamePasswordAuthenticationToken authenticationToken =
                (UsernamePasswordAuthenticationToken) authentication;

        return userService.findOne(authenticationToken.getName());
    }
}
