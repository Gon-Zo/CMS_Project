package com.gonzo.api.core.exception;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

/**
 * Create by park031517@gmail.com on 2020-09-23, 수
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Getter
@ToString
public class ExceptionDto {

    private final String code;

    private final String message;

    private final String errorDetail;

    @Builder
    public ExceptionDto(String code, String message, String errorDetail) {
        this.code = code;
        this.message = message;
        this.errorDetail = errorDetail;
    }

}
