package com.gonzo.api.core.exception;

/**
 * Create by park031517@gmail.com on 2020-09-23, 수
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
public class CmsException extends RuntimeException {

    private ErrorCode error;

    public CmsException(String message) {
        super(message);
    }

    public CmsException(String message, Throwable throwable) {
        super(message, throwable);
    }

    public CmsException(String message, ErrorCode error) {
        super(message);
        this.error = error;
    }

    public CmsException(ErrorCode error) {
        super(error.getMessage());
        this.error = error;
    }

    public CmsException(String message, Throwable throwable, ErrorCode error) {
        super(message, throwable);
        this.error = error;
    }

}
