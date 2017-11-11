package ru.mydesignstudio.react.login;

import com.sun.xml.internal.ws.client.sei.ResponseBuilder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.xml.ws.Response;

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
