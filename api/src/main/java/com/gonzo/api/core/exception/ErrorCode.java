package com.gonzo.api.core.exception;

import lombok.Getter;

/**
 * Create by park031517@gmail.com on 2020-09-23, 수
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
public enum ErrorCode {
   INTERNAL_SERVER_ERROR("S001" , "INTERNAL SERVER ERROR"),
   NOT_USER_ACTIVATE("U002" , "Not User Activate"),
   NOT_FOUND_USER("U001" , "DataBase Not Found User");

   @Getter
   private final String code;

   @Getter
   private final String message;

   ErrorCode(String code, String message) {
      this.code = code;
      this.message = message;
   }

   @Override
   public String toString() {
      return "ErrorCode{" +
              "code='" + code + '\'' +
              ", message='" + message + '\'' +
              '}';
   }

}
