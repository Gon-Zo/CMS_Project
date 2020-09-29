package com.gonzo.api.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.BatchSize;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Create by park031517@gmail.com on 2020-09-11, 금
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Getter
@Entity
@DynamicUpdate
@NoArgsConstructor
@Table(name = "ACCOUNT")
public class Account extends BaseEntity {

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "nickname", nullable = false)
    private String nickName;

    @ColumnDefault(value = "false")
    @Column(name = "activate", nullable = false)
    private Boolean activate;

    @OneToMany(mappedBy = "account")
    private List<Post> postList = new ArrayList<>();

    @ManyToMany(
            fetch = FetchType.EAGER,
            cascade = {
                    CascadeType.ALL
            })
    @JoinTable(
            name = "accounts_roles",
            joinColumns = @JoinColumn(
                    name = "accounts_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(
                    name = "role_id", referencedColumnName = "id"))
    private List<Role> roles = new ArrayList<>();

    @Builder
    public Account(String email,
                   String password,
                   String nickName,
                   Boolean activate,
                   List<Role> roles,
                   List<Post> postList) {
        this.email = email;
        this.password = password;
        this.nickName = nickName;
        this.activate = activate;
        this.roles = roles;
        this.postList = postList;
    }

}
