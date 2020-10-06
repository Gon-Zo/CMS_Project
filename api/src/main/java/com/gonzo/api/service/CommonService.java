package com.gonzo.api.service;

import com.gonzo.api.domain.Menu;
import com.gonzo.api.repository.MenuRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CommonService {

    private final MenuRepository menuRepository;

    public List<Map<String, Object>> getToMenu() {

        List<Menu> menus = menuRepository.findAll();

        return menus.stream().map(menu -> {

            String name = menu.getCategory().getName();

            String to = menu.getUrl();

            Map<String, Object> map = new HashMap<>();

            map.put("name", name);

            map.put("to", to);

            return map;
        }).collect(Collectors.toList());

    }

}
