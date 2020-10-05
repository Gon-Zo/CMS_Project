package com.gonzo.api.core.security;

import com.gonzo.api.core.auth.UserDetailsServiceImpl;
import com.gonzo.api.core.exception.CmsException;
import com.gonzo.api.core.exception.ErrorCode;
import com.gonzo.api.core.util.CmsUtils;
import com.gonzo.api.core.util.JwtUtils;
import io.jsonwebtoken.ExpiredJwtException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.jetbrains.annotations.NotNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Create by park031517@gmail.com on 2020-10-1, 목
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */

@Slf4j
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtUtils jwtUtils;

    private final UserDetailsServiceImpl userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    @NotNull HttpServletResponse response,
                                    @NotNull FilterChain filterChain) throws ServletException, IOException {

        log.info("FILTER -> {}" , "JwtAuthFilter");

        String url = request.getRequestURI();

        log.info("REQUEST URL -> {}", url);

        String authorization = null;

        String userName = null;

        try {

            if (url.startsWith("/api")) {
                try {
                    authorization = request.getHeader("Authorization").substring(7);
                } catch (NullPointerException e) {
                    throw new CmsException(ErrorCode.AUTHORIZATION_NOT_FOUND);
                }

                try {
                    userName = jwtUtils.getUsernameFromToken(authorization);
                    log.info("REQUEST USER -> {}", userName);

                } catch (IllegalArgumentException e) {
                    throw new CmsException(ErrorCode.UNABLE_JWT_TOKEN);
                } catch (ExpiredJwtException e) {
                    throw new CmsException(ErrorCode.EXPIRED_JWT_TOKEN);
                }

                UserDetails loginAuthUser = userDetailsService.loadUserByUsername(userName);

                Boolean isNotValidate = isNotValidate(authorization, loginAuthUser);

                if (isNotValidate) {

                    throw new CmsException(ErrorCode.IS_NOT_VALIDATE);

                } else {

                    UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(loginAuthUser, null, loginAuthUser.getAuthorities());

                    usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                    SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);

                }
            }

            filterChain.doFilter(request , response);

        }catch (CmsException ce){
            ce.printStackTrace();
            CmsUtils.drawingToException(ce, response);
        }
    }

    private Boolean isNotValidate(String jwtHeader, UserDetails userDetails) {
        return !jwtUtils.validateToken(jwtHeader, userDetails);
    }

}
