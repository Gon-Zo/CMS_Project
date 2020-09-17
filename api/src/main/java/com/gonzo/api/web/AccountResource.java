package com.gonzo.api.web;

import com.gonzo.api.service.AccountService;
import com.gonzo.api.service.dto.AccountDto;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
