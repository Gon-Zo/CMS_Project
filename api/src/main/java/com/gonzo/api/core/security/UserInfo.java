package com.gonzo.api.core.security;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

/**
 * Create by park031517@gmail.com on 2020-09-29, 화
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
public class UserInfo {

    private static Authentication setUserInfo(){
        return SecurityContextHolder.getContext().getAuthentication();
    }

}
