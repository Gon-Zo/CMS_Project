package com.gonzo.api.core.util;

import org.json.JSONObject;

public class JsonUtils {

    public static String getJsonData(String str, String title) {
        JSONObject jo = new JSONObject(str);
        return String.valueOf(jo.get(title));
    }

}
