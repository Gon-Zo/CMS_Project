package com.gonzo.api.service.dto;

import com.gonzo.api.domain.Account;
import com.gonzo.api.domain.Role;
import lombok.Getter;
import lombok.ToString;

import java.util.List;

import static org.apache.commons.lang3.ObjectUtils.isNotEmpty;
import static com.gonzo.api.core.util.ListUtils.isNotEmpty;

/**
 * Create by park031517@gmail.com on 2020-10-5, 월
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Getter
@ToString
public class RoleDto {

    private String name;

    private String groupName;

    private List<Account> accounts;

    public Role updateToData(Role data) {

        if (isNotEmpty(this.name)) {
            data.setName(this.name);
        }

        if (isNotEmpty(this.groupName)) {
            data.setGroupName(this.groupName);
        }

        if (isNotEmpty(this.accounts)) {
            data.setAccounts(this.accounts);
        }

        return data;
    }

    public Role toEntity() {
        return Role.builder()
                .name(this.name)
                .groupName(this.groupName)
                .accounts(this.accounts)
                .build();
    }

}
