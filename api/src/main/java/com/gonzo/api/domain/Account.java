package com.gonzo.api.domain;

import lombok.Builder;
import lombok.Getter;

import javax.persistence.*;
import java.util.List;

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

    @Column(name = "nickname" , nullable = false)
    private String nickName;

    @OneToMany(mappedBy = "account")
    private List<Post> postList;

    @Builder
    public Account(String email, String nickName, List<Post> postList) {
        this.email = email;
        this.nickName = nickName;
        this.postList = postList;
    }

}
