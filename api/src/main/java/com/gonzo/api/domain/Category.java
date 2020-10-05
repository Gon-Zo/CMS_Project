package com.gonzo.api.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Create by park031517@gmail.com on 2020-09-11, 금
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Getter
@Entity
@DynamicUpdate
@NoArgsConstructor
@Table(name = "CATEGORY")
public class Category extends BaseEntity {

   @Setter
   @Column(name = "name", nullable = false)
   private String name;

   @Builder
   public Category(String name) {
      this.name = name;
   }

}
