package com.gonzo.api.core.exception;

import lombok.Getter;

/**
 * Create by park031517@gmail.com on 2020-09-23, 수
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
public enum ErrorCode {

   // System
   INTERNAL_SERVER_ERROR("S001" , "INTERNAL SERVER ERROR"),

   // User
   NOT_FOUND_USER("U001" , "DataBase Not Found User"),
   NOT_USER_ACTIVATE("U002" , "Not User Activate"),

   // Authentication
   AUTHORIZATION_NOT_FOUND("A001" , "Authorization Not Found"),
   UNABLE_JWT_TOKEN("A002" , "Unable Jwt Token"),
   EXPIRED_JWT_TOKEN("A003" , "Expired Jwt Token"),
   IS_NOT_VALIDATE("A004" , "Is Not Validate"),

   // Board
   NOT_FOUND_BOARD("B001" , "Not Found Board"),

   //Post
   NOT_FOUND_POST("P001" , "Not Found Post"),

   // Comment
   NOT_FOUND_COMMENT("P001" , "Not Found Comment")

   ;


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
