package com.gonzo.api.service;

import com.gonzo.api.repository.AccountRepository;
import com.gonzo.api.service.dto.AccountDto;
import org.springframework.stereotype.Service;

/**
 * Create by park031517@gmail.com on 2020-09-23, 수
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Service
public class AccountService {

    private final AccountRepository repository;

    public AccountService(AccountRepository repository) {
        this.repository = repository;
    }

    public void saveToUser(AccountDto dto){
        dto.toEncoding();
        repository.save(dto.toEntity());
    }

}
