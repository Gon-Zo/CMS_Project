package com.gonzo.api.service.dto;

import com.gonzo.api.domain.Category;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import static org.apache.commons.lang3.ObjectUtils.isNotEmpty;

/**
 * Create by park031517@gmail.com on 2020-10-5, 월
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Getter
@ToString
@NoArgsConstructor
public class CategoryDto {

    private String name;

    public Category updateToData(Category data) {
        if (isNotEmpty(this.name)) {
            data.setName(this.name);
        }
        return data;
    }

    public Category toEntity() {
        return Category.builder()
                .name(this.name)
                .build();
    }

}
