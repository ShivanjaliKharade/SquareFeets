package com.squarefeets.controller;

import com.squarefeets.payload.LoginRequest;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/session")
public class TestController {

    @PostMapping("/post-session")
    @RolesAllowed("ROLE_CUSTOMER")
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
