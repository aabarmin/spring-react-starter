package ru.mydesignstudio.react.rest.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ru.mydesignstudio.react.core.CollectionTransformer;
import ru.mydesignstudio.react.core.PageResultForm;
import ru.mydesignstudio.react.domain.User;
import ru.mydesignstudio.react.service.user.UserService;

@RequestMapping("/users")
@RestController
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private UserTransformer userTransformer;
    @Autowired
    private CollectionTransformer<UserForm, User> collectionTransformer;
    
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public PageResultForm<UserForm> listPage(@RequestParam(name = "page", defaultValue = "0") int page,
    		@RequestParam(name = "showDrafts", defaultValue = "false") boolean showDrafts,
    		@RequestParam(name = "pageSize", defaultValue = "50") int pageSize) {
    	
    	final Pageable pageRequest = new PageRequest(page, pageSize);
    	final Page<User> pageResult = userService.findPage(pageRequest, showDrafts);
    	return new PageResultForm<>(
    			pageResult.getTotalPages(), 
    			page, 
    			collectionTransformer.bindForms(pageResult.getContent(), userTransformer)
    			);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public UserForm findOne(@PathVariable("id") int id) {
        final User foundUser = userService.findOne(id);
        return userTransformer.bindForm(foundUser);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable("id") int id) {
        final User user = userService.findOne(id);
        userService.delete(user);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public UserForm save(@RequestBody UserForm user) {
    	final User userFromClient = userTransformer.unbindForm(user);
        final User savedUser = userService.save(userFromClient);
        return userTransformer.bindForm(savedUser);
    }

    @RequestMapping(value = "/new", method = RequestMethod.GET)
    public UserForm createNew() {
        final User newUser = userService.create();
        return userTransformer.bindForm(newUser);
    }
}
