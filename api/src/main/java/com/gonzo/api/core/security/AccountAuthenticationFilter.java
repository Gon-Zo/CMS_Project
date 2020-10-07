package com.gonzo.api.core.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gonzo.api.core.auth.UserDetailsImpl;
import com.gonzo.api.core.util.JwtUtils;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import static com.gonzo.api.core.util.JsonUtils.getJsonData;

/**
 * Create by park031517@gmail.com on 2020-09-23, 수
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
public class AccountAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private final AuthenticationManager authenticationManager;

    private final JwtUtils jwtUtils;

    public AccountAuthenticationFilter(AuthenticationManager authenticationManager, JwtUtils jwtUtils) {
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
//        setPostOnly(true);
        setFilterProcessesUrl("/api/login");
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request,
                                                HttpServletResponse response) throws AuthenticationException {

        String body = getRequestBodyToString(request);

        String email =  getJsonData(body , "email");

        String password = getJsonData(body , "password");

        UsernamePasswordAuthenticationToken authRequest = new UsernamePasswordAuthenticationToken(email, password);

        this.setDetails(request , authRequest);

        return authenticationManager.authenticate(authRequest);

    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain chain,
                                            Authentication authResult) throws IOException, ServletException {

        ObjectMapper objectMapper = new ObjectMapper();

        UserDetailsImpl userDetailsImpl = (UserDetailsImpl) authResult.getPrincipal();

        String email = userDetailsImpl.getUsername();

        // TODO: 2020-09-28 add role

        Map<String , Object> claims = new HashMap<>();

        claims.put("email", email);

        String jwt = jwtUtils.doGenerateToken(claims, email);

        Map<String , Object> result = new HashMap<>();

        result.put("status" , "200");

        result.put("message", jwt);

        response.getOutputStream().println(objectMapper.writeValueAsString(result));

    }

    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request,
                                              HttpServletResponse response,
                                              AuthenticationException failed) throws IOException, ServletException {
        super.unsuccessfulAuthentication(request, response, failed);
    }

    private String getRequestBodyToString(HttpServletRequest request){
        StringBuffer jb = new StringBuffer();
        String line = null;
        try {
            BufferedReader reader = request.getReader();
            while ((line = reader.readLine()) != null) {
                jb.append(line);
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return jb.toString();
    }

}
