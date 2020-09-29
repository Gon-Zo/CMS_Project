package com.gonzo.api.core.util;

import org.json.JSONObject;

/**
 * Create by park031517@gmail.com on 2020-09-29, 화
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
public class JsonUtils {

    public static String getJsonData(String str, String title) {
        JSONObject jo = new JSONObject(str);
        return String.valueOf(jo.get(title));
    }

}
