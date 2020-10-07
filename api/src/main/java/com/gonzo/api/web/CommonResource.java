package com.gonzo.api.web;

import com.gonzo.api.service.CommonService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/common")
public class CommonResource {

    private final CommonService commonService;

    @GetMapping("/menu")
    public List<Map<String, Object>> showToMenu(){
       return commonService.getToMenu();
    }

    @GetMapping("/hello")
    public String getToHello(){
        return "Hello";
    }

}
