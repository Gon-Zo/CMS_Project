package com.gonzo.api.core.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gonzo.api.core.exception.CmsException;
import com.gonzo.api.core.exception.ErrorCode;
import com.gonzo.api.core.exception.ExceptionDto;
import org.springframework.http.HttpStatus;

import javax.servlet.http.HttpServletResponse;

/**
 * Create by park031517@gmail.com on 2020-10-1, 목
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
public class CmsUtils {

    public static void throwExceptionRequest(CmsException e, HttpServletResponse response) {
        ObjectMapper om = new ObjectMapper();
        response.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());
        ErrorCode error = e.getError();
        try {
            response.getOutputStream()
                    .println(om.writeValueAsString(
                            ExceptionDto.builder()
                                    .code(error.getCode())
                                    .message(error.getMessage())
                                    .build()
                    ));
        } catch (Exception exception) {
            exception.getStackTrace();
        }
    }

}
