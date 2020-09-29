package com.gonzo.api.web;

import com.gonzo.api.service.AccountService;
import com.gonzo.api.service.dto.AccountDto;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Create by park031517@gmail.com on 2020-09-29, 화
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@RestController
@RequestMapping("/api")
public class AccountResource {

    private final AccountService service;

    public AccountResource(AccountService service) {
        this.service = service;
    }

    @PostMapping("/user")
    public void saveByAccount(@RequestBody AccountDto dto){
        service.saveToUser(dto);
    }

}
