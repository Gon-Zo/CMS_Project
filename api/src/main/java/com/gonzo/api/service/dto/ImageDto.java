package com.gonzo.api.service.dto;

import com.gonzo.api.domain.Image;
import com.gonzo.api.domain.Post;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@NoArgsConstructor
public class ImageDto {

    private String name;

    private Post post;

    public Image toEntity(){
        return Image.builder()
                .name(this.name)
                .post(this.post)
                .build();
    }

}
