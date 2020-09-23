package com.gonzo.api.repository;

import com.gonzo.api.domain.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * Create by park031517@gmail.com on 2020-09-23, 수
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
public interface AccountRepository extends JpaRepository <Account , Long> {

    Optional<Account> findOneWithAuthoritiesByEmailIgnoreCase (String email);

    Optional<Account> findByEmail(String email);

}
