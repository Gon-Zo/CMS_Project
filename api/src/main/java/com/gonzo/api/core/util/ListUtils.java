package com.gonzo.api.core.util;

import org.springframework.util.CollectionUtils;

import java.util.List;

/**
 * Create by park031517@gmail.com on 2020-10-1, 목
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
public class ListUtils {

    public static boolean isNotEmpty(List<?> list){
        return !CollectionUtils.isEmpty(list);
    }

}
