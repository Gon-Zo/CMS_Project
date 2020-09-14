package com.gonzo.api.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Getter;
import org.hibernate.annotations.BatchSize;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Create by park031517@gmail.com on 2020-09-11, 금
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Getter
@Entity
@Table(name = "ACCOUNT")
public class Account extends BaseEntity {

    @Column(name = "email" , nullable = false)
    private String email;

    @Column(name = "password" , nullable = false)
    private String password;

    @Column(name = "nickname" , nullable = false)
    private String nickName;

    @OneToMany(mappedBy = "account")
    private List<Post> postList;

    @Column(name = "activate" , nullable = false)
    private boolean activate;

    @JsonIgnore
    @ManyToMany
    @JoinTable(
            name = "cms_account_authority",
            joinColumns = {@JoinColumn(name = "account_id" , referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "authority_name" , referencedColumnName = "name")}
    )
    @BatchSize(size = 20)
    private Set<Authority> authorities = new HashSet<>();

    @Builder
    public Account(String email, String nickName, List<Post> postList) {
        this.email = email;
        this.nickName = nickName;
        this.postList = postList;
    }

}
