package com.gonzo.api.service.dto;

import com.gonzo.api.domain.Account;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@NoArgsConstructor
public class AccountDto {

    private String email;

    private String password;

    private String nickName;

    public void toEncoding(){
        this.password = "";
    }

    public Account toEntity(){
        return Account.builder()
                .email(this.email)
                .password(this.password)
                .nickName(this.nickName)
                .build();
    }

}
