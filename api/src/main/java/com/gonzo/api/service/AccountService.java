package com.gonzo.api.service;

import com.gonzo.api.repository.AccountRepository;
import com.gonzo.api.service.dto.AccountDto;
import org.springframework.stereotype.Service;

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
