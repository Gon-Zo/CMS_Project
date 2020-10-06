package com.gonzo.api.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Getter
@Entity
@NoArgsConstructor
@Table(name = "MENU")
public class Menu extends BaseEntity {

    @Column(name = "url" , nullable = false)
    private String url;

    @OneToOne
    private Category category;

    @Builder
    public Menu(String url, Category category) {
        this.url = url;
        this.category = category;
    }

}
