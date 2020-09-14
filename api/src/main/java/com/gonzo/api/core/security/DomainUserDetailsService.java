package com.gonzo.api.core.security;

import com.gonzo.api.domain.Account;
import org.hibernate.validator.internal.constraintvalidators.hv.EmailValidator;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.security.Security;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Create by park031517@gmail.com on 2020-09-14, 월
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
/**
 * 데이터베이스에서 사용자를 인증합니다.
 */
@Component("userDetailsService")
public class DomainUserDetailsService implements UserDetailsService {


    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {

        if(new EmailValidator().isValid(username , null)){
            return null;
        }


        return null;
    }

    private User createSecurityUser(String userName, Account user) {

        if (!user.isActivate()) {
            throw new NullPointerException();
        }

        List<GrantedAuthority> grantedAuthorities = user.getAuthorities().stream()
                .map(authority -> new SimpleGrantedAuthority(authority.getName()))
                .collect(Collectors.toList());

        return (User) User.builder()
                .username(user.getEmail())
                .password(user.getPassword())
                .authorities(grantedAuthorities)
                .build();

    }


}
