package com.gonzo.api.config;

import com.gonzo.api.core.enums.Group;
import com.gonzo.api.domain.Role;
import com.gonzo.api.repository.AccountRepository;
import com.gonzo.api.repository.RoleRepository;
import com.gonzo.api.service.dto.AccountDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;

@Component
@RequiredArgsConstructor
public class InitConfiguration {

    private final RoleRepository roleRepository;

    private final AccountRepository accountRepository;

    @Transactional
    public void initService(){

        long roleCnt = roleRepository.count();

        Role role = null;

        if(roleCnt == 0L){

            role = roleRepository.saveAndFlush(Role.builder()
                    .groupName(Group.S.getName())
                    .name("SYSTEM")
                    .build());

        }

        long accountCnt = accountRepository.count();

        if (accountCnt == 0L) {

            AccountDto accountDto = AccountDto.builder()
                    .email("system@gmail.com")
                    .password("1234")
                    .nickName("cms_system")
                    .activate(Boolean.TRUE)
                    .roles(Arrays.asList(role))
                    .build();

            accountDto.toEncoding();

            accountRepository.save(accountDto.toEntity());

        }

    }

}
