package com.gonzo.api.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

/**
 * Create by park031517@gmail.com on 2020-09-23, 수
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Getter
@Entity
@NoArgsConstructor
@Table(name = "CMS_ROLE")
public class Role extends BaseEntity {

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String groupName;

    @ManyToMany(mappedBy = "roles")
    private List<Account> accounts;

    @Builder
    public Role(String name, String groupName) {
        this.name = name;
        this.groupName = groupName;
    }

}
