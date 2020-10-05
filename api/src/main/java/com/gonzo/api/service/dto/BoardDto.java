package com.gonzo.api.service.dto;

import com.gonzo.api.domain.Board;
import com.gonzo.api.domain.Category;
import lombok.Getter;
import lombok.ToString;


import static org.apache.commons.lang3.ObjectUtils.isNotEmpty;

/**
 * Create by park031517@gmail.com on 2020-10-5, 월
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Getter
@ToString
public class BoardDto {

    private String title;

    private Category category;

    public Board toEntity(){
        return Board
                .builder()
                .title(this.title)
                .category(this.category)
                .build();
    }

    public Board updateToData(Board data) {

        if (isNotEmpty(this.title)) {
            data.setTitle(this.title);
        }

        if (isNotEmpty(this.category)) {
            data.setCategory(this.category);
        }

        return data;

    }

}
