package com.gonzo.api.service;

import com.gonzo.api.repository.AccountRepository;
import com.gonzo.api.repository.RoleRepository;
import com.gonzo.api.service.dto.AccountDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/**
 * Create by park031517@gmail.com on 2020-09-23, 수
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Service
@RequiredArgsConstructor
public class AccountService {

    private final AccountRepository repository;

    private final RoleRepository roleRepository;

    public void saveToUser(AccountDto dto){
        dto.toEncoding();
        dto.getRoles().addAll(roleRepository.findByGroupName(dto.getGroup().getName()));
        repository.save(dto.toEntity());
    }

}
