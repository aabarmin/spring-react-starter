package ru.mydesignstudio.react.service.session;

import ru.mydesignstudio.react.domain.User;

public interface SessionService {
    /**
     * Get current authenticated user.
     * @return
     */
    User getCurrentUser();
}
