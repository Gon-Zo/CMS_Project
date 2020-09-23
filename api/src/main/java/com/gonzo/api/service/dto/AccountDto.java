package com.gonzo.api.service.dto;

import com.gonzo.api.domain.Account;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

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

    public void toEncoding() {
        this.password = new BCryptPasswordEncoder()
                .encode(this.password);
    }

    public Account toEntity(){
        return Account.builder()
                .email(this.email)
                .password(this.password)
                .nickName(this.nickName)
                .build();
    }

}
