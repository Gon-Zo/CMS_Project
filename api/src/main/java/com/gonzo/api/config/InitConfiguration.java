package com.gonzo.api.config;

import com.gonzo.api.core.enums.Group;
import com.gonzo.api.domain.Category;
import com.gonzo.api.domain.Menu;
import com.gonzo.api.domain.Role;
import com.gonzo.api.repository.AccountRepository;
import com.gonzo.api.repository.CategoryRepository;
import com.gonzo.api.repository.MenuRepository;
import com.gonzo.api.repository.RoleRepository;
import com.gonzo.api.service.dto.AccountDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Create by park031517@gmail.com on 2020-09-29, 화
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Component
@RequiredArgsConstructor
public class InitConfiguration {

    private final RoleRepository roleRepository;

    private final AccountRepository accountRepository;

    private final CategoryRepository categoryRepository;

    private final MenuRepository menuRepository;

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

        long categoryCnt = categoryRepository.count();

        if (categoryCnt == 0L) {

            List<String> categoryStr = Arrays.asList("Home" , "라이프여행", "맛집문화", "연예", "IT", "스포츠", "시사");

            List<String> urls = Arrays.asList("/" ,"/count" , "/count" , "/count" ,"/count" ,"/count" , "/count");

            List<Category> categories = categoryStr.stream()
                    .map(str -> categoryRepository.saveAndFlush(Category.builder().name(str).build()))
                    .collect(Collectors.toList());

            for (int i = 0; i < urls.size(); i++) {
                String url = urls.get(i);
                Category category = categories.get(i);
                Menu menu = Menu.builder()
                        .url(url)
                        .category(category)
                        .build();
                menuRepository.save(menu);
            }

        }

    }

}
