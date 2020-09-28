package com.gonzo.api.service.dto;

import com.gonzo.api.core.enums.Group;
import com.gonzo.api.domain.Account;
import com.gonzo.api.domain.Role;
import lombok.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.ArrayList;
import java.util.List;

/**
 * Create by park031517@gmail.com on 2020-09-23, 수
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Getter
@ToString
@NoArgsConstructor
public class AccountDto {

    private String email;

    private String password;

    private String nickName;

    private Boolean activate;

    private Group group;

    private List<Role> roles = new ArrayList<>();

    public void toEncoding() {
        this.password = new BCryptPasswordEncoder()
                .encode(this.password);
    }

    public Account toEntity(){
        return Account.builder()
                .email(this.email)
                .password(this.password)
                .nickName(this.nickName)
                .activate(this.activate)
                .roles(this.roles)
                .build();
    }

    @Builder
    public AccountDto(String email,
                      String password,
                      String nickName,
                      Boolean activate,
                      Group group,
                      List<Role> roles) {
        this.email = email;
        this.password = password;
        this.nickName = nickName;
        this.activate = activate;
        this.group = group;
        this.roles = roles;
    }

}
