package com.gonzo.api.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.io.Serializable;

/**
 * Create by park031517@gmail.com on 2020-09-14, 월
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Entity
@Getter
@Table(name = "cms_authority")
@NoArgsConstructor
public class Authority extends BaseEntity {

   private String name;

   @Builder
   public Authority(String name) {
      this.name = name;
   }

}
