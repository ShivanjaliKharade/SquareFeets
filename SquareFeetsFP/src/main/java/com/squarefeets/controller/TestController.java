package com.squarefeets.controller;

import com.squarefeets.payload.LoginRequest;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@RestController
public class TestController {

    @PostMapping("/post-session")
    public List returnSession(@RequestBody String str, HttpServletRequest request){
        String append = "";
        append+=str;
        List sessionData = (List) request.getSession().getAttribute("usernameOrEmail");
        if(sessionData == null){
            sessionData = new ArrayList<>();
            request.getSession().setAttribute("usernameOrEmail", sessionData);
        }
        System.out.println(request.getSession().getAttribute("SPRING_SECURITY_CONTEXT"));
        sessionData.add(append);
        request.getSession().setAttribute("usernameOrEmail", sessionData);
        return sessionData;
    }
}
