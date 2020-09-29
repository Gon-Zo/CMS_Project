package com.gonzo.api.repository;

import com.gonzo.api.domain.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Create by park031517@gmail.com on 2020-09-29, 화
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    List<Role> findByGroupName(String groupName);
}
