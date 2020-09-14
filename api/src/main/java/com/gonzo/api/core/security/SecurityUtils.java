package com.gonzo.api.core.security;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Optional;
import java.util.stream.Stream;

/**
 * Create by park031517@gmail.com on 2020-09-14, 월
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
/**
 * Spring Security를 위한 유틸리티 클래스.
 */
public final class SecurityUtils {

    private SecurityUtils(){
    }

    /**
     * 현재 사용자의 로그인을 가져옵니다.
     *
     * @return
     */
    public static Optional<String> getCurrentUserLogin() {
        SecurityContext securityContext = SecurityContextHolder.getContext();
        return Optional.ofNullable(extractPrincipal(securityContext.getAuthentication()));
    }

    /**
     * SecurityContextHolder.getContext 에서 유저 정보 리턴
     *
     * @param authentication
     * @return
     */
    private static String extractPrincipal(Authentication authentication) {
        if (authentication == null) {
            return null;
        } else if (authentication.getPrincipal() instanceof UserDetails) {
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            return userDetails.getUsername();
        } else if (authentication.getPrincipal() instanceof String) {
            return (String) authentication.getPrincipal();
        }
        return null;
    }

    /**
     * 사용자가 인증되었는지 확인
     * @param userName
     * @return
     */
    public static boolean isAuthenticated(String userName){
       Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
       return authentication != null && getAuthorities(authentication).anyMatch(userName::equals);
    }

    private static Stream<String> getAuthorities(Authentication authentication){
       return authentication.getAuthorities().stream().map(GrantedAuthority::getAuthority);
    }

    /**
     * 현재 사용자에게 특정 권한 (보안 역할)이있는 경우.
     * @param userName
     * @return
     */
    private static boolean isCurrentUserInRole (String userName){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return authentication != null && getAuthorities(authentication).anyMatch(userName::equals);
    }

}
