package ru.mydesignstudio.react.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    @RequestMapping(value = "/login", method = RequestMethod.OPTIONS)
    public ResponseEntity done() {
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/user/info")
    public ResponseEntity loginInfo() {
        return new ResponseEntity(HttpStatus.OK);
    }
}
